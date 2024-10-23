function trobarMinim(arrayNumeros) {
    minimo = Math.min(...arrayNumeros);
    return("el numero minimo es: " + minimo);
}

// Exemple d'ús:
var numeros = [3, 7, 2, 9, 4];
console.log(trobarMinim(numeros)); // Retorna 2