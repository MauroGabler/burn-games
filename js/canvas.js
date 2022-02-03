var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

// Crear funcion para cambiar el color de la pantalla
function colorPantalla(color) {
    pincel.fillStyle = color;
    pincel.fillRect(0,0,300,400)
}

// Asignando el color de canvas
colorPantalla("white");












