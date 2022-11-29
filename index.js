// SWIPER-HERO

const swiper = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ACCORDION-QUESTIONS

const accordion = new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

// TABS-STEPS

let tabsBtn = document.querySelectorAll(".button-steps");
let tabsItem = document.querySelectorAll(".steps-content");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("button-steps--active");
    });
    e.currentTarget.classList.add("button-steps--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("steps-content--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("steps-content--active");
  });
});

// BURGER-HEADER

const menu = document.querySelector(".burger-list");
const menuItems = document.querySelectorAll(".burger-item");
const burger = document.querySelector(".burger-button");

function toggleMenu() {
  menu.classList.toggle("showMenu");
  burger.classList.toggle("change");
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

// SEARCH-HEADER

const searchButton = document.querySelector(".button-search");
const searchDisplay = document.querySelector(".header__search");
const closeIcon = document.querySelector(".close-icon");

searchButton.addEventListener("click", function () {
  searchDisplay.classList.add("header-search--active");
});

closeIcon.addEventListener("click", function () {
  searchDisplay.classList.remove("header-search--active");
});
