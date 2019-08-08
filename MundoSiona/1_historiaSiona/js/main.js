const fondo = document.getElementById('mover');
const btnCanoa = document.getElementById('canoa');
const btnRueda = document.getElementById('ruedaBn');
const abuela = document.getElementById('abuela');
var subSaludo=document.getElementById('subSaludo');
var subHistoria=document.getElementById('subHistoria');


const audios = document.getElementsByClassName('audio');

abuela.setAttribute("width","1012.68")
abuela.setAttribute("xlink:href", "./img/siona-frente.png");

btnRueda.addEventListener('click', inicio);

function inicio(){
	audios[2].play();
	fondo.classList.add('mover');
	btnRueda.classList.add('rueda');
	abuela.setAttribute("xlink:href", "./img/siona-abuela.png");
	abuela.setAttribute("width","1156")
	abuela.classList.add('abuela');
	btnRueda.removeEventListener('click', inicio);
	btnRueda.classList.remove('click');

	var movimiento=setTimeout(function(){
		abuela.setAttribute("xlink:href", "./img/siona-frente.png");
		abuela.setAttribute("width","1012.68")
		abuela.classList.add("saludo");
		
			setTimeout(()=>{
				personajeSaludo();
				
			},2000);
		},5000);
}

function personajeSaludo(){
	abuela.setAttribute("xlink:href", "./img/siona-saludo.png");
	abuela.setAttribute("width","1012.68")
	subSaludo.classList.toggle('desaparecer')
	audios[0].play();
	setTimeout(()=>{
	 personajeStop();
	},5000)
 }

 function personajeStop(){
	abuela.setAttribute("xlink:href", "./img/siona-frente.png");
	abuela.setAttribute("width","1012.68")
	btnCanoa.classList.add("prueba");
	btnCanoa.style.opacity = "1";
	btnCanoa.classList.add('click');
 }

 btnCanoa.addEventListener("click", function(){
 	subSaludo.classList.toggle('desaparecer')
subHistoria.classList.toggle('desaparecer')
btnCanoa.style.display="none"
audios[1].play();
	setTimeout(()=>{
		window.open("../2_territorioSiona/index.html", "_self");
	},18000);
})
	

