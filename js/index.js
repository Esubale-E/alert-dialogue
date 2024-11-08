const alertOverlay = document.querySelector(".alert-overlay");
const closeBtnEl = document.getElementById("closeBtn");
const cancelBtnEl = document.getElementById("cancelBtn");
const continueBtnEl = document.getElementById("continueBtn");
const dialogBtnEl = document.getElementById("dialogBtn");

const modalToggler = (event) => {
  event.preventDefault();
  alertOverlay.classList.toggle("hidden");
};

closeBtnEl.addEventListener("click", (event) => modalToggler(event));
cancelBtnEl.addEventListener("click", (event) => modalToggler(event));
continueBtnEl.addEventListener("click", (event) => modalToggler(event));
dialogBtnEl.addEventListener("click", (event) => modalToggler(event));

alertOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("alert-overlay")) modalToggler(e);
});

/*
const btnEl = document.querySelectorAll(".btn");

btnEl.forEach((El) =>
  El.addEventListener("click", (event) => modalToggler(event))
);
*/
