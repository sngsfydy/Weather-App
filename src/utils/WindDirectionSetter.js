import right from "../images/arrow/right-arrow.png";
import left from "../images/arrow/left-arrow.png";
import up from "../images/arrow/up-arrow.png";
import down from "../images/arrow/down-arrow.png";
import right_down from "../images/arrow/right-down-arrow.png";
import left_down from "../images/arrow/left-down-arrow.png";
import right_up from "../images/arrow/right-up-arrow.png";
import left_up from "../images/arrow/left-up-arrow.png";

export function setWindDir(deg) {
  if (deg >= 0 && deg <= 45) {
    return up;
  } else if (deg >= 46 && deg <= 90) {
    return right_up;
  } else if (deg >= 91 && deg <= 135) {
    return right;
  } else if (deg >= 136 && deg <= 180) {
    return right_down;
  } else if (deg >= 181 && deg <= 225) {
    return down;
  } else if (deg >= 226 && deg <= 270) {
    return left_down;
  } else if (deg >= 271 && deg <= 315) {
    return left;
  } else {
    return left_up;
  }
}
