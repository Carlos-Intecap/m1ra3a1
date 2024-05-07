function hacerClic(){
    document.getElementById("eventoSeleccionado").innerHTML = "Selecciono parrafo con evento click";
}
function hacerDobleClic(){
    document.getElementById("eventoSeleccionado").innerHTML = "Selecciono parrafo con evento Doble click";
}
function moverMouse(){
    document.getElementById("eventoSeleccionado").innerHTML = "Selecciono parrafo con evento Mover Mouse";
}
function presionarBotonMouse(){
    alert("Presiono el clic izquierdo sobre el h2");
}
function soltarBotonMouse(){
    alert("Solto el boton del mouse en el h2");
}
function escribirAqui(esteElemento){
    esteElemento.innerHTML = "Esto se escribio al seleccionar este elemento";
}
function sumar(a,b,elemento){
    alert("La suma es: " + (a + b));
    elemento.innerHTML="La suma es: " + (a + b);
}
function presionarEnter(event, elemento){
    if(event.keyCode === 13){
        //Se ha presionado la tecla enter
    }
    alert("texto: " + elemento.value);
    /*if(event.key == "enter"){
        //Se ha presionado la tecla enter
    }
    alert("texto: " + elemento.value);*/
}