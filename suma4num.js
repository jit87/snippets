//Algoritmo que suma por separado los cuatro menores y mayores numeros de un vector de 5 posiciones

var arr = [5,4,2,1,9];

//Variable temporal para almacenar el valor antes de que se modifique
var temp; 

//Bandera para saber si hay que continuar con el bucle
var hayIntercambio;

//Variables de sumas
var sumaMin = 0;
var sumaMax = 0; 


do {
    hayIntercambio = false;
    //Ordenamos de menor a mayor
    for(var i = 0; i < arr.length; i++){
        if(arr[i+1] < arr[i]){
             temp = arr[i];
             arr[i] = arr[i+1]; 
             arr[i+1] = temp;
             hayIntercambio = true;  
        }
    }
} while (hayIntercambio);


//Como tenemos sumar 4 numeros menores y 4 mayores lo hacemos directamente:
sumaMin = arr[0] + arr[1] + arr[2] + arr[3];
sumaMax = arr[1] + arr[2] + arr[3] + arr[4];

console.log("Vector ordenado: " + arr);
console.log("Suma de los menores: " + sumaMin);
console.log("Suma de los mayores: " + sumaMax);