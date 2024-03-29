$(function() {
    $('#gnb .dep2').hide();
    $('#gnb>li').hover(function() {
        $('#gnb .dep2').stop().slideUp();
        $(this).children('ul').stop().slideDown();
    }, function() {
        $('#gnb .dep2').stop().slideUp();
    });

    $('.family_site button').click(function(){
        $('.family_site ul').show();
    });
    $('.copyright').click(function() {
        $('.family_site ul').hide();
    });
    $('.vod_select_box button').click(function(e) {
        e.preventDefault(); //버튼태그의 기본 역할(기능)을 초기화(없앰)
        $('.vod_select_box ul').show();
    });
    $('.btn_sitemap').click(function() {
        $('.sitemap').toggle();
    });
    $('main.ads .ads_list li').click(function() { //li를 클릭하면
        $('main.ads .vod_popup_box').show();  //박스가 보임
    });
    $('main.ads .vod_popup_box .vod_close').click(function() {
        $('main.ads .vod_popup_box').hide();
    }); 
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView :1, //모바일(480이하)
        spaceBetween :20,
        autoplay : {
            delay: 2000
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
});
}) //onload
