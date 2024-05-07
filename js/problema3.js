function calcularPromedio(){
    var nombre = document.getElementById("txtNombre").value;
    var curso = document.getElementById("txtCurso").value;
    var nota1 = parseFloat(document.getElementById("txtNota1").value);
    var nota2 = parseFloat(document.getElementById("txtNota2").value);
    var nota3 = parseFloat(document.getElementById("txtNota3").value);
    var nota4 = parseFloat(document.getElementById("txtNota4").value);
    var nota5 = parseFloat(document.getElementById("txtNota5").value);
    var promedio = (nota1+nota2+nota3+nota4+nota5)/5;
    alert("Nombre: "+nombre+" Curso: "+curso+" Promedio: "+promedio);
}