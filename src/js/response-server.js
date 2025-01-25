const SERVER_RESPONSES = {
  SUCCESS: "success",
  ERROR: "error",
};

const form = document.querySelector(".form");
const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");
const phoneInput = form.querySelector("#phone");
const errorNameContainer = form.querySelector("#name-errors");
const errorEmailContainer = form.querySelector("#email-errors");
const errorPhoneContainer = form.querySelector("#phone-errors");
const templateMessageSuccess = document
  .querySelector("#success")
  .content.querySelector(".success");

const getErrorMessage = (field, errorContainer, message) => {
  field.classList.add("form__input--error");
  errorContainer.textContent = message;
};

const defineField = (fieldName, message) => {
  switch (fieldName) {
    case "name":
      getErrorMessage(nameInput, errorNameContainer, message);
      return;
    case "email":
      getErrorMessage(emailInput, errorEmailContainer, message);
      return;
    case "phone":
      getErrorMessage(phoneInput, errorPhoneContainer, message);
      return;
  }
};

const displayFailedFields = (failedFields) => {
  const fieldAndErrorCollection = Object.entries(failedFields);
  fieldAndErrorCollection.forEach(([id, message]) => defineField(id, message));
};

const displaySuccessMessage = (message) => {
  const messageSuccessSendData = templateMessageSuccess.cloneNode(true);
  messageSuccessSendData.querySelector(".success__text").textContent = message;
  document.body.append(messageSuccessSendData);
  setTimeout(() => messageSuccessSendData.remove(), 2500);
};

const displayResponseServer = (response) => {
  switch (response.status) {
    case SERVER_RESPONSES.ERROR:
      displayFailedFields(response.fields);
      return;
    case SERVER_RESPONSES.SUCCESS:
      displaySuccessMessage(response.msg);
      form.reset();
      return;
  }
};

export { displayResponseServer };
