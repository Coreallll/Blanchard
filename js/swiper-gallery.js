document.addEventListener('DOMContentLoaded', function () {
  var swiper2 = new Swiper(".swiper-gallery", {
    slidesPerView: 3,
    grid: {
      rows: 2,
      fill: "row"
    },
    slidesPerGroup: 3,
    spaceBetween: 50,
    simulateTouch: true,

    pagination: {
      el: ".gallery .gallery-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".next--gall",
      prevEl: ".prev--gall"
    },
    a11y: false,
    keyboard: true, 
    breakpoints: {
      0: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        slidesPerGroup: 1,
        
      },
      451: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        slidesPerGroup: 2,
        spaceBetween: 34
      },
  
      1361: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50,
      }
    },
  });
});