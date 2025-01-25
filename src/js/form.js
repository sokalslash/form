import { validateFields } from "./validation";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValidForm = validateFields();

  if (isValidForm) {
  }
});
