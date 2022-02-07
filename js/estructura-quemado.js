function estructuraQuemados(){
    // Creacion base quemados (sup-izq triangulo)
    pincel.moveTo(80,300);
    pincel.lineTo(30,330);
    pincel.stroke();

    // Creacion base quemados (sup-der triangulo)
    pincel.moveTo(80,300);
    pincel.lineTo(130,330);
    pincel.stroke();

    // Creacion base quemados (base triangulo)
    pincel.moveTo(27,330);
    pincel.lineTo(132,330);
    pincel.stroke();

    // Creacion base quemados (pilar)
    pincel.moveTo(80,300);
    pincel.lineTo(80,50);
    pincel.stroke();

    // Creacion base quemados (techo)
    pincel.moveTo(80,50);
    pincel.lineTo(240,50);
    pincel.stroke();

    // Creacion base quemados (gancho)
    pincel.moveTo(240,50);
    pincel.lineTo(240,100);
    pincel.stroke();
}


function personaQuemado() {
    // Creacion cabeza quemado
    pincel.beginPath(); 
    pincel.arc(240,125,25,0,2*3.14); 
    pincel.stroke();

    // Creacion cuerpo quemado
    pincel.moveTo(240,150);
    pincel.lineTo(240,240);
    pincel.stroke();

    // Creacion brazo izq quemado
    pincel.moveTo(240,160);
    pincel.lineTo(190,200);
    pincel.stroke();

    // Creacion brazo der quemado\
    pincel.moveTo(240,160);
    pincel.lineTo(290,200);
    pincel.stroke();

    // Creacion pierna izq quemado\
    pincel.moveTo(240,240);
    pincel.lineTo(190,280);
    pincel.stroke();

    // Creacion pierna der quemado\
    pincel.moveTo(240,240);
    pincel.lineTo(290,280);
    pincel.stroke();
}

estructuraQuemados();

