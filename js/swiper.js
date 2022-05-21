const swiper = new Swiper('.swiper-gallery', {
  // Optional parameters
  slidesPerView: 3,
  grid: {
    rows: 2,
    fill: "row"
  },
  slidesPerGroup: 3,
  spaceBetween: 0,
  simulateTouch:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide:'true',
  },
});
