
/* La constante de Kaprekar es el número 6174. 
/* Esta constante matemática surge al aplicar sucesivamente el siguiente algoritmo a cualquier número de cuatro dígitos (salvo aquellos con todos los dígitos iguales). 
/* El algoritmo consiste en formar el número mayor y el número menor a partir de los dígitos del número original, 
/* y luego se resta el menor del mayor. Al repetir este proceso, invariablemente se llega al 6174. */

function compareNumbers1(a, b) {
    return b - a;
}

function compareNumbers2(a, b) {
    return a - b;
}

var iteracion = 0;

function kaprekar(numero) {
    const constanteKaprekar = 6174;
    var vectorDigitos = [];
    var vectorMayor = [];
    var vectorMenor = [];
    var resultado = 0;
    var valorMayor = 0;
    var valorMenor = 0;

    //Transformamos el numero en un vector de digitos para poder operar
    vectorDigitos = numero.toString().split('').map(Number);
    console.log(vectorDigitos);

    //Ordenamos de mayor menor para obtener el numero más grande posible
    vectorMayor = vectorDigitos.sort(compareNumbers1);

    //Convertimos a entero el vector de dígitos y obtenemos el valor menor invirtiendo el orden
    valorMayor = Number(vectorMayor.join(""));
    vectorMenor = vectorMayor.reverse();
    valorMenor = Number(vectorMenor.join(""));
    console.log("Valor mayor: ", valorMayor);
    console.log("Valor menor: ", valorMenor);

    resultado = valorMayor - valorMenor;
    console.log(resultado);

    //Aumentamos la iteración por cada resultado
    if (resultado) {
        iteracion++;
    }

    //Si el resultado coincide con la constante de Kaprekar ya hemos terminado
    if (resultado === constanteKaprekar) {
        console.log("Obtenida la constante en la iteración:", iteracion);
    }
    else {
        kaprekar(resultado);
    }
}

kaprekar(4537); 