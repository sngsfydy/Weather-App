import React, { useContext, useEffect, useState } from "react";
import { WeatherUnitContext } from "../contexts/WeatherUnitContext";
import { setWindDir } from "../utils/WindDirectionSetter";
import { calculatedTemp } from "../utils/TempretureCalculater";

function CurrentWeatherInfoDetails({
  info: { humidity, windspeed, winddir, feelslike },
  windUnit,
}) {
  const unit = useContext(WeatherUnitContext);
  const [feelsLike, setFeelsLike] = useState(feelslike);

  useEffect(() => {
    setFeelsLike(feelslike);
  }, [feelslike]);

  return (
    <div className="detail">
      <p>
        Humidity:
        <strong>{Math.floor(humidity)}</strong> %
      </p>
      <p>
        Wind:
        <strong>{`${Math.floor(windspeed)} ${windUnit}`}</strong>
        <img src={setWindDir(winddir)} alt="arrow" />
      </p>
      <p>
        Feels like:
        <strong>{calculatedTemp(Math.floor(feelsLike), unit)}</strong>
        <sup>&#176;</sup>
      </p>
    </div>
  );
}

export default CurrentWeatherInfoDetails;
