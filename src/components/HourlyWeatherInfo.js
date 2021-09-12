import React from "react";
import HourlyFrame from "./HourlyFram";
import Carousel from "nuka-carousel";
import CarouselSetting from "../utils/CarouselSetting";
import { removeZero, extractCurrent } from "../utils/DateTimeHandler";

function HourlyWeatherInfo({ info, current }) {
  const [, time, status] = extractCurrent(current);
  const [hour] = time.split(":");
  const H = status === "AM" ? +hour : +hour === 12 ? +hour : +hour + 12;

  return (
    <div className="hourly">
      <Carousel {...CarouselSetting("time")}>
        {info
          .filter((item) => +removeZero(item.datetime.split(":")[0]) >= H)
          .map((item) => (
            <HourlyFrame
              key={item.datetime}
              icon={item.icon}
              temp={item.temp}
              feelsLike={item.feelslike}
              time={item.datetime}
            />
          ))}
      </Carousel>
    </div>
  );
}
export default HourlyWeatherInfo;
