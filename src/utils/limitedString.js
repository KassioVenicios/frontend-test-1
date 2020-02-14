const limit = 30;

export const limitedString = (text, n=limit) =>
  text.length <= n ? text : `${text.substring(0, n)}...`;
