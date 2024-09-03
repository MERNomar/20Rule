const alertButton = document.querySelector(".alertButton");
const timerBox = document.querySelector(".timer");

let timeCount = 58000;

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

setInterval(() => {
  timeCount = timeCount + 1;
  timerBox.innerHTML = millisToMinutesAndSeconds(timeCount);
}, 1);
