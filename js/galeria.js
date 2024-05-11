document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
     
    for(let i=1; i<=12 ; i++){
        const imagen = document.createElement('img');
        imagen.src = `src/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;

        //Anadir la funcion de mostrar Imagen
        imagen.onclick = mostrarImagen;
        
        const lista = document.createElement('li');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);

    const imagen = document.createElement('img');
    imagen.src = `src/img/grande/${id}.jpg`;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //cuando se da click, se cierra la imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //boton para cerrar la imagen
    const cerrarImagen = document.createElement('p');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cuando se preciona se cierra la imagen
    cerrarImagen.onclick = function(){
       overlay.remove(); 
       body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}