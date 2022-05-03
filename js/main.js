// 첫 페이지 스크롤 시 100vh 내려감
// 첫 페이지에서 휠 감지로 100vh 내려감, 혹은 버튼을 누르면 100vh 내려감

$('body').scroll(function () {
  var st = $(this).scrollTop();
  
  if (st > 0) {
    console.log(1)
    console.log('hi')
    $('.global-header').addClass('is-scroll')
  } else {
    $('.global-header').removeClass('is-scroll')
  }
})

window.addEventListener('scroll', function() {
  console.log(1)
  $('.global-header').addClass('is-scroll')
})
// $(window).scroll(function () {
//   var st = $(this).scrollTop();
//   var $header = $('.global-header');
//   if (st > 70) {
//     $header.addClass('is-scroll');
//   } else {
//     $header.removeClass('is-scroll');
//   }
// })