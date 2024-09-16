let time = 0;
let runAudio = false;

async function getTimeSwitch() {
  const timeSwitch = await chrome.storage.local.get(["time_switch"]);
  if (timeSwitch) return timeSwitch.time_switch;
  return false;
}

const pickedTime = async () => {
  const time = await chrome.storage.local.get(["picked_time"]);
  if (time.picked_time) return time.picked_time * 60 + 1;
  return 20 * 60 + 1;
};
setInterval(async () => {
  const timeSwitch = await getTimeSwitch();
  if (!timeSwitch) {
    time = time + 1;
  }
  const alertNumber = await pickedTime();
  if (time == alertNumber) {
    chrome.notifications.create({
      iconUrl: "../icon.png",
      title: "Give your eye a break!",
      message: "Tip : Look the furthest thing from you for 15 seconds",
      type: "basic",
    });
    chrome.action.openPopup();
    runAudio = true;
    time = 0;
  }
}, 1000);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ time, runAudio });
  runAudio = false;
});
