
//Este algoritmo analiza las puntuaciones de una temporada de juegos y cuenta cuántas veces
//se rompen los récords de mayor y menor puntuación, comenzando a partir del primer juego
//como referencia inicial. La temporda se pasa como un vector de números (values),
//y la funcion imprime el numero de veces que se rompen los record (max_breaks, min_breaks)

var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  var max_breaks = 0;
  var min_breaks = 0;
  var max_record = 0;
  var min_record = 0; 
  var result = [];
  
  max_record = scores[0];
  min_record = scores[0];
  
  for(var i=0; i <= scores.length; i++){
      if(scores[i+1] > max_record){
          max_breaks++;
          max_record = scores[i+1]; 
      }
      if(scores[i+1] < min_record){
          min_breaks++;
          min_record = scores[i+1]; 
      }
  }

   result.push(max_breaks, min_breaks);
   console.log(result); 

}

breakingRecords(scores);