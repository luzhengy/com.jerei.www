$(function(){
  
    $(".item").on("mouseenter",function(){
         $(this).find(".zhezao").css({
            opacity:"0.9",
           transition:"0.3s",
            paddingTop:"60px"
         })
    })

    $(".item").on("mouseleave",function(){
         $(this).find(".zhezao").css({
            opacity:"0",
            paddingTop:"80px"
         })
    })
 
})