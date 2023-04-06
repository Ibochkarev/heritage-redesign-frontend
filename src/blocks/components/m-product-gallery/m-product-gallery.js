import { Swiper, Pagination, Navigation, Thumbs, Lazy } from "swiper";

Swiper.use([Pagination, Navigation, Thumbs, Lazy]);

window.addEventListener(
  "load",
  () => {
    const mSliderProductThumb = new Swiper(".m-product-gallery-thumb", {
      spaceBetween: 28,
      slidesPerView: 3,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: "vertical",
      lazy: true,
      breakpoints: {
        1440: {
          slidesPerView: 4,
        },
      }
    });

    const mSliderProduct = new Swiper(".m-product-gallery-slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".m-product-gallery__button-next",
        prevEl: ".m-product-gallery__button-prev",
      },
      resistance: true,
      resistanceRatio: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
      lazy: true,
      thumbs: {
        swiper: mSliderProductThumb,
      },
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true,
        },
        475: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  },
  false
);
