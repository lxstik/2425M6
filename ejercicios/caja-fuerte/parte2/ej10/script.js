function calcularSinus(angleGraus) {
    //convertir grados a radians
    angleGraus = angleGraus * (Math.PI / 180);

    angleGraus = Math.sin(angleGraus);
    return(angleGraus);
}

// Exemple d'ús:
console.log(calcularSinus(30)); // Retorna 0.5
console.log(calcularSinus(90)); // Retorna 1