export function getFilenameFromTimestamp(name = 'file', ext = 'xml') {
  const date = new Date();
  const timestamp = date.getTime();
  const filename = `${name}_${timestamp}.${ext}`;
  return filename;
}
