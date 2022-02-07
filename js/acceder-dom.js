// Acceder al DOM

// *************FUNCIONES****************
// Funcion que retonara una palabra secreta de forma aleatoria
function palabraRandom(arreglo) {
    let cantidadPalabras = arreglo.length;
    let random = Math.floor(Math.random()*cantidadPalabras);
    let palabraRandom = arreglo[random];

    return palabraRandom;  
}

// Funcion que resetea el arreglo palabrasRepetidas si es que contiene todas las palbrasSecretas existentes 
function resetearRepetidas (arreglo,repetidas) {
    if ((repetidas.length)-1 === arreglo.length) {
        repetidas.splice(1,9)
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

// Funcion para eliminar elementos agregandole la clase ocultar
function ocultarElemento(elemento) {
    elemento.classList.add("ocultar");
}

// Funcion para Mostrar nuevamente elementos quitandole la clase ocultar
function aparecerElemento(elemento) {
    elemento.classList.remove("ocultar");
}

// Funcion que creara los elementos li que recibiran las letras de la palabra Secreta
function CreandoLetrasLI (padre,cantidadDeLetras) {
    for (let i = 0; i < cantidadDeLetras; i++) {
        padre.appendChild(document.createElement("li"));

    }
}

function resetearElemento (elemento) {
    elemento.value = "";
}


// Funcion que devolvera el texto ingresado en mayusculas
function conversorMayusculas (texto) {
    let textoMayusculas = "";
    textoMayusculas = texto.toUpperCase();
    return textoMayusculas; 
}
// Agregara la clase .letra-correcta a un elemento html
function cambiarLetraCorrecto (elementoHTML){
    elementoHTML.classList.add("letra-correcta");
}
// Agregara la clase .letra-incorrecta a un elemento html
function cambiarLetraIncorrecto (elementoHTML){
    elementoHTML.classList.add("letra-incorrecta");
}

function LetrasSeleccionadas (padre,letra,booleano) {
    // Recorriendo todos los hijos del padre
    for (let i = 0; i < padre.childElementCount; i++) {
        // Accediendo a el hijo[i] del padre
        hijo = padre.children[i];
        // Recorriendo todos los nietos del hijo[i] del padre
        for (let j = 0; j < hijo.childElementCount; j++) {
            // Accediendo al nieto[j] del hijo[i] del padre
            nieto = hijo.children[j];
            if (nieto.textContent === letra && booleano) {
                cambiarLetraCorrecto(nieto);
            }
            else if (nieto.textContent === letra && !booleano) {
                cambiarLetraIncorrecto(nieto);
            }
        }
    
    }
}



// *************DECLARACION DE VARIABLES****************

// Arreglo de palabras predeterminadas que se podrian descubrir
let palabrasSecretas = ["FRANCIA","AMARILLO","CEGERA","COLMILLO","MOCHILA","CANARIO","PERRO","GATO","BATMAN"];
// Inicializa las plabras repetidas con un elemento vacio
let palabrasRepetidas = [''];
// Inicializa la palabra secreta como vacia
let palabraSecreta = "";
// Arreglo que tendra tantos elementos como letras tenga la palabraSecreta
let posiciones = [];
// Acceder al boton ingresar
let ingresarBtn = document.querySelector("#ingresar");
// Acceder al boton comenzar
let comenzarBtn = document.querySelector("#comenzarBtn");
// Acceder a la lista desordenada que almacenara el deletreo de las letras de la palabra Secreta
let palabraUl = document.querySelector("#palabra-secreta");
// Acceder al tbody que contiene las letras del abcedario
let tbTablaLetras = document.querySelector("#tabla-letras");
// Acceder al form1 que contiene la estructura para ingresar letras
let ingresarLetrasForm = document.querySelector("#form1");





// *************LOGICA****************



// Capturador de eventos que iniciara toda la logica completa ##########PAUSED#########
comenzarBtn.addEventListener("click", function(event){
    event.preventDefault();

    
})

aparecerElemento(ingresarLetrasForm);

// Generar palabra secreta
palabraSecretaSinRepetir(palabrasSecretas,palabrasRepetidas);
console.log(palabraSecreta);

// Ocultar boton comenzar
ocultarElemento(comenzarBtn);

// Generar estructura de la palabra secreta en pantalla
CreandoLetrasLI(palabraUl,palabraSecreta.length);

// Capturador de eventos funciona al hacer click en el boton ingresar
ingresarBtn.addEventListener("click", function(event){
    // Eliminar funcion por defecto al hacer click en un button
    event.preventDefault();

    // Acceder al input que recibe la letra ingresada por el usuario
    let letraInput = document.querySelector("#letra");

    let letraIngresada = conversorMayusculas(letraInput.value);

    console.log(letraIngresada);

    resetearElemento(letraInput);

    let esCorrecta = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if(letraIngresada === palabraSecreta[i]){
            esCorrecta = true;
            palabraUl.children[i].textContent = letraIngresada;
        }
    }

    LetrasSeleccionadas(tbTablaLetras,letraIngresada,esCorrecta);



})















// Acceder al h3>span donde se encuentra el numero de intentos restantes (por defecto 6)
let intentoSpan = document.querySelector("#intentos").querySelector("span");







