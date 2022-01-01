(function () {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("myImg").className = "slideUp";
    } else if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      document.getElementById("myImg_1").className = "slideUp";
    } else {
      document.getElementById("myImg").className = "";

      document.getElementById("myImg_1").className = "";
    }
  }
  let sct = window.pageYOffset;
})();

(function () {
  const hamBtnEl = document.querySelector(".ham_btn");
  const tabMenuEl = document.querySelector(".tab_menu_wrap");

  hamBtnEl.addEventListener("click", () => {
    hamBtnEl.classList.toggle("actives");
    tabMenuEl.classList.toggle("slide");
  });
})();
