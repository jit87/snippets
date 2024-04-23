//Algoritmo que redondea los numeros de un vector. Siempre que la distancia al multiplo de 5 superior al numero sea menor o igual a 2.
//Partimos del último digito de cada numero y se compara con 5. Luego obtenemos la difenecia con respecto al multiplo de 5 superior.
//Finalmente imprimimos el vector redondeado.

var valores = [4,73,67,38,33];
var arrResult = [];


function redondeoNumeros(valores) {
    // Write your code here
    var diferencia;
    var arrResult = [];
  
    for(var i=0; i<valores.length; i++){
           
          let ultimoDigito = parseInt(valores[i].toString().slice(-1));
          
          //Si el último dígito es menor o igual a 5 se redondeará a 5 la última cifra si cumple las condiciones requeridas
          if(ultimoDigito <= 5){
              diferencia = 5 - ultimoDigito;       
          } 
           //Si el último dígito es mayor a 5 se redondeará a 0 (10) la última cifra si cumple las condiciones requeridas
          if(ultimoDigito > 5){
              diferencia = 10 - ultimoDigito;
          }
         //Si la diferencia es menor o igual a 2 aplicamos el redondeo
         if(diferencia <= 2) {
             arrResult.push(valores[i] + diferencia);
         } else 
             arrResult.push(valores[i]);   
    }
      console.log(arrResult);

}

redondeoNumeros(valores);