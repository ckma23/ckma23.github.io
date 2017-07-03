/*var main = function() {
  var $cover_content = $(".cover-content");
  var $destination = $(".destination");
  $('#main_btn').on('click', function(){
    alert('Hello')
  });
  alert($cover_content);
  $(".cover-content").hide();
  $(".cover-content").fadeIn(500);
};
console.log($destination);
console.log($cover_content);

$(document).ready(main);*/
$(".cover-content").hide();
$(".cover-content").fadeIn(2500);
$(".main_toggle").hide();
$('#main_btn').on('click',function(){
  $(".main_toggle").toggle();
});
$('.navi_bar').hover(function(){
  $(this).toggleClass('active');
  //$(this).next.toggleClass('active');
});
$('.contact-btn').on('click',function(){
  $(this).toggleClass('.active_btn ');
});
