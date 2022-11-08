const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const logginData = {};

  formData.forEach((value, name) => {
    logginData[name] = value;
  });

  console.log(logginData);

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (mail !== "" && password !== "") {
    logginData = { mail, password };
  } else alert("Всі поля повинні бути заповнені");

  event.currentTarget.reset();
}
