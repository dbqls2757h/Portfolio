$(document).ready(function(){


    //순서값

    $('#click_wrap li').each(function(index){
        $(this).attr('data-a',index);
    });

    $('#click_wrap li').click(function(){

        var i = $(this).attr('data-a');

       $('#sec_1_img_wrap').animate({
            left: -1200 * i
       },1500);

       $('#click_wrap li').removeClass('click_on');
       $('#click_wrap li').eq(i).addClass('click_on');

    }); 


    setInterval(function(){
        $('#click_wrap li').trigger('click');
    },1000);


    //section2 클릭시 넘어가게
    $('#sec_2_menu>li').each(function(index){
        $(this).attr('data-a', index);
    });

    $('#sec_2_menu>li').click(function(){

        var i = $(this).attr('data-a');

        $('.sec_2_txt').removeClass('active');
        $('.sec_2_txt').eq(i).addClass('active');

    });






}); //end