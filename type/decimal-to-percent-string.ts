export const decimalToPercentString = (d: any, fractionDigits = 2) => {
  if (isNaN(d)) {
    return NaN;
  }

  if (d === 0) {
    return (0).toFixed();
  }

  return (d * 100.0).toFixed(fractionDigits);
};
