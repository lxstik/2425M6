function determinarSigne(num) {
    signe = Math.sign(num); 

    if (signe == 1) {
        return "es positivo";
    } else if (signe == -1) {
        return "es negativo";
    } else {
        return "es cero"
    }
}

console.log(determinarSigne(-10)); // Retorna "El número és negatiu."
console.log(determinarSigne(0));   // Retorna "El número és zero."
console.log(determinarSigne(7));   // Retorna "El número és positiu."