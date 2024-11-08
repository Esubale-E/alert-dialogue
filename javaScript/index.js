const alertOverlay = document.querySelector(".alert-overlay");
const continueBtnEl = document.getElementById("continueBtn");
const btnEl = document.querySelectorAll(".btn");

const modalToggler = (event) => {
  event.preventDefault();
  if (event.target === continueBtnEl)
    alert("You have deleted the data succesfully");

  alertOverlay.classList.toggle("hidden");
};

btnEl.forEach((El) =>
  El.addEventListener("click", (event) => modalToggler(event))
);

alertOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("alert-overlay")) modalToggler(e);
});

/*
// const closeBtnEl = document.getElementById("closeBtn");
// const cancelBtnEl = document.getElementById("cancelBtn");
// const dialogBtnEl = document.getElementById("dialogBtn");
// closeBtnEl.addEventListener("click", (event) => modalToggler(event));
// cancelBtnEl.addEventListener("click", (event) => modalToggler(event));
// dialogBtnEl.addEventListener("click", (event) => modalToggler(event));

*/
