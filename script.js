"use strict";

const clock = document.getElementById("clock");

function displayTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  //Format time as "HH:MM:SS"
  const formatTime = `${hours} : ${minutes} : ${seconds}`;

  //Update clock with current time
  clock.innerHTML = formatTime;
}

function checkTime(i) {
  return i < 10 ? "0" + i : i; //to add 0 in front of the numbers < 10
}

//Call displaTime function every second
setInterval(displayTime, 1000);
