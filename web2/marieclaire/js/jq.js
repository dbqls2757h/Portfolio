$(document).ready(function(){
    //마우스 커서


    $(document).mousemove(function(e){
        var mouseX = e.pageX;
        var mouseY = e.pageY;

         $('.ball').css({
            left: mouseX+"px",
            top: mouseY+"px"
            });
                
        });

    //공지창
    $('.announcement_close').click(function(){
        $('.announcement_bar').css({
            display: 'none'
        });
    });

    //ham_btn

    var e = 0;

    $('.ham_btn').click(function(){

        $(this).toggleClass('active'); 
        $('.hidden_menu_wrap').toggleClass('visible');

        if(e==0){
            $('.wrap').css({
                position: 'fixed'
            });
            e++;
        }else if(e==1){
            $('.wrap').css({
                position: 'relative'
            });
            e--;
        }    

    });

    //search
    $('.search').click(function(){

        $('.search_in').css({
            height:50,
        });
    });

    $('.close_btn').click(function(){
        
        $('.search_in').css({
            height: 0
        });
        
    });

    $('.pc_search').click(function(){

        $('.search_in').css({
            height:50,
        });
    });

    $('.close_btn').click(function(){
        
        $('.search_in').css({
            height: 0
        });
        
    });



    



    // 스크롤하면 section1 투명도
    $(window).scroll(function(){

    var sct = $(window).scrollTop();

        if(sct<=0){
            $('.sec1_txt').css({
                opacity: 1,
            });
        }
        else if(sct>=100){
            $('.sec1_txt').css({
                opacity: 0.3,
            });
        }

        // 스크롤시 헤더 배경생성
        if(sct>500){
            $('header').css({
                   backgroundColor: 'rgba( 0, 0, 0, 0.4)',
            });
        }else if(sct==0){
            $('header').css({
               backgroundColor: 'transparent',
            });
        }
    });

    // ham_btn클릭하면 ham_btn,로고 색상 바뀌었다 돌아오게
    var i = 0;

    $('.ham_btn').click(function(){


        if(i==0){
            $('.ham_btn span').css({
                backgroundColor: '#292929'
            });
            $('.logo img').attr({
                src: 'img/logo.png'
            });
            i++;
        }else if(i==1){
            $('.ham_btn span').css({
                backgroundColor: '#fff'
            });
            $('.logo img').attr({
                src: 'img/tab_logo.png'
            });
            i=0;
        }

    });

    // var wh =$(window).height();

    // $('.menu_wrap>li').each(function(index){
    //     $(this).attr('data-a',index);
    // });

    // $('.menu_wrap>li').click(function(){

    //     var i = $(this).attr('data-a');

    //     $('html,body').animate({
    //         scrollTop: 800+wh * i
    //     });

    // });

    $('.menu_wrap>li:nth-child(1)').click(function(){
        var position = $('.section1').offset();
        $('html').stop().animate({
            scrollTop: position.top
        });
    });
    
    $('.menu_wrap>li:nth-child(2)').click(function(){
        var position = $('.section2').offset();
        $('html').stop().animate({
            scrollTop: position.top
        });
    });

    $('.menu_wrap>li:nth-child(3)').click(function(){
        var position = $('.section5').offset();
        $('html').stop().animate({
            scrollTop: position.top
        });
    });

    $('.menu_wrap>li:nth-child(4)').click(function(){
        var position = $('.section6').offset();
        $('html').stop().animate({
            scrollTop: position.top
        });
    });




    


    

});//end