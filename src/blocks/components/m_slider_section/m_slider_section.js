import { Swiper, Pagination, Navigation, Lazy } from "swiper";
Swiper.use([Pagination, Navigation, Lazy]);

const sliderSection = document.querySelectorAll(".m-section-slider__list");

window.addEventListener(
  "load",
  () => {
    sliderSection.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 19,
        centeredSlides: true,
        navigation: {
          nextEl: ".m-section-slider__list .m-section-slider__button-next",
          prevEl: ".m-section-slider__list .m-section-slider__button-prev",
        },
        // lazy: true,
        // loop: true,
        resistance: true,
        resistanceRatio: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
        breakpoints: {
          0: {
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 18,
            pagination: {
              dynamicBullets: true,
            },
          },
          768: {
            spaceBetween: 10,
          },
          1024: {
            slidesPerGroup: 4,
            centeredSlides: false,
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
              dynamicBullets: false,
            },
          },
        },
      });
    })
  },
  false
);
