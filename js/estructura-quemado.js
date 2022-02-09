// Funcion para limpiar el cuerpo del ahorcado
function limpiarPantalla(){
    pincel.clearRect(310,144,100,150);
}

// Funcion para generar estructura de la horca
function estructuraQuemados(){
    // Base horca
    pincel.moveTo(70,330);
    pincel.lineTo(1000,330);
    pincel.stroke();

    // Pilar horca (izq)
    pincel.moveTo(120,330);
    pincel.lineTo(120,50);
    pincel.stroke();
    // Pilar horca (der)
    pincel.moveTo(150,330);
    pincel.lineTo(150,50);
    pincel.stroke();
    // Pilar horca (techo)
    pincel.moveTo(116,50);
    pincel.lineTo(154,50);
    pincel.stroke();

    // Techo horca (izq-abajo)
    pincel.moveTo(116,100);
    pincel.lineTo(90,100);
    pincel.stroke();
    // Techo horca (izq-izq)
    pincel.moveTo(90,104);
    pincel.lineTo(90,75);
    pincel.stroke();
    // Techo horca (izq-arriba)
    pincel.moveTo(86,75);
    pincel.lineTo(116,75);
    pincel.stroke();

    // Techo horca (der-abajo)
    pincel.moveTo(150,75);
    pincel.lineTo(400,75);
    pincel.stroke();
    // Techo horca (der-der)
    pincel.moveTo(400,71);
    pincel.lineTo(400,100);
    pincel.stroke();
    // Techo horca (izq-arriba)
    pincel.moveTo(404,100);
    pincel.lineTo(150,98);
    pincel.stroke();

    // refuerzo techo-pilar horca izq
    pincel.moveTo(150,140);
    pincel.lineTo(190,100);
    pincel.stroke();
    // refuerzo techo-pilar horca der
    pincel.moveTo(150,170);
    pincel.lineTo(220,100);
    pincel.stroke();

    // Soga ahorcado
    pincel.moveTo(350,100);
    pincel.lineTo(350,140);
    pincel.stroke();

    // nudo 1 Soga ahorcado
    pincel.moveTo(340,140);
    pincel.lineTo(360,135);
    pincel.stroke();
    // nudo 2 Soga ahorcado
    pincel.moveTo(340,131);
    pincel.lineTo(360,126);
    pincel.stroke();
    // nudo 3 Soga ahorcado
    pincel.moveTo(340,122);
    pincel.lineTo(360,117);
    pincel.stroke();

}

// Funcion para generar el cuerpo del ahorcado segun el numero de intentos restantes del usuario
function personaQuemado(intento) { 

    switch (intento) {
        case 5:
            // Creacion cabeza quemado
            pincel.beginPath(); 
            pincel.arc(350,168,20,0,2*3.14); 
            pincel.stroke();
            break;
        case 4:
            // Creacion cuerpo quemado
            pincel.moveTo(350,184);
            pincel.lineTo(350,244);
            pincel.stroke();
            break;
        case 3:
            // Creacion brazo izq quemado
            pincel.moveTo(350,196);
            pincel.lineTo(320,214);
            pincel.stroke();
            break;
        case 2:
            // Creacion brazo der quemado\
            pincel.moveTo(350,196);
            pincel.lineTo(380,214);
            pincel.stroke();    
            break;
        case 1:
            // Creacion pierna izq quemado\
            pincel.moveTo(350,242);
            pincel.lineTo(320,274);
            pincel.stroke();
            break;
        case 0:
            // Creacion pierna der quemado\
            pincel.moveTo(350,242);
            pincel.lineTo(380,274);
            pincel.stroke();
            break;

    }
    
}

// Generar estructura de la horca
estructuraQuemados();


