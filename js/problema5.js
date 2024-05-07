function analizar(){
    var num1 = parseFloat(document.getElementById("txtNumero1").value);
    var num2 = parseFloat(document.getElementById("txtNumero2").value);
    var num3 = parseFloat(document.getElementById("txtNumero3").value);
    var mayor,medio,menor;
    if((num1>num2)&&(num1>num3)){
        mayor=num1;
        if(num2>num3){medio=num2;menor=num3;}
        else{medio=num3;menor=num2;}
    }
    else if((num2>num1)&&(num2>num3)){
        mayor=num2;
        if(num1>num3){medio=num1;menor=num3;}
        else{medio=num3;menor=num1;}
    }
    else if((num3>num1)&&(num3>num2)){
        mayor=num3;
        if(num1>num2){medio=num1;menor=num2;}
        else{medio=num2;menor=num1;}
    }
    document.getElementById("resultado").innerHTML="El numéro mayor es: "+mayor+
    ", el número menor es: "+menor+" y el número del medio es: "+medio;
}