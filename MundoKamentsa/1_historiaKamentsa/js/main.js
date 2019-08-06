var abuela=document.querySelector('#abuela')
var pajaro=document.querySelector('#pajaroAnim')
// var montanacolor=document.querySelector('#montanacolor');
var fondocolor=document.getElementById('fondo-color');

const btnRueda=document.getElementById('id_rueda');

const audios = document.getElementsByClassName('audios');
var subSaludo=document.getElementById('subSaludo');
var subHistoria=document.getElementById('subHistoria');

abuela.setAttribute("width","1012.68")
abuela.setAttribute("xlink:href", "./img/kame-frente.png",);

btnRueda.addEventListener('click', inicio);

function inicio(){
	audios[2].play();
	fondocolor.classList.add('mover');
	abuela.setAttribute("xlink:href", "./img/kame-abuela.png")
	abuela.setAttribute("width","1156")
	abuela.classList.add('abuela');
	btnRueda.removeEventListener('click', inicio);
	btnRueda.classList.remove('click');
	btnRueda.classList.add('rueda');


	var movimiento=setTimeout(function(){
		abuela.setAttribute("xlink:href", "./img/kame-frente.png");
		abuela.setAttribute("width","1012.68")
		//
		abuela.classList.add("saludo");
		
			setTimeout(()=>{
				personajeSaludo();
				
			},2000);
		},5000);
}

function personajeSaludo(){
	abuela.setAttribute("xlink:href", "./img/kame-saludo.png");
	 subSaludo.classList.toggle('desaparecer')  
	 abuela.setAttribute("width","1012.68") 
	audios[0].play();
	setTimeout(()=>{
	   personajeStop();
	},5000)
   }

function personajeStop(){
	abuela.setAttribute("xlink:href", "./img/kame-frente.png");
	abuela.setAttribute("width","1012.68")
	pajaro.classList.add("prueba");
	pajaro.style.opacity = "1";
	pajaro.classList.add('click');
}

pajaro.addEventListener('click', function(){
	pajaro.style.display="none";
	subSaludo.classList.toggle('desaparecer')
	subHistoria.classList.toggle('desaparecer')
	audios[1].play();
	setTimeout(()=>{
		window.open("../2_territorioKamentsa/index.html", "_self");
	},18000);
})
















