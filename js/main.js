$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    infinite: false,
  });

  $('.product__button_l').click(function(event) {
    $(".slider").slick('goTo', 0);
  });
  $('.product__button_m').click(function(event) {
    $(".slider").slick('goTo', 1);
  });
  $('.product__button_s').click(function(event) {
    $(".slider").slick('goTo', 2);
  });
});

