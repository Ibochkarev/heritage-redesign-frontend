const toggleContactItem = document.querySelectorAll(".s-page-contacts__item-toggle");

if (toggleContactItem) {
  toggleContactItem.forEach((el) => {
    el.onclick = function () {
      const initialText = 'развернуть'
      if (el.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        el.textContent = 'свернуть'
      } else {
        el.textContent = initialText
      }
      this.parentNode.parentNode.parentNode.classList.toggle("is-open");
    };
  });
}
