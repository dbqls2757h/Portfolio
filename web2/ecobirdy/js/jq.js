$(document).ready(function () {
  //마우스 포인터

  $(document).mousemove(function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    $(".ball").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });

  //검색창

  $("#search").click(function () {
    $(".search_in").css({
      display: "block",
    });
    $(".scroll_down").css({
      display: "none",
    });
  });

  $(".close_btn").click(function () {
    $(".search_in").css({
      display: "none",
    });
    $(".scroll_down").css({
      display: "block",
    });
  });

  //ham_btn클릭시이벤트
  $(".ham_btn").click(function () {
    $(this).toggleClass("active");

    $("#hidden_menu_wrap").toggleClass("visible");
  });

  //hidden_menu구동
  var i = 0;

  $(".ham_btn").click(function () {
    if (i == 0) {
      $("#hidden_menu_wrap").css({
        display: "block",
      });
      $("#wrap").css({
        position: "fixed",
      });
      $(".scroll").css({
        display: "none",
      });

      i++;
    } else if (i == 1) {
      $("#hidden_menu_wrap").css({
        display: "none",
      });
      $("#wrap").css({
        position: "relative",
      });
      $(".scroll").css({
        display: "block",
      });
      i--;
    }
  });

  $(".center_txt")
    .each(function (index) {
      $(this).attr("data-index", index);
    })
    .hover(function () {
      a = $(this).attr("data-index");

      $(".left_box_img").fadeOut();
      $(".left_box_img").eq(a).fadeIn();

      $(".left_box_txt").fadeOut();
      $(".left_box_txt").eq(a).fadeIn();

      $(".right_box_img").fadeOut();
      $(".right_box_img").eq(a).fadeIn();
    });
}); //end
