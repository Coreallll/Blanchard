document.addEventListener('DOMContentLoaded', function () {
  var swiper1 = new Swiper(".swiper-hero", {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });
});