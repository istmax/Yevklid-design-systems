// SWIPER-HERO

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 80,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
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
const headerLogo = document.querySelector(".header__logo");
const closeIcon = document.querySelector(".close-icon");
const headerMenu = document.querySelector(".header-menu");

searchButton.addEventListener("click", function () {
  searchButton.style.display = "none";
  headerMenu.style.display = "none";
  searchDisplay.style.opacity = "1";
  searchDisplay.style.transform = "translateX(0)";
  searchDisplay.style.transition = "transform .3s ease-in-out, opacity .3s ease-in-out";
});

closeIcon.addEventListener("click", function () {
  searchButton.style.display = "block";
  headerMenu.style.display = "block";
  searchDisplay.style.opacity = "0";
  searchDisplay.style.transform = "translateX(100%)";
  searchDisplay.style.transition = "transform .3s ease-in-out, opacity .3s ease-in-out";
});
