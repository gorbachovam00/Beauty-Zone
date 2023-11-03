const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const closeMenu1 = document.querySelector(".close-menu1");
const closeMenu2 = document.querySelector(".close-menu2");
const closeMenu3 = document.querySelector(".close-menu3");
const closeMenu4 = document.querySelector(".close-menu4");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

closeMenu1.addEventListener("click", toggleMenu);
closeMenu2.addEventListener("click", toggleMenu);
closeMenu3.addEventListener("click", toggleMenu);
closeMenu4.addEventListener("click", toggleMenu);

menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", disableScroll);
