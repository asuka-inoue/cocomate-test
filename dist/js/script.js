
jQuery(function ($) {
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  //ハンバーガーメニュー
  $(".js-hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".js-hamburger-nav").addClass("is-active");
    } else {
      $(".js-hamburger-nav").removeClass("is-active");
    }
  });
  $(".js-link").click(function () {
    $(".js-hamburger-nav,.js-hamburger").removeClass("is-active");
  });

  
  setTimeout(function() {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
        document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 3000);

});
