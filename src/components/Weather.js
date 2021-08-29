import React, { useEffect, useState } from "react";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import HourlyWeatherInfo from "./HourlyWeatherInfo";
import DailyWeatherInfo from "./DailyWeatherInfo";
import clear_day from "../images/clear-day.jpg";
import clear_night from "../images/clear-night.jpg";
import cloudy_day from "../images/cloudy-day.jpg";
import cloudy_night from "../images/cloudy-night.jpg";
import dusk from "../images/dusk.jpg";

function Weather({ info }) {
  console.log(info);

  const hour = new Date(info.currentConditions.datetimeEpoch * 1000).getHours();
  const condition = info.currentConditions.conditions;

  return (
    <div
      style={
        hour < 19
          ? condition === "Clear"
            ? { backgroundImage: `url(${clear_day})` }
            : { backgroundImage: `url(${cloudy_day})` }
          : hour > 19
          ? condition === "Clear"
            ? { backgroundImage: `url(${clear_night})` }
            : { backgroundImage: `url(${cloudy_night})` }
          : { backgroundImage: `url(${dusk})` }
      }
      className="main"
    >
      <CurrentWeatherInfo
        country={info.resolvedAddress}
        date={info.currentConditions.datetime}
        icon={info.currentConditions.icon}
        temp={info.currentConditions.temp}
        humidity={info.currentConditions.humidity}
        feelslike={info.currentConditions.feelslike}
        wind={info.currentConditions.windspeed}
        windDir={info.currentConditions.winddir}
        condition={info.currentConditions.conditions}
      />

      {console.log("info", info)}

      {info && (
        <div>
          <HourlyWeatherInfo
            info={info.days[0].hours}
            current={info.currentConditions.datetimeEpoch}
          />
          <DailyWeatherInfo info={info.days} />
        </div>
      )}
    </div>
  );
}

export default Weather;
