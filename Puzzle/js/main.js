var atunTaita = document.getElementById("atunTaita");
var atumama = document.getElementById("atumama");
var inti = document.getElementById("inti");
var sachuku = document.getElementById("sachuku");
var tarpuskaAlpa = document.getElementById("tarpuskaAlpa");
var killa = document.getElementById("killa");
var atunIaku = document.getElementById("atunIaku");



// El evento onMouseDown sucede cuando el usuario pulsa un botón del ratón.
// El evento onMouseMove tiene lugar cuando el usuario mueve el cursor del ratón.
// El evento onMouseUp se genera cuando se deja de pulsar un botón del ratón.


//guardamos las plabras en idioma
var parts_clothing = document.getElementsByClassName('parts');


//guardamos los elemento en blanco y negro
var parts_colors = document.getElementsByClassName('clothing');
//guardamos los elementos copia a color 
var coloreadas = document.getElementsByClassName('colorear');

//medida de ancho y alto de cada pieza en los arrays

//vestido ancho: 130px alto: 187px
//cabello ancho: 120px alto: 143px
//zapatos ancho: 107px alto: 61px

//ancho
var tamWidth = [];
//alto
var tamHeight = [];

for(var i=0; i<=28; i++){

    tamWidth[i]=141;
    tamHeight[i]=40
}


//posición en X
var posX = [];
//posición en Y 475
var posY = [];

for(var i=0; i<=28; i++){

    randomX=Math.floor((Math.random() * (859-5))+5);
    randomY=Math.floor((Math.random() * (515-477))+477); 
    posX[i]=randomX;
    posY[i]=randomY;
}

for(var i=0; i<parts_clothing.length; i++){
    //alert('hola mundo');
    //agregamos con setAtrribute el ancho y alto de las imagenes en partes
    parts_clothing[i].setAttribute("width", tamWidth[i]);
    parts_clothing[i].setAttribute("height", tamHeight[i]);

    //agregamos la posición de forma aleatoria sin sobreponerse a la imagen
     // parts_clothing[i].setAttribute("x", Math.floor((Math.random()*10+1)));
     // parts_clothing[i].setAttribute("y", Math.floor((Math.random()*409+1)));
    parts_clothing[i].setAttribute("x", posX[i]);
    parts_clothing[i].setAttribute("y", posY[i]);

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

function seleccionarElemento(evt) {
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
    iman(id);
}

function deseleccionarElemento() {
    //testing();
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
    animatioTab(clone,id);

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;

}
// ++++++++++++++++++++++++++
function animatioTab(clone,id) {
    switch(id){
        case '0': 
                  parts_colors[0].style.opacity="0";
                  coloreadas[0].style.opacity="1";
                  coloreadas[0].classList.add('prueba');
                  sachuku.play();
                  setTimeout(()=>removeClass(id), 3000);
        return;
        case '1': coloreadas[1].style.opacity="1";
                  coloreadas[1].classList.add('prueba');
                  parts_colors[1].style.opacity="0";
                  setTimeout(()=>removeClass(id), 3000);
        return;
        case '2': coloreadas[2].style.opacity="1";
                  coloreadas[2].classList.add('prueba');
                  parts_colors[2].style.opacity="0";
                  atunIaku.play();
                  setTimeout(()=>removeClass(id), 3000);
        return;
         case '3': coloreadas[3].style.opacity="1";
                   coloreadas[3].classList.add('prueba');
                   parts_colors[3].style.opacity="0";
                   setTimeout(()=>removeClass(id), 3000);
        return;
         case '4': coloreadas[4].style.opacity="1";
                   coloreadas[4].classList.add('prueba');
                   parts_colors[4].style.opacity="0";
                   setTimeout(()=>removeClass(id), 3000);
        return;
         case '5': coloreadas[5].style.opacity="1";
                   coloreadas[5].classList.add('prueba');
                   parts_colors[5].style.opacity="0";
                   setTimeout(()=>removeClass(id), 3000);
        return;
         case '6': coloreadas[6].style.opacity="1";
                   coloreadas[6].classList.add('prueba');
                   parts_colors[6].style.opacity="0";
                   setTimeout(()=>removeClass(id), 3000);
        return;
         case '7': coloreadas[7].style.opacity="1";
                   coloreadas[7].classList.add('prueba');
                   parts_colors[7].style.opacity="0";
                   setTimeout(()=>removeClass(id), 3000);
        return;
         case '8': coloreadas[8].style.opacity="1";
                   coloreadas[8].classList.add('prueba');
                   parts_colors[8].style.opacity="0";
                   setTimeout(()=>removeClass(id), 3000);
        return;
         case '9': coloreadas[9].style.opacity="1";
                   coloreadas[9].classList.add('prueba');
                   parts_colors[9].style.opacity="0";
                   setTimeout(()=>removeClass(id), 3000);
        return;
         case '10': coloreadas[10].style.opacity="1";
                    coloreadas[10].classList.add('prueba');
                    parts_colors[10].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '11': coloreadas[11].style.opacity="1";
                    coloreadas[11].classList.add('prueba');
                    parts_colors[11].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '12': coloreadas[12].style.opacity="1";
                    coloreadas[12].classList.add('prueba');
                    parts_colors[12].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '13': coloreadas[13].style.opacity="1";
                    coloreadas[13].classList.add('prueba');
                    parts_colors[13].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '14': coloreadas[14].style.opacity="1";
                    coloreadas[14].classList.add('prueba');
                    parts_colors[14].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '15': coloreadas[15].style.opacity="1";
                    coloreadas[15].classList.add('prueba');
                    parts_colors[15].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '16': coloreadas[16].style.opacity="1";
                    coloreadas[16].classList.add('prueba');
                    parts_colors[16].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '17': coloreadas[17].style.opacity="1";
                    coloreadas[17].classList.add('prueba');
                    parts_colors[17].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '18': coloreadas[18].style.opacity="1";
                    coloreadas[18].classList.add('prueba');
                    parts_colors[18].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '19': coloreadas[19].style.opacity="1";
                    coloreadas[19].classList.add('prueba');
                    parts_colors[19].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '20': coloreadas[20].style.opacity="1";
                    coloreadas[20].classList.add('prueba');
                    parts_colors[20].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '21': coloreadas[21].style.opacity="1";
                    coloreadas[21].classList.add('prueba');
                    parts_colors[21].style.opacity="0";
                    tarpuskaAlpa.play();
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '22': coloreadas[22].style.opacity="1";
                    coloreadas[22].classList.add('prueba');
                    parts_colors[22].style.opacity="0";
                    inti.play();
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '23': coloreadas[23].style.opacity="1";
                    coloreadas[23].classList.add('prueba');
                    parts_colors[23].style.opacity="0";
                    killa.play();
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '24': coloreadas[24].style.opacity="1";
                    coloreadas[24].classList.add('prueba');
                    parts_colors[24].style.opacity="0";
                    atunTaita.play();
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '25': coloreadas[25].style.opacity="1";
                    coloreadas[25].classList.add('prueba');
                    parts_colors[25].style.opacity="0";
                    atumama.play();
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '26': coloreadas[26].style.opacity="1";
                    coloreadas[26].classList.add('prueba');
                    parts_colors[26].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '27': coloreadas[27].style.opacity="1";
                    coloreadas[27].classList.add('prueba');
                    parts_colors[27].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
         case '28': coloreadas[28].style.opacity="1";
                    coloreadas[28].classList.add('prueba');
                    parts_colors[28].style.opacity="0";
                    setTimeout(()=>removeClass(id), 3000);
        return;
    }
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
    }
}




// ******************
//posiciones originales para el iman
//vestido X = 174 , Y = 200
//cabello X = 194 , Y = 83
//zapatos X = 200 , Y = 496

// var origX = [-10, 275,246,450,160,528,363,517,650,670,0,395,650,764,512,593,775,929,800,335,-45,302,63,790,230,198,288,170];
// var origY = [41, 45, 155,218,238,405,358,223,300,216,368,422,332,326,420,253,250,312,228,166,140,280,0,15,298,302,300,380];

var origX = [-10, 246, 302, 63, 790, 230, 198];
var origY = [41, 155, 280, 0, 15, 298, 302];

function iman(evt, id) {
    for(var i=0; i<parts_clothing.length; i++){
        // console.log("si esta entrando");
     //si la pieza se aproxima a 15 pixeles de la posición esta es atraida

    //  console.log("i", i);   
    //  console.log("currentPostX", currentPostX);
    //  console.log("currentPostY", currentPostY);
    //  console.log("originX[i]", origX[i]);
    //  console.log("originY[i]", origY[i]);

    
     let X = Math.abs(currentPostX-origX[i]);
     let Y = Math.abs(currentPostY-origY[i]);

    //  console.log("X", X, "Y", Y);

     if(Math.abs(currentPostX-origX[i])<15 && Math.abs(currentPostY-origY[i])<15) {
        //actualizamos coordenadas de la figura
            // alert("entrooooo");
         elementSelect.setAttribute("x", origX[i]);
         elementSelect.setAttribute("y", origY[i]); 
         elementSelect.style.opacity="0";
        //  pintarFondo(id);

      }  
    }
}



// function pintarFondo(){
//     alert("Entro a Pintar fondo");
//     console.log("id de pintar fondo",id);
//     switch(id){
//         case '0': parts_colors[0].style.opacity="1";
//                   coloreadas[0].style.opacity="0";
                                   
//         return;
//         case '1': coloreadas[1].style.opacity="1";
//                   coloreadas[1].classList.add('prueba');
//                   parts_colors[1].style.opacity="0";
//                   setTimeout(()=>removeClass(id), 3000);
//         return;
//         case '2': coloreadas[2].style.opacity="1";
//                   coloreadas[2].classList.add('prueba');
//                   parts_colors[2].style.opacity="0";
//                   atunIaku.play();
//                   setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '3': coloreadas[3].style.opacity="1";
//                    coloreadas[3].classList.add('prueba');
//                    parts_colors[3].style.opacity="0";
//                    setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '4': coloreadas[4].style.opacity="1";
//                    coloreadas[4].classList.add('prueba');
//                    parts_colors[4].style.opacity="0";
//                    setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '5': coloreadas[5].style.opacity="1";
//                    coloreadas[5].classList.add('prueba');
//                    parts_colors[5].style.opacity="0";
//                    setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '6': coloreadas[6].style.opacity="1";
//                    coloreadas[6].classList.add('prueba');
//                    parts_colors[6].style.opacity="0";
//                    setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '7': coloreadas[7].style.opacity="1";
//                    coloreadas[7].classList.add('prueba');
//                    parts_colors[7].style.opacity="0";
//                    setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '8': coloreadas[8].style.opacity="1";
//                    coloreadas[8].classList.add('prueba');
//                    parts_colors[8].style.opacity="0";
//                    setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '9': coloreadas[9].style.opacity="1";
//                    coloreadas[9].classList.add('prueba');
//                    parts_colors[9].style.opacity="0";
//                    setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '10': coloreadas[10].style.opacity="1";
//                     coloreadas[10].classList.add('prueba');
//                     parts_colors[10].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '11': coloreadas[11].style.opacity="1";
//                     coloreadas[11].classList.add('prueba');
//                     parts_colors[11].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '12': coloreadas[12].style.opacity="1";
//                     coloreadas[12].classList.add('prueba');
//                     parts_colors[12].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '13': coloreadas[13].style.opacity="1";
//                     coloreadas[13].classList.add('prueba');
//                     parts_colors[13].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '14': coloreadas[14].style.opacity="1";
//                     coloreadas[14].classList.add('prueba');
//                     parts_colors[14].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '15': coloreadas[15].style.opacity="1";
//                     coloreadas[15].classList.add('prueba');
//                     parts_colors[15].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '16': coloreadas[16].style.opacity="1";
//                     coloreadas[16].classList.add('prueba');
//                     parts_colors[16].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '17': coloreadas[17].style.opacity="1";
//                     coloreadas[17].classList.add('prueba');
//                     parts_colors[17].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '18': coloreadas[18].style.opacity="1";
//                     coloreadas[18].classList.add('prueba');
//                     parts_colors[18].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '19': coloreadas[19].style.opacity="1";
//                     coloreadas[19].classList.add('prueba');
//                     parts_colors[19].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '20': coloreadas[20].style.opacity="1";
//                     coloreadas[20].classList.add('prueba');
//                     parts_colors[20].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '21': coloreadas[21].style.opacity="1";
//                     coloreadas[21].classList.add('prueba');
//                     parts_colors[21].style.opacity="0";
//                     tarpuskaAlpa.play();
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '22': coloreadas[22].style.opacity="1";
//                     coloreadas[22].classList.add('prueba');
//                     parts_colors[22].style.opacity="0";
//                     inti.play();
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '23': coloreadas[23].style.opacity="1";
//                     parts_colors[23].style.opacity="0";
//                     alert("luna");
                    
//         return;
//          case '24': coloreadas[24].style.opacity="1";
//                     coloreadas[24].classList.add('prueba');
//                     parts_colors[24].style.opacity="0";
//                     atunTaita.play();
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '25': coloreadas[25].style.opacity="1";
//                     coloreadas[25].classList.add('prueba');
//                     parts_colors[25].style.opacity="0";
//                     atumama.play();
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '26': coloreadas[26].style.opacity="1";
//                     coloreadas[26].classList.add('prueba');
//                     parts_colors[26].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '27': coloreadas[27].style.opacity="1";
//                     coloreadas[27].classList.add('prueba');
//                     parts_colors[27].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//          case '28': coloreadas[28].style.opacity="1";
//                     coloreadas[28].classList.add('prueba');
//                     parts_colors[28].style.opacity="0";
//                     setTimeout(()=>removeClass(id), 3000);
//         return;
//     }
// }

// var win = document.getElementById("win");
// function testing(){
   
//     //alert("bitch");
//     var bien_ubicadas = 0;

//     var padres = document.getElementsByClassName('clothing_parts');
//    // console.log(padres);
//      for(var i=0; i<parts_clothing.length; i++){
        
//     // console.log("entro");
//         var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
//         //console.log("posx", posx);
//         var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
//         //console.log("posy", posy);
//         ide = padres[i].getAttribute("id");
//         //console.log("ide", ide);
                
//        // console.log("origX[ide]",origX[ide])
//        // console.log("origY[ide]", origY[ide]);
//          if(origX[ide] == posx && origY[ide] == posy){
//             bien_ubicadas= bien_ubicadas+1;
//          //   console.log("bien_ubicadas:",bien_ubicadas);
//          }
//     }
//     if(bien_ubicadas == 3){
//         win.play();
//     }
// }
