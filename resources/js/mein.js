$(document).ready(function(){
    //==============MOBILE MENU HEADER SECTION  START=================//
    $(".close-btn").on({
        mouseenter: function(){
            $(".close-btn").css("color", "red")
        },
        mouseleave: function(){
            $(this).css("color" ,"#333")
        }
    });
    //==============MOBILE MENU HEADER SECTION  END=================//
    //==============PORTFOLIO SECTION  START=================//
    var mixer = mixitup(".portfolio-item")
    //==============PORTFOLIO SECTION  END=================//
    //==============TESTIMONIAL SECTION  START=================//
    $(".testimonial").slick({

    });
    //==============TESTIMONIAL SECTION  END=================//
   //==============SITCKY MENU START=================//
   $("#slider_section").waypoint(function(direction){
    if(direction == "down"){
        $("nav").addClass("sticky");
    } else{
        $("nav").removeClass("sticky");
    };
});
   //==============SITCKY MENU END=================//  
   //=================CONTACT SECTION START========================//
   $(".uk-input, textarea").on({
    mouseenter: function(){
        $(this).css("color","#989898")
        $(this).css("background","#222327")
    },
    mouseleave: function(){
        $(this).css("color" , "white")
    }
});
   //=================CONTACT SECTION END========================//
});
//==================MOBILE RESPONSIVE ME START================//
function openNav(){
    document.getElementById("mobile_menu").style.width = "100%"
}

function closeNav(){
    document.getElementById("mobile_menu").style.width = "0%"
}
//==================MOBILE RESPONSIVE ME END================//
