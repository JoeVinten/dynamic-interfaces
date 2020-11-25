import "./nav.scss";

const navLinks = document.querySelector(".nav__links");
const menuBtn = document.querySelector(".nav__button");

const openMenu = () => {
  navLinks.classList.toggle("nav__links--open");
  menuBtn.classList.toggle("nav__button--open");
};

menuBtn.addEventListener("click", openMenu);
menuBtn.addEventListener("keypress", e => {
  e.key === "Enter" ? openMenu() : null;
});
