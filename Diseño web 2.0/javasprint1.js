// Autor: Juan Luis González Petrilli
// Fecha: 2021/09/30
    let num1=20;
    let num2=10;
    let sum=num1+num2;
    let sub=num1-num2;
    let mul=num1*num2;
    let div=num1/num2;
    document.write(suma);
    document.write("<br>");
    document.write(resta+"<br>");
    document.write(multiplicacion+"<br>");
    document.write(division+"<br>");

    if(num1>num2){
        document.write("El numero 1 es mayor que el numero 2");
    }else{
        document.write("El numero 2 es mayor que el numero 1");
    }

    document.write("<br>");
    let diaSemana=3;
    switch (num2) {
        case 1:
            document.write("Lunes");
            break;
        case 2:
            document.write("Martes");
            break;
        case 3:
            document.write("Miercoles");  
            break;  
        case 4:
            document.write("Jueves");
            break
        case 5:
            document.write("Viernes");
            break;
        default:
            document.write("Fin de semana");       
            break;
    }

    for (var i = 0; i < 10; i++) {
        document.write("<h1> "+i+"</h1>");
    }