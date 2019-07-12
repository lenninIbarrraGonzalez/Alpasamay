const audios = document.getElementsByClassName("audio");
const bien = document.getElementsByClassName("bien");

const jungleBn = document.getElementsByClassName("jungleBn");
const jungleColor = document.getElementsByClassName("jungleColor");

var bien_ubicadas = 0;
var ban_bien_ubicadas = 0;
var verClass;
var On;
// El evento onMouseDown sucede cuando el usuario pulsa un botón del ratón.
// El evento onMouseMove tiene lugar cuando el usuario mueve el cursor del ratón.
// El evento onMouseUp se genera cuando se deja de pulsar un botón del ratón.
//guardamos las plabras en idioma
var parts_clothing = document.getElementsByClassName('parts');
// console.log("esto tiene parts_clothing", parts_clothing);


// const parts_fichas = document.getElementsByClassName('parts');
// console.log("esto tiene parts_fichas", parts_clothing);

//guardamos los elemento en blanco y negro
var parts_colors = document.getElementsByClassName('clothing');
//console.log("parts_colors", parts_colors);
//guardamos los elementos copia a color 
var coloreadas = document.getElementsByClassName('colorear');

//medida de ancho y alto de cada pieza en los arrays

// //ancho
var tamWidth = [];
// //alto
var tamHeight = [];
//debugger
for(var i=0; i<17; i++){
    tamWidth[i]=141;
    tamHeight[i]=40
}

//posición en X
var posX = [115, 320, 522, 701, 115, 320, 522, 701, 115, 373, 522, 701, 115, 373, 522, 701];
//posición en Y 475
var posY = [477, 477, 477, 477, 519, 519, 519, 519, 477, 477, 477, 477, 519, 519, 519, 519];

for(var i=0; i<parts_clothing.length; i++){
    
    //agregamos con setAtrribute el ancho y alto de las imagenes en partes
    parts_clothing[i].setAttribute("width", tamWidth[i]);
    parts_clothing[i].setAttribute("height", tamHeight[i]);

    //agregamos la posición de forma aleatoria sin sobreponerse a la imagen
    // parts_clothing[i].setAttribute("x", Math.floor((Math.random()*10+1)));
    // parts_clothing[i].setAttribute("y", Math.floor((Math.random()*409+1)));+
    parts_clothing[i].setAttribute("x", posX[i]);
    parts_clothing[i].setAttribute("y", posY[i]);
    if(i < 8){
        parts_clothing[i].style.visibility="visible";
    }
    else{
        parts_clothing[i].style.visibility="hidden";
    }
    parts_clothing[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}
// mousedown se activa cuando el botón de un dispositivo apuntador 
//(usualmente el botón de un ratón) es presionado en un elemento.

//inicializamos variables para almacenar información del movimiento
//current position->posicion actual
var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPostX = 0;
var currentPostY = 0;
var min = 0;
var max = 27;

function visibility() {
    // parts_clothing = parts_fichas;
    // console.log("esto tiene parts_clothing en visibility", parts_clothing);
        for(let i=0; i<9; i++){
            parts_clothing[i].style.visibility="visible";
        }
}
//console.log("SECUENCIA", secuenciaVisibility);

function seleccionarElemento(evt) {
    // debugger
    //almacenamos la información de la pieza que dispara el evento
    elementSelect = evt.target;
    //transferimos el elemento seleccionado
    elementSelect = reordenar(evt);
    //almacenamos la info de X y Y que se disparo en el evento
    //evt.clientX->obtiene la posicion cordenada x ydel clic dentro en el evento o wind
    currentX = evt.clientX;
    currentY = evt.clientY;
    //console.log("x: " + currentX + "y: " + currentY  )

    currentPostX = parseFloat(elementSelect.getAttribute("x"));
    currentPostY = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt, id) {
    // console.log("imprimiendo evt en mover elemento", evt);
    // console.log("imprimiendo el id", evt.target.id);
    var idFicha = evt.target.id;
    //calculamos la distancia recorrida (pos ant - pos actual)
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;

    //para que el elemento se movilice la misma distancia que se ha  movido el mouse agregamos esta diferencia
    // a us posicion almacenada
    currentPostX = currentPostX + dx;
    currentPostY = currentPostY + dy;

    //actualizamos la posicion del elemento
    elementSelect.setAttribute("x", currentPostX);
    elementSelect.setAttribute("y", currentPostY);

    //guardamos la posición del mouse
    currentX = evt.clientX;
    currentY = evt.clientY;

    //para solucionar el problema que la ficha se quedaba pegada al mouse
    //El evento onMouseOver sucede cada vez que el cursor del ratón 
    //pasa por encima de un elemento de la página, mientras que el 
    //evento onMouseOut tiene lugar cuando sale de dicho elemento.
    //El evento onMouseUp se genera cuando se deja de pulsar un botón del ratón. suelto el click

    elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
    
    iman(idFicha);
}

function deseleccionarElemento() {
    testing();
    if(elementSelect != 0){
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }
}

//creamos una variable global que guardara todo el entorno grafico
var entorno = document.getElementById('lienzo');

function reordenar(evt){
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    //mando a la funcion animar fondo
    animatioTab(id);

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;

}
// ++++++++++++++++++++++++++
function animatioTab(id) {
    switch(id){
        case '0': parts_colors[0].style.opacity="0";
                  coloreadas[0].style.opacity="1";
                  coloreadas[0].classList.add('prueba');
                //   audios[0].play();
                  setTimeout(()=>verificarColor(id), 1600);
        return;
        case '1': coloreadas[1].style.opacity="1";
                  coloreadas[1].classList.add('prueba');
                  parts_colors[1].style.opacity="0";
                //   audios[1].play();
                  setTimeout(()=>verificarColor(id), 1600);
        return;
        case '2': coloreadas[2].style.opacity="1";
                  coloreadas[2].classList.add('prueba');
                  parts_colors[2].style.opacity="0";
                //   audios[2].play();
                  setTimeout(()=>verificarColor(id), 1600);
        return;
         case '3': coloreadas[3].style.opacity="1";
                   coloreadas[3].classList.add('prueba');
                   parts_colors[3].style.opacity="0";
                //    audios[3].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '4': coloreadas[4].style.opacity="1";
                   coloreadas[4].classList.add('prueba');
                   parts_colors[4].style.opacity="0";
                //    audios[4].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '5': coloreadas[5].style.opacity="1";
                   coloreadas[5].classList.add('prueba');
                   parts_colors[5].style.opacity="0";
                //    audios[5].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '6': coloreadas[6].style.opacity="1";
                   coloreadas[6].classList.add('prueba');
                   parts_colors[6].style.opacity="0";
                //    audios[6].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '7': coloreadas[7].style.opacity="1";
                   coloreadas[7].classList.add('prueba');
                   parts_colors[7].style.opacity="0";
                //    audios[7].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '8': coloreadas[8].style.opacity="1";
                   coloreadas[8].classList.add('prueba');
                   parts_colors[8].style.opacity="0";
                //    audios[8].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '9': coloreadas[9].style.opacity="1";
                   coloreadas[9].classList.add('prueba');
                   parts_colors[9].style.opacity="0";
                //    audios[9].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '10': coloreadas[10].style.opacity="1";
                    coloreadas[10].classList.add('prueba');
                    parts_colors[10].style.opacity="0";
                    // audios[10].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '11': coloreadas[11].style.opacity="1";
                    coloreadas[11].classList.add('prueba');
                    parts_colors[11].style.opacity="0";
                    // audios[11].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '12': coloreadas[12].style.opacity="1";
                    coloreadas[12].classList.add('prueba');
                    parts_colors[12].style.opacity="0";
                    // audios[12].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '13': coloreadas[13].style.opacity="1";
                    coloreadas[13].classList.add('prueba');
                    parts_colors[13].style.opacity="0";
                    // audios[13].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '14': coloreadas[14].style.opacity="1";
                    coloreadas[14].classList.add('prueba');
                    parts_colors[14].style.opacity="0";
                    // audios[14].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '15': coloreadas[15].style.opacity="1";
                    coloreadas[15].classList.add('prueba');
                    parts_colors[15].style.opacity="0";
                    // audios[15].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '16': coloreadas[16].style.opacity="1";
                    coloreadas[16].classList.add('prueba');
                    parts_colors[16].style.opacity="0";
                    // audios[16].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;

    }
}

function verificarColor(id){
    //debugger;
    On = parts_colors[id].classList.contains("coloresON");
    // console.log("EL valor de ON es: ", On);
    if(On === true){
        // console.log("Entro al if del true del On llamo a la función ValidadVisibility");
        // // var sum = 1;
        // validarVisibilty();
        testing();
    }
    else{
        // console.log("NO entro en true paso por el else, no tiene la clase, el valor de On es:", On);
        removeClass(id);
    }
    return;
}

function removeClass(id){
    switch(id){
        case '0': coloreadas[0].style.opacity="0";
                  coloreadas[0].classList.remove('prueba');
                  parts_colors[0].style.opacity="1";
        return;
        case '1': coloreadas[1].style.opacity="0";
                  coloreadas[1].classList.remove('prueba');
                  parts_colors[1].style.opacity="1";
        return;
        case '2': coloreadas[2].style.opacity="0";
                  coloreadas[2].classList.remove('prueba');
                  parts_colors[2].style.opacity="1";
        return;
        case '3': coloreadas[3].style.opacity="0";
                  coloreadas[3].classList.remove('prueba');
                  parts_colors[3].style.opacity="1";
        return;
        case '4': coloreadas[4].style.opacity="0";
                  coloreadas[4].classList.remove('prueba');
                  parts_colors[4].style.opacity="1";
        return;
        case '5': coloreadas[5].style.opacity="0";
                  coloreadas[5].classList.remove('prueba');
                  parts_colors[5].style.opacity="1";
        return;
        case '6': coloreadas[6].style.opacity="0";
                  coloreadas[6].classList.remove('prueba');
                  parts_colors[6].style.opacity="1";
        return;
        case '7': coloreadas[7].style.opacity="0";
                  coloreadas[7].classList.remove('prueba');
                  parts_colors[7].style.opacity="1";
        return;
        case '8': coloreadas[8].style.opacity="0";
                  coloreadas[8].classList.remove('prueba');
                  parts_colors[8].style.opacity="1";
        return;
        case '9': coloreadas[9].style.opacity="0";
                  coloreadas[9].classList.remove('prueba');
                  parts_colors[9].style.opacity="1";
        return;
        case '10': coloreadas[10].style.opacity="0";
                   coloreadas[10].classList.remove('prueba');
                   parts_colors[10].style.opacity="1";
        return;
        case '11': coloreadas[11].style.opacity="0";
                   coloreadas[11].classList.remove('prueba');
                   parts_colors[11].style.opacity="1";
        return;
        case '12': coloreadas[12].style.opacity="0";
                   coloreadas[12].classList.remove('prueba');
                   parts_colors[12].style.opacity="1";
        return;
        case '13': coloreadas[13].style.opacity="0";
                   coloreadas[13].classList.remove('prueba');
                   parts_colors[13].style.opacity="1";
        return;
        case '14': coloreadas[14].style.opacity="0";
                   coloreadas[14].classList.remove('prueba');
                   parts_colors[14].style.opacity="1";
        return;
        case '15': coloreadas[15].style.opacity="0";
                   coloreadas[15].classList.remove('prueba');
                   parts_colors[15].style.opacity="1";
        return;
        case'16': coloreadas[16].style.opacity="0";
                  coloreadas[16].classList.remove('prueba');
                  parts_colors[16].style.opacity="1";
        return
        
    }
}

// ******************
// posiciones originales para el iman
//ankushi 555 282
//GEniu 589 144
//ufa 43 81
// kanungu 774 114

// kanangunchero 477 388
//kukiuchu  116 235
//naefasw 133 381
//uma 425 94

//kuye 291 125 
//sanganga 362 388 
//swatsa 400 317 
//amba 815 319

//chivilla 671 336
// feriri 615 390
//churusi 717 395
//asamea 276 352


var origX = [555, 589, 43, 774,
             477, 116, 133, 425,
             291, 362, 400, 815,
             671, 615, 717, 276];
var origY = [282, 144, 81, 114,
             388, 235, 381, 94, 
             125, 388, 317, 319,
             336, 390, 395, 352];

function iman(idFicha) {
    // console.log("idFicha en el iman", idFicha);
    // console.log("esto es lo que tiene parts_clothing", parts_clothing);
    for(var i=0; i<parts_clothing.length; i++){
        if(Math.abs(currentPostX-origX[i])<30 && Math.abs(currentPostY-origY[i])<30){
            // alert("Entro al primer if");
            console.log("este es el valor de i", i);
            if(idFicha == i){
            //     alert("Entro al segundo if");
                elementSelect.setAttribute("x", origX[i]);
                elementSelect.setAttribute("y", origY[i]); 
                // elementSelect.style.opacity="0";
                elementSelect.classList.add("parts_clotihinOff");
                pintarFondo(idFicha);
            }
        }  
    }
}

function pintarFondo(idFicha){
    switch(idFicha){
        case '0': coloreadas[0].style.opacity="1";
                  parts_colors[0].style.opacity="0";
                  parts_colors[0].classList.add("coloresON");
                  
        return;
        case '1': coloreadas[1].style.opacity="1";
                  parts_colors[1].style.opacity="0";
                  parts_colors[1].classList.add("coloresON");
        return;
        case '2': coloreadas[2].style.opacity="1";
                  parts_colors[2].style.opacity="0";
                  parts_colors[2].classList.add("coloresON");
        return;
         case '3': coloreadas[3].style.opacity="1";
                   parts_colors[3].style.opacity="0";
                   parts_colors[3].classList.add("coloresON");
        return;
         case '4': coloreadas[4].style.opacity="1";
                   parts_colors[4].style.opacity="0";
                   parts_colors[4].classList.add("coloresON");
        return;
         case '5' :  parts_colors[5].style.opacity="0"         
                     coloreadas[5].style.opacity="1";
                     parts_colors[5].classList.add("coloresON");
        return;
         case '6': coloreadas[6].style.opacity="1";
                   parts_colors[6].style.opacity="0";
                   parts_colors[6].classList.add("coloresON");
        return;
         case '7': coloreadas[7].style.opacity="1";
                   parts_colors[7].style.opacity="0";
                   parts_colors[7].classList.add("coloresON");
        return;
         case '8': coloreadas[8].style.opacity="1";
                   parts_colors[8].style.opacity="0";
                   parts_colors[8].classList.add("coloresON");
        return;
         case '9': coloreadas[9].style.opacity="1";
                   parts_colors[9].style.opacity="0";
                   parts_colors[9].classList.add("coloresON");
        return;
         case '10': coloreadas[10].style.opacity="1";
                    parts_colors[10].style.opacity="0";
                    parts_colors[10].classList.add("coloresON");
        return;
         case '11': coloreadas[11].style.opacity="1";
                    parts_colors[11].style.opacity="0";
                    parts_colors[11].classList.add("coloresON");
        return;
         case '12': coloreadas[12].style.opacity="1";
                    parts_colors[12].style.opacity="0";
                    parts_colors[12].classList.add("coloresON");
        return;
         case '13': coloreadas[13].style.opacity="1";
                    parts_colors[13].style.opacity="0";
                    parts_colors[13].classList.add("coloresON");
        return;
         case '14': coloreadas[14].style.opacity="1";
                    parts_colors[14].style.opacity="0";
                    parts_colors[14].classList.add("coloresON");
        return;
         case '15': coloreadas[15].style.opacity="1";
                    parts_colors[15].style.opacity="0";
                    parts_colors[15].classList.add("coloresON");
        return;
         case '16': coloreadas[16].style.opacity="1";
                    parts_colors[16].style.opacity="0";
                    parts_colors[16].classList.add("coloresON");
        return;
    }
}


var fondo = document.getElementById("audio_fondo");
var fondo2 = document.getElementById("ifremaAudio");

function testing(){
    var sum = 0;
    for(let i=0; i < parts_clothing.length; i++){
        verClass = parts_clothing[i].classList.contains("parts_clotihinOff");
        if(verClass === true){
            sum +=1;
            console.log("sum tiene", sum);
        }

    }
    if(sum === 16){
        setTimeout(()=>gameCompleted(), 1200);
    }
    if(sum === 8){
        visibility();
    }
}   

// var felicitacion = document.getElementById("bien");

function gameCompleted(){
    console.log("gano");
    // fondo.pause();
    //fondo2.pause();
    // console.log("estotiene jungleBn", jungleBn);
    // console.log("esto tiene jungleColor", jungleColor);
   
    for(let cont = 0; cont  < jungleBn.length; cont++){
        jungleBn[cont].style.opacity = "0";
        jungleColor[cont].style.opacity = "1";
    }
   
    // bien[0].play();
}


//posiciones de las figuras en el lienzo
//kanungu 711 0
// Amba 786 274
// Ankhusi 536 270 
// Asamea 260 278
// Chivilla 666 282
// Churusi 733 348
// Feriri 623 339
//Geniu 555 105
////kanunguechu 490 303
//kukiuchu 42 165
//kuye 258 80
//Naefasw 118 310
//Sanganga 353 351
//Swtsha 384 279
//Ufa-yage-161 - 196
//Uma 380 16