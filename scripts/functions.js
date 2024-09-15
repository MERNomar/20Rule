function timeFormatter(timeInSeconds) {
  const seconds = ("0" + (timeInSeconds % 60)).slice(-2);
  const minutes = ("0" + Math.floor(timeInSeconds / 60)).slice(-2);
  return `${minutes}:${seconds}`;
}

/**
 * Will send a message to the background worker to get the current countDown and Update it int he dom
 * @setTimeDOM
 */

function setDOMTimer(timeInSeconds, timerElement) {
  timerElement.innerHTML = timeFormatter(timeInSeconds);
}

async function setTimeDOM(timerElement) {
  const response = await chrome.runtime.sendMessage({ open: true });
  let timeCounter = response.time;

  setDOMTimer(timeCounter, timerElement);

  setInterval(() => {
    timeCounter = timeCounter + 1;
    setDOMTimer(timeCounter, timerElement);
  }, 1000);
}

const { picked_time: pickedTime } = await chrome.storage.local.get([
  "picked_time",
]);
function getPickedTime() {
  if (!pickedTime) return 15;
  return pickedTime;
}

export { setTimeDOM, getPickedTime };
