
var abuela=document.querySelector('#abuela')
var montana=document.querySelector('#montanaAnim')
var montanacolor=document.querySelector('#montanacolor');
var fondocolor=document.querySelector('#fondo-color');
const ruedaBn = document.getElementById('ruedaBn');
const ruedaColor = document.getElementById('ruedaColor');

const audioSaludo = document.getElementsByClassName("audio");

// const audioSaludo = document.getElementById('saludo');

var movimiento=setTimeout(function(){
abuela.setAttribute("xlink:href", "./img/inga-frente.png");
//
abuela.classList.add("saludo");

	setTimeout(()=>{
		personajeSaludo();
		
	},2000);
},5200);


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
	montana.style.opacity = "0";
	montanacolor.style.opacity = "1";
}

montana.addEventListener("click", function(){
fondocolor.style.opacity=1
montanacolor.style.display="none"

ruedaBn.style.opacity = '0';
ruedaColor.style.opacity = '1';

// alert("hola");
})


















