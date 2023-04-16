import { Swiper, Navigation, Lazy } from 'swiper'
Swiper.use([Navigation, Lazy])

const sliderSection = document.querySelectorAll('.s-universal-slider__list')

window.addEventListener(
  'load',
  () => {
    sliderSection.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 12,
        navigation: {
          nextEl: '.s-universal-slider__list .s-universal-slider__button-next',
          prevEl: '.s-universal-slider__list .s-universal-slider__button-prev',
        },
        lazy: true,
        loop: true,
        resistance: true,
        resistanceRatio: 1,
        breakpoints: {
          575: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
        },
      })
    })
  },
  false,
)
