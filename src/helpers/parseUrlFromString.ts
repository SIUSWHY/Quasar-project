function detectURLs(message: string) {
  const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message.match(urlRegex);
}
export default detectURLs