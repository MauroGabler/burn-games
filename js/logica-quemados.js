// Arreglo de palabras predeterminadas que se podrian descubrir
let palabrasSecretas = ["FRANCIA","AMARILLO","CEGERA","COLMILLO","MOCHILA","CANARIO","PERRO","GATO","BATMAN"];
// Inicializa las plabras repetidas con un elemento vacio
let palabrasRepetidas = [''];
// Inicializa la palabra secreta como vacia
let palabraSecreta = "";
// Arreglo que tendra tantos elementos como letras tenga la palabraSecreta
let posiciones = [];

// Funcion que retonara una palabra secreta de forma aleatoria
function palabraRandom(arreglo) {
    let cantidadPalabras = arreglo.length;
    let random = Math.round(Math.random()*cantidadPalabras-1);
    let palabraRandom = arreglo[random];

    return palabraRandom;  
}

// Funcion que resetea el arreglo palabrasRepetidas si es que contiene todas las palbrasSecretas existentes 
function resetearRepetidas (arreglo,repetidas) {
    if ((repetidas.length)-1 === arreglo.length) {
        repetidas = [""];
    }
}


// Funcion que retornara una palabra secreta al azar sin que se repita con la anterior
function palabraSecretaSinRepetir(arreglo,repetidas) {
    let esRepetida = false;
    let contadorRepetidas = 0;
    let palabraIngresada = palabraRandom(arreglo);

    resetearRepetidas(arreglo,repetidas);

    while (!esRepetida) {
        for (let i = 0; i < repetidas.length; i++) {
            if  (repetidas[i] === palabraIngresada) {
                contadorRepetidas++;
            }
        }
        if (contadorRepetidas === 0) {
            esRepetida = true;
            repetidas.push(palabraIngresada);
        }
        else {
            palabraIngresada = palabraRandom(arreglo);
            contadorRepetidas = 0;  
        }
    }
    palabraSecreta = palabraIngresada;
}

// Bucle para ingresar las letras de la palabra secreta en orden dentro del arreglo letras
function posicionesLetras(palabraSecreta,arregloVacio) {
    for (var i = 0; i < palabraSecreta.length; i++) {
        arregloVacio.push("");
    }
}
    


// Numero de intentos que tiene el usuario
var intentos = 6;
// contador para registrar los intentos que ha ocupado el usuario
var contador = 0;
// Bandera para registrar cuando la letra ingresada corresponda a alguna letra de la palabra secreta
var letraCorrecta = false;

// function LetrasDescubiertas(letra,p) {
//     let esEncontrada = false;
//     for (var i = 0; i < arregloLetras.length; i++) {
//         if () {

//         }
//     }
// }

































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
// Funcion que validara que el texto ingresado solo contenga letras del abc sin caracteres especiales
function validadorSoloTexto(texto) {
    const patron = new RegExp(/^[A-Z]+$/i);
    let esValido = false;

    if (patron.test(texto)) {
        esValido = true;
    }

    return esValido;
}

// Funcion que devolvera el texto ingresado en mayusculas
function conversorMayusculas (texto) {
    let textoMayusculas = "";
    textoMayusculas = texto.toUppercase();
    return textoMayusculas;
}

// Funcion que agrega una palabra secreta a la coleccion de palabras secretas
function agregarPalabrasSecretas(arreglo,pSecreta) {
    arreglo.push(pSecreta);
}
