export function buildNpmCommand(commitSub: string) {
  let npm = 'npm publish --access public';

  switch (commitSub) {
    case 'beta':
      npm += ' --tag beta';
      break;
    case 'alpha':
      npm += ' --tag alpha';
  }

  return npm;
}
