$(document).ready(function () {
  $(".slider").slick({
    dots: true,
  });
});

let humburger = document.getElementsByClassName(".product__button");
let menu = document.getElementsByClassName(".menu");

humburger.addEventListener("click", function () {
  menu.style.display = "block";
});
