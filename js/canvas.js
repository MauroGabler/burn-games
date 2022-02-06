var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

// Crear funcion para cambiar el color de la pantalla
function colorPantalla(color) {
    pincel.fillStyle = color;
    pincel.fillRect(0,0,480,400);
}

// Asignando el color de canvas
colorPantalla("green");

function colorAnchoPincel (color,ancho) {
    // Estableciendo el ancho del pincel
    pincel.lineWidth = ancho;
    // Estableciendo el color del pincel
    pincel.strokeStyle = color;
}

colorAnchoPincel('white',8);













