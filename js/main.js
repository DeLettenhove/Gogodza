$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    infinite: false,
  });

  $(".product__button_l").click(function (event) {
    $(".slider").slick("goTo", 0);
  });
  $(".product__button_m").click(function (event) {
    $(".slider").slick("goTo", 1);
  });
  $(".product__button_s").click(function (event) {
    $(".slider").slick("goTo", 2);
  });
});

let welcome = document.querySelector(".welcome");
let menu = document.querySelector(".menu");
let menuBtnOpen = document.querySelector(".menu-btn__open");
let menuBtnClose = document.querySelector(".menu-btn__close");

function menuOpen() {
  menu.classList.toggle('hidden');
  welcome.classList.toggle('hidden');
}

menuBtnOpen.addEventListener("click", menuOpen);
menuBtnClose.addEventListener("click", menuOpen);
