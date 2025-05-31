//MODULOS
function sayHelloWorld(nombre) {
    return `Hola ${nombre}`;
}

function sayHelloWorld(){
    return "Hola Mundo";
}

//Importacion - exportacion 

module.exports.sayHello = sayHello;
module.exports.sayHelloWorld= sayHelloWorld;

