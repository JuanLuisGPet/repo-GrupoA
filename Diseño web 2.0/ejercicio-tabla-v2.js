const datos = [
    { id: 1, nombre: "Juan", apellido: "Ruiz", correo: "juan.ruiz@example.com", telefono: "1234567890", comentario: "Sin comentarios", },
    { id: 2, nombre: "Ana", apellido: "Gómez", correo: "ana.gomez@example.com", telefono: "2345678901", comentario: "Pendiente de revisión" },
    { id: 3, nombre: "Luis", apellido: "Martínez", correo: "luis.martinez@example.com", telefono: "3456789012", comentario: "Cliente frecuente" },
    { id: 4, nombre: "María", apellido: "López", correo: "maria.lopez@example.com", telefono: "4567890123", comentario: "Requiere seguimiento" },
    { id: 5, nombre: "Carlos", apellido: "Hernández", correo: "carlos.hernandez@example.com", telefono: "5678901234", comentario: "Sin comentarios" },
    { id: 6, nombre: "Sofía", apellido: "Pérez", correo: "sofia.perez@example.com", telefono: "6789012345", comentario: "Interesada en nuevos productos" },
    { id: 7, nombre: "Diego", apellido: "Ramírez", correo: "diego.ramirez@example.com", telefono: "7890123456", comentario: "Solicitó información adicional" },
    { id: 8, nombre: "Lucía", apellido: "Torres", correo: "lucia.torres@example.com", telefono: "8901234567", comentario: "Cliente nuevo" },
    { id: 9, nombre: "Jorge", apellido: "Vargas", correo: "jorge.vargas@example.com", telefono: "9012345678", comentario: "Requiere llamada de seguimiento" },
    { id: 10, nombre: "Elena", apellido: "Castro", correo: "elena.castro@example.com", telefono: "0123456789", comentario: "Sin comentarios" }
];
    tabla=document.querySelector('#tabla');

    function creartaTabla(){
        var cadena = "<table>";
        cadena=cadena+"<thead>";
        cadena=cadena+"<tr>";
        cadena=cadena+"<th>Id</th>";
        cadena=cadena+"<th>Nombre</th>";
        cadena=cadena+"<th>Apellido</th>";
        cadena=cadena+"<th>Correo</th>";
        cadena=cadena+"<th>telefono</th>";
        cadena=cadena+"<th>comentario</th>";
        cadena=cadena+"<th>Eliminar</th>";
        cadena=cadena+"</tr>";
        cadena=cadena+"</thead>";
        cadena=cadena+"<tbody>";
        for(const dato of datos){
            cadena=cadena+"<tr>";
            cadena=cadena+"<td>"+dato.id+"</td>";
            cadena=cadena+"<td>"+dato.nombre+"</td>";
            cadena=cadena+"<td>"+dato.apellido+"</td>";
            cadena=cadena+"<td>"+dato.correo+"</td>";
            cadena=cadena+"<td>"+dato.telefono+"</td>";
            cadena=cadena+"<td>"+dato.comentario+"</td>";
            cadena=cadena+"<td><button class='btn-eliminar' onclick='eliminarFila(this)'>Eliminar</button></td>";
            cadena=cadena+"</tr>";
        }
    
    cadena=cadena+"</tbody>";
    cadena=cadena+"</table>";
    tabla.innerHTML=cadena;
}

creartaTabla();

function mostrarModal(){
    document.getElementById('contenedor-formulario').style.display='flex';
}

function agregarFila(){
    const id=document.getElementById('ID').value;
    const nombre=document.getElementById('nombre').value;
    const apellido=document.getElementById('apellido').value;
    const correo=document.getElementById('correo').value;
    const telefono=document.getElementById('telefono').value;
    const comentario=document.getElementById('comentario').value;
    //validamos que los campos no esten vacios
    if(id && nombre && apellido && correo && telefono && comentario){
        body = tabla.getElementByTagName('tbody')[0];
        const nuevaFila=body.insertRow();
        nuevaFila.insertHTML=`
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${telefono}</td>
        <td>${comentario}</td>
        `;
        document.getElementById('Formulario').reset();
    }
    alert(id);
}

function eliminarFila(index) {
    const fila = index.parentNode.parentNode;
    const tbody = fila.parentNode;
    tbody.removeChild(fila);
    alert("Fila eliminada");
}

