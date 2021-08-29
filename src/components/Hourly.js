import React from "react";
import { useState, useEffect } from "react";
import { overEleven, AM_PM } from "./Date";
import { setSource } from "./Icons";

function displayTime(time) {
  return overEleven(time) + ":00 " + AM_PM(time);
}

function Daily({ icon, temp, time }) {
  const [Time, setTime] = useState(new Date(time * 1000).getHours() + 1);

  //   useEffect(() => {
  //     setTime(Time);
  //   }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Time + 1);
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [Time]);

  //   console.log("time", new Date(time * 1000).getHours());

  return (
    <div style={{ textAlign: "center" }}>
      <img src={setSource(icon)} alt="alt" />
      <h5 style={{ fontSize: "16px" }}>{Math.floor(temp)}&#176;</h5>
      <h6 style={{ fontSize: "12px" }}>{Math.floor(temp)}&#176;</h6>
      <p style={{ fontSize: "14px" }}>{displayTime(Time)}</p>
    </div>
  );
}

export default Daily;
