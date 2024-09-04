let time = 0;
let runAudio = false;

setInterval(() => {
  time = time + 1;
  if (time == 5) {
    // chrome.action.openPopup();
    // time = 0;
    // runAudio = true;
  }
  console.log(time);
}, 1000);
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ time, runAudio });
  runAudio = false;
});
