import json from 'edit-json-file';

export function saveJson(version: string, path?: string) {
  // ignore coverage
  const _path = path ?? `${process.cwd()}/package.json`;
  const file = json(_path);
  file.set('version', version).save();
  file.get('version');
}
