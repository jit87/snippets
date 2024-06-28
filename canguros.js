//Ejercicio de Hackerrank de saltos de canguros.

function kangaroo(x1, v1, x2, v2) {
    // Si los canguros tienen la misma velocidad pero diferentes posiciones iniciales, nunca se encontrarán
    if (v1 === v2) {
        return x1 === x2 ? 'YES' : 'NO';
    }
    
    // Calcular si el numerador es divisible por el denominador
    if ((x2 - x1) % (v1 - v2) === 0) {
        // Verificar si el resultado es un número no negativo
        if ((x2 - x1) / (v1 - v2) >= 0) {
            return 'YES';
        }
    }
    
    return 'NO';
}

// Ejemplo de uso:
console.log(kangaroo(0, 3, 4, 2)); // Debería devolver 'YES'
console.log(kangaroo(0, 2, 5, 3)); // Debería devolver 'NO'