
toggleButton = document.getElementById('toggleClass');
miElement = document.getElementById('miElement');

toggleButton.addEventListener('click', function() {
    if(miElement.classList.toggle == 'actiu'){
        miElement.classList.toggle('');
    }else{
        miElement.classList.toggle('actiu');
    }
});