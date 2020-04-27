$(function(){
    // 设置鼠标移动到每个i上的效果
    $('li').hover(function(){
        console.log(true)
           $(this).find("i").stop().animate({
                backgroundPositionX:"0px",
                
           },200)
    },function(){
        $(this).find("i").stop().animate({
            backgroundPositionX:"-15px",
       },200)
    })
    // 设置鼠标移动到每个img图片上的效果
    var  data=["szsj","szzg","xnxs","szdmt","zhzx","qyyxgl","ydszyx","xyswz","qcds"]
    $.each(data,function(i,n){
         $(".main-nav img").eq(i).attr("name",n)
    })
    var  data1=["szsj","szzg","xnxs","szdmt","cywb","zhzx","qyyxgl","ydszyx","xyswz","qcds"]
    $.each(data1,function(i,n){
        $(".main-nav .item").eq(i).attr("name",n)
   })
    $(".main-nav img").on("mouseenter",function(){
        $(this).css({
            transform:"scale(1.1)",
            transition:"0.3s"
         })
         var a=$(this).attr("name")
        
        $(".main-nav .item ").each(function(i){
            if(  $(this).attr("name")==a)
            {   
                $(this).find(".more").css({
                     backgroundPositionX:"0px",
                     backgroundColor:"#fff",
                     transition:"0.2s"
                })
            }
        })
    })
    $(".main-nav img").on("mouseleave",function(){
        $(this).css({
            transform:"scale(1)",
            transition:"0.3s"
         })
         var a=$(this).attr("name")
         $(".main-nav .item ").each(function(i){
            if(  $(this).attr("name")==a)
            {   
                $(this).find(".more").css({
                     backgroundPositionX:"-46px",
                     backgroundColor:"transparent",
                     transition:"0.2s"
                })
            }
        })
    })
    $(".main-nav .item").on("mouseenter",function(){
        $(this).find(".more").css({
            backgroundPositionX:"0px",
            backgroundColor:"#fff",
            transition:"0.2s"
       })
    
         var a=$(this).attr("name")
        $(".main-nav img ").each(function(i){
            if(  $(this).attr("name")==a)
            {   
                  $(this).css({
                transform:"scale(1.1)",
                transition:"0.3s"
               })
            }
        })
    })
    $(".main-nav  .item").on("mouseleave",function(){
        $(this).find(".more").css({
            backgroundPositionX:"-46px",
            backgroundColor:"transparent",
            transition:"0.2s"
       })
         var a=$(this).attr("name")
         $(".main-nav img ").each(function(i){
            if(  $(this).attr("name")==a)
            {   
                $(this).css({
                    transform:"scale(1)",
                    transition:"0.3s"
                 })
            }
        })
    })

})