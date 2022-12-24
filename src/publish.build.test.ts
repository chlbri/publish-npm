import json from 'edit-json-file';
import { afterEach, beforeAll, expect, Mock, test, vi } from 'vitest';
import publishCommand from '../lib';
import { getLastCommitAction } from '../lib/commit';

const DEFAULT_VERSION = '0.0.1';
const PATH = `${process.cwd()}/package.build.mjs.test.json`;
const file = () => json(PATH);

beforeAll(() => {
  vi.mock('../lib/commit');
});

afterEach(() => {
  file().set('version', DEFAULT_VERSION).save();
});

async function buildTest(
  commitSub: string,
  expecteds: { version: string; npm?: string },
) {
  (getLastCommitAction as Mock).mockResolvedValue(commitSub);
  const npm = await publishCommand(PATH);
  const version = file().get('version');

  expect(version).toBe(expecteds.version);
  expect(npm.version).toBe(expecteds.version);
  expect(npm.command).toBe(expecteds.npm);
}

test('Patch', async () => {
  await buildTest('patch', {
    version: '0.0.2',
    npm: 'npm publish --access public',
  });
});

test('Minor', async () => {
  await buildTest('minor', {
    version: '0.1.1',
    npm: 'npm publish --access public',
  });
});

test('Major', async () => {
  await buildTest('major', {
    version: '1.0.1',
    npm: 'npm publish --access public',
  });
});

test('Beta', async () => {
  await buildTest('beta', {
    version: '0.0.2-beta',
    npm: 'npm publish --access public --tag beta',
  });
});

test('Alpha', async () => {
  await buildTest('alpha', {
    version: '0.0.2-alpha',
    npm: 'npm publish --access public --tag alpha',
  });
});

test('CI', async () => {
  await buildTest('ci', {
    version: '0.0.1',
  });
});

test('Test', async () => {
  await buildTest('test', {
    version: '0.0.1',
  });
});
