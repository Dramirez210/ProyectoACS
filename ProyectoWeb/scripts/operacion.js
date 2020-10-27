
function calculaNumero(){
    var a= document.getElementById("numero-a").value;
    var b= document.getElementById("numero-b").value;
    var c= document.getElementById("numero-c").value;
    // console.log(a,b,c);
    var resultado=0,resultado2=0;
    if(a<0){
        alert("Numero " +a+ " invalido");
    }else {
        resultado =  (-b+(Math.sqrt((Math.pow(b,2) -(4*a*c)))))/(2*a);
        resultado2 =  (-b-(Math.sqrt((Math.pow(b,2) -(4*a*c)))))/(2*a);
        document.getElementById("resultado").innerHTML = "El resultado de x1 es: "+resultado; 
        document.getElementById("resultado2").innerHTML ="El resultado de x2 es: " +resultado2;
    }
}