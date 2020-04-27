$(function(){
        // 给页面添加鼠标滚动事件 点击返回顶部按钮 页面滚动到最上面
        $(document).on("scroll",function(){
            $(".gobackTop").on("click",function(){
                  $(document).scrollTop(0)
            })
       })
    // 给banner轮播图下的两个li添加鼠标点击事件 鼠标点击每个li 轮播图里的图片开始切换
     $(".before li:first-child").on("click",function(){
           $(".banner-img li").css({
               transform:" translateX(-1920px)",
               transition:"1s"
           })
           $(this).css({
            backgroundColor:"#ff6600"
         }).siblings().css({backgroundColor:"#ccc" })
     })
     $(".before").find("li").eq(1).on("click",function(){
        $(".banner-img li").css({
            transform:" translateX(0px)",
            transition:"1s"
        })
        $(this).css({
             backgroundColor:"#ff6600"
        }).siblings().css({backgroundColor:"#ccc" })
  })
    //  鼠标移动到左右两个箭头上时箭头箭头向上移动 移出时 向下移动
     $(".banner div").hover(function(){
         $(this).css({
            backgroundPositionY: "-96px",
            transition: "0.5s"
         })
     },
     function(){
        $(this).css({
            backgroundPositionY: "0px",
            transition: "0.5s"
         })
     })
    //  鼠标点击左边的箭头轮播图统一向左移动 轮播图下面对应的圆圈颜色变化
    $(".arr-left").on("click",function(){
        $(".banner-img li").css({
            transform:" translateX(-1920px)",
            transition:"1s"
        })
        $(".before").find("li").eq(1).css({
            backgroundColor:"#ff6600"
         }).siblings().css({backgroundColor:"#ccc" })
    })
    $(".arr-right").on("click",function(){
        $(".banner-img li").css({
            transform:" translateX(0px)",
            transition:"1s"
        })
        $(".before ").find("li").eq(0).css({
            backgroundColor:"#ff6600"
         }).siblings().css({backgroundColor:"#ccc" })
    })

    // 给main-body里的info盒子添加鼠标移入事件
     $(".main-body .info").on("mouseenter",function(){
          $(this).prev().find("img").css({
            transform: "scale(1.1)",
            transition:"0.4s"
          })
          $(this).find(".more").css({
            backgroundPositionX:"90px",
            backgroundColor: "#fff",
            transition: "0.5s",
          })
     })
     $(".main-body .info").on("mouseleave",function(){
        $(this).prev().find("img").css({
          transform: "scale(1)",
          transition:"0.4s"
        })
        $(this).find(".more").css({
            backgroundPositionX:"45px",
            backgroundColor: "transparent",
            transition: "0.5s",
          })
   })
//   给中间的两个盒子添加特殊样式
$(".main-body .right").on("mouseenter",function(){
    $(this).next().find("img").css({
      transform: "scale(1.1)",
      transition:"0.4s"
    })
    $(this).prev().find("img").css({
        transform: "scale(1)",
        transition:"0.4s"
      })
})
$(".main-body .right").on("mouseleave",function(){
  $(this).next().find("img").css({
    transform: "scale(1)",
    transition:"0.4s"
  })
})
//  给每个img添加鼠标移入事件
$(".main-body a").on("mouseenter",function(){
     $(this).find("img").css({
         transform: "scale(1.1)",
         transition:"0.4s"
       })
      $(this).next().find(".more").css({
          backgroundPositionX:"90px",
         backgroundColor: "#fff",
         transition: "0.5s",
      })
})
$(".main-body a").on("mouseleave",function(){
    $(this).find("img").css({
        transform: "scale(1.0)",
        transition:"0.4s"
      })
     $(this).next().find(".more").css({
         backgroundPositionX:"45px",
        backgroundColor: "transparent",
        transition: "0.5s",
     })
})
$(".main-body .img-move").on("mouseenter",function(){
    $(this).find("img").css({
        transform: "scale(1.1)",
        transition:"0.4s"
      })
     $(this).prev().find(".more").css({
         backgroundPositionX:"90px",
        backgroundColor: "#fff",
        transition: "0.5s",
     })
     $(this).next().find(".more").css({
        backgroundPositionX:"45px",
        backgroundColor: "transparent",
     })
})
$(".main-body .img-move").on("mouseleave",function(){
   $(this).find("img").css({
       transform: "scale(1.0)",
       transition:"0.4s"
     })
    $(this).prev().find(".more").css({
        backgroundPositionX:"45px",
       backgroundColor: "transparent",
       transition: "0.5s",
    })
    $(this).next().find(".more").css({
        backgroundPositionX:"45px",
        backgroundColor: "transparent",
    })
})
// 添加鼠标滚动事件
$(document).on("scroll",function(){
      console.log($(document).scrollTop())
      if($(document).scrollTop()>=1547)
      {
          $(".information").stop().animate({
              opacity:"1",
             marginTop:"92px"
          },300)
      }
      else{
        $(".information").stop().css({
            opacity:"0",
            marginTop:"132px"
        })
      }
})
})