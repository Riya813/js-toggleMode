var changeBody = document.getElementById('input-box');
var now = 'white';
changeBody.addEventListener('click', function(e){
    var currentBody = document.getElementById('body-color');
    if(now === 'white'){
        // currentBody.classList.remove('white-color');
        // currentBody.classList.add('black-color');
        currentBody.style.backgroundColor = 'black';
        now = 'black';
    }else{
        // currentBody.classList.remove('black-color');
        // currentBody.classList.add('white-color');
        currentBody.style.backgroundColor = 'white';
        now = 'white';
    }
});