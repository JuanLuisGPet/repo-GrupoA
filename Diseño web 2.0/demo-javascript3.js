//demo-javasprit3.js
function llamaDobleClick(Evento){
    cuadroMorado.textContent="Hiciste doble click en el cuadro morado";
}

function logEvent(Evento){
    console.log(`Evento ${Evento.type} fue disparado`);
}

const cuadroMorado=document.querySelector('#miId');
//const cuadroMorado=document.getElementById('miId');

cuadroMorado.textContent="Este texto viene de JavaScript";
cuadroMorado.innerText="Este texto remplaza al anterior";
cuadroMorado.innerHTML="<h1>Este es un h1</h1>";

const cuadrocyan=document.querySelector('.miClase');
cuadrocyan.textContent="Contenido de la clase";

//Vamos a los eventos

cuadroMorado.addEventListener('click',() => {
    cuadroMorado.textContent="Hiciste click en el cuadro morado";
});

//Con el nombre de una funcion
cuadroMorado.addEventListener('click',llamaDobleClick);
cuadroMorado.addEventListener('mouseover',logEvent);

//Agregamos 2 eventos mas con la funcion logEvent
cuadroMorado.addEventListener('dblclick',logEvent);