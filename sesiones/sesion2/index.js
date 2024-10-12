
console.log("Hola sesión 2")

//Pedir datos con prompt

//Sumar numeros

const suma1 = prompt("Introduce un numero para sumar")
const suma2 = prompt("Introduce otro numero para sumar")

//parseInt convierte un texto en numero
console.log("La suma de los dos numeros es: ", parseInt(suma1)+parseInt(suma2))





//Juego de los numeros
/*
const numeroAdivinar = 10

let victoria = 0
let intentos = 3
while(intentos != 0){
    const numero = prompt("Introduce un numero: ")
    if(numero < 10){
        console.log("El numero introducido es menor")
        intentos--
    }else if(numero > 10){
        console.log("El numero introducido es mayor")
        intentos--
    }else{

        console.log("Acertaste!!!")
        intentos = 0
        victoria = 1
    }
}
if (intentos == 0 && victoria != 1){
    console.log("Te quedaste sin intentos!")
}

*/





/*
//de modo random

var numeroRandom = Math.Random()
console.log(numeroRandom)
for(let i = 0; i++; i>1){
    let numeroIntroducido = prompt("Introduce un numero")
    if(numeroIntroducido != numeroRandom){
        i--
    }else{
        i++
    }
}
    */