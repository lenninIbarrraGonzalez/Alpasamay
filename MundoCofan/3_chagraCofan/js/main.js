const audios = document.getElementsByClassName("audio");
const bien = document.getElementsByClassName("bien");

const jungleBn = document.getElementsByClassName("jungleBn");
const jungleColor = document.getElementsByClassName("jungleColor");

const winerColor = document.getElementsByClassName("colorearVacio");
const winerBn = document.getElementsByClassName("clothingVacio");

var bien_ubicadas = 0;
var ban_bien_ubicadas = 0;
var verClass;
var On;
var parts_clothing = document.getElementsByClassName('parts');
var parts_colors = document.getElementsByClassName('clothing');
var coloreadas = document.getElementsByClassName('colorear');
var tamWidth = [];
var tamHeight = [];
for(var i=0; i<17; i++){
    tamWidth[i]=141;
    tamHeight[i]=40
}

var posX = [115, 320, 522, 701, 115, 320, 522, 701, 115, 373, 522, 701, 115, 373, 522, 701];
var posY = [477, 477, 477, 477, 519, 519, 519, 519, 477, 477, 477, 477, 519, 519, 519, 519];

for(var i=0; i<parts_clothing.length; i++){
    parts_clothing[i].setAttribute("width", tamWidth[i]);
    parts_clothing[i].setAttribute("height", tamHeight[i]);
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
var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPostX = 0;
var currentPostY = 0;
var min = 0;
var max = 27;

function visibility() {
        for(let i=0; i<9; i++){
            parts_clothing[i].style.visibility="visible";
        }
}

function seleccionarElemento(evt) {
    elementSelect = evt.target;
    elementSelect = reordenar(evt);
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPostX = parseFloat(elementSelect.getAttribute("x"));
    currentPostY = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt, id) {
    var idFicha = evt.target.id;
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    currentPostX = currentPostX + dx;
    currentPostY = currentPostY + dy;
    elementSelect.setAttribute("x", currentPostX);
    elementSelect.setAttribute("y", currentPostY);
    currentX = evt.clientX;
    currentY = evt.clientY;
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

var entorno = document.getElementById('lienzo');

function reordenar(evt){
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    animatioTab(id);

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;

}
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

    }
}

function verificarColor(id){
    On = parts_colors[id].classList.contains("coloresON");
    if(On === true){
        testing();
    }
    else{
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

var origX = [555, 589, 43, 774,
             477, 116, 133, 425,
             291, 362, 400, 815,
             671, 615, 717, 276];
var origY = [282, 144, 351, 114,
             388, 235, 381, 94, 
             125, 388, 317, 319,
             336, 390, 395, 352];

function iman(idFicha) {
    for(var i=0; i<parts_clothing.length; i++){
        if(Math.abs(currentPostX-origX[i])<30 && Math.abs(currentPostY-origY[i])<30){
            console.log("este es el valor de i", i);
            if(idFicha == i){
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


function gameCompleted(){
    console.log("gano");
    audios[16].play();
   
    for(let cont = 0; cont  < jungleBn.length; cont++){
        jungleBn[cont].style.opacity = "0";
        jungleColor[cont].style.opacity = "1";
    }
   
    for(var i =0; i < (winerBn.length)-1; i++){
        winerBn[i].style.opacity="0";
    }
    
    for(var x =0; x < winerColor.length; x++){
        winerColor[x].style.opacity="1";
    }

    

    setTimeout(()=>{
        window.open("../4_atuendoCofan/index.html", "_self");
    },9000);
}
