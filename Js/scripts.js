const navEmail = document.querySelector(".navbar-email");
const deskMenu = document.querySelector(".desktop-menu");
const mobMenu = document.querySelector(".mobile-menu");
const burgerMenuIcon = document.querySelector(".menu");

navEmail.addEventListener("click", showHideDesktopMenu);
burgerMenuIcon.addEventListener("click", showHideBurgerMenu);

function showHideDesktopMenu() {
  deskMenu.classList.toggle("inactive");
}
function showHideBurgerMenu() {
  mobMenu.classList.toggle("inactive");
}
