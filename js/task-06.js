const inputEl = document.querySelector("#validation-input");
const symbols = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputEl.classList.add("invalid");

  if (inputEl.value.length === symbols) {
    inputEl.classList.replace("invalid", "valid");
  }
}
