"use strict";
const modalList = document.querySelector(".modal-list");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");

function showModal(modalId) {
  console.log(modalId);
  document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape");
  for (let i = 0; i < modalList.children.length; i++)
    if (!modalList.children[i].classList.contains(".hidden")) {
      modalList.children[i].classList.add("hidden");
    }
});

document.addEventListener("click", function (e) {
  if (
    !(
      e.target.classList.contains("show-modal") ||
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal-content")
    )
  ) {
    for (let i = 0; i < modalList.children.length; i++) {
      if (!modalList.children[i].classList.contains("hidden")) {
        modalList.children[i].classList.add("hidden");
      }
    }
  }
});
