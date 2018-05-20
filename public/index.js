$(document).ready(function() {
     $('.nav-icon').on('click', function() {

          $('.inner-wrapper').toggleClass('active')
          $('header .responsive-nav ul').toggleClass('open')

     });

     var win = $(window); //this = window
     if (win.width() >= 481 || win.width() <= 790){
          console.log('gotiiiiiit');
          $('.side-bar').addClass('active');
          $('.search-area').addClass('active');
          $('.content-area-wrap').addClass('active');
          // $('.date-wrap').removeClass('active');
     }

     if (win.width() > 790){
          $('.side-bar').removeClass('active');
          $('.search-area').removeClass('active');
          $('.content-area-wrap').removeClass('active');
          // $('.date-wrap').removeClass('active');
     }
});



$(window).on('resize', function(){
     // e.preventDefault();
     var win = $(this); //this = window
     if (win.width() >= 481 || win.width() <= 790){
          console.log('gotiiiiiit');
          $('.side-bar').addClass('active');
          $('.search-area').addClass('active');
          $('.content-area-wrap').addClass('active');
          // $('.date-wrap').removeClass('active');
     }

     if (win.width() > 790){
          $('.side-bar').removeClass('active');
          $('.search-area').removeClass('active');
          $('.content-area-wrap').removeClass('active');
          // $('.date-wrap').removeClass('active');
     }

})

// $('.slide-detect').hover(
//      function() {
//                $('.slide-btn').addClass('active');
//
//      }
// )
//
// $('.slide-btn').click(function() {
//      $('.side-bar').removeClass('active');
// })

$('#calendar').click(function() {
     console.log('sfv')
     $('.date-wrap').toggleClass('active');
});
