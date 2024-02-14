"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.querySelector(".btn-primary");
  const noBtn = document.querySelector(".btn-secondary");
  const primaryContent = document.querySelector(".primary-content");
  const secondContent = document.querySelector(".second-content");
  const resetBtn = document.querySelector(".btn-reset");
  const noBtnText = noBtn.textContent;
  const maxFontSize = 200;
  const maxPadding = 400;
  const messages = [
    "Are you sure?",
    "Think again...",
    "Please?",
    "Let's say yes!",
    "Don't give up...",
    "Yes, please!",
    "I'm waiting...",
    "Just one click...",
  ];
  let messageIndex = 0;

  noBtn.addEventListener("click", function () {
    if (messageIndex < messages.length) {
      noBtn.textContent = messages[messageIndex];
      messageIndex++;
    } else {
      noBtn.textContent = "Please again?";
    }

    let currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    if (currentFontSize < maxFontSize) {
      yesBtn.style.fontSize = `${Math.min(currentFontSize + 7, maxFontSize)}px`;
    }

    let currentPaddingValues = yesBtn.style.padding
      .split(" ")
      .map((val) => parseFloat(val));
    let newPaddingValues = currentPaddingValues.map(
      (val) => Math.min(val + 2, maxPadding) + "px"
    );
    yesBtn.style.padding = newPaddingValues.join(" ");
  });

  yesBtn.addEventListener("click", function () {
    primaryContent.style.display = "none";
    secondContent.style.display = "block";
  });

  resetBtn.addEventListener("click", function () {
    primaryContent.style.display = "block";
    secondContent.style.display = "none";

    yesBtn.style.fontSize = "";
    yesBtn.style.padding = "";

    noBtn.textContent = noBtnText;
    messageIndex = 0;
  });
});
