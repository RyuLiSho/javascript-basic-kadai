"use strict";

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (text.textContent === "ボタンをクリックしてください") {
    text.textContent = "ボタンをクリックしました";
  } else if (text.textContent === "ボタンをクリックしました") {
    text.textContent = "ボタンをクリックしてください";
  }
});
