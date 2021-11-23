$(document).ready(function(){

    //헤더 색상 x -> 색상ㅇ, top버튼
    $('.top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    $(window).scroll(function(){
    
    var ww = $(window).width();
    var sct = $(window).scrollTop();
    var hh = $('header').height();

    if(ww>=1200){

        if(sct<hh){
            $('header').css({
                backgroundColor: 'transparent'
            });
            
            $('.top_header_wrap').css({
                display: 'block'
            });
    
        }else if(sct>hh){
            $('header').css({
                backgroundColor: 'rgba( 255,255, 255, 0.6)',
            });
    
            $('.top_header_wrap').css({
                display: 'none'
            });
        }

    }else if(ww<1200){
        $('.top_header_wrap').css({
            display: 'none'
        });
    }


    //top버튼
    if(sct>hh){
        $('.top').css({
            opacity: 1,
        });
    }else if(sct<hh){
        $('.top').css({
            opacity: 0
        });
    }

    });


    //배너 트리거 이벤트
    $('.click_btn').click(function(){

        ii = $(this).index();

        $('.sec1_img').fadeOut();
        $('.sec1_img').eq(ii).fadeIn();

        $('.click_btn').removeClass('on');
        $('.click_btn').eq(ii).addClass('on');

    });

    click=0;
    setInterval(function(){

        click++;
        if(click>2){
            click=0;
        }

        $('.click_btn').eq(click).trigger('click');

    },1500);

    //ham_btn 닫힘 열림 이벤트

    $('.ham_btn').click(function(){

        $(this).toggleClass('active');

        $('.tab_hidden_wrap').toggleClass('visible');

    });

    //lan버튼 누르면 en, jp나오게
    var q = 0;

     $('.lan').click(function(){

        if(q==0){
            $('.lan ul').css({
                height: 60,
            });            
          q++;

        }else if(q==1){
            $('.lan ul').css({
                height: 0,
            });
          q=0;

        }

    });

    qq = 0;

    $('.mo_lan').click(function(){

        if(qq==0){
            $('.mo_lan ul').css({
                height: 60,
            });            

        qq++;

        }else if(qq==1){
            $('.mo_lan ul').css({
                height: 0,
            });

        qq=0;

        }

    });

    //section3 클릭하면 이미지 바뀌게
    $('.sec3_wrap').hover(function(){

        $('.sec3_img_box>img:first').fadeOut(1000);
        $('.sec3_img_box>img:nth-child(2)').fadeIn(1000);

    },function(){
        
        $('.sec3_img_box>img:nth-child(2)').fadeOut(1000);
        $('.sec3_img_box>img:first').fadeIn(1000);

    });


    //section4 이미지 호버 이벤트s
    $('.sec4_img').each(function(index){
               
        $(this).attr('data-a', index);

    });

    $('.sec4_img').hover(function(){

        var i =  $(this).attr('data-a');

        $('.sec4_img img').eq(i).css({
            transform: 'scale(1.17)',
        });

    },function(){
        $('.sec4_img img').css({
            transform: 'scale(1)',
        });
    }); 
    

    //tab_hidden_ul>li 각 클릭시 하위 메뉴 나오게
    $('.tab_hidden_ul li').click(function(){

        if($(this).children('.hidden_sub_menu').hasClass('hidden_sub_on')===true){

            $(this).children('.hidden_sub_menu').removeClass('hidden_sub_on');

        }else{

            $('.hidden_sub_menu').removeClass('hidden_sub_on');

            $(this).children('.hidden_sub_menu').addClass('hidden_sub_on');

        }

    });


});//end