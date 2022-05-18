// 첫 페이지 스크롤 시 100vh 내려감

var disableUpdating = false;

// gnb 메뉴 버튼 클릭 시 해당 페이지로 스크롤 이동
var pos1 = 0;
var pos2 = Math.floor($('.main-about').offset().top)
var pos3 = Math.floor($('.main-skill').offset().top)
var pos4 = Math.floor($('.main-portfolio').offset().top)
var pos5 = Math.floor($('.main-contact').offset().top)

var pos = [pos1, pos2, pos3, pos4, pos5]

$(window).resize(function () {
  pos1 = 0;
  pos2 = Math.floor($('.main-about').offset().top)
  pos3 = Math.floor($('.main-skill').offset().top)
  pos4 = Math.floor($('.main-portfolio').offset().top)
  pos5 = Math.floor($('.main-contact').offset().top)

  pos = [pos1, pos2, pos3, pos4, pos5]
})

$('.gnb-item').click(function () {
  disableUpdating = true;
  var num = $(this).attr('data-num');
  num -= 1;
  $("html, body").stop().animate({
    scrollTop: pos[num]
  }, 1000);
  setTimeout(() => {
    disableUpdating = false;
  }, 1000)
})

// 스크롤 시 header gnb 메뉴 버튼 활성화
function isActive(num) {
  if (!disableUpdating) {
    $(`.gnb-item:nth-child(${num})`).addClass('is-active')
    $('.gnb-item').not(`.gnb-item:nth-child(${num})`).removeClass('is-active')
  }
}

$(window).scroll(function () {
  var st = $(this).scrollTop();
  if (st >= pos1) {
    isActive(1)
  }
  if (st >= pos2 - 100) {
    isActive(2)
  }
  if (st >= pos3) {
    isActive(3)
  }
  if (st >= pos4) {
    isActive(4)
  }
  if (st >= pos5) {
    isActive(5)
  }
})


// 스크롤 시 header 스타일 변경
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

// 새로고침시 페이지 위치에 따라 header 스타일 적용
if ($(window).scrollTop() >= pos2) {
  $("global-header").addClass('is-scroll');
}

// .main-visuall 배경 parallax 효과
gsap.utils.toArray('.background').forEach((background, i) => {
  if (i) {
    gsap.to(background, {
      backgroundPosition: `50% ${-innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: background,
        scrub: true,
      },
    });
  } else {
    gsap.to(background, {
      backgroundPosition: `50% ${-innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: background,
        // start: "top top", 
        end: "bottom top",
        scrub: true
      }
    });
  }
})

// 모바일 menu 버튼 클릭 시 gnb 등장
$('.menu').click(function () {
  $('.trigger, .gnb').toggleClass('is-open')
  $('.global-header + .overlay').toggleClass('is-active')
})

$('.global-header + .overlay').click(function () {
  $('.trigger, .gnb').removeClass('is-open')
  $(this).removeClass('is-active')
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

// 창 폭에 따른 textarea row 수 조절
if (window.innerWidth <= 375) {
  $('.contact-form textarea').attr("rows", "5")
} else if (window.innerWidth > 375) {
  $('.contact-form textarea').attr("rows", "10")
}

$(window).resize(function () {
  if (window.innerWidth <= 375) {
    $('.contact-form textarea').attr("rows", "5")
  } else if (window.innerWidth > 375) {
    $('.contact-form textarea').attr("rows", "10")
  }
})