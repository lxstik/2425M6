let frutas = ['pera', 'banana', 'mandarina', 'melocoton', 'piña'];

function crearLi(){
    let fruitList = document.getElementById('fruitList');

    let lista = "<ul>";

    for(let i = 0; i < frutas.length; i++){
        lista += "<li>" + frutas[i] + "</li>";
    }

    lista += "</ul>";

    fruitList.innerHTML = lista;
}

crearLi();
