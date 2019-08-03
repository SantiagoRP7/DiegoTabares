var ingresar = document.querySelectorAll('.input');
ingresar.forEach(function(input, index){
    var enter = input.querySelector('.enter');
    enter.addEventListener('keypress', function(){
        //ocultar(card);
        var popup = document.querySelector('.popup');
        //console.log();
        popup.removeAttribute('hidden');
        //popup.innerHTML = '<h1>hola ' + (index+1) + '</h1>';
        
        var titulo = document.createElement('h1');
        titulo.innerText = input.getAttribute('data-titulo');
        
        titulo.addEventListener('Keypress', function(){
            this.remove();
        });
        popup.appendChild(titulo);
        
    });
});
    


