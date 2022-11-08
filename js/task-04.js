const counter = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let counterValue = Number(counter.textContent);

btnDecrement.addEventListener("click", onDecrement);
btnIncrement.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function onIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}
