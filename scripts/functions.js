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
  if (!pickedTime) return 20;
  return pickedTime;
}

function setPickedTime(e) {
  const clickedItem = Number(e.target.innerHTML);
  chrome.storage.local.set({
    picked_time: clickedItem,
  });
}

function markPickedButton(item, buttonElements) {
  // On Button clicked this will remove all picked class name to avoid redundancy.
  item.addEventListener("click", () => {
    buttonElements.forEach((item) => {
      item.classList.remove("picked-time");
    });
    // this will add picked item on click
    item.classList.add("picked-time");
  });
  // this will mark the picked item when the popup is opened
  if (item.innerHTML == getPickedTime()) {
    item.classList.add("picked-time");
  }
}

async function getTimeSwitch() {
  const timeSwitch = await chrome.storage.local.get(["time_switch"]);
  if (timeSwitch) return timeSwitch.time_switch;
  return false;
}

async function setTimeSwitch(element) {
  const currentTimeSwitch = await getTimeSwitch();
  const res = await chrome.storage.local.set({
    time_switch: !currentTimeSwitch,
  });
  element.target.innerHTML = !currentTimeSwitch ? "Start" : "Pause";
}

export {
  setTimeDOM,
  getPickedTime,
  setPickedTime,
  markPickedButton,
  getTimeSwitch,
  setTimeSwitch,
};
