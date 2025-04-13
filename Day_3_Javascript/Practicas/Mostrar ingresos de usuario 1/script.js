/*
Prácticas: Mostrar ingresos de usuario 1
Basandote en el código HTML proporcionado, redactar una función (mostrarTexto()) 
que muestre el contenido del input (inputTexto) en el encabezado h1 (titulo).
*/

function mostrarTexto(){
    let contentInput = document.getElementById("inputTexto").value;
    document.getElementById("titulo").textContent = contentInput;
}
