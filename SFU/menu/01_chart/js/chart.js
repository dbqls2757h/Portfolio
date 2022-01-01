(function () {
  const heartEl = document.querySelectorAll(".heart");

  const btnEl = document.querySelector(".more_btn");
  const btn2El = document.querySelector(".more_btn2");

  const moreWrapEl = document.querySelector(".more_con_wrap");
  const moreWrap2El = document.querySelector(".more_con_wrap2");

  //   하트 토글
  heartEl.forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("active");

      if (heart.classList.contains("active")) {
        heart.innerHTML = "favorite";
      } else {
        heart.innerHTML = "favorite_border";
      }
    });
  });

  //   더보기 버튼 누르면 나타나는 more_con_wrap

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e.preventDefault());

    moreWrapEl.classList.toggle("height");
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    // console.log(e.preventDefault());

    moreWrap2El.classList.toggle("height");
  };

  btnEl.addEventListener("click", handleClick);
  btn2El.addEventListener("click", handleClick2);

  const playBtn = document.querySelector(".fa-play");
  const conAudio = document.querySelector(".con_audio");

  let currentAudio = 1;

  function loadAudio() {
    const source = document.querySelector(".source");
    source.src = `../../audio/${currentAudio}.mp3`;
    conAudio.load();
  }

  playBtn.addEventListener("click", loadAudio);

  // mo ham_btn
  const hamBtnEl = document.querySelector(".ham_btn");
  const tabMenuEl = document.querySelector(".tab_menu_wrap");

  hamBtnEl.addEventListener("click", () => {
    hamBtnEl.classList.toggle("active");
    tabMenuEl.classList.toggle("slide");
  });
})();
