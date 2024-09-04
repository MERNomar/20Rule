const timerElement = document.querySelector(".timer");

const timePickerTen = document.querySelector(".time-picker-ten");
const timePickerFifteen = document.querySelector(".time-picker-fifteen");
const timePickerTwenty = document.querySelector(".time-picker-twenty");

const audio = new Audio("./alarm.mp3");

const timeFormatter = (timeInSeconds) => {
  const seconds = ("0" + (timeInSeconds % 60)).slice(-2);
  const minutes = ("0" + Math.floor(timeInSeconds / 60)).slice(-2);
  return `${minutes}:${seconds}`;
};

const setTimeDOM = async () => {
  const response = await chrome.runtime.sendMessage({ open: true });
  console.log(response);
  timerElement.innerHTML = timeFormatter(response.time);
  console.log(response);
  if (response.runAudio) {
    audio.play();
  }
};

chrome.action.onClicked.addListener(() => {
  console.log("clicked");
});

setInterval(async () => {
  setTimeDOM();
}, 1000);

setTimeDOM();
