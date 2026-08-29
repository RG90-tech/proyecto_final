const telefonoWhatsApp = "525518054338";

const mensajeWhatsApp =
    "Hola, quiero agendar mi evento con Sonido Breakbeats. Me gustaría recibir más información sobre los paquetes y disponibilidad.";

const botonAgendar = document.querySelector(".boton-agendar");

botonAgendar.addEventListener("click", function () {

    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    
    const urlWhatsApp =
        `https://wa.me/${telefonoWhatsApp}?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
    
});
