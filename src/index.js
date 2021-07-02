//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const hours = currentDate.getHours();
let periodOfDay;
let customColor;

if (hours >= 0 && hours <= 11) {
  periodOfDay = "Morning";
  customColor = "red";
} else if (hours <= 17) {
  periodOfDay = "Afternoon";
  customColor = "green";
} else {
  periodOfDay = "Evening";
  customColor = "blue";
}

ReactDOM.render(
  <h1 style={{ color: customColor }} className="heading">
    Good {periodOfDay}
  </h1>,
  document.getElementById("root")
);
