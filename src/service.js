export const isNumber = c => {
  return c >= 0 && c <= 9;
};

export const isSymbol = c => {
  return c == '+' || c == '-' || c == '*' || c == '/' || c == '.';
};
