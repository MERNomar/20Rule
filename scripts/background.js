let time = 0;

setInterval(() => {
  time = time + 1;
  console.log(time);
}, 1000);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse(time);
});
