/*
Prácticas: Mostrar ingresos de usuario 2
Basandote en el código HTML proporcionado, redactar una función (mostrarTexto()) 
que muestre el siguiente texto, utilizando el contenido del input 
(inputTexto) en el encabezado h1 (titulo): "Mi artista favorito es Luis Miguel"
*/

function mostrarTexto(){
    let contentText = document.getElementById("inputTexto").value;
    document.getElementById("titulo").textContent = "Mi artista favorito es " + contentText;
}