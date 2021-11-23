$(document).ready(function(){

    $('.slide_btn').click(function(){

        i = $(this).index();

        $('.slide').fadeOut();
        $('.slide').eq(i).fadeIn();

        $('.slide_btn').removeClass('btn_on');
        $('.slide_btn').eq(i).addClass('btn_on');
    });


    //강제 이벤트trigger,
    //일정시간 이벤트 반복 setInterval
    click = 0;
    setInterval(function(){

        click++;
        if(click>2){
            click=0;
        }

        $('.slide_btn').eq(click).trigger('click');

    },1500);

    $('#sec2_menu>li').click(function(){

        ii = $(this).index();

        $('.sec2_slide').fadeOut(); //선택안한건 사라지고
        $('.sec2_slide').eq(ii).fadeIn(); //선택한건 나타나게

        $('#sec2_menu>li').removeClass('sec2_menu_on');
        $('#sec2_menu>li').eq(ii).addClass('sec2_menu_on');
   
    });

    // * hasClass
	// => 선택한 요소에 클래스가 있는지 확인을 해주는 것
	// =>$('선택자').hasClass('클래스이름');

    $('#hidden_menu>li').click(function(){
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

    $('#hidden_name_but>button').click(function(){

        $('#hidden_menu_wrap').css({
            display: 'none'
        });

        $('body').css({
            position: 'relative'
        });

    });

    $('#ham_btn').click(function(){
        $('#hidden_menu_wrap').css({
            display: 'block'
        });

        $('body').css({
            position: 'fixed'
        });
    });






















}); //end

// var i=0;

// $('#click_wrap').click(function(){

//     i++;

//    if(i>2){
//        i=0;
//    }

//    $('#sec_1_img_wrap').stop().animate({
//         left: -1200 * i
//    },1500);

// });

// setInterval(function(){
//     $('#click_wrap').trigger('click');
// },1000);


// //section2 클릭시 넘어가게
// $('#sec_2_menu>li').each(function(index){
//     $(this).attr('data-a', index);
// });

// $('#sec_2_menu>li').click(function(){

//     var i = $(this).attr('data-a');

//     $('.sec_2_txt').removeClass('active');
//     $('.sec_2_txt').eq(i).addClass('active');

// });
