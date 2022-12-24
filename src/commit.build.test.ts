import { expect, test } from 'vitest';
import { getLastCommitAction } from '../lib/commit';

test('Commit Subjects are always set', async () => {
  const commit = await getLastCommitAction();
  expect(commit).toBeDefined();
});
