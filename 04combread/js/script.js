
$(document).ready(function(){

    $(".slider").bxSlider({
        controls:false 
    });

    $(".slider2").bxSlider({
        controls:false 
    });

    $(".ham").click(function(){
        var toggle = $(".ham").attr("class");

                if( toggle == "ham" ){
                    $(".ham").addClass("act");
                    // $(".myTopMenu").show();
                    $(".gnbm").animate({left:0},300);
                }else{
                    $(".ham").removeClass("act");                    
                    // $(".myTopMenu").hide();
                    $(".gnbm").animate({left:"-100%"},300);
                }

    });

});
