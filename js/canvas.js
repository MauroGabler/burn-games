// Capturando el elemento canvas
var pantalla = document.querySelector("canvas");
// Generando el pincel para dibujar en canvas
var pincel = pantalla.getContext("2d");

// Funcion para cambiar el color de la pantalla
function colorPantalla(color) {
    pincel.fillStyle = color;
    pincel.fillRect(0,0,480,400);
}
// Funcion para establecer el ancho y el color del pincel
function colorAnchoPincel (color,ancho) {
    // Estableciendo el ancho del pincel
    pincel.lineWidth = ancho;
    // Estableciendo el color del pincel
    pincel.strokeStyle = color;
}

// Asignando el color de canvas
colorPantalla("green");
// Asignar el color y el ancho del pincel para dibujar en canvas
colorAnchoPincel('white',8);












