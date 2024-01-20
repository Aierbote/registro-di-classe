// File per modificare il Prensentation Layer (aka aggire sull' HTML modificando il DOM)
import { registers } from "./script.js";

const notImplemented = () => {
  alert("Not Implemented Yet");
}

// to grab all buttons just introduced in HTML with a `.not-implemented` class as default
const setupDefaultButtons = () => {
  const allButtonsNonImplemented = document.querySelectorAll(".not-implemented");
  allButtonsNonImplemented.forEach((elem) => {
    elem.addEventListener("click", notImplemented);
  })
}

// inserire le manipolazioni del dom qui dentro
document.addEventListener('DOMContentLoaded', function () {
  setupDefaultButtons();
});


// // Export delle funzioni
// module.exports = {
//   notImplemented
// };