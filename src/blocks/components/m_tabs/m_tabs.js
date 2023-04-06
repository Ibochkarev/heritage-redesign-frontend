const accordionBtns = document.querySelectorAll(".m-tabs__item-header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.parentNode.classList.toggle("is-open");

    let accordionContent = this.nextElementSibling;

    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  };
});
