export function themeSetter(color) {
  switch (color) {
    case "#181818":
      return "dark";
    case "#f7f8f9":
      return "light";
    case "#3A3A3A":
      return "dark";
    case "#E2E8F0":
      return "light";
    default:
      return "light";
  }
}
