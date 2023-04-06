import { Swiper, Pagination, Navigation, Lazy } from "swiper";

Swiper.use([Pagination, Navigation, Lazy]);

const breakpointScroll = 625;
let header = document.querySelector(".s-header"),
  headerBurger = document.querySelector(".s-header__burger"),
  headerNavigation = document.querySelector(".s-header__navigation"),
  headerMegaMenu = document.querySelector(".mega-menu"),
  headerBottom = document.querySelector(".s-header-bottom"),
  cartButtonDropdown = document.querySelector(".s-header__actions-cart"),
  cartDropdown = document.querySelector(".m-cart-dropdown"),
  cartDropdownClose = document.querySelector(".m-cart-dropdown__close"),
  backdrop = document.querySelector(".backdrop");

document.addEventListener("DOMContentLoaded", function () {
  // Открытие/Закрытие мега меню по клику на бургер
  headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("is-open");
    headerMegaMenu.classList.toggle("is-active");
    cartDropdown.classList.remove('is-active');
    if (backdrop) {
      backdrop.classList.toggle("is-active");
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
      headerNavigation.classList.toggle("is-active");
    }

    // if (headerBurger.classList.contains('is-open')) {
    //   document.body.classList.add("is-blocked");
    // } else {
    //   document.body.classList.remove("is-blocked");
    // }
  });

  // Открытие/Закрытие корзины по клику на кнопку
  cartButtonDropdown.addEventListener("click", () => {
    cartDropdown.classList.toggle("is-active");
    backdrop.classList.toggle("is-active");
    headerMegaMenu.classList.remove('is-active');
    headerBurger.classList.remove('is-open');

    if (cartDropdown.classList.contains('is-active')) {
      if (backdrop) {
        backdrop.classList.add("is-active");
      }
      // document.body.classList.add("is-blocked");
    } else {
      if (backdrop) {
        backdrop.classList.remove("is-active");
      }
      // document.body.classList.remove("is-blocked");
    }
  });

  cartDropdownClose.addEventListener("click", () => {
    cartDropdown.classList.toggle("is-active");
    if (backdrop) {
      backdrop.classList.remove("is-active");
    }
    headerMegaMenu.classList.remove('is-active');
    // document.body.classList.remove("is-blocked");
  });

  // Фиксация шапки при скроле
  document.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > breakpointScroll) {
      header.classList.add("is-fixed");
      headerBottom.classList.add("is-fixed");
      headerMegaMenu.classList.add("is-fixed");
    } else {
      header.classList.remove("is-fixed");
      headerBottom.classList.remove("is-fixed");
      headerMegaMenu.classList.add("is-fixed");
    }
  });

  if (window.matchMedia("(max-width: 1023px)").matches) {
    const megaMenuMobileButtons = document.querySelectorAll(
      ".mega-menu__mobile-button"
    );

    megaMenuMobileButtons.forEach((accordion) => {
      accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        content.classList.toggle("is-open");
      };
    });
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    const tabContentHeader = document.querySelectorAll(
      ".s-header__navigation-content"
    ),
      tabNavHeaderItem = document.querySelectorAll(".s-header__navigation-tab"),
      tabNavHeaderItemArray = Array.prototype.slice.call(tabNavHeaderItem);

    tabContentHeader[0].classList.add("is-active");
    tabNavHeaderItem[0].classList.add("is-active");

    for (let i = 0; i < tabNavHeaderItem.length; i++) {
      tabNavHeaderItem[i].addEventListener("click", function () {
        const index = tabNavHeaderItemArray.indexOf(this);

        for (let a = 0; a < tabContentHeader.length; a++) {
          tabContentHeader[a].classList.remove("is-active");
        }

        document
          .querySelectorAll(".s-header__navigation-content")
        [index].classList.add("is-active");

        for (let b = 0; b < tabNavHeaderItem.length; b++) {
          tabNavHeaderItem[b].classList.remove("is-active");
        }

        document
          .querySelectorAll(".s-header__navigation-item")
        [index].classList.add("is-active");
      });
    }
  }
});

// Слайдер в шапке (мега меню)
window.addEventListener(
  "load",
  () => {
    const mSliderHeader = new Swiper(".s-header__slider", {
      navigation: {
        nextEl: ".s-header__slider .m-section-slider__button-next",
        prevEl: ".s-header__slider .m-section-slider__button-prev",
      },
      resistance: true,
      resistanceRatio: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
      lazy: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
  },
  false
);
