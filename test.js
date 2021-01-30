const ticketController = document.querySelector(".ticket-controller");
const input = document.querySelector(".ticket-count-input");
const plusBtn = document.querySelector("[dataset-change='plus']");
const minusBtn = document.querySelector("[dataset-change='minus']");

input.addEventListener("focusin", event => {
  ticketController.classList.add("ticket-controller-focus");
  input.classList.add("ticket-count-input-focus");
  plusBtn.classList.add("plusMinusBtn-focus");
  minusBtn.classList.add("plusMinusBtn-focus");
});
input.addEventListener("focusout", event => {
  ticketController.classList.remove("ticket-controller-focus");
  input.classList.remove("ticket-count-input-focus");
  plusBtn.classList.remove("plusMinusBtn-focus");
  minusBtn.classList.remove("plusMinusBtn-focus");
});
