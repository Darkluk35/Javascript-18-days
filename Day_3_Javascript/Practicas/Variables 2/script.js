/*
Declare dos variables FUERA de la funcion test(). 
Las mismas se deben llamar fruta y precio, y se le deben asignar 
los valores "manzanas" y "100" respectivamente.

Dentro de la funcion test() se debe mostrar en un alert el siguiente 
mensaje utilizando las variables: "Las manzanas cuestan $100".
*/
let fruta = "manzanas";
let precio = 100;

function test(){
    alert("Las " + fruta + " cuestan $" + precio);
}

test();