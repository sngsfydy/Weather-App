export function F2C(temp) {
  return Math.round(((temp - 32) * 5) / 9);
}

export function C2F(temp) {
  return Math.round((temp * 9) / 5 + 32);
}
