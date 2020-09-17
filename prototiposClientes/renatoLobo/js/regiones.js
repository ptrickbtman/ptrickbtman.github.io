$(window).on("load", function() {
    if (screen.width > 994) {
        ajustarImg1()
    } else {
        ajustarImg2()
    }
});

function ajustarImg1() {

    var as2 = document.getElementsByClassName('imgCatalogo')
    for (var i = 0; i < as2.length; i++) {
        var ancho2 = as2[i].width;
        var alto2 = as2[i].height;
        if (ancho2 > alto2) {
            as2[i].style.height = "100%";
            as2[i].style.opacity = "1";
        } else {
            as2[i].style.width = "100%";

            as2[i].style.opacity = "1";

        }
    }
}

function ajustarImg2() {
    var as2 = document.getElementsByClassName('imgCatalogo')
    for (var i = 0; i < as2.length; i++) {
        var ancho2 = as2[i].width;
        var alto2 = as2[i].height;
        if (ancho2 > alto2) {
            as2[i].style.width = "100%";
            as2[i].style.opacity = "1";
        } else {
            as2[i].style.height = "100%";

            as2[i].style.opacity = "1";
        }
    }
}

function modal(data) {
    modalRegion(data);

}

function cerrarModal() {
    $(".modalRegion").remove();
}

function modalRegion(data) {
    var cont = '<div class="modalRegion"><div class="contModalRegion"><p class="cerrarModal" onclick="cerrarModal()">X</p></div> </div>';
    $("body").append(cont);
    agregarContModal(data);
}

function agregarContModal(data) {

    var titulo = "SERVICIOS DE SISTEMAS SANITARIOS Y MUNICIPALES";
    var subTitulo = [];
    var classeRight = "";
    subTitulo[0] = "Limpieza preventiva de ductos con camiones combinados.";
    subTitulo[1] = "Desobtruccion de tuberías y ductos.";
    subTitulo[2] = "Limpieza de plantas de tratamiento.";
    subTitulo[3] = "Limpieza de sumideros y colectores de aguas lluvias.";
    subTitulo[4] = "Limpieza de estanques, fosas y pozos.";
    subTitulo[5] = "Teleinspeccion de tuberías.";

    if (data == 1) {
        classeRight = "rightModal1";
    } else if (data == 2) {
        classeRight = "rightModal2";
    } else if (data == 3) {
        classeRight = "rightModal3";
    }


    var estructuraModal1 = "<div class='leftModal'><div class='contModalInfo'><p class='tituloInfoModal'> " + titulo + "</p><p class='subtitulo'>" + subTitulo[0] + "</p><p class='subtitulo'>" + subTitulo[1] + "</p><p class='subtitulo'>" + subTitulo[2] + "</p><p class='subtitulo'>" + subTitulo[3] + "</p><p class='subtitulo'>" + subTitulo[4] + "</p><p class='subtitulo'>" + subTitulo[5] + "</p> </div></div>"
    var estructuraModal2 = "<div class='rightModal " + classeRight + "'></div>"

    $(".contModalRegion").append(estructuraModal1);
    $(".contModalRegion").append(estructuraModal2);

    $(".leftModal").css("opacity", "1");
    $(".rightModal").css("opacity", "1");


}