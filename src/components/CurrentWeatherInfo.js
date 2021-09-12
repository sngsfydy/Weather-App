import React, { useContext, useEffect, useState } from "react";
import { WeatherUnitContext } from "../contexts/WeatherUnitContext";
import { calculatedTemp } from "../utils/TempretureCalculater";
import { setIcon } from "../utils/IconSetter";

function CurrentWeatherInfo({
  info: { conditions, temp, icon },
  onCelciusClick,
  onFarenheitClick,
}) {
  const unit = useContext(WeatherUnitContext);
  const [temper, setTemper] = useState(temp);
  const [celcius, setCelcius] = useState("active");
  const [farenheit, setFarenheit] = useState("inActive");

  useEffect(() => {
    setTemper(temp);
  }, [temp]);

  function handleCelciusClick() {
    setFarenheit("inActive");
    setCelcius("active");
    onCelciusClick();
  }

  function handleFarenheitClick() {
    setCelcius("inActive");
    setFarenheit("active");
    onFarenheitClick();
  }

  return (
    <div className="temp">
      <div>
        <img src={setIcon(icon)} title={`${conditions}`} alt="weather icon" />
        <h5>{conditions}</h5>
      </div>
      <div>
        <h1>
          {calculatedTemp(Math.floor(temper), unit)}
          <sup>&#176;</sup>
        </h1>
        <div className="weather-unit">
          <span
            className={`${celcius}`}
            type="button"
            title="Celcius"
            onClick={handleCelciusClick}
          >
            C
          </span>
          <span>|</span>
          <span
            className={`${farenheit}`}
            type="button"
            title="Farenheit"
            onClick={handleFarenheitClick}
          >
            F
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherInfo;
