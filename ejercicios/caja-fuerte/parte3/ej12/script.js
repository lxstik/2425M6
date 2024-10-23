function buscarCoincidencies(cadena, patró) {
    return cadena.match(patró);
}

// Exemple d'ús:
console.log(buscarCoincidencies("Hola 123, adéu 456", /\d+/g)); // Retorna ["123", "456"]