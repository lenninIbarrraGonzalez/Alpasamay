

var montana=document.querySelector('#montanaAnim');
var montanacolor=document.querySelector('#montanacolor');
var fondocolor=document.querySelector('#fondo-color');

const ruedaColor = document.getElementById('ruedaColor');
const fondoMover = document.getElementById('id_mover');

const audioSaludo = document.getElementsByClassName("audio");
const ruedaBn = document.getElementById('ruedaBn');
var abuela=document.getElementById('abuela');

// const audioSaludo = document.getElementById('saludo');

abuela.setAttribute("xlink:href", "./img/inga-frente.png");

ruedaBn.addEventListener('click', inicio);



function inicio(){
	console.log("entro");
	fondoMover.classList.add('mover');
	ruedaBn.classList.add('rueda');
	abuela.setAttribute("xlink:href", "./img/inga-abuela.png");
	abuela.classList.add('abuela');
	ruedaBn.removeEventListener('click', inicio);
	ruedaBn.classList.remove('click');

	var movimiento=setTimeout(function(){
		abuela.setAttribute("xlink:href", "./img/inga-frente.png");
		//
		abuela.classList.add("saludo");
		
			setTimeout(()=>{
				personajeSaludo();
				
			},2000);
		},5000);
}


function personajeSaludo(){
 abuela.setAttribute("xlink:href", "./img/inga-saludo.png");
// console.log(audioSaludo);

 setTimeout(()=>{
	personajeStop();
 },5000)
}

function personajeStop(){
	abuela.setAttribute("xlink:href", "./img/inga-frente.png");
	// audioSaludo[0].play();
	montanacolor.classList.add("prueba");
	montanacolor.style.opacity = "1";
	montanacolor.classList.add('click');
 }

	montanacolor.addEventListener("click", function(){
	montanacolor.style.display="none"
})


















