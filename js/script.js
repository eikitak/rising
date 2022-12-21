'use strict';
{

    // ハンバーガーメニュー
    $(".open-btn").click(function () {
        $(this).toggleClass('active');
        $("nav").toggleClass('nav-active');
        $("html, body").toggleClass('no-scroll')
    });

    $("nav a").click(function () {
        $(".open-btn").removeClass('active');
        $("nav").removeClass('nav-active');
        $("html, body").removeClass('no-scroll')
    });

    // ヘッダー表示・非表示
    $(function () {
        let position = 0;

        $(window).on('scroll', function () {
          if($(this).scrollTop() < position ) {
            $('header').removeClass('hide');
          }else if(position > 56) {
            $('header').addClass('hide');
          }
          position = $(this).scrollTop();
        });
      });

    //   タブメニュー
    $(function () {
        $('.tab').on('click', function (e) {
            e.preventDefault();

            $('.tab').each(function () {
                $(this).removeClass('tabactive');
            });
            $('.tabinner').each(function () {
                $(this).removeClass('inneractive');
            });

            $(this).addClass('tabactive');
            let innerclass = $(this).data('inst');
            $('#' + innerclass).addClass('inneractive');
        });
    });

}