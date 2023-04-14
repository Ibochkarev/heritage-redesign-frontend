import { Swiper, Navigation, Pagination, Mousewheel } from "swiper"
Swiper.use([Pagination, Navigation, Mousewheel])

const teamSlider = new Swiper(`.s-teachers__slider`, {
  slidesPerView: 2,
  slidesPerGroup: 2,
  slidesPerColumn: 2,
  spaceBetween: 0,
  resistance: true,
  resistanceRatio: 1,
  pagination: {
    el: `.s-teachers__pagination`,
    // dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: `.s-teachers__button-next`,
    prevEl: `.s-teachers__button-prev`,
  },
  slidesPerColumnFill: `row`,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
})
