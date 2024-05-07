// handle menu toggle
const navToggle = document.getElementById("btn-navbar-toggle");
const navbarNav = document.getElementById("navbar-nav");
const navbarNavActiveClassName = "navbar-nav--active";
navToggle.addEventListener("click", () => {
  navbarNav.classList.toggle(navbarNavActiveClassName);
});

// handle slider
let currentIndex = 0;

const showSlide = (index) => {
  let sliders = document.getElementsByClassName("slider-item");
  currentIndex = index;
  if (index >= sliders.length) currentIndex = 0;
  if (index < 0) currentIndex = sliders.length - 1;

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  sliders[currentIndex].style.display = "block";
};

const btnSlideNext = document.getElementById("slide-next");
const btnSlidePrev = document.getElementById("slide-prev");

btnSlideNext.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

btnSlidePrev.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

window.addEventListener("load", () => {
  showSlide(currentIndex);
});
