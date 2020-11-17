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

const welcome = document.querySelector(".welcome");
const product = document.querySelector(".product");
const about = document.querySelector(".about");
const info = document.querySelector(".info");
const contact = document.querySelector(".contact");
const menu = document.querySelector(".menu");
const postInfo = document.querySelector(".info__post");
const payInfo = document.querySelector(".info__pay");
const menuBtnOpen = document.querySelector(".menu-btn__open");
const menuBtnClose = document.querySelector(".menu-btn__close");
const feeButton = document.querySelector(".post-btn");
const postButton = document.querySelector(".fee-btn");
const toWelcome = document.querySelector(".toWelcome");
const toProduct = document.querySelector(".toProduct");
const toPayment = document.querySelector(".toPayment");
const toDelivery = document.querySelector(".toDelivery");
const toContact = document.querySelector(".toContact");

function menuOpen() {
  menu.classList.toggle("hidden");
  welcome.classList.toggle("hidden");
}

function decrPay() {
  postInfo.classList.remove("hidden");
  payInfo.classList.add("hidden");
}

function decrPost() {
  postInfo.classList.add("hidden");
  payInfo.classList.remove("hidden");
}

function scrollToWelcome() {
  welcome.scrollIntoView();
  menu.classList.toggle("hidden");
  welcome.classList.toggle("hidden");
}

function scrollToProduct() {
  product.scrollIntoView();
}

function scrollToPayment() {
  info.scrollIntoView();
  postInfo.classList.add("hidden");
  payInfo.classList.remove("hidden");
}
function scrollToDelivery() {
  info.scrollIntoView();
  postInfo.classList.remove("hidden");
  payInfo.classList.add("hidden");
}
function scrollToContact() {
  contact.scrollIntoView();
}

menuBtnOpen.addEventListener("click", menuOpen);
menuBtnClose.addEventListener("click", menuOpen);
feeButton.addEventListener("click", decrPay);
postButton.addEventListener("click", decrPost);
toWelcome.addEventListener("click", scrollToWelcome);
toProduct.addEventListener("click", scrollToProduct);
toPayment.addEventListener("click", scrollToPayment);
toDelivery.addEventListener("click", scrollToDelivery);
toContact.addEventListener("click", scrollToContact);
