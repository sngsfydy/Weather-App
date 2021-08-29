import React, { useContext } from "react";
import Daily from "./Daily";
import { ThemeContext, themeSetter } from "./ThemeContext";
import { WeatherUnitContext } from "./WeatherUnitContext";

function DailyWeatherInfo({ info }) {
  const { background } = useContext(ThemeContext);

  return (
    <ul style={{ display: "flex" }}>
      {info.slice(0, 8).map((item) => (
        <li className={`li-${themeSetter(background)}`} key={item.datetime}>
          <Daily
            day={new Date(item.datetimeEpoch * 1000).getDay()}
            icon={item.icon}
            max={item.tempmax}
            min={item.tempmin}
            sunrise={item.sunriseEpoch}
            sunset={item.sunsetEpoch}
          />
        </li>
      ))}
    </ul>
  );
}

export default DailyWeatherInfo;
