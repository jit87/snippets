
//Dado un vector (arr) devuelve la proporción de elementos positivos, negativos y nulos con 6 decimales

var arr = [1,2,3,-1,-1,0,0,7];

function plusMinus(arr) {
   
        var n = arr.length; 
        var count0 = 0; 
        var countPositive = 0;
        var countNegative = 0;
        
        var prop0 = 0;
        var propPositive = 0;
        var propNegative = 0;
        
        arr.forEach(element=>{
            if(element==0){
                count0++; 
            }
            if(element>0){
                countPositive++;
            }
            if(element<0){
                countNegative++;
        }
        });
        
        propPositive = parseFloat(countPositive / n).toFixed(6);
        propNegative = parseFloat(countNegative / n).toFixed(6);
        prop0 = parseFloat(count0 / n).toFixed(6);
        
        console.log(propPositive);
        console.log(propNegative);
        console.log(prop0);
}


plusMinus(arr);