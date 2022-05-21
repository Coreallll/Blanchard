// document.addEventListener('DOMContentLoaded', function () {
//   var swiper3 = new Swiper(".swiper-publication", {
//     slidesPerView: 3,
//     spaceBetween: 50,
//     slidesPerGroup: 3,

//     pagination: {
//       el: ".publication .publication-pagination",
//       type: "fraction"
//     },
//     navigation: {
//       nextEl: ".pub-next",
//       prevEl: ".pub-prev"
//     },
//     a11y: false,
//     keyboard: true, 
//     breakpoints: {
//       320: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//         spaceBetween: 34,
//       },
//       1024: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//         spaceBetween: 50,
//       },
//       1361: {
//         slidesPerView: 3,
//         spaceBetween: 50,
//       }
//     },
//   });
// });

(() => {
  const MOBILE_WIDTH = 663;

  const sliderParamsNotMobile = {
    sliderWrap: "publication-swiper",
    cardsContainerName: "swiper-publication",
    cardsWrapName: "swiper-publication-wrap",
    card: "swiper-publication__slide",
    paginationClassName: "publication-pagination",
    navClassName: "publication-navigation",
    navBtnClassName: "swiper-nav-btn",
    navPrev: "prev",
    navPubPrev: "pub-prev",
    navNext: "next",
    navPubNext: "pub-next"
  };

  function getWindowWidth() {
    console.log(document.body.scrollWidth);
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function activateSlider(params) {
    const navigation = document.createElement("div");
    const pagination = document.createElement("div");
    const navBtnPrev = document.createElement("button");
    const navBtnNext = document.createElement("button");
    
    navigation.classList.add(params.navClassName);

    navBtnPrev.classList.add(params.navBtnClassName);
    navBtnPrev.classList.add(params.navPrev);
    navBtnPrev.classList.add(params.navPubPrev);
    navigation.prepend(navBtnPrev);

    pagination.classList.add(params.paginationClassName);
    navigation.append(pagination);

    navBtnNext.classList.add(params.navBtnClassName);
    navBtnNext.classList.add(params.navNext);
    navBtnNext.classList.add(params.navPubNext);
    navigation.append(navBtnNext);

    params.sliderWrapElem.prepend(navigation);
    

    params.cardsContainer.classList.add("swiper-container");
    params.cardsWrap.classList.add("swiper-wrapper");

    params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
       breakpoints: {
        0: {
          slidesPerView: 2,
        },
        663: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
         1100: {
           slidesPerView: 3,
           spaceBetween: 50
         },
       },

      pagination: {
        el: ".publication .publication-pagination",
        type: "fraction"
      },

      navigation: {
        nextEl: ".pub-next",
        prevEl: ".pub-prev"
      },

      on: {
        beforeInit() {
          document.querySelectorAll(`.${params.card}`).forEach((el) => {
            el.classList.add("swiper-slide");
          });
        },

        beforeDestroy() {
          this.slides.forEach((el) => {
            el.classList.remove("swiper-slide");
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          });

          this.pagination.el.remove();
          navigation.remove();
        }
      }
    });
  }

  function destroySlider(params) {
    params.cardsSlider.destroy();
    params.cardsContainer.classList.remove("swiper-container");
    params.cardsWrap.classList.remove("swiper-wrapper");
    params.cardsWrap.removeAttribute("aria-live");
    params.cardsWrap.removeAttribute("id");
  }

  function checkWindowWidth(params) {
    const currentWidth = getWindowWidth();
    params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
    params.cardsContainer = document.querySelector(
      `.${params.cardsContainerName}`
    );
    params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

    if (
      currentWidth > MOBILE_WIDTH &&
      (!params.cardsSlider || params.cardsSlider.destroyed)
    ) {
      activateSlider(params);
    } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
      destroySlider(params);
    }
  }

  checkWindowWidth(sliderParamsNotMobile);

  window.addEventListener("resize", function () {
    checkWindowWidth(sliderParamsNotMobile);
  });
})();
