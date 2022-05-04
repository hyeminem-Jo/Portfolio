// 첫 페이지 스크롤 시 100vh 내려감
// 첫 페이지에서 휠 감지로 100vh 내려감, 혹은 버튼을 누르면 100vh 내려감

var $about = $('.main-about').offset().top;

// 스크롤 시 header 변경, 스크롤 버튼 사라짐
$(window).scroll(function () {
  var st = $(this).scrollTop();

  if (st > $about - 70) {
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
$('.menu').click(function() {
  $('.trigger, .gnb').toggleClass('is-open')
  $('.overlay').toggleClass('is-active')
})

// page-down 버튼 클릭 시 아래로 스크롤
$('.page-down').click(function () {
  $('html, body').animate({scrollTop: $about}, 1000);
})
