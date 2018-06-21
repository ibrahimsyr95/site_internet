
$(document).ready(function(){
    $(".moreinf").click(function(){
        $(".cache").show(1000);
        
        $(this).hide();
    });
     $(".lessinf").click(function(){
        $(".cache").hide(1000);
        
          $(".moreinf").show();
    });
    $("#flip1").click(function(){
       
        $("#panel1").slideToggle("slow");
        $("#panel2").hide(1000);
        $("#panel3").hide(1000); 
        $(".cache").hide();
        $(".moreinf").show();
        $(".image").show(1000);
        $(".image2").hide(1000);
        $(".image3").hide(1000);
         
       
           
    });
     $("#flip2").click(function(){
         
        $("#panel2").slideToggle("slow");
        $("#panel1").hide(1000);
        $("#panel3").hide(1000);
        $(".cache").hide();
        $(".moreinf").show();
        $(".image2").show(1000);
        $(".image").hide(1000);
        $(".image3").hide(1000);  
     
    });
      $("#flip3").click(function(){
         
        $("#panel3").slideToggle("slow");
        $("#panel1").hide(1000);
        $("#panel2").hide(1000);
        $(".cache").hide();
        $(".moreinf").show();
        $(".image3").show(1000);
        $(".image").hide(1000);
        $(".image2").hide(1000); 
          
    });
    $(".ici").click(function(){
         
        $(".one").toggleClass(".affiche");
        
    });
});
               
        $(document).ready(function(){
             $(".nuit").click(function(){
                    $(".modeJ").toggle();
                    $(".modeN").toggle(); 
                 $("*").toggleClass("modenuit1");
                    });
                    $(".nuit").hover(function(){
                     $(".modeJ").toggle();
                    $(".modeN").toggle(); $("*").toggleClass("modenuit1");
                     });
                 });
 $(".ici").click(function(){
         
        $(".one").slideToggle("slow");
         
     
    });