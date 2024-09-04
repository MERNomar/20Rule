let time = 0;
let runAudio = false;
let openPopupState = false;
let pickedTime = 20;

setInterval(() => {
  time = time + 1;
  console.log(time);
  if (time == pickedTime) {
    if (openPopupState) {
      chrome.action.openPopup();
      openPopupState = false;
    }
    runAudio = true;
    time = 0;
  }
}, 1000);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ time, runAudio, pickedTime });

  pickedTime = request.pickedTime;
  runAudio = false;
  openPopupState = true;
});
