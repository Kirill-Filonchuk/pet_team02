export const trimText = (text, index) => {
  if (text.length <= index) {
    return text;
  }
  return text.slice(0, index) + '...';
};
