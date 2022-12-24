import { getLastCommit } from 'git-last-commit';
import { promisify } from 'util';

const _getLastCommit = promisify(getLastCommit);

export async function getLastCommitAction() {
  const commit = await _getLastCommit();
  return commit.subject.split(' ')[0];
}
