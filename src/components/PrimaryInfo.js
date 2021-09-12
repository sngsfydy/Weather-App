import React from "react";
import {
  customGetDay,
  customGetMonth,
  extractCurrent,
} from "../utils/DateTimeHandler";

function PrimaryInfo({ info, current }) {
  const [date, time, status] = extractCurrent(current);
  const [month, day, year] = date.split("/");

  return (
    <div id="primary">
      <h4>{info}</h4>
      <h5>
        {customGetDay(new Date().getDay()) +
          ", " +
          customGetMonth(month) +
          " " +
          day +
          ", " +
          year +
          " | " +
          time +
          " " +
          status}
      </h5>
    </div>
  );
}

export default PrimaryInfo;
