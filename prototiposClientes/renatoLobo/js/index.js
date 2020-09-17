function slides(data) {
    if (data == 1) {
        $(".contSlide1").addClass("contSlideActive")
        $(".contSlide2").removeClass("contSlideActive")
        $(".contSlide3").removeClass("contSlideActive")


        $(".circle1").addClass("circleActive")
        $(".circle2").removeClass("circleActive")
        $(".circle3").removeClass("circleActive")

        $(".textSlide1").addClass("textSlideActive")
        $(".textSlide2").removeClass("textSlideActive")
        $(".textSlide3").removeClass("textSlideActive")

    } else if (data == 2) {
        $(".contSlide2").addClass("contSlideActive")
        $(".contSlide1").removeClass("contSlideActive")
        $(".contSlide3").removeClass("contSlideActive")

        $(".circle2").addClass("circleActive")
        $(".circle1").removeClass("circleActive")
        $(".circle3").removeClass("circleActive")

        $(".textSlide2").addClass("textSlideActive")
        $(".textSlide3").removeClass("textSlideActive")
        $(".textSlide1").removeClass("textSlideActive")

    } else if (data == 3) {
        $(".contSlide3").addClass("contSlideActive")
        $(".contSlide1").removeClass("contSlideActive")
        $(".contSlide2").removeClass("contSlideActive")

        $(".circle3").addClass("circleActive")
        $(".circle2").removeClass("circleActive")
        $(".circle1").removeClass("circleActive")

        $(".textSlide3").addClass("textSlideActive")
        $(".textSlide2").removeClass("textSlideActive")
        $(".textSlide1").removeClass("textSlideActive")

    }

}