$(document).ready(function(){

    //sec4 img 가로값 변수지정
    sec4_img_width = $('.sec4_img').width();

    $('#img_wrap').css({
        marginLeft: -sec4_img_width/4
    });


    //resize
    $(window).resize(function(){
        sec4_img_width = $('.sec4_img').width();
    });

    $('#right_btn').click(function(){

        $('#img_wrap').animate({
            left: -sec4_img_width,
        },1000, function(){
            $('#img_wrap').css({
                left: 0,
            }).find('.sec4_img:first').appendTo('#img_wrap');
        });

    });

    $('#left_btn').click(function(){

        $('#img_wrap').css({
            left: -sec4_img_width,
        }).find('.sec4_img:last').prependTo('#img_wrap');

        $('#img_wrap').animate({
            left: 0
        },1000);        
    });


    //hidden_menu
    $('#hidden_menu li').click(function(){
                //===:~라면
        if($(this).children('.hidden_sub_menu').hasClass('hidden_sub_on')===true){
            //클래스가 있으면 제거하고
            $(this).children('.hidden_sub_menu').removeClass('hidden_sub_on');
        }else{
            //클릭 한 거 이외에는 삭제시켜주세요 removeClass 필수!
            $('.hidden_sub_menu').removeClass('hidden_sub_on');
            //클래스가 없으면 추가해주세요
            $(this).children('.hidden_sub_menu').addClass('hidden_sub_on');
        }

    });

   $('#hidden_menu_btn').click(function(){

        $('#hidden_menu_wrap').css({
            display: 'none'
        });

        $('#wrap').css({
            position: 'relative'
        });

   });


   $('#ham_btn').click(function(){

        $('#hidden_menu_wrap').css({
            display: 'block'
        });

        $('#wrap').css({
            position: 'fixed'
        });

   });

   setInterval(function(){
        $('.sec5_img_jpg:first').appendTo('.sec5_img_box');
   },1500);

   setInterval(function(){
    $('.sec5_img_jpg2:first').appendTo('.sec5_img_box2');
    },1500);

    setInterval(function(){
        $('.sec5_img_jpg3:first').appendTo('.sec5_img_box3');
    },1500);

    setInterval(function(){
        $('.sec5_img_jpg4:first').appendTo('.sec5_img_box4');
    },1500);






});//end