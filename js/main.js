'use strict'

const welcome = document.querySelector(".welcome");
const product = document.querySelector(".product");
const about = document.querySelector(".about");
const info = document.querySelector(".info");
const contact = document.querySelector(".contact");
const pinkMenu = document.querySelector(".menu");
const basket = document.querySelector(".basket");
const counter = document.querySelectorAll(".count-body");

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
const cart = document.querySelectorAll(".slider__button");
const countPlus = document.querySelectorAll(".count-after");
const countMinus = document.querySelectorAll(".count-pre");

function pinkMenuOpen() {
  pinkMenu.classList.toggle("hidden");
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

function openCart() {
  basket.classList.toggle("hidden");
}

function scrollToWelcome() {
  welcome.scrollIntoView();
  pinkMenu.classList.toggle("hidden");
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

function plusToCount(index) {
  counter[index].innerHTML = +(counter[index].innerHTML) + 1;
}



menuBtnOpen.addEventListener("click", pinkMenuOpen);
menuBtnClose.addEventListener("click", pinkMenuOpen);
feeButton.addEventListener("click", decrPay);
postButton.addEventListener("click", decrPost);
toWelcome.addEventListener("click", scrollToWelcome);
toProduct.addEventListener("click", scrollToProduct);
toPayment.addEventListener("click", scrollToPayment);
toDelivery.addEventListener("click", scrollToDelivery);
toContact.addEventListener("click", scrollToContact);

for (let value of cart) {
  value.addEventListener("click", openCart);
}







