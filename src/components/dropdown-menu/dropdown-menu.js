import "./dropdown-menu.scss";

const dropdownContainers = document.querySelectorAll(
  ".dropdown-menu__container"
);

dropdownContainers.forEach(dropdown => {
  dropdown.addEventListener("click", () => {
    let dropdownItems = dropdown.querySelector(".dropdown-menu__items");
    dropdownItems.classList.toggle("dropdown-menu__items--visible");
    dropdownItems.classList.toggle("hide");
  });
});
