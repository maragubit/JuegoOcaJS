

/*Todo el contenido de este archivo está en JavaScript*/



var jugadoresList =[]; //creamos un array para meter a los jugadores
var ganadoresList=[];//Lista de ganadores de la partida;





/* -----------------------------------------------------*/

// funciones para seleccionar jugadores y sus datos

function numJugadores(){
    let jugadores= document.getElementById("seleccionJugador").value;
    let formularioNumJugadores = document.getElementById("formNumJugadores");
    formularioNumJugadores.style.display="none";
    document.getElementById("formJugadores").style.display="block";
    let formularioJugadores=document.getElementById("contenidoForm")
    for (let i =0; i<jugadores;i++){
        
        //Creamos para cada jugador su campo del formulario
        
        
        //fieldset para separar datos de cada jugador

        let jugadorFieldSet=document.createElement("fieldset");
        let legend=document.createElement("legend");
        legend.innerHTML="Jugador " + (i+1);
        jugadorFieldSet.appendChild(legend);

        //nombre
        let etiquetaNombre=document.createElement("label");
        etiquetaNombre.innerHTML="Nombre jugador "+ (i+1);
        
        let campoNombre=document.createElement("input");
        campoNombre.type="text";
        campoNombre.name="nombre"+(i+1);
        campoNombre.id="nombre"+(i+1);
        
        //Tipo de ficha
        let etiquetaFigura=document.createElement("label");
        etiquetaFigura.innerHTML="Ficha jugador "+ (i+1);

        let selectFigura=document.createElement("select");
        selectFigura.name="seleccionFicha"+(i+1);
        selectFigura.id="seleccionFicha"+(i+1);
        
        let option1=document.createElement("option");
        option1.value="circulo";
        option1.innerHTML="circulo";

        let option2=document.createElement("option");
        option2.value="cuadrado";
        option2.innerHTML="cuadrado";

        let option3=document.createElement("option");
        option3.value="triangulo";
        option3.innerHTML="triangulo";
        
        let option4=document.createElement("option");
        option4.value="gato";
        option4.innerHTML="imagen gato";

        let option5=document.createElement("option");
        option5.value="perro";
        option5.innerHTML="imagen perro";
        
        
        selectFigura.appendChild(option1);
        selectFigura.appendChild(option2);
        selectFigura.appendChild(option3);
        selectFigura.appendChild(option4);
        selectFigura.appendChild(option5);

        //color ficha
        let etiquetaColor=document.createElement("label");
        etiquetaColor.innerHTML="Color figura jugador "+ (i+1);
        let campoColor=document.createElement("input");
        campoColor.type="color";
        campoColor.name="color"+(i+1);
        campoColor.id="color"+(i+1);

        //añadimos campos al fieldset
        jugadorFieldSet.appendChild(etiquetaNombre);
        jugadorFieldSet.appendChild(campoNombre);
        jugadorFieldSet.appendChild(etiquetaFigura);
        jugadorFieldSet.appendChild(selectFigura);
        jugadorFieldSet.appendChild(etiquetaColor);
        jugadorFieldSet.appendChild(campoColor);
        //añadimos los campos al formulario
        formularioJugadores.appendChild(jugadorFieldSet);

    }
}
/* ------------------------------------------------------------------------------------------------*/                          

//Funcion para preparar la partida

function comenzarPartida(){
    /* Quitamos formularios y ponemos tablero con estadisiticas jugadores */
    
    //quitamos el formulario y aparece el tablero
    let tablero=document.getElementsByClassName("partida")[0];
    tablero.style.display="block";
    let formJugadores = document.getElementsByClassName("iniciarPartida")[0];
    formJugadores.style.display="none";
    
    

    /*cogemos los datos del form para empezar la partida y los hacemos globales*/
    
    //jugador 1
    const nombre1 = document.getElementById("nombre1").value;
    const ficha1 = document.getElementById("seleccionFicha1").value;
    const color1 = document.getElementById("color1").value;
    const jugador1={
        nombre:nombre1,
        ficha:ficha1,
        color:color1,
        tramo:1,
        casilla:0,
        difAltura:0, //separación de la altura con respecto al borde superior de la casilla.
        partida: true //si no ha terminado la partida;
    };
    window.jugadoresList[0]=jugador1; //metemos jugador 1 en el array

    //jugador 2
    const nombre2 = document.getElementById("nombre2").value;
    const ficha2 = document.getElementById("seleccionFicha2").value;
    const color2 = document.getElementById("color2").value;
    const jugador2={
        nombre:nombre2,
        ficha:ficha2,
        color:color2,
        tramo:1,
        casilla:0,
        difAltura:15, //separación de la altura con respecto al borde superior de la casilla.
        partida: true
    };
    window.jugadoresList[1]=jugador2; //metemos jugador 2 en el array

    //jugador 3 si existe
    let nombre3=document.getElementById("nombre3")
    if (nombre3){
        const nombre3 = document.getElementById("nombre3").value;
        const ficha3 = document.getElementById("seleccionFicha3").value;
        const color3 = document.getElementById("color3").value;
        const jugador3={
            nombre:nombre3,
            ficha:ficha3,
            color:color3,
            tramo:1,
            casilla:0,
            difAltura:30, //separación de la altura con respecto al borde superior de la casilla.
            partida: true
        };
        window.jugadoresList[2]=jugador3; //metemos jugador 3 en el array
    }

    //jugador 4 si existe
    let nombre4=document.getElementById("nombre4")
    if (nombre4){
        const nombre4 = document.getElementById("nombre4").value;
        const ficha4 = document.getElementById("seleccionFicha4").value;
        const color4 = document.getElementById("color4").value;
        const jugador4={
            nombre:nombre4,
            ficha:ficha4,
            color:color4,
            tramo:1,
            dado:0,
            casilla:0,
            difAltura:45, //separación de la altura con respecto al borde superior de la casilla.
            partida: true
        };
        window.jugadoresList[3]=jugador4; //metemos jugador 4 en el array
    
    }

    /*Ponemos las estadisticas de los jugadores en la tabla de la izquierda llamada jugadores*/
    let totalJugadores = window.jugadoresList.length;
    for (let i=0; i < totalJugadores; i++){       
        let tabla=document.getElementById("datosJugadores");
        
        let fila= document.createElement("tr");//creamos fila por jugador
        
        //añadimos los datos del jugador a la fila
                //nombre
        let datoNombre=document.createElement("td");
        datoNombre.textContent=window.jugadoresList[i].nombre;
        fila.appendChild(datoNombre);
                //ficha
        let datoFicha=document.createElement("td");
        datoFicha.textContent=window.jugadoresList[i].ficha;
        datoFicha.style.color=window.jugadoresList[i].color;
        fila.appendChild(datoFicha);
                //casilla
        let datoCasilla=document.createElement("td");
        datoCasilla.textContent=0;
        datoCasilla.id="datoCasilla"+(i+1);
        fila.appendChild(datoCasilla);

               //boton tirar dado
        let datoBoton=document.createElement("td");
        let boton=document.createElement("button");
        boton.id="dado"+(i+1);
        boton.textContent="Lanzar dado "+(i+1);
        boton.className="btn btn-dark";
        datoBoton.appendChild(boton);
        fila.appendChild(datoBoton);
        
        //añadimos la fila a la tabla
        tabla.appendChild(fila);

        /*Añadimos las fichas al tablero en la salida*/
        let tablero=document.getElementsByClassName("tablero")[0];
        let fichaJugador=document.createElement("div");
        fichaJugador.className=window.jugadoresList[i].ficha;
        fichaJugador.id="jugador"+(i+1);
        if (window.jugadoresList[i].ficha=="triangulo"){
            fichaJugador.style.color=window.jugadoresList[i].color;
        }
        else{
            fichaJugador.style.backgroundColor=window.jugadoresList[i].color;
        }
        
        let dorsal=document.createElement("span");
        dorsal.innerHTML=""+(i+1);
        dorsal.style.color="grey"
        dorsal.style.textAlign="center";
        dorsal.style.fontWeight="bold";
        fichaJugador.appendChild(dorsal);
        tablero.appendChild(fichaJugador);
    }
    tirarDados(1);   
};

/* ------------------------------------------------------------------------------ */

function tirarDados(player){
    //desactivamos boton tirar de los jugadores excepto el jugador del argumento
    document.getElementById("dado1").disabled=true;
    document.getElementById("dado2").disabled=true;
    if (document.getElementById("dado3")){document.getElementById("dado3").disabled=true;};
    if (document.getElementById("dado4")){document.getElementById("dado4").disabled=true;};
    document.getElementById("dado"+player).disabled=false;//habilitamos el boton tirar dado del jugador actual

    //funcion para tirar dados
    document.getElementById("dado"+player).onclick = function() {

        /*--------------COMIENZA EL MOVIMIENTO---------------*/
    document.getElementById("sonidoDado").play();//activamos sonido de tirar dados y esperamos 1 seg (setTimeout 1000)
    let dadoNum= Math.floor(Math.random() * 6) + 1;//numero random entre 1 y 6
    setTimeout(function() {
    let dadoDiv= document.getElementsByClassName("dado")[0];
    dadoDiv.style.backgroundImage="url('statics/dado"+dadoNum+".png')"; //se cambia la imagen del dado
    },1000);
    
    //movimiento del jugador según el dado a los 2 segundos (1 segundo despues de tirar el dado)
    setTimeout(function() {
    var jugadorDiv=document.getElementById("jugador"+player);
    var computedStyle = window.getComputedStyle(jugadorDiv);//es necesario hacerlo con el objeto window ya que si lo hacia con style.left daba cadena vacia
    var posicionXjugador = parseInt(computedStyle.left);
    var posicionYjugador=parseInt(computedStyle.bottom);
    var jugador=window.jugadoresList[player-1];

    switch(jugador.tramo){ //dependiendo del tramo del tablero hará un movimiento u otro;
        case 1:  //TRAMO 1 TABLERO HORIZONTAL
            jugador.casilla+=dadoNum;
            var casilla=jugador.casilla;

            if (casilla>=9){
                if (casilla==12){//casilla de oca
                    jugador.casilla=22;
                    jugadorDiv.style.bottom=558-jugador.difAltura+"px";
                    jugadorDiv.style.left=(644-(7*68))+"px";
                    jugador.tramo=3;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                else{
                    jugadorDiv.style.left=644+"px";
                    jugadorDiv.style.bottom=posicionYjugador+(casilla-9)*78+"px";
                    jugador.tramo=2;
                }
                
                  
            }
            else{
                if (casilla==6){//casilla de oca
                    jugador.casilla=12;
                    jugadorDiv.style.left=644+"px";
                    jugadorDiv.style.bottom=(posicionYjugador+(3*78))+"px";
                    jugador.tramo=2;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                else{
                    jugadorDiv.style.left=posicionXjugador+(dadoNum*68)+"px";
                }
                
                
            }
            

        break;

        case 2: //TRAMO 2 TABLERO VERTICAL
            jugador.casilla+=dadoNum;
            casilla=jugador.casilla;
            if (casilla>=15){
                jugadorDiv.style.bottom=558-jugador.difAltura+"px";
                jugadorDiv.style.left=(posicionXjugador-(casilla-15)*68)+"px";
                jugador.tramo=3;
            }
            else{
                if (casilla==12){//casilla de oca
                    jugador.casilla=22;
                    jugadorDiv.style.bottom=558-jugador.difAltura+"px";
                    jugadorDiv.style.left=(posicionXjugador-(7*68))+"px";
                    jugador.tramo=3;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                
                else{
                    casilla=jugador.casilla;
                    jugadorDiv.style.bottom=(posicionYjugador+dadoNum*78)+"px";}
            }
        break;
        case 3:  //TRAMO 3 TABLERO HORIZONTAL
            jugador.casilla+=dadoNum;
            var casilla=jugador.casilla;

            if (casilla>=23){
                if (casilla==27){//casilla de oca
                    jugador.casilla=32;
                    jugadorDiv.style.bottom=posicionYjugador-(5*78)+"px";
                    jugadorDiv.style.left=52+68+(68*4)+"px";
                    jugador.tramo=4;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                else{
                    jugadorDiv.style.left=52+68+"px";
                    jugadorDiv.style.bottom=posicionYjugador-(casilla-23)*78+"px";
                    jugador.tramo=4;
                }
                
                  
            }
            else{
                if (casilla==22){//casilla de oca
                    jugador.casilla=27;
                    jugadorDiv.style.bottom=posicionYjugador-(4*78)+"px";
                    jugadorDiv.style.left=52+68+"px";
                    jugador.tramo=4;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;


                }
                else{
                    jugadorDiv.style.left=posicionXjugador-(dadoNum*68)+"px";
                }
                
                
            }
            

        break;

        case 4: //TRAMO 4 TABLERO VERTICAL
            jugador.casilla+=dadoNum;
            casilla=jugador.casilla;
            if (casilla>=28){
                if(casilla==30){//puente 
                    jugador.casilla=3;
                    jugadorDiv.style.bottom=80-jugador.difAltura+"px";
                    jugadorDiv.style.left=250+"px";
                    jugador.tramo=1;
                    document.getElementById("sonidoPuente").play();
                    alert("Lo siento, te has caido por el puente!");
                }
                else if (casilla==32){ //casilla de oca
                    jugador.casilla=39;
                    jugadorDiv.style.bottom=(558-78-jugador.difAltura)+"px";
                    jugadorDiv.style.left=(644-68)+"px";
                    jugador.tramo=6;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                
                else {
                jugadorDiv.style.bottom=160-jugador.difAltura+"px";
                jugadorDiv.style.left=(posicionXjugador+(casilla-28)*68)+"px";
                jugador.tramo=5;
                }
            }
        
            else{
                if (casilla==27){//casilla de oca
                    jugador.casilla=32;
                    jugadorDiv.style.bottom=160-jugador.difAltura+"px";
                    jugadorDiv.style.left=posicionXjugador+(68*4)+"px";
                    jugador.tramo=5;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                
                else{
                    
                    jugadorDiv.style.bottom=(posicionYjugador-dadoNum*78)+"px";
                }
            }
        break;

        case 5: //TRAMO 5 TABLERO HORIZONTAL
            jugador.casilla+=dadoNum;
            var casilla=jugador.casilla;

            if (casilla>=35) {//pasamos del tramo 5
                if (casilla==39){//casilla de oca
                    jugador.casilla=50;
                    jugadorDiv.style.bottom=240-jugador.difAltura+"px";
                    jugadorDiv.style.left=320+"px";
                    jugador.tramo=9;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                else if (casilla>39){//pasamos del tramo 6 al 7
                    jugadorDiv.style.bottom=478-jugador.difAltura+"px";+"px";
                    jugadorDiv.style.left=(580-(casilla-39)*68)+"px";
                    jugador.tramo=7;
                }
                else{//se queda en tramo 6
                    jugadorDiv.style.left=580+"px";
                    jugadorDiv.style.bottom=160-jugador.difAltura+(casilla-35)*78+"px";
                    jugador.tramo=6;
                }
                
                
            }
            
            else {
                if (casilla==30){//casilla de puente
                    jugador.casilla=3;
                    jugadorDiv.style.bottom=80-jugador.difAltura+"px";
                    jugadorDiv.style.left=250+"px";
                    jugador.tramo=1;
                    document.getElementById("sonidoPuente").play();
                    alert("Lo siento, te has caido por el puente!");
                }
                else if (casilla==32){  //casilla de oca
                    jugador.casilla=39;
                    jugadorDiv.style.bottom=(478-jugador.difAltura)+"px";
                    jugadorDiv.style.left=(644-68)+"px";
                    jugador.tramo=6;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                else{//sigue en tramo 6
                    jugadorDiv.style.left=posicionXjugador+(dadoNum*68)+"px";
                }
                
                
            }
            

        break;

        case 6: //TRAMO 6 TABLERO VERTICAL
            jugador.casilla+=dadoNum;
            casilla=jugador.casilla;
            if (casilla>=39){
                
                if (casilla==39){//casilla de oca
                    jugador.casilla=50;
                    jugadorDiv.style.bottom=240-jugador.difAltura+"px";
                    jugadorDiv.style.left=320+"px";
                    jugador.tramo=9;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                
                else {
                jugadorDiv.style.bottom=478-jugador.difAltura+"px";+"px";
                jugadorDiv.style.left=(580-(casilla-39)*68)+"px";
                jugador.tramo=7;
                }
            }
        
            else {
                if (casilla==27){//casilla de oca
                    jugador.casilla=32;
                    jugadorDiv.style.bottom=160-jugador.difAltura+"px";
                    jugadorDiv.style.left=posicionXjugador+(68*4)+"px";
                    jugador.tramo=5;
                    document.getElementById("sonidoOca").play();
                    alert("De oca a oca y tiro porque me toca");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                
                else{
                    jugadorDiv.style.left=580+"px";
                    jugadorDiv.style.bottom=posicionYjugador+(78*dadoNum)+"px";
                }
            }
        break;

        case 7://TRAMO 7 TABLERO HORIZONTAL
            jugador.casilla+=dadoNum;
            casilla=jugador.casilla;        
            if(casilla>45){//pasa del tramo 7
                if (casilla>48){//se pasa al tramo 9
                    
                    if (casilla==50){//casilla de oca
                        jugadorDiv.style.left=316+"px";
                        jugadorDiv.style.bottom=247-jugador.difAltura+"px";
                        jugador.tramo=9;
                        document.getElementById("sonidoOca").play();
                        alert("Lo siento, no hay más ocas pero repites con los dados!");
                        let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                        ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                        player--;
                    }
                    else{//se queda en tramo 9
                        jugadorDiv.style.bottom=243-jugador.difAltura+"px";
                        jugadorDiv.style.left=177+(casilla-48)*68+"px";
                        jugador.tramo=9;
                    }
                    
                }
                else{ //se queda en el tramo 8
                        jugadorDiv.style.bottom=(483-jugador.difAltura)-(casilla-45)*78+"px";
                        jugadorDiv.style.left=177+"px";
                        jugador.tramo=8;
                }   
            }
            else {// se queda en el tramo 7
                jugadorDiv.style.bottom=(488-jugador.difAltura)+"px";
                jugadorDiv.style.left=posicionXjugador-(dadoNum*68)+"px";
            }
        break;
        case 8://TRAMO 8 TABLERO VERTICAL
            jugador.casilla+=dadoNum;
            casilla=jugador.casilla;        
            if(casilla>48){//se pasa al tramo 9
                if (casilla==50){//casilla de oca
                    jugadorDiv.style.left=316+"px";
                    jugadorDiv.style.bottom=247-jugador.difAltura+"px";
                    jugador.tramo=9;
                    document.getElementById("sonidoOca").play();
                    alert("Lo siento, no hay más ocas pero repites con los dados!");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                else if (casilla>53){//se pasa al tramo 10
                    jugadorDiv.style.bottom=(250-jugador.difAltura)+(casilla-53)*78+"px";
                    jugadorDiv.style.left=514+"px";
                    jugador.tramo=10;
                }
                else{ //se queda en el tramo 9
                    jugadorDiv.style.left=180+(casilla-48)*68+"px";
                    jugadorDiv.style.bottom=248-jugador.difAltura+"px";
                    jugador.tramo=9;
                }
            }
            else {
                jugadorDiv.style.bottom=posicionYjugador-(dadoNum*78)+"px";
                jugadorDiv.style.left=180+"px";
            }
        break;
        case 9://TRAMO 9 TABLERO HORIZONTAL
            jugador.casilla+=dadoNum;
            casilla=jugador.casilla;
            if (casilla>53){ //entra en tramo 10
                if (casilla>=55){ //entramos en tramo 11
                    if (casilla==55){//casilla de puente
                        jugador.casilla=40;
                        jugadorDiv.style.bottom=483-jugador.difAltura+"px";
                        jugadorDiv.style.left=507+"px";
                        jugador.tramo=7;
                        document.getElementById("sonidoPuente").play();
                        alert("Lo siento, has subido por el puente!");
                    }
                    else{ //se queda en tramo 11
                        jugadorDiv.style.bottom=403-jugador.difAltura+"px";
                        jugadorDiv.style.left=507-(casilla-55)*68+"px";
                        jugador.tramo=11;


                    }
                }
                else { // se queda en tramo 10
                    jugadorDiv.style.bottom=248-jugador.difAltura+(casilla-53)*78+"px";
                    jugadorDiv.style.left=510+"px";
                    jugador.tramo=10;    

                }
            }
            else{ //se queda en tramo 9
                if (casilla==50){//casilla de oca
                    jugadorDiv.style.left=316+"px";
                    jugadorDiv.style.bottom=247-jugador.difAltura+"px";
                    jugador.tramo=9;
                    document.getElementById("sonidoOca").play();
                    alert("Lo siento, no hay más ocas pero repites con los dados!");
                    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
                    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
                    player--;
                }
                else{
                    jugadorDiv.style.bottom=247-jugador.difAltura+"px";
                    jugadorDiv.style.left=posicionXjugador+(dadoNum*68)+"px";
                }
            }
        break;
        case 10://TRAMO 10 TABLERO VERTICAL
            jugador.casilla+=dadoNum;
            casilla=jugador.casilla;
            if (casilla>=55){//se pasa del tramo 10
                if (casilla==55){//casilla de puente
                    jugador.casilla=40;
                    jugadorDiv.style.bottom=483-jugador.difAltura+"px";
                    jugadorDiv.style.left=507+"px";
                    jugador.tramo=7;
                    document.getElementById("sonidoPuente").play();
                    alert("Lo siento, has subido por el puente!");
                }
                else if (casilla>59){//llega a meta
                    jugadorDiv.style.bottom=322-jugador.difAltura+"px";
                    jugadorDiv.style.left=320+"px";
                    jugador.partida=false;
                    document.getElementById("sonidoAplauso").play();
                    alert("Enhorabuena, llegaste a meta!");
                    window.ganadoresList.push(jugador);


                }
                else{ //se queda en tramo 11
                    jugadorDiv.style.bottom=403-jugador.difAltura+"px";
                    jugadorDiv.style.left=507-(casilla-55)*68+"px";
                    jugador.tramo=11;


                }
            }
            else {//se queda en el tramo 10
                jugadorDiv.style.bottom=posicionYjugador+(dadoNum*78)+"px";
                jugadorDiv.style.left=posicionXjugador+"px";
                jugador.tramo=10;
            }   
        break;
        case 11:
            jugador.casilla+=dadoNum;
            casilla=jugador.casilla;
            if (casilla>59){//llega a meta
                jugadorDiv.style.bottom=322-jugador.difAltura+"px";
                jugadorDiv.style.left=320+"px";
                jugador.partida=false;
                document.getElementById("sonidoAplauso").play();
                alert("Enhorabuena, llegaste a meta!");
                window.ganadoresList.push(jugador);

            }
            else{//se queda en tramo 11
                jugadorDiv.style.bottom=403-jugador.difAltura+"px";
                jugadorDiv.style.left=posicionXjugador-dadoNum*68+"px";

            }

    }; //finalizacion switch 267
    
    let ponerCasilla=document.getElementById("datoCasilla"+player);//ponemos en la tabla la casilla actual del jugador
    ponerCasilla.textContent=window.jugadoresList[player-1].casilla;
    
    },2000); //finalizacion setTimeOut 260
    setTimeout(function(){siguienteJugador(player);},3000);//pasamos al siguiente jugador tras 3 segundos
    
    }; //cierre de la llave onclick 246
    
    
   

}; //fin funcion tirarDados 237

function siguienteJugador(player){
    player+=1;
    var a =0;
    for(let i=0;i<window.jugadoresList.length;i++){ //comprobamos si quedan jugarores sin terminar la partida
        if(window.jugadoresList[i].partida){
            continue;
        }
        else{
            a++; //si el jugador ha terminado la partida (partida=false), sumamos a++
        }
    }
    if (a==window.jugadoresList.length){//si todos los jugadores han terminado la partida
        finPartida();
    }
    else{ //si queda algún jugador por terminar

        if(window.jugadoresList.length>=player){//comprobamos el número de jugadores por si volvemos al jugador 1
            if (window.jugadoresList[player-1].partida){//comprobamos si no ha terminado la partida;
                tirarDados(player);//tira los dados
            }
            else{//si ha terminado partida
                
                siguienteJugador(player);

            }
        }
        else{//si le toca de nuevo al jugador 1
            siguienteJugador(0);
        }
    }
}

function finPartida(){ //se activa en la funcion siguiente jugador, cuando todos los jugadores tienen su propiedad partida como false.
    $(".tablero").hide();
    let ganadores=document.getElementById("ganadores");
    var divFinal=document.createElement("ol");
    for(let i=0;i<window.ganadoresList.length;i++){
        let posicion=document.createElement("li");
        posicion.innerHTML=window.ganadoresList[i].nombre;
        divFinal.appendChild(posicion);
        
    }
    ganadores.appendChild(divFinal);
}

function reset(){

      for (let i =0;i<window.jugadoresList.length;i++){
        window.jugadoresList[i].tramo=1;
        window.jugadoresList[i].casilla=0;
        let jugadorDiv=document.getElementById("jugador"+(i+1));
        jugadorDiv.style.left="52px";
        jugadorDiv.style.bottom=71-window.jugadoresList[i].difAltura+"px";
        let datocasilla=document.getElementById("datoCasilla"+(i+1));
        datocasilla.innerHTML="0";

      }
      tirarDados(1);
    }
