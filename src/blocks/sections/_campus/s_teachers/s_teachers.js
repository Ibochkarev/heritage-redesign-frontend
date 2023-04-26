import { Swiper, Navigation, Pagination, Mousewheel, Grid } from "swiper"
Swiper.use([Pagination, Navigation, Mousewheel, Grid])

const teamSlider = new Swiper(`.s-teachers__slider`, {
  slidesPerView: 'auto',
  spaceBetween: 0,
  resistance: true,
  resistanceRatio: 1,
  grid: {
    rows: 5,
    fill: 'row',
  },
  pagination: {
    el: `.s-teachers__pagination`,
    // dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: `.s-teachers__button-next`,
    prevEl: `.s-teachers__button-prev`,
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    600: {
      grid: {
        rows: 2,
      },
    },
  },
})