"use strict";

/* const keremac = (modalName) => {
  document.getElementById(modalName).classList.remove("hidden");
}; */

const modalList = document.querySelector(".modal-list");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

/* const openModal = function () {
  modal.classList.remove("hidden");

  overlay.classList.remove("hidden");
}; */

/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal); */

/* const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
 */
/* btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape");
  if (!modal.classList.contains(".hidden")) {
    closeModal();
  }
}); */
function showModal(modalId) {
  console.log(modalId);
  document.getElementById(modalId).classList.remove("hidden");
}
function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape");
  if (!modalList.classList.contains(".hidden")) {
    console.log(modalList.children);
    modalList.child;
  }
});
