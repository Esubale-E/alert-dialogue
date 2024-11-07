const modal = document.querySelector(".alert-overlay");
const btnEl = document.querySelectorAll(".btn");

const modalToggler = (event) => {
  event.preventDefault();
  modal.classList.toggle("hidden");
};

btnEl.forEach((el) =>
  el.addEventListener("click", (event) => modalToggler(event))
);
