import json from 'edit-json-file';

async function getPackageVersion(path: string) {
  const _path = path ?? `${process.cwd()}/package.json`;
  const version = json(_path).get('version');
  const units = version.split('.');
  const major = parseInt(units[0]);
  const minor = parseInt(units[1]);
  const patch = parseInt(units[2]);
  return { major, minor, patch, version };
}

export async function buildVersion(commitSub: string, path?: string) {
  // ignore coverage
  const _path = path ?? `${process.cwd()}/package.json`;
  const { major, minor, patch, version } = await getPackageVersion(_path);

  switch (commitSub) {
    case 'major':
      return `${major + 1}.${minor}.${patch}`;
    case 'minor':
      return `${major}.${minor + 1}.${patch}`;
    case 'beta':
      return `${major}.${minor}.${patch + 1}-beta`;
    case 'alpha':
      return `${major}.${minor}.${patch + 1}-alpha`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      return version;
  }
}
