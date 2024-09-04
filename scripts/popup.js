const audio = new Audio("./alarm.mp3");

const timeFormatter = (timeInSeconds) => {
  const seconds = ("0" + (timeInSeconds % 60)).slice(-2);
  const minutes = Math.floor(timeInSeconds / 60);
  return `${minutes}:${seconds}`;
};

const setTimeDOM = async () => {
  const response = await chrome.runtime.sendMessage({ greeting: "hello" });
  console.log(response);
  document.querySelector(".timer").innerHTML = timeFormatter(response.time);
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
