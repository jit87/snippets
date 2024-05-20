// Esta función cuenta cuántas manzanas y naranjas caen sobre la casa de Sam.
// Entrada:
//   - s y t: inicio y fin del rango de la casa de Sam.
//   - a: posición del manzano.
//   - b: posición del naranjo.
//   - apples: lista de distancias a las que caen las manzanas desde el manzano.
//   - oranges: lista de distancias a las que caen las naranjas desde el naranjo.
//
// Procedimiento:
//   1. Calcular las posiciones donde caen las manzanas sumando cada distancia a la posición del manzano.
//   2. Calcular las posiciones donde caen las naranjas sumando cada distancia a la posición del naranjo.
//   3. Contar cuántas manzanas caen dentro del rango [s, t] de la casa.
//   4. Contar cuántas naranjas caen dentro del rango [s, t] de la casa.
//   5. Imprimir el número de manzanas y naranjas que caen sobre la casa.
//
// Salida:
//   - Número de manzanas que caen sobre la casa.
//   - Número de naranjas que caen sobre la casa.


function countApplesAndOranges(s, t, a, b, apples, oranges) {
  
    var positionApples = [];
    var positionOranges = [];
    var numApples = 0;
    var numOranges = 0;
    
    for(var i=0; i < apples.length; i++){
        positionApples.push(apples[i] + a); 
        if(positionApples[i] >= s && positionApples[i] <= t){
            numApples++; 
        }
    }
    
    for(var j=0; j < oranges.length; j++){
        positionOranges.push(oranges[j] + b); 
          if((positionOranges[j] >= s && positionOranges[j] <= t)){
            numOranges++; 
        }
    }
    
 
    
    console.log(positionApples);
    console.log(positionOranges);
    
    console.log("-------------");
    
    console.log(numApples);
    console.log(numOranges);
    
}


countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]);