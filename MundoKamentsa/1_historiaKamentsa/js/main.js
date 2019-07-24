var abuela=document.querySelector('#abuela')
var pajaro=document.querySelector('#pajaroAnim')
// var montanacolor=document.querySelector('#montanacolor');
var fondocolor=document.getElementById('fondo-color');

const btnRueda=document.getElementById('id_rueda');

const audios = document.getElementsByClassName('audios');
var subSaludo=document.getElementById('subSaludo');
var subHistoria=document.getElementById('subHistoria');




abuela.setAttribute("xlink:href", "./img/kame-frente.png");

btnRueda.addEventListener('click', inicio);

function inicio(){
	
	fondocolor.classList.add('mover');
	abuela.setAttribute("xlink:href", "./img/kame-abuela.png")
	abuela.classList.add('abuela');
	btnRueda.removeEventListener('click', inicio);
	btnRueda.classList.remove('click');
	btnRueda.classList.add('rueda');


	var movimiento=setTimeout(function(){
		abuela.setAttribute("xlink:href", "./img/kame-frente.png");
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
	audios[0].play();
	setTimeout(()=>{
	   personajeStop();
	},5000)
   }

function personajeStop(){
	abuela.setAttribute("xlink:href", "./img/kame-frente.png");
	
	pajaro.classList.add("prueba");
	pajaro.style.opacity = "1";
	pajaro.classList.add('click');
}

pajaro.addEventListener('click', function(){
	subSaludo.classList.toggle('desaparecer')
subHistoria.classList.toggle('desaparecer')
	pajaro.style.display="none";
	audios[1].play();
})
















