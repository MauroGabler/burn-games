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

// Funcion que validara que el texto ingresado solo contenga letras del abc sin caracteres especiales
function validadorSoloTexto(texto) {
    const patron = new RegExp(/^[A-Z]+$/i);
    let esValido = false;

    if (patron.test(texto)) {
        esValido = true;
    }

    return esValido;
}

// Funcion que validara que la letra ingresada no sea la misma de una coleccion de letras
function validadorLetra(letra,contenedorletras) {
    let validador = true;
    for (let i = 0; i <contenedorletras.length; i++) {
        if (contenedorletras[i]===letra) {
            validador = false;
        }
    }
    return validador;
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
function modificandoLetrasLI (padre,cantidadDeLetras,opcion) {
    if (opcion === 'crear') {
        for (let i = 0; i < cantidadDeLetras; i++) {
            padre.appendChild(document.createElement("li"));
        }
    }
    else if (opcion === "eliminar"){
        for (let j = 0; j < cantidadDeLetras; j++) {
            padre.removeChild(padre.querySelector('li'));
            console.log('paseporaqui');
        }
    }
    
}

function resetearElemento (elemento) {
    elemento.value = "";
}


// Funcion que devolvera el texto ingresado en mayusculas
function conversorMayusculas (texto) {
    letraIngresada = texto.toUpperCase();
    return letraIngresada; 
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

function contadorDeIntentos(intentos,contador) {
    let intentosRestantes = intentos - contador;
    return intentosRestantes;
}

function resetearLetrasUsadas (elemento) {
    for (let i = 0; i < elemento.childElementCount; i++) {
        for (let j = 0; j < elemento.children[i].childElementCount; j++){
            if (elemento.children[i].children[j].classList.contains('letra-correcta')) {
                elemento.children[i].children[j].classList.remove('letra-correcta');  
            }
            else if (elemento.children[i].children[j].classList.contains('letra-incorrecta')) {
                elemento.children[i].children[j].classList.remove('letra-incorrecta');
            }
            
        }
    }
}

function juntarLetras (elemento) {
    arreglo = [];
    for (let i = 0; i < elemento.childElementCount; i++) {
        arreglo.push(elemento.children[i].textContent);
    }

    return arreglo.join("");
}



// *************DECLARACION DE VARIABLES****************

// Arreglo de palabras predeterminadas que se podrian descubrir
let palabrasSecretas = ["FRANCIA","AMARILLO","CEGERA","COLMILLO","MOCHILA","CANARIO","PERRO","GATO","BATMAN","ELECTROENCEFALOGRAFISTA"];
// Inicializa las plabras repetidas con un elemento vacio
let palabrasRepetidas = [''];
// Inicializa la palabra secreta como vacia
let palabraSecreta = "";
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
// Acceder al h3>span donde se encuentra el numero de intentos restantes (por defecto 6)
let intentoSpan = document.querySelector("#intentos").querySelector("span");
// Inicializando la variable que recibira los intentos restantes del usuario
let intentos = 6;
// Intentos erroneos
let contadorErroneos = 0;
// Colector de letras usadas
let letrasUsadas = [];
// Declaracion de la variable donde se ingresa la letra seleccionada por el usuario
let letraIngresada;
// Inicializar la variable que valida que no se ingrese ningun caracter especial
let esTexto = false;
// Inicializar la variable que valida que se ingrese una letra que no hay sido ocupada anteriormente
let esLetraCorrecta = false;
// 
let letrasDescubiertas = "";


// *************LOGICA****************


// Capturador de eventos que iniciara toda la logica completa ##########PAUSED#########
comenzarBtn.addEventListener("click", function(event){
    event.preventDefault();
  
// Mostrar estructura completa para ingresar letras
aparecerElemento(ingresarLetrasForm);

// Inicializar en numero de intentos por defecto
intentoSpan.textContent = (intentos);
// Generar palabra secreta
palabraSecretaSinRepetir(palabrasSecretas,palabrasRepetidas);
console.log(palabraSecreta);
// Generar estructura de la palabra secreta en pantalla
modificandoLetrasLI(palabraUl,palabraSecreta.length,'crear');
// Ocultar boton comenzar
ocultarElemento(comenzarBtn);


})

// Capturador de eventos funciona al hacer click en el boton ingresar
ingresarBtn.addEventListener("click", function(event){
    // Eliminar funcion por defecto al hacer click en un button
    event.preventDefault();

    // Acceder al input que recibe la letra ingresada por el usuario
    let letraInput = document.querySelector("#letra");

    // Asignar a una variable la letra ingresada por el usuario
    letraIngresada = letraInput.value;
    
    // Convertir el texto en mayusculas
    conversorMayusculas(letraIngresada);
    console.log("Letra Ingresada " + letraIngresada);
    // Activar validador par que no permita caracteres especiales
    esTexto = validadorSoloTexto(letraIngresada)
    // Activar validador par que no permita letras repetidas
    esLetraCorrecta =validadorLetra(letraIngresada,letrasUsadas)

    // Generar un alerta en el caso que el texto ingresado contenga caracteres especiales
    if (!esTexto) {
        alert("No debe ingresar caracteres especiales, elija una letra nuevamente!");
        resetearElemento(letraInput);
    }
    // Generar un alerta en el caso que la letra ingresada ya se haya ocupado anteriormente
    if (!esLetraCorrecta) {
        alert("La letra " + letraIngresada + " ya ha sido utilizada ingrese una letra neuvamente");
        resetearElemento(letraInput);
    }

    // Si se valido el texto ingresado de forma exitosa entonces se inicia la logica del juego
    if (esTexto && esLetraCorrecta) {
        //  Agrega la letra ingresada a la coleccion de letras usadas
        letrasUsadas.push(letraIngresada);

        // Limpia el input para que el usuario se percate que puede ingresar una nueva letra
        resetearElemento(letraInput);

        // Inicializando la variable que validara que la letra ingresada este dentro de la palabra secreta
        let esCorrecta = false;

        // Bucle para recorrer las letras de la palabra secreta y compararla con la letra ingresada
        for (let i = 0; i < palabraSecreta.length; i++) {
            if(letraIngresada === palabraSecreta[i]){
                esCorrecta = true;
                // Si la letra coincide con la palabra secreta entonces se mostrara en pantalla correspondiente a la/s posicion/es que tengan dicha letra
                palabraUl.children[i].textContent = letraIngresada;
            }
        }

        
        // Se mostrara en la tabla de letras usadas las letras correctas de una forma y las incorrectas de otras para que el usuario pueda saber que letras utilizo.
        LetrasSeleccionadas(tbTablaLetras,letraIngresada,esCorrecta);

        // Bucle para asignar los intentos restantes del usuario y dependiendo esto ir contruyendo la estructura del ahorcado.
        if (!esCorrecta) {
            contadorErroneos++;
            // Mostrar intentos restantes
            console.log("letra incorrecta");
            personaQuemado(contadorDeIntentos(intentos,contadorErroneos)); 
            intentoSpan.textContent = (intentos - contadorErroneos);
        }

        letrasDescubiertas = juntarLetras(palabraUl);
        console.log(letrasDescubiertas);

        if (contadorErroneos === intentos ||  palabraSecreta === letrasDescubiertas) {
            contadorErroneos = 0;
            letrasUsadas = [];
            resetearLetrasUsadas(tbTablaLetras);
            modificandoLetrasLI(palabraUl,palabraSecreta.length,'eliminar');
            aparecerElemento(comenzarBtn);
            ocultarElemento(ingresarLetrasForm);
            
        }
    }
})

/* 
    Falta 
    -resetear estructura ahorcado
    -alertar cuando se gana o se pierde
    -modificar el boton comenzar despues de terminar la primera palabra a jugar nuevamente
*/

