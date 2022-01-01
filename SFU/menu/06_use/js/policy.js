(function () {
  const hamBtnEl = document.querySelector(".ham_btn");
  const tabMenuEl = document.querySelector(".tab_menu_wrap");

  hamBtnEl.addEventListener("click", () => {
    hamBtnEl.classList.toggle("active");
    tabMenuEl.classList.toggle("slide");
  });
})();
