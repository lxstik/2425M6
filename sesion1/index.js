console.log('sesion 1!!!')

//Comentarios

/*Comentarios diferentes*/

//Variables

var nombre = "Pepe"
let apellidos = "Potamo"
const dominio = "@fpllefia.com"
const nombreCompleto = apellidos.toLowerCase() + nombre.toLowerCase()

const email = nombreCompleto + dominio
console.log("email: ", email)

const email2 = "otroemail" + dominio
console.log("email2: ", email2)

//Utilizando backsticks

const email3 = `otroemailmas${dominio}`
console.log("email3: ", email3)

//Ejemplo de uso de backsticks con codigo HTML

const miCodigoHtml = `
    <div>
        <p>Hola</p>
    </div>
`

console.log(miCodigoHtml)

//