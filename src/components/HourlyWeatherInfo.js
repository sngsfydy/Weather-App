import { Carousel } from "react-bootstrap";
import React from "react";
import Hourly from "./Hourly";

function HourlyWeatherInfo({ info, current }) {
  {
    const itemNo = Math.floor(
      info.filter((item) => item.datetimeEpoch >= current).length / 8
    );
    const items = new Array(itemNo);

    return (
      <Carousel>
        {items.map((item) => (
          <Carousel.Item>
            <ul style={{ display: "flex" }}>
              {info
                .filter((item) => item.datetimeEpoch >= current)
                .map((item) => (
                  <li className="hourly" key={item.datetimeEpoch}>
                    <Hourly
                      icon={item.icon}
                      temp={item.temp}
                      time={item.datetimeEpoch}
                    />
                  </li>
                ))}
            </ul>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
export default HourlyWeatherInfo;
