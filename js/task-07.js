const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("span#text");

inputEl.addEventListener("input", onFontSize);

function onFontSize() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
