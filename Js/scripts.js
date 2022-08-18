const navEmail = document.querySelector(".navbar-email");
const deskMenu = document.querySelector(".desktop-menu");
let currentClass = deskMenu.getAttribute("class");

navEmail.addEventListener("click", showHideMenu);

function showHideMenu() {
  deskMenu.classList.toggle("inactive");
}
