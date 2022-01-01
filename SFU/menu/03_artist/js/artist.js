(function () {
  const formEl = document.querySelector("form");
  const inputCommentEl = document.querySelector(".input_comment");
  const userCommentEl = document.querySelector(".user_comment");

  const heartEl = document.querySelectorAll(".heart");

  // 댓글
  function CreateComment(con) {
    this.con = con;
    this.init();
  }

  CreateComment.prototype = {
    constructor: CreateComment,
    init: function () {
      const divEl = document.createElement("div");
      divEl.innerHTML = this.con;
      // console.log(divEl);
      userCommentEl.appendChild(divEl);
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputCommentEl.value;
    // console.log(inputValue);

    new CreateComment(inputValue);
    inputCommentEl.value = null;
  };

  // 하트토글
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

  const storyBoxEl = document.querySelectorAll(".box");
  // const storyClickEl = document.querySelector(".story_click_wrap");

  // 스토리클릭
  storyBoxEl.forEach((box) => {
    box.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(box.getAttribute("nav"));
    });
  });

  formEl.addEventListener("submit", handleSubmit);

  // mo ham_btn
  const hamBtnEl = document.querySelector(".ham_btn");
  const tabMenuEl = document.querySelector(".tab_menu_wrap");

  hamBtnEl.addEventListener("click", () => {
    hamBtnEl.classList.toggle("active");
    tabMenuEl.classList.toggle("slide");
  });
})();
