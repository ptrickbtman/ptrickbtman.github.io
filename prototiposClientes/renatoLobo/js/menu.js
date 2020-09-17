$(window).on("load", function() {
    load()

});


function load() {
    $(".load").css("opacity", "0");
    setTimeout(function() {
        $(".load").remove();
    }, 400)
}


$(".hamburger").on("click", function() {

    $(".stick1").toggleClass("stick1On")
    $(".stick2").toggleClass("stick2On")
    $(".stick3").toggleClass("stick3On")
    $(".items").toggleClass("itemsOn");
    $(".contItem").toggleClass("contItemOn");

});


$(".itemSe").hover(
    function() {
        $(".itemsServicios").addClass("itemsServiciosOn")
    },
    function() {
        $(".itemsServicios").removeClass("itemsServiciosOn");
    }
);


function ir(data) {
    if (data == 1) {
        location.href = "http://127.0.0.1:5500/index.html";
    } else if (data == 2) {
        location.href = "http://127.0.0.1:5500/quienesSomos.html";
    } else if (data == 3) {
        location.href = "http://127.0.0.1:5500/cobertura.html";
    } else if (data == 4) {
        location.href = "http://127.0.0.1:5500/contacto.html";
    } else if (data == 5) {
        location.href = "http://127.0.0.1:5500/servicios.html";
    }
}