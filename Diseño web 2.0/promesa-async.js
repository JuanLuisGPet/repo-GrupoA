const datos = [
    {id:1, title:'Adolecencia', year:'2025'},
    {id:2, title:'Godless', year:'2017'},
    {id:3, title:'Gambito de dama', year:'2024'},
];

//Modo sincrono
/*function getDatos(){
    return datos;
}*/

//Modo sincrono con funcion flecha
/*const getDatos= () => {
    return datos;
}*/

const getDatos =() => {
    setTimeout(() => {
        return datos;
    }, 2000);
}

async function obtieneDatos() {
    const resultado = await getDatos();
console.log(resultado);
}

obtieneDatos();