export function buildNpmCommand(commitSub: string) {
  let npm = undefined;

  switch (commitSub) {
    case 'beta':
      npm = 'npm publish --access public --tag beta';
      break;
    case 'alpha':
      npm = 'npm publish --access public --tag alpha';
      break;
    case 'major':
    case 'minor':
    case 'patch':
      npm = 'npm publish --access public';
      break;
  }

  return npm;
}
