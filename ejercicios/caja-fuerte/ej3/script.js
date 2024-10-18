document.querySelector('#toggleButton').addEventListener('click', function(){
    miDiv = document.getElementById('miDiv');

    if(miDiv.style.display == "none"){
        miDiv.style.display = "block";
    }else{
        miDiv.style.display = "none";
    }
});