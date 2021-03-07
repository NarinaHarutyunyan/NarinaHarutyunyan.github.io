$(function(){
  $('.team_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $("#progress").progressBar({
    width: 500,
    height: 20,
    percent: 17,
    showPercent: true,
    split: 1
   });

})
$(function(){
  $('.test_slide').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $("#progress").progressBar({
    width: 500,
    height: 20,
    percent: 17,
    showPercent: true,
    split: 1
   });

})
$(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  merge:true,
  responsive:{
      678:{
          mergeFit:true
      },
      1000:{
          mergeFit:false
      }
  }
});

