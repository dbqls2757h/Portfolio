$(document).ready(function(){

    var wh = $(window).height();

    $('#tab_menu_wrap').css({
        height: wh
    });

    //메뉴 클릭이벤트
    $('#ham_btn').click(function(){

        $('#tab_menu_wrap').css({
            display: 'block'
        });

    });

    $('#tab_menu_btn').click(function(){

        $('#tab_menu_wrap').css({
            display: 'none'
        })
    
    });

    //tab_menu ul,li 이벤트
    $('#tab_menu_1').click(function(){

        $(this).css({
            height: 150
        });
        
        $('#tab_menu_1 li').css({
            display: 'block'
        });

    });

    $('#tab_menu_2').click(function(){

        $(this).css({
            height: 150
        });
        
        $('#tab_menu_2 li').css({
            display: 'block'
        });

    });

    $('#tab_menu_3').click(function(){

        $(this).css({
            height: 150
        });
        
        $('#tab_menu_3 li').css({
            display: 'block'
        });

    });

    $('#tab_menu_4').click(function(){

        $(this).css({
            height: 150
        });
        
        $('#tab_menu_4 li').css({
            display: 'block'
        });

    });

    $('#tab_menu_5').click(function(){

        $(this).css({
            height: 150
        });
        
        $('#tab_menu_5 li').css({
            display: 'block'
        });

    });


    // //section1이벤트
    // var i=0;

    // $('.side_btn').click(function(){

    //     i++;

    //    if(i>2){
    //        i=0;
    //    }

    //    $('#slide_box').animate({
    //         left: -1200 * i
    //    },1500);

    // });

    // // setInterval(function(){
    // //     $('#click_wrap').trigger('click');
    // // },1000);


    // //section2 클릭시 넘어가게
    // $('#sec_2_menu>li').each(function(index){
    //     $(this).attr('data-a', index);
    // });

    // $('#sec_2_menu>li').click(function(){

    //     var i = $(this).attr('data-a');

    //     $('.sec_2_txt').removeClass('active');
    //     $('.sec_2_txt').eq(i).addClass('active');

    // });






}); //end