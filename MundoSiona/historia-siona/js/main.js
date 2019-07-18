const fondo = document.getElementById('mover');
const btnCanoa = document.getElementById('canoa');
const btnRueda = document.getElementById('ruedaBn');
const abuela = document.getElementById('abuela');

const audios = document.getElementsByClassName('audio');

abuela.setAttribute("xlink:href", "./img/siona-frente.png");

btnRueda.addEventListener('click', inicio);

function inicio(){
	fondo.classList.add('mover');
	btnRueda.classList.add('rueda');
	abuela.setAttribute("xlink:href", "./img/siona-abuela.png");
	abuela.classList.add('abuela');
	btnRueda.removeEventListener('click', inicio);
	btnRueda.classList.remove('click');

	var movimiento=setTimeout(function(){
		abuela.setAttribute("xlink:href", "./img/siona-frente.png");
		//
		abuela.classList.add("saludo");
		
			setTimeout(()=>{
				personajeSaludo();
				
			},2000);
		},5000);
}

function personajeSaludo(){
	abuela.setAttribute("xlink:href", "./img/siona-saludo.png");
 // console.log(audioSaludo);
	audios[0].play();
	setTimeout(()=>{
	 personajeStop();
	},5000)
 }

 function personajeStop(){
	abuela.setAttribute("xlink:href", "./img/siona-frente.png");
	console.log('hola');
	btnCanoa.classList.add("prueba");
	btnCanoa.style.opacity = "1";
	btnCanoa.classList.add('click');
 }


btnCanoa.addEventListener("click", function(){
btnCanoa.style.display="none"
audios[1].play();
})
	
