//Algoritmo que devuelve la resta entre las dos diagonales de la matriz

var arr = [
  [ 3            ],
  [ 11,   2,    4],
  [ 4 ,   5,    6],
  [ 10,   8,  -12],
];


function diagonalDifference(arr) {
    
    var sum1 = 0; 
    var sum2 = 0;
    var result = 0;
    
    // Guardamos las sumas de las dos diagonales. El ejemplo calcula (11 + 5 + (-12)) - ( 4 + 5 + 10) = 4 - 19 = -15
    for(var i = 1; i < arr.length; i++){
         sum1 = sum1 + arr[i][i-1];
         sum2 = sum2 + arr[i][arr.length-1-i]; 
    }
  
    result = sum1 - sum2;

   return result;   
   
}
 
diagonalDifference(arr);

