
/* BOTÓN PARA CONOCER MÁS */
const btnConocer = document.getElementById("btnConocer");

btnConocer.addEventListener("click", function () {
    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
});

/* BOTÓN PARA MOSTRAR U OCULTAR INFORMACIÓN */
const btnMas = document.getElementById("btnMas");
const infoExtra = document.getElementById("infoExtra");

btnMas.addEventListener("click", function () {
    if (infoExtra.hidden) {
        infoExtra.hidden = false;
        btnMas.textContent = "Mostrar menos";
    } else {
        infoExtra.hidden = true;
        btnMas.textContent = "Mostrar más información";
    }
});

/* BOTÓN PARA VOLVER ARRIBA */
const btnArriba = document.getElementById("btnArriba");

btnArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


