import { barcelona, roma, parís, londres } from './ciudades.js';

//OBTENER ELEMENTOS DEL DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio')

//AGREGAR UN EVENTO CLICK A CADA ENLACE
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //REMOVER EL ACTIVO
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        //AGREGAR LA CLASE 'ACTIVE' AL ENLACE ACTUAL
        this.classList.add('active')

        //OBTENER EL CONTENIDO CORRESPONDIENTE SEGUN EL ENLACE
        let contenido = obtenerContenido(this.textContent)

        //MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': parís,
        'Londres': londres,
    };
    return contenido[enlace];
};