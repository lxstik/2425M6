array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

resultat = document.getElementById('resultat');

for(i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        resultat.innerHTML += array[i] + " ";
    }
}