
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

    //Convertimos a entero el vector de dígitos y obtenemos el valor meno//invirtiendo el orden
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