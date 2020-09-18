$(document).ready(
function(){
    "use strict";
    $("body").niceScroll({
        cursorcolor:"rgb(224, 134, 31)",
        cursorwidth:"16px"
        });
    
    
    $('.gear-check').click(
        function(){
            $('.color-option').toggle();
        }
    );
},

);
$(document).ready(
function(){
    // change theme color by click
    $('.color-option ul li').eq(0).css("backgroundColor","#F00");
    $('.color-option ul li').eq(1).css("backgroundColor","#e4cb61");
    $('.color-option ul li').eq(2).css("backgroundColor","#33A3FF");
    $('.color-option ul li').eq(3).css("backgroundColor","#E426d5");
    $('.color-option ul li').eq(4).css("backgroundColor","#66FF77");
}
  
);


$(document).ready(
function(){
    // change theme color by click
    $('.color-option ul li').click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
var scrollbutton = $('#top-scroll');
    $(window).scroll(function()
     {
        console.log($(this).scrollTop());
        if($(this).scrollTop()>=700){
            scrollbutton.show();
        }else{
            scrollbutton.hide();
        }
        scrollbutton.click(function(){
            $('html,body').animate({scrollTop: 0},100);
             
        });
        
    });
}
);

 


