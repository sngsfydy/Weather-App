export function customGetDay(day) {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Sunday";
  }
}

export function customGetMonth(month) {
  switch (month) {
    case "1":
      return "January";
    case "2":
      return "February";
    case "3":
      return "March";
    case "4":
      return "April";
    case "5":
      return "May";
    case "6":
      return "June";
    case "7":
      return "July";
    case "8":
      return "August";
    case "9":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
    default:
      return "January";
  }
}

export function addZero(time) {
  return time < 10 ? "0" + time : time;
}

export function removeZero(time) {
  return time.split("")[0] === "0" ? time.split("")[1] : time;
}

export function AM_PM(time) {
  return time < 12 ? "AM" : "PM";
}

export function overEleven(time) {
  return time > 12 ? time - 12 : time;
}

export function extractCurrent(current) {
  const date = current.split(",")[0];
  let time = current.split(",")[1].split(" ")[1].split(":");
  const status = current.split(",")[1].split(" ")[2];
  time.splice(2, 1);
  time = time.join(":");

  return [date, time, status];
}

export function displayTime(time, code) {
  const [hour, minute] = time.split(":");
  switch (code) {
    case "hourly":
      return overEleven(removeZero(hour)) + ":00 " + AM_PM(removeZero(hour));
    case "daily":
      return removeZero(hour) + ":" + minute;
    default:
      return "";
  }
}
