function substituirCadena(cadena, vellSubcadena, nouSubcadena) {
    return cadena.replace(vellSubcadena, nouSubcadena)
}

// Exemple d'ús:
console.log(substituirCadena("Hola món", "món", "JavaScript")); // Retorna "Hola JavaScript"