 document.addEventListener('DOMContentLoaded', function(){
    scroollNav();

    navegacionFija();
 })

 function scroollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a')
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth',
            })
        })
    })
 }

 //api intersectionObserver
 function navegacionFija(){

    const barra = document.querySelector('.header');


    //registrar el interseccion observer
    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo')
        }else{
            barra.classList.add('fijo')
        }
    })


    //Elemento a observer
    observer.observe(document.querySelector('.sobre-festival'))
 }