import React from "react";
import DailyFrame from "./DailyFrame";

function DailyWeatherInfo({ info }) {
  return (
    <div className="daily">
      {info.slice(0, 8).map((item) => (
        <DailyFrame
          key={item.datetime}
          day={new Date(item.datetimeEpoch * 1000).getDay()}
          icon={item.icon}
          max={item.tempmax}
          min={item.tempmin}
          sunrise={item.sunrise}
          sunset={item.sunset}
        />
      ))}
    </div>
  );
}

export default DailyWeatherInfo;
