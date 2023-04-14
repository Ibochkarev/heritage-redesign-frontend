import { Swiper, Pagination, Navigation, Lazy, EffectFade } from "swiper";
Swiper.use([Pagination, Navigation, Lazy, EffectFade]);

window.addEventListener(
  "load",
  () => {
    const mainSlider = new Swiper(`.m-main-slider__list`, {
      slidesPerView: 1,
      navigation: {
        nextEl: ".m-main-slider__button-next",
        prevEl: ".m-main-slider__button-prev",
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      lazy: true,
      loop: true,
      resistance: true,
      resistanceRatio: 1,
    })
  },
  false
);
