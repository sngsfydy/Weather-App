import React, { useContext } from "react";
import { displayTime } from "../utils/DateTimeHandler";
import { setIcon } from "../utils/IconSetter";
import { WeatherUnitContext } from "../contexts/WeatherUnitContext";
import { calculatedTemp } from "../utils/TempretureCalculater";

function HourlyFrame({ icon, temp, feelsLike, time }) {
  const unit = useContext(WeatherUnitContext);

  return (
    <div>
      <img src={setIcon(icon)} alt="weather icon" />
      <p className="temp">
        {calculatedTemp(Math.floor(temp), unit)}
        <sup>&#176;</sup>
      </p>
      <p className="feelslike">
        {calculatedTemp(Math.floor(feelsLike), unit)}
        <sup>&#176;</sup>
      </p>
      <p className="time">{displayTime(time, "hourly")}</p>
    </div>
  );
}

export default HourlyFrame;
