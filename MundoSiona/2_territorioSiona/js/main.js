const audios = document.getElementsByClassName("audio");

const winerColor = document.getElementsByClassName("colorearVacio");
const winerBn = document.getElementsByClassName("clothingVacio");

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

//ancho
var tamWidth = [];
//alto
var tamHeight = [];

for(var i=0; i<=parts_clothing.length; i++){
    tamWidth[i]=141;
    tamHeight[i]=40
}

//posición en X
var posX = [115, 274, 432, 589, 733, 115, 274, 432, 589, 733,
            115, 274, 432, 589, 733, 115, 274, 432, 589, 733,
            115, 274, 432, 589, 733, 115, 274, 432, 589,733, 115];
//posición en Y 475
var posY = [477, 477, 477, 477, 477, 519, 519, 519, 519, 519,
            477, 477, 477, 477, 477, 519, 519, 519, 519, 519, 
            477, 477, 477, 477, 477, 519, 519, 519, 519, 519, 477];

for(var i=0; i<parts_clothing.length; i++){
    
    //agregamos con setAtrribute el ancho y alto de las imagenes en partes
    parts_clothing[i].setAttribute("width", tamWidth[i]);
    parts_clothing[i].setAttribute("height", tamHeight[i]);

    //agregamos la posición de forma aleatoria sin sobreponerse a la imagen
    // parts_clothing[i].setAttribute("x", Math.floor((Math.random()*10+1)));
    // parts_clothing[i].setAttribute("y", Math.floor((Math.random()*409+1)));+
    parts_clothing[i].setAttribute("x", posX[i]);
    parts_clothing[i].setAttribute("y", posY[i]);
    if(i < 10){
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
        for(let i=0; i<10; i++){
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
                  audios[0].play();
                  setTimeout(()=>verificarColor(id), 1600);
        return;
        case '1': coloreadas[1].style.opacity="1";
                  coloreadas[1].classList.add('prueba');
                  parts_colors[1].style.opacity="0";
                  audios[1].play();
                  setTimeout(()=>verificarColor(id), 1600);
        return;
        case '2': coloreadas[2].style.opacity="1";
                  coloreadas[2].classList.add('prueba');
                  parts_colors[2].style.opacity="0";
                  audios[2].play();
                  setTimeout(()=>verificarColor(id), 1600);
        return;
         case '3': coloreadas[3].style.opacity="1";
                   coloreadas[3].classList.add('prueba');
                   parts_colors[3].style.opacity="0";
                   audios[3].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '4': coloreadas[4].style.opacity="1";
                   coloreadas[4].classList.add('prueba');
                   parts_colors[4].style.opacity="0";
                   audios[4].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '5': coloreadas[5].style.opacity="1";
                   coloreadas[5].classList.add('prueba');
                   parts_colors[5].style.opacity="0";
                   audios[5].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '6': coloreadas[6].style.opacity="1";
                   coloreadas[6].classList.add('prueba');
                   parts_colors[6].style.opacity="0";
                   audios[6].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '7': coloreadas[7].style.opacity="1";
                   coloreadas[7].classList.add('prueba');
                   parts_colors[7].style.opacity="0";
                   audios[7].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '8': coloreadas[8].style.opacity="1";
                   coloreadas[8].classList.add('prueba');
                   parts_colors[8].style.opacity="0";
                   audios[8].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '9': coloreadas[9].style.opacity="1";
                   coloreadas[9].classList.add('prueba');
                   parts_colors[9].style.opacity="0";
                   audios[9].play();
                   setTimeout(()=>verificarColor(id), 1600);
        return;
         case '10': coloreadas[10].style.opacity="1";
                    coloreadas[10].classList.add('prueba');
                    parts_colors[10].style.opacity="0";
                    audios[10].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '11': coloreadas[11].style.opacity="1";
                    coloreadas[11].classList.add('prueba');
                    parts_colors[11].style.opacity="0";
                    audios[11].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '12': coloreadas[12].style.opacity="1";
                    coloreadas[12].classList.add('prueba');
                    parts_colors[12].style.opacity="0";
                    audios[12].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '13': coloreadas[13].style.opacity="1";
                    coloreadas[13].classList.add('prueba');
                    parts_colors[13].style.opacity="0";
                    audios[13].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '14': coloreadas[14].style.opacity="1";
                    coloreadas[14].classList.add('prueba');
                    parts_colors[14].style.opacity="0";
                    audios[14].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '15': coloreadas[15].style.opacity="1";
                    coloreadas[15].classList.add('prueba');
                    parts_colors[15].style.opacity="0";
                    audios[15].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '16': coloreadas[16].style.opacity="1";
                    coloreadas[16].classList.add('prueba');
                    parts_colors[16].style.opacity="0";
                    audios[16].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '17': coloreadas[17].style.opacity="1";
                    coloreadas[17].classList.add('prueba');
                    parts_colors[17].style.opacity="0";
                    audios[17].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '18': coloreadas[18].style.opacity="1";
                    coloreadas[18].classList.add('prueba');
                    parts_colors[18].style.opacity="0";
                    audios[18].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '19': coloreadas[19].style.opacity="1";
                    coloreadas[19].classList.add('prueba');
                    parts_colors[19].style.opacity="0";
                    audios[19].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '20': coloreadas[20].style.opacity="1";
                    coloreadas[20].classList.add('prueba');
                    parts_colors[20].style.opacity="0";
                    audios[20].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '21': coloreadas[21].style.opacity="1";
                    coloreadas[21].classList.add('prueba');
                    parts_colors[21].style.opacity="0";
                    audios[21].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '22': coloreadas[22].style.opacity="1";
                    coloreadas[22].classList.add('prueba');
                    parts_colors[22].style.opacity="0";
                    audios[22].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '23': coloreadas[23].style.opacity="1";
                    coloreadas[23].classList.add('prueba');
                    parts_colors[23].style.opacity="0";
                    audios[23].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '24': coloreadas[24].style.opacity="1";
                    coloreadas[24].classList.add('prueba');
                    parts_colors[24].style.opacity="0";
                    audios[24].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '25': coloreadas[25].style.opacity="1";
                    coloreadas[25].classList.add('prueba');
                    parts_colors[25].style.opacity="0";
                    audios[25].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '26': coloreadas[26].style.opacity="1";
                    coloreadas[26].classList.add('prueba');
                    parts_colors[26].style.opacity="0";
                    audios[26].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '27': coloreadas[27].style.opacity="1";
                    coloreadas[27].classList.add('prueba');
                    parts_colors[27].style.opacity="0";
                    audios[27].play();
                    setTimeout(()=>verificarColor(id), 1600);
        return;
         case '28': coloreadas[28].style.opacity="1";
                    coloreadas[28].classList.add('prueba');
                    parts_colors[28].style.opacity="0";
                    audios[28].play();
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
        case '17': coloreadas[17].style.opacity="0";
                   coloreadas[17].classList.remove('prueba');
                   parts_colors[17].style.opacity="1";
        return;
        case '18': coloreadas[18].style.opacity="0";
                   coloreadas[18].classList.remove('prueba');
                   parts_colors[18].style.opacity="1";
        return;
        case '19': coloreadas[19].style.opacity="0";
                   coloreadas[19].classList.remove('prueba');
                   parts_colors[19].style.opacity="1";
        return;
        case '20': coloreadas[20].style.opacity="0";
                   coloreadas[20].classList.remove('prueba');
                   parts_colors[20].style.opacity="1";
        return;
        case '21': coloreadas[21].style.opacity="0";
                   coloreadas[21].classList.remove('prueba');
                   parts_colors[21].style.opacity="1";
        return;
        case '22': coloreadas[22].style.opacity="0";
                   coloreadas[22].classList.remove('prueba');
                   parts_colors[22].style.opacity="1";
        return;
        case '23': coloreadas[23].style.opacity="0";
                   coloreadas[23].classList.remove('prueba');
                   parts_colors[23].style.opacity="1";
        return;
        case '24': coloreadas[24].style.opacity="0";
                   coloreadas[24].classList.remove('prueba');
                   parts_colors[24].style.opacity="1";
        return;
        case '25': coloreadas[25].style.opacity="0";
                   coloreadas[25].classList.remove('prueba');
                   parts_colors[25].style.opacity="1";
        return;
        case '26': coloreadas[26].style.opacity="0";
                   coloreadas[26].classList.remove('prueba');
                   parts_colors[26].style.opacity="1";
        return;
        case '27': coloreadas[27].style.opacity="0";
                   coloreadas[27].classList.remove('prueba');
                   parts_colors[27].style.opacity="1";
        return;
        case '28': coloreadas[28].style.opacity="0";
                   coloreadas[28].classList.remove('prueba');
                   parts_colors[28].style.opacity="1";
        return;
        
    }
}

// ******************
//posiciones originales para el iman

//rio-grande jaiziaya  473 308
//camino ma 199 383
//casa cuee 85 244
//aramadillo jamu 707 395
//bagre pua 526 327

//boa añape que 812 410
//boruga seme 697 322
//caiman bee 553 402
//canoa yogu 297 394
//marrano uchi 57 373

//chagra zion 295 278
//colibri mimi 893 152
//danta. ueequ 772 313
//guacamayo masenge 329 50
//guara gue 792 243 

//lagartija toro 652 356
//loro ueco 920 316
//luna ñañague 776 13
//mico naso 682 252
// 280 23


//pato bete 274 341
//picalon benesnsa 436 369
//rana jojo 91 415
//sol ensegue 97 20
//tortuga 381 288 go

//venado ñama 846 343
//gallo 86 328 curago 
//abuela auera 152 329
//abuelo taita 197 335



var origX = [473,199,85,707,526,
             812,697,553,297,57,


             295,893,772,329,792,
             652,920,776,682,280,


             274,436,91,97,381,
             846,86,152,197];
var origY = [308,383,244,395,327,
             410,322,402,394,373,


             278,152,313,50,243,
             356,316,13,252,23,

           
             341,369,415,20,288,
             343,328,329,335];

function iman(idFicha) {
    // console.log("idFicha en el iman", idFicha);
    // console.log("esto es lo que tiene parts_clothing", parts_clothing);
    for(var i=0; i<parts_clothing.length; i++){
        if(Math.abs(currentPostX-origX[i])<30 && Math.abs(currentPostY-origY[i])<30){
            // alert("Entro al primer if");
            // console.log("este es el valor de i", i);
            if(idFicha == i){
                // alert("Entro al segundo if");
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
         case '17': coloreadas[17].style.opacity="1";
                    parts_colors[17].style.opacity="0";
                    parts_colors[17].classList.add("coloresON");
        return;
         case '18': coloreadas[18].style.opacity="1";
                    parts_colors[18].style.opacity="0";
                    parts_colors[18].classList.add("coloresON");
        return;
         case '19': coloreadas[19].style.opacity="1";
                    parts_colors[19].style.opacity="0";
                    parts_colors[19].classList.add("coloresON");
        return;
         case '20': coloreadas[20].style.opacity="1";
                    parts_colors[20].style.opacity="0";
                    parts_colors[20].classList.add("coloresON");
        return;
         case '21': coloreadas[21].style.opacity="1";
                    parts_colors[21].style.opacity="0";
                    parts_colors[21].classList.add("coloresON");
        return;
         case '22' : coloreadas[22].style.opacity="1";
                    parts_colors[22].style.opacity="0";
                    parts_colors[22].classList.add("coloresON");
        return;
         case '23': coloreadas[23].style.opacity="1";
                    parts_colors[23].style.opacity="0";
                    parts_colors[23].classList.add("coloresON");
        return;
         case '24': coloreadas[24].style.opacity="1";
                    parts_colors[24].style.opacity="0";
                    parts_colors[24].classList.add("coloresON");
        return;
         case '25': coloreadas[25].style.opacity="1";
                    parts_colors[25].style.opacity="0";
                    parts_colors[25].classList.add("coloresON");
        return;
         case '26': coloreadas[26].style.opacity="1";
                    parts_colors[26].style.opacity="0";
                    parts_colors[26].classList.add("coloresON");
        return;
         case '27': coloreadas[27].style.opacity="1";
                    parts_colors[27].style.opacity="0";
                    parts_colors[27].classList.add("coloresON");
        return;
         case '28': coloreadas[28].style.opacity="1";
                    parts_colors[28].style.opacity="0";
                    parts_colors[28].classList.add("coloresON");
        return;
        
    }
}

var win = document.getElementById("bien");
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
    if(sum === 29){
        setTimeout(()=>gameCompleted(), 1200);
    }
    if(sum === 10){
        console.log("ENTRO AL PRIMER IF SUM == A 10");
        visibility();
    }
    if(sum === 20){
        console.log("ENTRO AL SEGUNDO IF SUM == A 19");
        visibility();
    }
}   

function gameCompleted(){
    
    console.log("gano");
   
    for(var i =0; i < (winerBn.length)-1; i++){
        winerBn[i].style.opacity="0";
    }
    
    for(var x =0; x < winerColor.length; x++){
        winerColor[x].style.opacity="1";
    }
    audios[29].play();

    setTimeout(()=>{
        window.open("../3_chagraSiona/index.html", "_self");
    },3000);

}

// function next (){
//     setTimeout(()=>{
//         window.open("../3_chagraSiona/index.html", "_self");
//     },1000);
// }