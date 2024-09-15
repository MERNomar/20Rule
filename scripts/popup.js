import { setTimeDOM, setPickedTime, markPickedButton } from "./functions.js";

const timerElement = document.querySelector(".timer");
const timePicker = document.querySelectorAll(".time-picker");

timePicker.forEach((item) => {
  item.addEventListener("click", (e) => {
    setPickedTime(e);
  });
  markPickedButton(item, timePicker);
});

setTimeDOM(timerElement);
