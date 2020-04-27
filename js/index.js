$(function  (){
    // 定义首页顶部导航栏中 select框鼠标移入移出效果
    $(".topnav-select").on("mouseenter",function(){
      
        $(this).stop().animate({
            width:"164px"
        },400)
    })
    $(".topnav-select").on("mouseleave",function(){
        $(this).stop().animate({
            width:"63px"
        },400)
    })
    //  当鼠标移动到导航栏上的每个li时 li里的下拉列表显示 移出隐藏
    $(".topnav-right-ul>li").stop().on("mouseenter",function(){
      $(this).find("ul").show().stop().animate({
        opacity: 1,
        top:"75px",
        zIndex:3,
        display:"block"
       },300)
    })
    $(".topnav-right-ul>li").stop().on("mouseleave",function(){
        var flag=false
        $(this).find(".selectDown").on("mouseenter",function(){
                   flag=true
              })
        if(flag==true)
        {
            $(this).find(".selectDown").stop().show().css({
                opacity: 1,
                top:"75px",
                zIndex:3,
            })
        }
        else{
            $(this).find(".selectDown").stop().hide().css({
                opacity: 0,
                top:"94px",
                zIndex:3,
            })
            flag=false
        }
      
      })
  
    // // 当鼠标移动到里下拉列表里的li时 样式发生改变
    $(".selectDown li").hover(function(){
        $(this).css({
            backgroundColor:"rgb(249,249,249)"
        })
        $(this).find("a").css({
            color:"#ff6600",
        })
    },function(){
        $(this).css({
            backgroundColor:"#fff"
        })
        $(this).find("a").css({
            color:"#555555",
        })
    })
    // 给页面添加鼠标滚动事件 点击返回顶部按钮 页面滚动到最上面
    $(document).on("scroll",function(){
         $(".gobackTop").on("click",function(){
               $(document).scrollTop(0)
         })
    })
    // 给页面添加鼠标滚动事件当鼠标滚到ipart01栏时 ipaart01栏显示 
    // var ipart01top=$(".ipart01").offset().top
    $(document).on("scroll",function(){
       
         if($(document).scrollTop()>=47)
         {
            $(".ipart01 >div").css({
                transform: "rotateX(0deg)",
               opacity:1,
               transition:  "3s",
            })
         }
        if($(document).scrollTop()<47){
            $(".ipart01 >div").css({
                transform: "rotateX(-90deg)",
                opacity:0,
            })
         }
    })
    // 給ipart02 里每个item 添加自定义属性url 
    var data=["gcjx","gfjg","hymc","ytny","zhjy","swyy"]

    $.each(data,function(i,n){
        $('.ipart04-mainnav .item').eq(i).attr("url",n)
    })
//    给ipart02里每个item添加鼠标移入事件
$(".two .innerBox-title").css({
    marginTop: "0px"
})
$(".two p").css({
    marginTop: "0px"
})
$(".two .inner-more").css({
    opacity:1,
    bottom:"70px"
})
$(".two .inner-more").show()
$('.ipart04-mainnav  .item').on("mouseenter",function(){
    console.log($(this).attr("url"))
    // 鼠标移入ch盒子隐藏 增大item盒子的宽度
        $(this).find(".ch").hide()
        $(this).siblings().find('.ch').show()
        $(this).css({width:"32.42%"}).siblings().css({width:"13.51%"})
        $(this).find(".innerBox").show()
        $(this).find(".inner-more").show()
        $(this).find(".innerBox-title").stop().animate({
            marginTop:"0px"
        },500)
        $(this).find("p").stop().animate({
            marginTop:"0px"
        },700)
        $(this).find(".inner-more").stop().animate({
            opacity:1,
            bottom:"70px"
        },1000)
        $(this).siblings().stop().find( ".innerBox").hide()
    // 当前移入的item盒子对应的背景大图显示 
    var url=$(this).attr("url")
    $(".ipart04-mainnav").css({
         backgroundImage:`url(../img/index-page-main/ipart02/${url}.jpg)`
    })
})
$('.ipart04-mainnav .item').on("mouseleave",function(){
    $(this).siblings().on("mouseenter",function(){
        $(this).siblings().find(".innerBox-title").stop().css({
            marginTop:"200px"
        })
        $(this).siblings().find("p").stop().css({
            marginTop:"100px"
        })
        $(this).siblings().find(".inner-more").stop().css({
            bottom:"90px",
            opacity:"0"
        },1000)
        
    })
    $(".two .innerBox-title").css({
        marginTop: "200px"
    })
    $(".two p").css({
        marginTop: "125px"
    })
    $(".two .inner-more").css({
        opacity:1,
        bottom:"90px"
    })
     
})

// 给ipart05栏添加数字变化效果 
// var dataNum=["19","7","400","3000","70"]
// $(".ipart05").on("mouseenter",function(){
//     var num=0
//   $(".num .num1").html(num)
//   $.each(dataNum,function(i,n))
//      $(".num .num1").each(function(i,n){
//          console.log(n)
//           if($(this).html()<n)
//           {
//               num==n
// //           }
//      })
  
// })
})
