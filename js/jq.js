$(document).ready(function () {
  var ww = $(window).width();

  // loading이미지
  $(".loading").delay(2500).fadeOut();

  //메일 세로로 회전
  $(window).scroll(function () {
    // var wh = $(window).height();
    var sct = $(window).scrollTop();

    if (sct == 0) {
      if (ww >= 1200) {
        $(".mail").css({
          top: 50,
          right: 30,
          transform: "rotate(0)",
        });
      } else {
        $(".mail").css({
          top: 50,
          right: 30,
          transform: "rotate(0)",
        });
      }
    } else if (sct > 50) {
      if (ww >= 1200) {
        $(".mail").css({
          top: 150,
          right: -25,
          transform: "rotate(90deg)",
        });
      } else if (ww < 1200) {
        $(".mail").css({
          top: 150,
          right: -45,
          transform: "rotate(90deg)",
        });
      }
    }

    // section3 skill효과
    var sec3_h = $(".section3").height();
    var scrollit = $(window).scrollTop() >= sec3_h - 100;

    if (ww >= 1200) {
      if (scrollit) {
        $(".per90").css(
          {
            width: "66%",
          },
          0.08
        );
        $(".per85").css(
          {
            width: "64%",
          },
          0.08
        );
        $(".per80").css(
          {
            width: "62%",
          },
          0.08
        );
        $(".per75").css(
          {
            width: "60%",
          },
          0.08
        );
      } else {
        $(".per90").css(
          {
            width: 0,
          },
          0.03
        );
        $(".per85").css(
          {
            width: 0,
          },
          0.03
        );
        $(".per80").css(
          {
            width: 0,
          },
          0.03
        );
        $(".per75").css(
          {
            width: 0,
          },
          0.03
        );
      }
    }

    if (sct < wh) {
      $(".top_btn").css({
        display: "none",
      });
      $("header").css({
        display: "none",
      });
    } else if (sct > wh) {
      $(".top_btn").css({
        display: "block",
      });
      $("header").css({
        display: "block",
      });
    }
  });

  $(".top_btn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1200
    );
  });

  //top_header클릭시 각 섹션 이동

  var wh = $(window).height();
  var sct = $(window).scrollTop();

  $(".top_header>li").each(function (index) {
    $(this).attr("data-a", index);
  });

  $(".top_header>li").click(function () {
    var i = $(this).attr("data-a");

    $("html, body").animate({
      scrollTop: wh + wh * i,
    });

    $(".top_header>li").removeClass("top_header_on");
    $(".top_header>li").eq(i).addClass("top_header_on");
  });
}); //end
