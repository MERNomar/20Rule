import { setTimeDOM, getPickedTime } from "./functions.js";

const timerElement = document.querySelector(".timer");
const timePicker = document.querySelectorAll(".time-picker");

timePicker.forEach((item) => {
  item.addEventListener("click", (e) => {
    const clickedItem = Number(e.target.innerHTML);
    chrome.storage.local.set({
      picked_time: clickedItem,
    });
  });
});

timePicker.forEach((item) => {
  if (item.innerHTML == getPickedTime()) {
    item.style.backgroundColor = "rgba(82, 159, 247, 0.89)";
  }
});

//A function that on click will change all button bbackground colors to default
timePicker.forEach((item) => {
  item.addEventListener("click", (e) => {
    timePicker.forEach((item) => {
      item.style.backgroundColor = "rgba(89, 0, 255, 0.384)";
    });
  });
});

// A function that will change the color on click
timePicker.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.style.backgroundColor = "rgba(82, 159, 247, 0.89)";
  });
});

setTimeDOM(timerElement);
