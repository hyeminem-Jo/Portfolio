// 첫 페이지 스크롤 시 100vh 내려감
// 첫 페이지에서 휠 감지로 100vh 내려감

// 스크롤 시 header 변경, 스크롤 버튼 사라짐
$(window).scroll(function () {
  var st = $(this).scrollTop();
  var $about = $('.main-about').offset().top;

  if (st > $about - 100) {
    $('.global-header').addClass('is-scroll')
  } else {
    $('.global-header').removeClass('is-scroll')
  }

  if (st > 0) {
    $('.page-down').fadeOut();
  } else {
    $('.page-down').fadeIn();
  }
})

// .main-visuall 배경 parallax 효과
gsap.to(".background", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".background",
    scrub: true
  },
});

// 모바일 menu 버튼 클릭 시 gnb 등장
$('.menu').click(function () {
  $('.trigger, .gnb').toggleClass('is-open')
  $('.overlay').toggleClass('is-active')
})

// page-down 버튼 클릭 시 아래로 스크롤
var $about = $('.main-about').offset().top;
$('.page-down').click(function () {
  $('html, body').animate({
    scrollTop: ($about - 30)
  }, 1000);
})

// skill 탭 메뉴
$('.skill-item').click(function () {
  $(this).addClass('is-active');
  $(this).siblings().removeClass('is-active')
  var tab = $(this).attr('data-alt')
  $('#' + tab).addClass('is-active')
  $('#' + tab).siblings().removeClass('is-active')
})

// portfolio popup 창
$('.portfolio-item button').click(function () {
  var $item = $('.portfolio-item')
  var $selectedItem = $(this).closest('li')
  var index = $item.index($selectedItem)
  $('.popup-item').css('z-index', 0)
  $('.popup-item').eq(index).css('z-index', 1)
  
  $('.popup').addClass('is-active');
  $('.popup + .overlay').addClass('is-active')
})

$('.popup-item .btn-close, .popup + .overlay').click(function () {
  $('.popup').removeClass('is-active');
  $('.popup + .overlay').removeClass('is-active')
})
