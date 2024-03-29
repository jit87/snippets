//Algoritmo que devuelve el numero de veces del valor mayor del vector

var velas = [3000,5,7,9,2000,500,3000];
var temp = 0; 
var terminado;
var count = 0; 

//Ordenamos de menor a mayor los números del vector
do{
   terminado = false;
   for(var i = 0; i < velas.length; i++){
       if(velas[i+1] < velas[i]){
          temp = velas[i];
          velas[i] = velas[i+1]; 
          velas[i+1] = temp;
          terminado = true; 
      }
   }
   
} while(terminado);

//Contamos la cantidad de valores mayores
for(var i = 0; i < velas.length; i++){
    if(velas[i]===velas[velas.length-1]){
        count++;
    }
}


console.log(count);