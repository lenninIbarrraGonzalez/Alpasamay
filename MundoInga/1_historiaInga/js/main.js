
var montanacolor=document.querySelector('#montanacolor');
const fondoMover = document.getElementById('id_mover');
const audios= document.getElementsByClassName("audio");
const ruedaBn = document.getElementById('ruedaBn');
var abuela=document.getElementById('abuela');
var subSaludo=document.getElementById('subSaludo');
var subHistoria=document.getElementById('subHistoria');

abuela.setAttribute("width","1012.68")
abuela.setAttribute("xlink:href", "./img/inga-frente.png",);


ruedaBn.addEventListener('click', inicio);

function inicio(){
	fondoMover.classList.add('mover');
	ruedaBn.classList.add('rueda');
	abuela.setAttribute("xlink:href", "./img/inga-abuela.png");
	abuela.setAttribute("width","1156")
	abuela.classList.add('abuela');
	ruedaBn.removeEventListener('click', inicio);
	audios[2].play();
	ruedaBn.classList.remove('click');

	var movimiento=setTimeout(function(){
		abuela.setAttribute("xlink:href", "./img/inga-frente.png");
		abuela.setAttribute("width","1012.68")

		abuela.classList.add("saludo");
		
			setTimeout(()=>{
				personajeSaludo();
				
			},2000);
		},5000);
}


function personajeSaludo(){
 abuela.setAttribute("xlink:href", "./img/inga-saludo.png");
 subSaludo.classList.toggle('desaparecer')
 abuela.setAttribute("width","1012.68")
// console.log(audioSaludo);
 audios[0].play();
 setTimeout(()=>{
	personajeStop();
 },5000)
}

function personajeStop(){
	abuela.setAttribute("xlink:href", "./img/inga-frente.png");
	abuela.setAttribute("width","1012.68")

	// audioSaludo[0].play();
	montanacolor.classList.add("prueba");
	montanacolor.style.opacity = "1";
	montanacolor.classList.add('click');
 }

montanacolor.addEventListener("click", function(){
montanacolor.style.display="none"
subSaludo.classList.toggle('desaparecer')
subHistoria.classList.toggle('desaparecer')
audios[1].play();
	setTimeout(()=>{
		window.open("../2_territorioInga/index.html", "_self");
	},23000);
})


















