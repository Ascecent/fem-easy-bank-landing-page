const hamburger = document.querySelector(".header__menu");
const navLinks = document.querySelector(".header__links");
const body = document.getElementsByTagName("body")[0];

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");

  //Hamburger Animation
  hamburger.classList.toggle("toggle");

  // Scrolling
  body.classList.toggle("no-vertical-scroll");
});
