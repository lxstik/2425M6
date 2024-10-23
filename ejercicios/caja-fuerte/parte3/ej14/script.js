function substituirTotes(cadena, vellSubcadena, nouSubcadena) {
    return cadena.replaceAll(vellSubcadena, nouSubcadena)
}

// Exemple d'ús:
console.log(substituirTotes("Hola món, món", "món", "JavaScript")); // Retorna "Hola JavaScript, JavaScript"