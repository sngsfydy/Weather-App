import React, { useState, useEffect } from "react";
import {
  WeatherUnitContext,
  weatherUnit,
} from "../contexts/WeatherUnitContext";
import { bgSetter } from "../utils/BackgroundSetter";
import PrimaryInfo from "./PrimaryInfo";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import CurrentWeatherInfoDetails from "./CurrentWeatherInfoDetails";
import HourlyWeatherInfo from "./HourlyWeatherInfo";
import DailyWeatherInfo from "./DailyWeatherInfo";

function Weather({ info }) {
  const {
    currentConditions: { conditions },
    timezone,
  } = info;
  const [WeatherUnit, setWeatherUnit] = useState(weatherUnit.unit);
  const [windUnit, setWindUnit] = useState("kmph");
  const [date, setDate] = useState(new Date());
  const [current, setCurrent] = useState(
    date.toLocaleString("en-US", { timeZone: timezone })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setCurrent(date.toLocaleString("en-US", { timeZone: timezone }));
  }, [date, timezone]);

  function handleCelciusClick() {
    setWindUnit("kmph");
    setWeatherUnit("C");
  }

  function handleFarenheitClick() {
    setWindUnit("mph");
    setWeatherUnit("F");
  }

  return (
    <div
      style={{ backgroundImage: bgSetter(conditions, current) }}
      className="main"
    >
      <WeatherUnitContext.Provider value={WeatherUnit}>
        <PrimaryInfo info={info.resolvedAddress} current={current} />
        <div id="current">
          <CurrentWeatherInfo
            info={info.currentConditions}
            onCelciusClick={handleCelciusClick}
            onFarenheitClick={handleFarenheitClick}
          />
          <CurrentWeatherInfoDetails
            info={info.currentConditions}
            windUnit={windUnit}
          />
        </div>
        <HourlyWeatherInfo info={info.days[0].hours} current={current} />
        <DailyWeatherInfo info={info.days} />
      </WeatherUnitContext.Provider>
    </div>
  );
}

Weather.contextType = WeatherUnitContext;

export default Weather;
