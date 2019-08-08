const audios = document.getElementsByClassName("audio");

var parts_clothing = document.getElementsByClassName("parts");

var parts_colors = document.getElementsByClassName("clothing");

var coloreadas= document.getElementsByClassName("colorear");

var humanBn = document.getElementsByClassName("clothing_humanBn");
var humanCol = document.getElementsByClassName("colorear_human");

var muybien = document.getElementById("id_muybien");

muybien.style.opacity="0";

var tamWidth = [113, 108, 81, 28, 43, 105, 149, 52, 61, 28];
var tamHeight = [96, 140, 39, 23, 51, 168, 180, 55, 60, 23];

var posX = [620, 630, 640, 600, 650, 790, 771, 852, 775, 742];
var posY = [153, 280, 245, 200, 100, 310, 128, 70, 67, 195];
for(let i = 0; i < parts_clothing.length; i++){
    parts_clothing[i].setAttribute("width", tamWidth[i]);
    parts_clothing[i].setAttribute("height", tamHeight[i]);

    parts_clothing[i].setAttribute("x", posX[i]);
    parts_clothing[i].setAttribute("y", posY[i]);
    parts_clothing[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPostX = 0;
var currentPostY = 0;
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


function animatioTab(id){
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
                   audios[3].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
        case '4' : parts_colors[4].style.opacity = "0";
                   coloreadas[4].style.opacity = "1";
                   coloreadas[4].classList.add("prueba");
                   audios[4].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
        case '5' : parts_colors[5].style.opacity = "0";
                   coloreadas[5].style.opacity = "1";
                   coloreadas[5].classList.add("prueba");
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
                   audios[4].play();

                   setTimeout(()=>verificarColor(id), 1600);
                   return;
         case '8' : parts_colors[8].style.opacity = "0";
                   coloreadas[8].style.opacity = "1";
                   coloreadas[8].classList.add("prueba");
                  
                   audios[6].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
        case '9' : parts_colors[9].style.opacity = "0";
                   coloreadas[9].style.opacity = "1";
                   coloreadas[9].classList.add("prueba");
                   audios[3].play();
                   setTimeout(()=>verificarColor(id), 1600);
                   return;
    }
}


function verificarColor(id){
    const On = parts_colors[id].classList.contains("coloresON");
    if(On === true){
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
    }
}


const origX = [110, 112, 130, 100, 145, 323, 307, 355, 350, 306];
const origY = [153, 273, 245, 200, 155, 293, 121, 123, 120, 195];

function iman(idFicha){
    for(var i=0; i<parts_clothing.length; i++){
        if(Math.abs(currentPostX-origX[i])<13 && Math.abs(currentPostY-origY[i])<13){
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
    if(sum === 10){
        setTimeout(()=>gameCompleted(), 1200);
    }
   
}

 var win = document.getElementById("bien");
function gameCompleted(){
    for(let i =0; i < humanCol.length; i++){
        humanBn[i].style.opacity="0";
        humanCol[i].style.opacity="1";
    }
     muybien.style.opacity="1";
     win.play();
    setTimeout(()=>{
        window.open("../5_TejidoInga/index.html", "_self");
    },6000);
}