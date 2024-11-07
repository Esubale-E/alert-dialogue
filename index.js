const modal = document.querySelector(".alert-overlay");
const alertOverlay = document.querySelector(".alert-overlay");
const closeBtnEl = document.getElementById("closeBtn");
const cancelBtnEl = document.getElementById("cancelBtn");
const continueBtnEl = document.getElementById("continueBtn");
const dialogBtnEl = document.getElementById("dialogBtn");

const modalToggler = (event) => {
  event.preventDefault();
  modal.classList.toggle("hidden");
};

closeBtnEl.addEventListener("click", (event) => modalToggler(event));
cancelBtnEl.addEventListener("click", (event) => modalToggler(event));
continueBtnEl.addEventListener("click", (event) => modalToggler(event));
dialogBtnEl.addEventListener("click", (event) => modalToggler(event));

alertOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("alert-overlay")) modalToggler(e);
});
