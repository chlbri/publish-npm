import { getLastCommit } from 'git-last-commit';
import { promisify } from 'util';

const _getLastCommit = promisify(getLastCommit);

export async function getLastCommitText() {
  const commit = await _getLastCommit();
  commit; //?
}

getLastCommitText();
