const audios = document.getElementsByClassName("audio");

//guardamos todos los elementos de la ropa con clase parts
var parts_clothing = document.getElementsByClassName("parts");

var parts_colors = document.getElementsByClassName("clothing");

var coloreadas= document.getElementsByClassName("colorear");

var humanBn = document.getElementsByClassName("clothing_humanBn");
var humanCol = document.getElementsByClassName("colorear_human");

//medidas de las piezas ancho por alto
// collar mujer = 43 x 51
// blusa mujer = 113 x 96
// chumbe mujer = 81 x 39
// falda mujer = 108 x 140
// flores mujer = 28 x 23

// cusma hombre = 149 x 180
// collar hombre = 52 x 55
// pantalo hombre = 105 x 168
// pañuelo hombre = 61 x 60
// flores hombre = 28 x 23

var tamWidth = [113, 108, 81, 28, 43, 105, 149, 52, 61, 28];
var tamHeight = [96, 140, 39, 23, 51, 168, 180, 55, 60, 23];

var posX = [568,554,608,780,760,800,804,790];
var posY = [290,153,100,310,117,119,82,16];
// debugger;
for(let i = 0; i < parts_clothing.length; i++){
    // parts_clothing[i].setAttribute("width", tamWidth[i]);
    // parts_clothing[i].setAttribute("height", tamHeight[i]);

    parts_clothing[i].setAttribute("x", posX[i]);
    parts_clothing[i].setAttribute("y", posY[i]);
    parts_clothing[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

//inicializamos variables para almacenar información del movimiento
//current position->posicion actual
var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPostX = 0;
var currentPostY = 0;
// var min = 0;
// var max = 27;


// console.log("currentPostX inicial", currentPostX);
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
    // debugger
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    //mando a la funcion animar fondo
    animatioTab(id);

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;
    

}


function animatioTab(id){
    // alert("entro");
    // console.log("Este es el id", id);
    switch(id){
        case '0' : parts_colors[0].style.opacity = "0";
                   coloreadas[0].style.opacity = "1";
                   coloreadas[0].classList.add("prueba");
                   audios[0].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;

        case '1' : parts_colors[1].style.opacity = "0";
                   coloreadas[1].style.opacity = "1";
                   coloreadas[1].classList.add("prueba");
                   audios[1].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
        case '2' : parts_colors[2].style.opacity = "0";
                   coloreadas[2].style.opacity = "1";
                   coloreadas[2].classList.add("prueba");
                   audios[2].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
         case '3' : parts_colors[3].style.opacity = "0";
                   coloreadas[3].style.opacity = "1";
                   coloreadas[3].classList.add("prueba");
                
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
        case '4' : parts_colors[4].style.opacity = "0";
                   coloreadas[4].style.opacity = "1";
                   coloreadas[4].classList.add("prueba");
                   audios[3].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
        case '5' : parts_colors[5].style.opacity = "0";
                   coloreadas[5].style.opacity = "1";
                   coloreadas[5].classList.add("prueba");
                   audios[4].play();
                   setTimeout(()=>verificarColor(id), 1600);         
                   return;
        case '6' : parts_colors[6].style.opacity = "0";
                   coloreadas[6].style.opacity = "1";
                   coloreadas[6].classList.add("prueba");
                   audios[5].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
        case '7' : parts_colors[7].style.opacity = "0";
                   coloreadas[7].style.opacity = "1";
                   coloreadas[7].classList.add("prueba");
                   audios[6].play();

                   setTimeout(()=>verificarColor(id), 1600);
                   return;
        //  case '8' : parts_colors[8].style.opacity = "0";
        //            coloreadas[8].style.opacity = "1";
        //            coloreadas[8].classList.add("prueba");
                  
        //         //    audios[6].play();
        //            setTimeout(()=>verificarColor(id), 1600);
        //            return;
        
    }
}


function verificarColor(id){
    const On = parts_colors[id].classList.contains("coloresON");
    // console.log("EL valor de ON es: ", On);
    if(On === true){
        // console.log("Entro al if del true del On llamo a la función ValidadVisibility");
        // var sum = 1;
        //    validarVisibilty();
    //    testing(sum);
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
        // case '8': coloreadas[8].style.opacity="0";
        //           coloreadas[8].classList.remove('prueba');
        //           parts_colors[8].style.opacity="1";
        // return;
        
    }
}

// falda-mujer-puesta.png" x="105" y="264"
// blusa-mujer-puesta.png" x="92" y="153"
// Chaquira-mujer-puesta.png" x="145" y="155"
// Pantalon-hombre-puesto.png" x="321" y="293"
// Cusma-hombre-puesta.png" x="304" y="122"
// CollarComillos-hombre-puesto.png" x="345" y="123"
// Panoleta-hombre-puesta.png" x="350" y="120"
// corona-hombre-puesta.png" x="331" y="16"


//posiciones originales para el iman
const origX = [105,92,145,321,304,345,350,331];
const origY = [264,153,155,293,122,123,120,16];

function iman(idFicha){
    // console.log("idFicha en el iman", idFicha);
    // console.log("esto es lo que tiene parts_clothing", parts_clothing);
    for(var i=0; i<parts_clothing.length; i++){
        if(Math.abs(currentPostX-origX[i])<13 && Math.abs(currentPostY-origY[i])<13){
            // console.log("Entro al primer if");
            // console.log("este es el valor de i", i);
           if(idFicha == i){
              //  alert("Entro al segundo if");
                elementSelect.setAttribute("x", origX[i]);
                elementSelect.setAttribute("y", origY[i]); 
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
        //  case '8': coloreadas[8].style.opacity="1";
        //            parts_colors[8].style.opacity="0";
        //            parts_colors[8].classList.add("coloresON");
        // return;
         
    }
}


function testing(){
    var sum = 0;
    for(let i=0; i < parts_clothing.length; i++){
        verClass = parts_clothing[i].classList.contains("parts_clotihinOff");
        if(verClass === true){
            sum +=1;
            console.log("sum tiene", sum);
        }

    }
    if(sum === 8){
        setTimeout(()=>gameCompleted(), 1200);
    }
   
}

// var win = document.getElementById("bien");
function gameCompleted(){
    console.log("gano");
    // console.log(humanBn);
    // console.log(humanCol);
    // fondo.pause();
    // //fondo2.pause();
    // debugger
    for(let i =0; i < humanCol.length; i++){
        humanBn[i].style.opacity="0";
        humanCol[i].style.opacity="1";
    }
    setTimeout(()=>{
        window.open("../5_tejidoCofan/index.html", "_self");
    },6000);
}