let elementoSeg = document.getElementById("tiempoElegido")
let elementoTextoAlarma = document.getElementById("textoAlarma");

function comenzarTiempo(){
    setTimeout(tiempoCumplido, 1000 * elementoSeg.value);
}

function tiempoCumplido(){
    elementoTextoAlarma.textContent = "Encendido";
    elementoTextoAlarma.style.color = "green";
}