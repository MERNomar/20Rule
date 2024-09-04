const timerElement = document.querySelector(".timer");

const timePicker = document.querySelectorAll(".time-picker");

timePicker.forEach((item) => {
  item.addEventListener("click", (e) => {
    chrome.storage.local.set({ picked_time: Number(e.target.innerHTML) });
  });
});

const audio = new Audio("./alarm.mp3");

const timeFormatter = (timeInSeconds) => {
  const seconds = ("0" + (timeInSeconds % 60)).slice(-2);
  const minutes = ("0" + Math.floor(timeInSeconds / 60)).slice(-2);
  return `${minutes}:${seconds}`;
};

const setTimeDOM = async () => {
  const response = await chrome.runtime.sendMessage({ open: true });
  timerElement.innerHTML = timeFormatter(response.time);
  if (response.runAudio) {
    audio.play();
  }
};

chrome.action.onClicked.addListener(() => {});

setInterval(async () => {
  setTimeDOM();
}, 1000);

setTimeDOM();
