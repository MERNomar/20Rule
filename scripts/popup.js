const timeFormatter = (timeInSeconds) => {
  const seconds = ("0" + (timeInSeconds % 60)).slice(-2);
  const minutes = Math.floor(timeInSeconds / 60);
  return `${minutes}:${seconds}`;
};

let timer = 0;

setInterval(async () => {
  timer = timer + 1;
  const response = await chrome.runtime.sendMessage({ greeting: "hello" });
  console.log(response);
  document.querySelector(".timer").innerHTML = timeFormatter(response);
}, 1000);
