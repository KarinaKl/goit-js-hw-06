const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const li = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.textContent = ingredient;
  createLi.classList.add("item");
  return createLi;
});
ingredientsList.append(...li);
