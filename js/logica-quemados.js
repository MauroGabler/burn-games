// Palabra que se va a descubrir
var palabraSecreta = "FRANCIA";

// Arreglo que recibira las letras en orden de la palabra secreta
letras = [];

// Bucle para ingresar letra de la palabra secreta en orden dentro del arreglo letras
for (var i = 0; i < palabraSecreta.length; i++) {
    letra = palabraSecreta.charAt(i);
    letras.push(letra);
}

// Numero de intentos que tiene el usuario
var intentos = 6;
// contador para registrar los intentos que ha ocupado el usuario
var contador = 0;
// Bandera para registrar cuando la letra ingresada corresponda a alguna letra de la palabra secreta
var letraCorrecta = false;
// Array que recibira las letras ingresadas por el usuario que coincidan con la palabra secreta
var palabraDescubierta = ["_","_","_","_","_","_","_"];

// Bucle que se dentendra cuando el usuario gaste sus intentos
while (contador < intentos) {
    var letraIngresada = prompt("Ingrese una letra");
    for (var i = 0; i < letras.length; i++) {
        if (letras[i] === letraIngresada) {
            palabraDescubierta.splice(i,1,letraIngresada);
            console.log(palabraDescubierta);
            letraCorrecta = true;  
        }
           
    }
    if (letraCorrecta) {
        console.log("Letra correcta");
        if (palabraDescubierta.join("") === letras.join("")) {
            console.log("Felicidades descubriste la palabra secreta");
            contador = 6;
        }
    }
    else {
        contador++;
        console.log("Letra incorrecta");
        console.log("Te quedan " + (intentos-contador) + " intentos");
        
    }
    letraCorrecta = false;
  
}


/* 
    *******************************************FALTA************************************************
    -Validar solo texto
    -Conversor a letras mayusculas
    -Crear un array con palabras secretas
    -Crear una funcion que devuelva una palabra al azar y que no se repita con la anterior
*/