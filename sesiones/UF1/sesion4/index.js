console.log('Sesión 4')

const alumnes = [
    {
      nom: "Joan Pérez",
      edat: 18,
      correu: "joan.perez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 8.5 },
        { nom: "Bases de Dades", nota: 7.0 },
        { nom: "Sistemes Operatius", nota: 6.5 }
      ]
    },
    {
      nom: "Maria Sánchez",
      edat: 19,
      correu: "maria.sanchez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 9.0 },
        { nom: "Bases de Dades", nota: 8.0 },
        { nom: "Sistemes Operatius", nota: 7.5 }
      ]
    },
    {
      nom: "Pere Martínez",
      edat: 20,
      correu: "pere.martinez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 7.5 },
        { nom: "Bases de Dades", nota: 6.0 },
        { nom: "Sistemes Operatius", nota: 8.0 }
      ]
    }
  ];

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


//ejercicio acceder la nota de maria sanchez / acceder al nombre del segundo modulo de Pere

console.log('La nota de sistemas operativos de Maria es: ', alumnes[1].moduls[2].nota)

console.log('El nombre del segundo modulo de Pere es: ', alumnes[2].moduls[2].nom)


//recorrer el array

for(let i = 0; i < arraypersonas.length; i++){
    console.log('Nombre de ', alumnes[i].nom)
}


//generando html a partir de un array

let listaHtml = '<ul>' 

  for(let i = 0; i < arraypersonas.length; i++){
    listaHtml += `<li> ${arraypersonas[i].nombre} </li>`
  }

listaHtml += '</ul>'

document.querySelector('#miLista').innerHTML = listaHtml


let tablahtml = '<table>'

  
    tablahtml += `
      <thead>Lista de alumnos</thead>
      <tbody>
        <tr>
          for(let y = 0; y < arraypersonas.length; y++){
            <th>${arraypersonas[y].nombre}</th>
          }
        </tr>
      </tbody>
      <tfoot></tfoot>
    `
  

tablahtml += '</table>'


document.querySelector('#miLista2').innerHTML = tablahtml