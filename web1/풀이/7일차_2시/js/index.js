$(document).ready(function(){

$('.slide_btn').click(function(){
i=$(this).index();

$('.slide').fadeOut();
$('.slide').eq(i).fadeIn();

$('.slide_btn').removeClass('btn_on');
$('.slide_btn').eq(i).addClass('btn_on');
});

// 강제이벤트 trigger
// 일정시간 이벤트 반복 setInterval
    click=0;
    setInterval(function(){
        click++;
            if(click>2){
                click=0;
            }
    $('.slide_btn').eq(click).trigger('click');
    },1500);

    $('#sec2_menu>li').click(function(){
        ii=$(this).index();
$('.sec2_slide').fadeOut();
$('.sec2_slide').eq(ii).fadeIn();

$('#sec2_menu>li').removeClass('sec2_menu_on');
$('#sec2_menu>li').eq(ii).addClass('sec2_menu_on');
//css 속성값 추가하기!
//cursor: pointer;
    });

//hasClass => 선택한 요소에 클래스가 있는지 확인
//$('선택자').hasClass('클래스이름');

$('#hidden_menu>li').click(function(){
    if($(this).children('.hidden_sub_menu').hasClass('hidden_sub_on')===true){
        //클래스가 있으면 제거하고
        $(this).children('.hidden_sub_menu').removeClass('hidden_sub_on');
    } else{
        //클릭 된거 이외에거는 삭제되어야함
        $('.hidden_sub_menu').removeClass('hidden_sub_on');
        //클래스가 없으면 추가
        $(this).children('.hidden_sub_menu').addClass('hidden_sub_on');
    }


});

$('#hidden_name_but>button').click(function(){
    $('#hidden_menu_wrap').css({
        display: 'none',
    });
    $('body').css({
        position: 'relative',
    });

});

$('#ham_btn').click(function(){
    $('#hidden_menu_wrap').css({
        display: 'block',
    });

$('body').css({
    position: 'fixed',
});

});











//1. animate 
//=> css 무조건 넣어야 하는 속성값
//=> position 값! 

//2. hover
// => 2가지! 식 2개!
// $('선택자').hover(function(){
//     mouseenter
// }, function({
//     mouseleave
// }));














}); //end