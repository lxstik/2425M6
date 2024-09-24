console.log('Sesión 4')


//array
const frutas = ['pera', 'manzana', 'plátano', '9', '32', '34']

//acceso a la posición del array
console.log(frutas[2])

//array de los dimensiones
const barquitos = [
    ["1A", "1B", "1C"],
    ["2A", "2B", "2C"],
    ["3A", "3B", "3C"],
]

console.log(barquitos[1][2]) //2c

console.log(barquitos[2][2]) //3c

//objetos javascript
const persona = {
    nombre : 'Pepe',
    apellidos : 'Lotillas Rotas'
}

console.log('nombre : ', persona.nombre)

//array de objetos
const arraypersonas = [
    {
         nombre : 'Juan',
        apellidos : 'Lotillas Rotas'
    },

    {   
        nombre : 'Sara',
        apellidos : 'Lotillas Rotas'
    },

    {
        nombre : 'Andres',
        apellidos : 'Lotillas Rotas'
    }
]

console.log(arraypersonas[2].nombre)