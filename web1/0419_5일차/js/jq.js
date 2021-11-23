$(document).ready(function(){

    var i=0;

    $('#click_wrap').click(function(){

        i++;

       if(i>2){
           i=0;
       }

       $('#sec_1_img_wrap').stop().animate({
            left: -1200 * i
       },1500);

    });

    setInterval(function(){
        $('#click_wrap').trigger('click');
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