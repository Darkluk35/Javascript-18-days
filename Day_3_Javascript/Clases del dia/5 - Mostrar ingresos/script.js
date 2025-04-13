function seeName(){
    let elementname = document.getElementById("nameUser");
    let elementText = document.getElementById("output");
    let mensaje = "Tu te llamas " + elementname.value;
    elementText.textContent= mensaje;
    
}