$(function(){
  /*--------- show and hide the menu  ---*/
  $('.button').on("click", function(){
    if($('body').hasClass('nav_is_visible') == true){
     $('body').removeClass('nav_is_visible');
     $('.button').removeClass('close');
        }
    else{
     $('body').addClass('nav_is_visible');
     $('.button').addClass('close');
       }
   });
  
  $('body').addClass('home_is_visible');

    
 function removeClasses() {
  $(".menu ul li").each(function() {
    var custom_class = $(this).find('a').data('class');
  $('body').removeClass(custom_class);
  $('body').removeClass('nav_is_visible');
  $('.button').removeClass('close');
  });
}
  
  $('.menu a').on('click',function(e){
    e.preventDefault();
    removeClasses();
    var custom_class = $(this).data('class');
    $('body').addClass(custom_class);
  });
});