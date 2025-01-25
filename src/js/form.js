import { validateFields } from "./validation";
import { sendData } from "./server";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValidForm = validateFields();

  if (isValidForm) {
    const formData = new FormData(form);
    sendData(
      (data) => {
        alert(data);
        form.reset();
      },
      alert,

      formData
    );
  }
});
