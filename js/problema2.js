function calcularHipotenusa(){
    var catetoA = parseFloat(document.getElementById("txtCatetoA").value);
    var catetoB = parseFloat(document.getElementById("txtCatetoB").value);
    var hipotenusa = Math.sqrt((catetoA*catetoA) + (catetoB*catetoB));
    document.getElementById("resultado").innerHTML = "La hipotenusa es : " + hipotenusa;
}