document.addEventListener('DOMContentLoaded', function () {
  var swiper4 = new Swiper(".swiper-project", {
    allowTouchMove: true,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,

    navigation: {
      nextEl: ".next--proj",
      prevEl: ".prev--proj"
    },
    a11y: false,
    keyboard: true, 
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        
      },
      664: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1660: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },
  });
});