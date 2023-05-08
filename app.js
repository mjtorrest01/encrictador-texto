// Funcion de Encriptar

function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let buscar = document.getElementById("buscar");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        buscar.src ="./img/encriptado.png";
    } else {
        buscar.src = "./img/buscar.png";
        tituloMensaje.textContent = "Debes ingresar algún texto";
        parrafo.textContent = "";
    }
} 

// Funcion de Desencriptar

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let buscar = document.getElementById("buscar");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        buscar.src ="./img/desencriptado.png";
    } else {
        buscar.src = "./img/buscar.png";
        tituloMensaje.textContent = "Debes ingresar algún texto";
        parrafo.textContent = "";
    }
}