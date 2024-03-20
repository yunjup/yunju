$(function() {
    var $menu = $('#header ul li'),
        $contents = $('#section1, #section2, #section3, #section4')

    $menu.click(function(x) {
        x.preventDefault();
        var idx = $(this).index();
        var section = $contents.eq(idx);
        var sectionDistance = section.offset().top;

        $('html,body').stop().animate({scrollTop: sectionDistance}, function () {
            // 해당 섹션에 도달했을 때 폰트 굵기 변경
            setFontWeight(idx);
        });
    });

    function setFontWeight(idx) {
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
    }

    $(window).scroll(function() {
        // 스크롤 이벤트에서 현재 화면에 보이는 섹션에 도달했을 때 폰트 굵기 변경
        var currentScrollTop = $(window).scrollTop();
    
        $contents.each(function(index, element) {
            var sectionTop = $(element).offset().top;
            var sectionBottom = sectionTop + $(element).outerHeight();
    
            // #section4에서 높이가 300px 이하일 때도 감지되도록 수정
            var offset = (index === 3) ? 300 : 0;
    
            if (currentScrollTop >= sectionTop - offset && currentScrollTop < sectionBottom) {
                setFontWeight(index);
            }
        });
    });
  

    $(".menu > a").on("click", function(e) {
        e.preventDefault(); // 기본 클릭 이벤트 제거

        const tabId = $(this).index(); // 선택한 탭의 인덱스 가져오기

        $(".menu-cont > div").hide(); // 모든 탭 내용 숨김
        $(".menu-cont > div").eq(tabId).show(); // 선택한 탭의 내용만 보여줌

        $(".menu > a").removeClass("active"); // 모든 탭의 active 클래스 제거
        $(this).addClass("active"); // 선택한 탭에 active 클래스 추가
    });

    $(".menu > a:first-child").trigger("click"); // 초기에 첫 번째 탭을 보여주기 위해 첫 번째 탭 클릭 이벤트를 강제로 발생

    /**/ 
    $('.posterthumb').click(function(){
        $('#poster').show();
        $('.modal').show();
    });
    $('.brandthumb').click(function(){
        $('#brand').show();
        $('.modal').show();
    });
    $('.modal').click(function(){
        $('.portfolio').hide();
        $('.modal').hide();
    });


});