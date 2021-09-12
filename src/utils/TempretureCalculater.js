import { C2F } from "./TempretureConvertor";

export function calculatedTemp(temp, unit) {
  return unit === "C" ? temp : C2F(temp);
}
