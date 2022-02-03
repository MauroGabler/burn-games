function estructuraQuemados(){
    // Creacion base quemados (triangulo)
    pincel.moveTo(80,300);
    pincel.lineTo(50,320);
    pincel.stroke();

    // Creacion base quemados (triangulo)
    pincel.moveTo(80,300);
    pincel.lineTo(110,320);
    pincel.stroke();

    // Creacion base quemados (triangulo)
    pincel.moveTo(50,320);
    pincel.lineTo(110,320);
    pincel.stroke();

    // Creacion base quemados (pilar)
    pincel.moveTo(80,300);
    pincel.lineTo(80,50);
    pincel.stroke();

    // Creacion base quemados (techo)
    pincel.moveTo(80,50);
    pincel.lineTo(170,50);
    pincel.stroke();

    // Creacion base quemados (gancho)
    pincel.moveTo(170,50);
    pincel.lineTo(170,100);
    pincel.stroke();
}


function personaQuemado() {
    // Creacion cabeza quemado
pincel.fillStyle = "black";
pincel.beginPath(); 
pincel.arc(170,125,25,0,2*3.14); 
pincel.stroke();

// Creacion cuerpo quemado
pincel.moveTo(170,150);
pincel.lineTo(170,240);
pincel.stroke();

// Creacion brazo izq quemado
pincel.moveTo(170,160);
pincel.lineTo(120,200);
pincel.stroke();

// Creacion brazo der quemado\
pincel.moveTo(170,160);
pincel.lineTo(220,200);
pincel.stroke();

// Creacion pierna izq quemado\
pincel.moveTo(170,240);
pincel.lineTo(120,280);
pincel.stroke();

// Creacion pierna der quemado\
pincel.moveTo(170,240);
pincel.lineTo(220,280);
pincel.stroke();
}

estructuraQuemados();
personaQuemado();
