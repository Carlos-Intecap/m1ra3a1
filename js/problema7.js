function mostrarPares(){
    document.getElementById("resultado").innerHTML="";
    var num1 = parseFloat(document.getElementById("txtNumero1").value);
    var num2 = parseFloat(document.getElementById("txtNumero2").value);
    var mayor, menor, texto = "";
    if(num1>num2){
        mayor=num1;
        menor=num2
    }
    else{
        mayor=num2;
        menor=num1;
    }
    for(let i=menor+1;i<mayor;i++){
        
        if(i%2==0){
            texto = texto+i+", ";
        }
    }
    document.getElementById("resultado").innerHTML=texto;
    if(num1==num2){
        document.getElementById("resultado").innerHTML="No existen números pares entre estos números";
    }
}