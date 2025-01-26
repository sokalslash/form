const body = document.querySelector("body");
const modal = body.querySelector(".modal");
const openModalBtn = body.querySelector(".section__button");
const closeModalBtn = modal.querySelector(".modal__close-btn");

openModalBtn.addEventListener("click", () => {
  body.classList.add("js-modal-open");
  modal.classList.add("js-active");
});

closeModalBtn.addEventListener("click", () => {
  body.classList.remove("js-modal-open");
  modal.classList.remove("js-active");
});
