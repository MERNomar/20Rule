let time = 0;
let runAudio = false;

const pickedTime = async () => {
  const time = await chrome.storage.local.get(["picked_time"]);
  if (time.picked_time) return time.picked_time;
  return 20 * 60 + 1;
};

setInterval(async () => {
  time = time + 1;
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
