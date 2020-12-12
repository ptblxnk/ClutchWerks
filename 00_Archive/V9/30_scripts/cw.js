// <!-- NAVBAR SCROLL -->

$(function(){
    $(document).scroll(function(){

    var $nav = $("#mainNavbar");
    var $social = $(".fa");
    var $nBrand = $(".nav-link");
    var $logo = $(".logo");
  
    // var $burger = $(".navbar-light");
    

    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $social.toggleClass("logo-scroll", $(this).scrollTop() > $nav.height());
    $nBrand.toggleClass("logo-scroll", $(this).scrollTop() > $nav.height());
    $logo.toggleClass("logo-display", $(this).scrollTop() > $nav.height());
    $logo2.toggleClass("logo2-display", $(this).scrollTop() > $nav.height());         
    // $burger.removeClass("navbar-light", $(this).scrollTop() > $nav.height());
    });
});


var $mobileSocial = $(".mobile-media");
var $buttonLogo = $(".navbar-toggler")

$buttonLogo.click(function(){
    $mobileSocial.show();
});


// <!-- NAVBAR CLICK -->


var $tix = $(".a2c");
var $nBrand = $(".nav-link");

$tix.click(function(){
    alert("ADDED TO CART!");
});

$nBrand.click(function(){
    alert("THIS PAGE IS CURRENTLY UNAVAILABLE!");
});



// <!-- MOUSEOVER/CLICK FOR CARS -->



$(document).ready(function(){
    $(".container-2").mouseover(function(){
        $(".car1-lip").addClass("full").removeClass("close");
    });

    $(".container-2").mouseout(function(){
        $(".car1-lip").addClass("close").removeClass("full").removeClass("fuller");
        $(".column4").show();

    });
    $(".container-3").mouseover(function(){
        $(".car1-lip-2").addClass("full-2").removeClass("close");
    });

    $(".container-3").mouseout(function(){
        $(".car1-lip-2").addClass("close").removeClass("full-2").removeClass("fuller-2");
        $(".column6").show();

    });
});

// _____FOR THE CLICK_____
    
$(document).ready(function(){
    $(".container-2").click(function(){
        $(".car1-lip").toggleClass("fuller");
        $(".column4").hide();  
    });
});  

$(document).ready(function(){
    $(".container-3").click(function(){
        $(".car1-lip-2").toggleClass("fuller-2");
        $(".column6").hide();  
    });
});  

