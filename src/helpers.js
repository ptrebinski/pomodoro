export const formatSeconds = (seconds) => {
  let m = Math.floor(seconds / 60);
  let s = seconds - m * 60;

  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  return `${m}:${s}`;
};

export const percentage = (partialValue, totalValue) => {
  return (100 * partialValue) / totalValue;
};
