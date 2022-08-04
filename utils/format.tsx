export function formatNumber(number: number) {
  number = number / 1000;
  return `${number.toLocaleString()}K`;
}
