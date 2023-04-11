import { Swiper, Pagination, Navigation, Lazy } from "swiper";

Swiper.use([Pagination, Navigation, Lazy]);

const breakpointScroll = 625;
let header = document.querySelector(".s-header"),
  headerBurger = document.querySelector(".s-header__burger"),
  backdrop = document.querySelector(".backdrop");

document.addEventListener("DOMContentLoaded", function () {
  // Открытие/Закрытие мега меню по клику на бургер
  headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("is-open");
    if (backdrop) {
      backdrop.classList.toggle("is-active");
    }
    document.body.classList.toggle("is-blocked");
  });

  // Фиксация шапки при скроле
  document.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > breakpointScroll) {
      header.classList.add("is-fixed");
    } else {
      header.classList.remove("is-fixed");
    }
  });
});
