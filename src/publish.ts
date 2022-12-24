import { buildNpmCommand } from './command';
import { getLastCommitAction } from './commit';
import { saveJson } from './saveJson';
import { buildVersion } from './version';

/**
 * TODO: Add changelog
 * @param packageJSON
 * @returns
 */
export default async function publish(packageJSON?: string) {
  const commitSub = await getLastCommitAction();
  const version = await buildVersion(commitSub, packageJSON);
  saveJson(version, packageJSON);
  const command = buildNpmCommand(commitSub);
  return { command, version };
}
