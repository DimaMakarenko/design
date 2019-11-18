$(function() {
  var $status = $(".slider-count");

  $(".portfolio__slider").slick({
    infinite: true,
    fade: true,
    prevArrow: '<div class="slider-prev slider-arrow">prev</div>',
    nextArrow: '<div class="slider-next slider-arrow">Next</div>'
  });
  var a = new Rellax(".header__content", {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  $(".header__nav-btn").on("click", function(e) {
    e.preventDefault;
    $(this).toggleClass("header__nav-btn-active");
    $(".header__nav-menu-link").toggleClass("header__nav-link-active");
  });
});
