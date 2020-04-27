$(function(){
     $(".ipart02 .item").eq(0).on("mouseenter",function(){
         $(this).find(".more").stop().animate({
            "backgroundPositionX": "0px",
            "backgroundColor":"#ff6600",
         },200)
        //  $("this").find(".more").css({
        //     backgroundColor:"#ff6600",
        //  })
     })
     $(".ipart02 .item").eq(0).on("mouseleave",function(){
        $(this).find(".more").stop().animate({
            backgroundPositionX: "-48px",
         },200)
        //  $(this).find(".more").css({
        //     backgroundColor:"transparent",
        //  })
    })  
    $(".ipart02 .item").eq(1).on("mouseenter",function(){
        $(this).find(".more").stop().animate({
           backgroundPositionY: "-182px",
           
        },200)
        // $(this).css({
        //     backgroundColor:"#ff6600",
        // })
    })
    $(".ipart02 .item").eq(1).on("mouseleave",function(){
       $(this).find(".more").stop().animate({
           backgroundPositionY: "-137px",
        },200)
        // $(this).find(".more").css({
        //     backgroundColor:"transparent",
        // })
   }) 
   $(".more1").on("mouseenter",function(){
       $(this).css({
        backgroundColor:"#ff6600",
       })
   })
})
