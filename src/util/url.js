export function removeTrailingSlash(url = '') {
  const splitted = url.split('?');
  splitted[0] = splitted[0].replace(/\/$/, '');
  return splitted.join('?');
}

export function replaceLastPath(pathname, replacement) {
  return removeTrailingSlash(pathname.replace(/\/[^/]*$/, `/${replacement}`));
}
