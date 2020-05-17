$(window).ready(function() {
    loading();

    setTimeout(function() {
        convertToMenu()
    }, 2800);
});

function loading() {
    var load = document.getElementsByClassName("loading")
    setTimeout(function() { load[0].style.opacity = "0"; }, 1000)
    setTimeout(function() { $(".loading").remove(".loading") }, 2000);
}

function convertToMenu() {
    $(".subCover").css("opacity", "0");
    $(".tittle").css({
        "letter-spacing": "-2px",
        "font-size": "25px"
    })

    setTimeout(function() {
        $(".cover").css({
            "position": "fixed",
            "z-index": "997",
            "height": "90px",

        })

        var titulo = document.getElementsByClassName("tittleCont");
        var delay = 0.1;
        for (var i = 0; i <= titulo.length; i++) {
            titulo[i].style.transitionDelay = delay + "s";
            titulo[i].style.opacity = "1";
            delay += 0.1;
        }
    }, 1000)

}


function ir(valor) {
    if (valor == 2) {
        location.href = "https://www.instagram.com/ptrick_btman/";
    } else if (valor == 0) {
        location.href = "https://www.facebook.com/byronxdxd";
    } else if (valor == 1) {
        location.href = "https://github.com/ptrickbtman";
    }
}