document.addEventListener("DOMContentLoaded", function () {
  let inputSearchForm = document.querySelector(".s-page-search__form-input"),
    searchFormClearButton = document.querySelector(
      ".s-page-search__form-clear"
    );

    // 'keyup' event - runs when a character has been typed
    inputSearchForm.addEventListener("keyup", () => {
      searchFormClearButton.classList.add("is-show");
    });

    // Handle clear button actions
    searchFormClearButton.addEventListener("click", () => {
      inputSearchForm.value = ""; // empty input
      searchFormClearButton.classList.remove("is-show"); // hides clear button
      inputSearchForm.focus(); // re-focus on input
    });

    // Automatically focus on input after page loads
    inputSearchForm.focus();
});
