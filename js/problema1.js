function datos(){
    var carnet = document.getElementById("txtCarnet").value;
    var nombre = document.getElementById("txtNombre").value;
    alert("Carnet: " + carnet + " Nombre: " + nombre);
    console.log("Carnet: " + carnet + " Nombre: " + nombre);
    document.getElementById("datos").innerHTML = "Carnet: " + carnet + " Nombre: " + nombre;
}