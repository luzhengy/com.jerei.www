$(function () {
    //  点击maintopnav 上的三个li 实现top切换
    $(".mainnav-top .qb").on("click", function () {
        $(".mainnav-body .gsxw").css({
            display: "block",
            transition: "0.3s"
        })
        $(".mainnav-body .znzt").css({
            display: "none"
        })
        $(".mainnav-body").css({
            height: "1699px"
        }).find(".mainnav-bottom").css({
            display: "block"
        })
    })
    $(".mainnav-top .topgsxw").on("click", function () {
        $(".mainnav-body .gsxw").css({
            display: "block",
            transition: "0.3s"
        })
        $(".mainnav-body .znzt").css({
            display: "none"
        })
        $(".mainnav-body").css({
            height: "1699px"
        }).find(".mainnav-bottom").css({
            display: "block"
        })

    })
    $(".mainnav-top .topznzt").on("click", function () {
        $(".mainnav-body .znzt").css({
            display: "block",
            transition: "0.3s"
        })
        $(".mainnav-body .gsxw").css({
            display: "none"
        })
        $(".mainnav-body").css({
            height: "1615px"
        }).find(".mainnav-bottom").css({
            display: "none"
        })


    })
})