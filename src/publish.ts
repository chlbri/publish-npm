import { buildNpmCommand } from './command';
import { getLastCommitAction } from './commit';
import { saveJson } from './saveJson';
import { buildVersion } from './version';

export default async function publishCommand(path?: string) {
  const commitSub = await getLastCommitAction();
  const version = await buildVersion(commitSub, path);
  saveJson(version, path);
  return buildNpmCommand(commitSub);
}
