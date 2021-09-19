export const getPercentage = (
  currentValue: number,
  investedValue: number
): string => {
  const profitInRs = currentValue - investedValue;
  return ((profitInRs / investedValue) * 100).toFixed(2);
};
