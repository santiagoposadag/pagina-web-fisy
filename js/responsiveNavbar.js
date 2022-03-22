const $normalNavbar = document.querySelector(".servicios__navbar");
const $mobileNavbar = document.querySelector(".mobile__nav");
const $mobileBackground = document.querySelector(".mobile-navbar__background");

const $tituloMobile = document.querySelector(".titulo__mobil");

$tituloMobile.addEventListener("click", () => {
  $normalNavbar.classList.add("servicios-navbar__active");
  $mobileNavbar.classList.add("mobile-navbar__inactive");
  $tituloMobile.classList.add("mobile-navbar__inactive");
  $mobileBackground.classList.add("mobile-background__active");
});

$mobileBackground.addEventListener("click", () => {
  $normalNavbar.classList.toggle("servicios-navbar__active");
  $mobileNavbar.classList.toggle("mobile-navbar__inactive");
  $tituloMobile.classList.toggle("mobile-navbar__inactive");
  $mobileBackground.classList.toggle("mobile-background__active");
});
