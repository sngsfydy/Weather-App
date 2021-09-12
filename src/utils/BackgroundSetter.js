import { extractCurrent } from "./DateTimeHandler";
import clear_day from "../images/clear-day.jpg";
import clear_night from "../images/clear-night.jpg";
import cloudy_day from "../images/cloudy-day.jpg";
import cloudy_night from "../images/cloudy-night.jpg";
import overcast_day from "../images/overcast-day.jpg";
import overcast_night from "../images/overcast-night.jpg";
import dusk from "../images/dusk.jpg";

export function bgSetter(conditions, current) {
  const [, time, status] = extractCurrent(current);
  const [hour] = time.split(":");
  const H = status === "AM" ? +hour : +hour === 12 ? +hour : +hour + 12;

  return H > 5 && H < 19
    ? conditions === "Clear"
      ? `url(${clear_day})`
      : conditions === "Partially cloudy"
      ? `url(${cloudy_day})`
      : `url(${overcast_day})`
    : H <= 5 || H > 19
    ? conditions === "Clear"
      ? `url(${clear_night})`
      : conditions === "Partially cloudy"
      ? `url(${cloudy_night})`
      : `url(${overcast_night})`
    : `url(${dusk})`;
}
