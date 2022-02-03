var palabraSecreta = "FRANCIA";

letras = [];

for (var i = 0; i < palabraSecreta.length; i++) {
    letra = palabraSecreta.charAt(i);
    letras.push(letra);
}

var intentos = 6;
var contador = 0;
var letraCorrecta = false;
var palabraDescubierta = ["_","_","_","_","_","_","_"];


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
*/