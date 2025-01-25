import VMasker from "vanilla-masker";

const PHONE_LENGTH = 19;

const form = document.querySelector(".form");
const emailInput = form.querySelector("#email");
const phoneInput = form.querySelector("#phone");
const errorEmailContainer = form.querySelector("#email-errors");
const errorPhoneContainer = form.querySelector("#phone-errors");
const errorMessageRequiredField = "Поле обязательно для заполнения";
const errorMessageUncorrectEmail = "Поле должно быть вида example@domain.ru";
const errorMessageUncorrectPhone = "в номере телефона не хватает цифр";
const phonePattern = "+999 (99) 999-99-99";

const inputs = [
  {
    field: form.querySelector("#name"),
    errorContainer: form.querySelector("#name-errors"),
  },
  {
    field: form.querySelector("#email"),
    errorContainer: form.querySelector("#email-errors"),
  },
  {
    field: form.querySelector("#phone"),
    errorContainer: form.querySelector("#phone-errors"),
  },
  {
    field: form.querySelector("#message"),
    errorContainer: form.querySelector("#message-errors"),
  },
];

const getErrorMessage = (validatedField, errorContainer, errorMessage) => {
  errorContainer.textContent = errorMessage;
  validatedField.classList.add("form__input--error");
};

const deleteErrorMessage = (validatedField, errorContainer) => {
  errorContainer.textContent = "";
  validatedField.classList.remove("form__input--error");
};

form.setAttribute("novalidate", true);

inputs.forEach((input) => {
  input.field.addEventListener("input", () =>
    deleteErrorMessage(input.field, input.errorContainer)
  );
});

VMasker(phoneInput).maskPattern(phonePattern);

const checkFieldsForEmptiness = () => {
  let isValid = true;
  inputs.forEach((input) => {
    if (input.field.value === "") {
      getErrorMessage(
        input.field,
        input.errorContainer,
        errorMessageRequiredField
      );
      isValid = false;
    } else {
      deleteErrorMessage(input.field, input.errorContainer);
    }
  });
  return isValid;
};

const checkEmailPattern = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = emailRegex.test(emailInput.value);
  if (!isValidEmail) {
    getErrorMessage(
      emailInput,
      errorEmailContainer,
      errorMessageUncorrectEmail
    );
    return false;
  } else {
    deleteErrorMessage(emailInput, errorEmailContainer);
    return true;
  }
};

const checkPhonePattern = () => {
  if (phoneInput.value.length < PHONE_LENGTH) {
    getErrorMessage(
      phoneInput,
      errorPhoneContainer,
      errorMessageUncorrectPhone
    );
    return false;
  }
  deleteErrorMessage(phoneInput, errorPhoneContainer);
  return true;
};

const validateFields = () =>
  checkFieldsForEmptiness() && checkEmailPattern() && checkPhonePattern();

export { validateFields };
