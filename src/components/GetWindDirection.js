import right from "../images/arrow/right-arrow.png";
import left from "../images/arrow/left-arrow.png";
import up from "../images/arrow/up-arrow.png";
import down from "../images/arrow/down-arrow.png";

export const getWindDirection = (deg) => {
  if (deg >= 0 && deg <= 45) {
    return up;
  } else if (deg >= 46 && deg <= 90) {
    return "up-right";
  } else if (deg >= 91 && deg <= 135) {
    return right;
  } else if (deg >= 136 && deg <= 180) {
    return "down-right";
  } else if (deg >= 181 && deg <= 225) {
    return down;
  } else if (deg >= 226 && deg <= 270) {
    return "down-left";
  } else if (deg >= 271 && deg <= 315) {
    return left;
  } else {
    return "up-left";
  }
};
