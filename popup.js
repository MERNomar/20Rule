import items from "./service-worker.js";

console.log(items());
items(document.querySelector(".timer").innerHTML);
