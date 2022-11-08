function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", onChangeColor);

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();

  color.textContent = body.style.backgroundColor;
}
