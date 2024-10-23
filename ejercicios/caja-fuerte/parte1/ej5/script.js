cannviarImatge = document.getElementById('canviarImatge');

cannviarImatge.addEventListener('click', function() {

    var imatge = document.querySelector("img");

    if (imatge.getAttribute('src') == '1.jpg') {
        imatge.setAttribute('src', '2.jpg');
    } else {
        imatge.setAttribute('src', '1.jpg');
    }
});
