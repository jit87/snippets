// Algoritmo que obtiene los múltiplos del vector A y luego comprueba si estos múltiplos elegidos.
// son divisores de los números del vector B.
// Para este ejemplo debe de imprimir count = 3. Es decir los 3 múltiplos de A que son divisores de B.
// Utiliza el operador % mod para obtener el resto. Si el resto es igual a 0 el número es multiplo o divisor.

var a = [2,4];
var b = [16, 32, 96]; 

 
function getTotalX(a,b) {
    
    var arrayCriba1 = [];
    var arrayCriba2 = []; 
    var count = 0; 
    
    // Guardamos los múltiplos de A encontrados hasta el último valor de B.
    // Si el resto de i % a[j] no es nulo entonces no es múltiplo el valor de i de a[j].
    for(var i = 0; i <= b[b.length-1] ; i++){
        var esMultiplo = true;
        for (var j = 0; j < a.length; j++){
           if(i % a[j] !== 0){
               esMultiplo = false;
               break; 
            }
        }
        if(esMultiplo){
            arrayCriba1.push(i);
        }
    }
    // Sobre los multiplos elegidos comprobamos si son divisores de los valores de B.
    // Si el resto de b[i] % arrayCriba1[j] no es nulo entonces no es divisor el valor de arrayCriba1[j] de b[i].
    // Imprimimos el total de números que cumplen ambas condiciones.
    for(var j = 0; j < arrayCriba1.length; j++){
         var esDivisor = true; 
         for( var i = 0; i < b.length; i++){
             if((b[i] % arrayCriba1[j]) !== 0){
                  esDivisor = false; 
                  break; 
             }
         }
       if(esDivisor){
             arrayCriba2.push(arrayCriba1[j]); 
             count++; 
        }       
    }
       
    console.log(count); 
    
}


getTotalX(a,b);