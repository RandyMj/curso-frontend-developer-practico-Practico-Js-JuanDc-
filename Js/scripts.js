const navEmail = document.querySelector(".navbar-email");
const deskMenu = document.querySelector(".desktop-menu");
const mobMenu = document.querySelector(".mobile-menu");
const burgerMenuIcon = document.querySelector(".menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCarProductDetails = document.querySelector(".product-detail");

navEmail.addEventListener("click", showHideDesktopMenu);
burgerMenuIcon.addEventListener("click", showHideBurgerMenu);
shoppingCartIcon.addEventListener("click", showHideshoppingCartDetails);

function showHideDesktopMenu() {
  let IsShoppingCartClosed =
    shoppingCarProductDetails.classList.contains("inactive");

  if (!IsShoppingCartClosed) {
    shoppingCarProductDetails.classList.add("inactive");
  }

  deskMenu.classList.toggle("inactive");
}

function showHideBurgerMenu() {
  let IsShoppingCartClosed =
    shoppingCarProductDetails.classList.contains("inactive");

  if (!IsShoppingCartClosed) {
    shoppingCarProductDetails.classList.add("inactive");
  }

  mobMenu.classList.toggle("inactive");
}

function showHideshoppingCartDetails() {
  let IsMobileMenuClosed = mobMenu.classList.contains("inactive");

  if (!IsMobileMenuClosed) {
    mobMenu.classList.add("inactive");
  }

  shoppingCarProductDetails.classList.toggle("inactive");
}
