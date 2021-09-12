import day from "../images/day.svg";
import night from "../images/night.svg";
import day_cloudy from "../images/day-cloudy.svg";
import night_cloudy from "../images/night-cloudy.svg";
import cloudy from "../images/cloudy.svg";
import day_rain from "../images/day-rain.svg";
import night_rain from "../images/night-rain.svg";

export function setIcon(icon) {
  switch (icon) {
    case "clear-day":
      return day;
    case "clear-night":
      return night;
    case "partly-cloudy-day":
      return day_cloudy;
    case "partly-cloudy-night":
      return night_cloudy;
    case "cloudy":
      return cloudy;
    case "snow":
    case "rain":
    case "fog":
    case "wind":
      return day_rain;
    default:
      return cloudy;
  }
}
