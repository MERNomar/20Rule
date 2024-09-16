import {
  setTimeDOM,
  setPickedTime,
  markPickedButton,
  setTimeSwitch,
} from "./functions.js";

const DOMElements = {
  timerElement: document.querySelector(".timer"),
  timePicker: document.querySelectorAll(".time-picker"),
  timeSwitch: document.querySelector(".start-btn"),
};

DOMElements.timeSwitch.addEventListener("click", (element) => {
  setTimeSwitch(element.target, true);
});

DOMElements.timePicker.forEach((item) => {
  item.addEventListener("click", (e) => {
    setPickedTime(e);
  });
  markPickedButton(item, DOMElements.timePicker);
});

setTimeDOM(DOMElements.timerElement);
setTimeSwitch(DOMElements.timeSwitch, false);
