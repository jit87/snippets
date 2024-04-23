//Algoritmo que convierte una hora en formato de 12 horas (AM/PM) a formato de hora militar (24 horas). 
//En el formato de 12 horas, la medianoche se representa como 12:00:00AM y el mediodía como 12:00:00PM. 
//Sin embargo, en el formato de 24 horas, la medianoche es 00:00:00 y el mediodía es 12:00:00.

function timeConversion(s) {

var periodo = s.substring(8);
var hora = parseInt(s.substring(0, 2));

if(periodo==="AM"){
      if (hora === 12) {
        hora = "00";
      }
} else {
      if (hora !== 12) {
        hora += 12;
      }  
}

if(hora.toString().length < 2)
    console.log("0" + hora.toString() + s.substring(2, 8)); 
else 
    console.log(hora.toString() + s.substring(2, 8)); 

}


timeConversion("04:59:59AM");