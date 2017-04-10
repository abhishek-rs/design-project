$(document).ready(function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var $nav_bar = $(".navbar");
    var $nav_bar_topbar = $("#topbar li a");
    var $nav_bar_brand = $("#brand");
    var $how = $("#how");
    var $fixed = $(".fixed");
    var top = 60;
    var flag = false;
    var $intro = $('#intro');
    var $how_one = $('#how-one');
    var $how_two = $('#how-two');
    var $how_three = $('#how-three');


  $("#btn-how").click(function() {
      $('html, body').animate({
          scrollTop: $("#how").offset().top
      }, 1500);
  });

  $("#btn-about").click(function() {
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 1500);
  });

  $("#btn-started").click(function() {
      $('html, body').animate({
          scrollTop: $("#get-started").offset().top
      }, 1500);
  });

  $nav_bar_brand.click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1500);
  });

    $(window).scroll(function(event) {
            var y = $(this).scrollTop();
            if (y >= top) {
                $intro.css('top','0');
                $nav_bar.addClass('fixed');
                $nav_bar_topbar.addClass('fixedfont');
                
                $nav_bar_brand.addClass('fixedfont');
                
                $nav_bar.css('background-color', '#351C75');
                
                }

            else {
                $nav_bar.css('background-color', "");
                $nav_bar.removeClass('fixed');
                $nav_bar_topbar.removeClass('fixedfont');
                $nav_bar_brand.removeClass('fixedfont');
                
                $intro.css('top','-150px');
            }
            
            if(y > $how_one.offset().top - 250){
                $how_one.css('backgroundColor','#2E7D32');
                $how_one.html("<img src='./images/tick.png'/>");
                }

            else{
                $how_one.css('backgroundColor','#351C75');
                $how_one.html("1");
                //$how_one.animate({backgroundColor :'#351C75'});
            } 

            if(y > $how_two.offset().top - 250){
                $how_two.css('backgroundColor','#2E7D32');
                $how_two.html("<img src='./images/tick.png'/>");
                }

            else{
                $how_two.css('backgroundColor','#351C75');
                $how_two.html("2");
                //$how_one.animate({backgroundColor :'#351C75'});
            }

            if(y > $how_three.offset().top - 250){
                $how_three.css('backgroundColor','#2E7D32');
                $how_three.html("<img src='./images/tick.png'/>");
                }

            else{
                $how_three.css('backgroundColor','#351C75');
                $how_three.html("3");
                //$how_one.animate({backgroundColor :'#351C75'});
            }

    });
    
});
