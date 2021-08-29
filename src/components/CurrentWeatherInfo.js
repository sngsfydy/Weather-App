import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { setSource } from "./Icons";
import { getWindDirection } from "./GetWindDirection";
import { C2F } from "../utils/TempretureConvertor";
import {
  customGetDay,
  customGetMonth,
  addZero,
  AM_PM,
  overEleven,
} from "./Date";
import {
  WeatherUnitContext,
  weatherUnit,
} from "../components/WeatherUnitContext";

function displayDateTime(date) {
  return (
    customGetDay(date.getDay()) +
    ", " +
    customGetMonth(date.getMonth()) +
    " " +
    addZero(date.getDate()) +
    ", " +
    date.getFullYear() +
    " | " +
    overEleven(date.getHours()) +
    ":" +
    addZero(date.getMinutes()) +
    " " +
    AM_PM(date.getHours())
  );
}

function calculatedTempValue(unit, temp) {
  return unit === "C" ? temp : C2F(temp);
}

function WeatherInfo({
  city,
  country,
  date,
  icon,
  temp,
  humidity,
  feelslike,
  wind,
  windDir,
  condition,
}) {
  temp = Math.floor(temp);

  // const Unit = useContext(WeatherUnitContext);
  const [WeatherUnit, setWeatherUnit] = useState(weatherUnit.unit);
  const [temper, setTemper] = useState(temp);
  const [feelsLike, setFeelsLike] = useState(feelslike);
  const [windUnit, setWindUnit] = useState("kmph");
  const [current, setCurrent] = useState(date * 1000);
  const time = Date.parse(date);
  console.log("time", time);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("date", date);
      setCurrent(current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    setTemper(temp);
  }, [city, temp]);

  useEffect(() => {
    setFeelsLike(feelslike);
  }, [city, feelslike]);

  return (
    <WeatherUnitContext.Provider value={weatherUnit}>
      <div className="current">
        <section>
          <h5>{country}</h5>
          <h6>{displayDateTime(new Date(current))}</h6>
        </section>
        <section style={{ display: "flex" }}>
          <section
            style={{ width: "50%", display: "flex", alignItems: "center" }}
          >
            <div>
              <img
                src={setSource(icon)}
                width="120px"
                height="120px"
                alt="alt"
              />
              <h6 style={{ textAlign: "center" }}>{condition}</h6>
            </div>

            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "54px", marginBottom: "20px" }}>
                {calculatedTempValue(WeatherUnit, temp)}
                <sup>&#176;</sup>
              </h1>

              <div>
                <span
                  type="button"
                  onClick={() => {
                    Math.floor(setTemper(temp));
                    Math.floor(setFeelsLike(feelslike));
                    setWindUnit("kmph");
                    setWeatherUnit("C");
                  }}
                >
                  C
                </span>
                <span> | </span>
                <span
                  type="button"
                  onClick={() => {
                    setTemper(() => Math.floor(C2F(temp)));
                    setFeelsLike(() => Math.floor(C2F(feelslike)));
                    setWindUnit("mph");
                    setWeatherUnit("F");
                  }}
                >
                  F
                </span>
              </div>
            </div>
          </section>
          <section style={{ width: "50%", textAlign: "center" }}>
            <h6>
              Humidity: <strong>{Math.floor(humidity)}</strong> %
            </h6>
            <h6>
              Wind: <strong>{`${Math.floor(wind)} ${windUnit}`}</strong>
              <img src={getWindDirection(windDir)} alt="" />
            </h6>
            <h6>
              Feels like: <strong>{Math.floor(feelsLike)}</strong>
              <sup>&#176;</sup>
            </h6>
          </section>
        </section>
      </div>
    </WeatherUnitContext.Provider>
  );
}

WeatherInfo.contextType = WeatherUnitContext;

export default WeatherInfo;
