//Algoritmo que imprime una escalera de caracteres # dado un número de filas n

var n = 4;

for(var i = 1; i <= n; i++) {
    var row = "";
    for(var j = n; j > i; j--) {
        row += " ";
    }
     for(var j = n-i; j < n; j++) {
        row += "#";
    }
    console.log(row);
}