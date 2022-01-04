(function () {
  window.addEventListener("scroll", () => {
    let sct = window.pageYOffset;

    // 스크롤시 mail & header & top_btn 이벤트
    const mailEl = document.querySelector(".mail");
    const headerEl = document.querySelector("header");
    const topBtnEl = document.querySelector(".top_btn");

    if (sct >= 200) {
      mailEl.classList.add("active");
      headerEl.classList.add("block");
      topBtnEl.classList.add("visible");
    } else {
      mailEl.classList.remove("active");
      headerEl.classList.remove("block");
      topBtnEl.classList.remove("visible");
    }
  });

  // top_menu 클릭시 스크롤이벤트
  const topMenuEl = document.querySelectorAll(".top_header li");
  const sections = document.querySelectorAll("section");
  const firstTop = sections[0].offsetTop;
  const secondTop = sections[1].offsetTop;
  const thirdTop = sections[2].offsetTop;
  const fourthTop = sections[3].offsetTop;

  topMenuEl[0].onclick = function () {
    window.scroll({
      top: firstTop,
      behavior: "smooth",
    });
  };

  topMenuEl[1].onclick = function () {
    window.scroll({
      top: secondTop,
      behavior: "smooth",
    });
  };

  topMenuEl[2].onclick = function () {
    window.scroll({
      top: thirdTop,
      behavior: "smooth",
    });
  };

  topMenuEl[3].onclick = function () {
    window.scroll({
      top: fourthTop,
      behavior: "smooth",
    });
  };

  //top_btn 클릭시 페이지 상단으로
  const topBtnEl = document.querySelector(".top_btn");

  topBtnEl.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
})();
