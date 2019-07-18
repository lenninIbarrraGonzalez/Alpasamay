const fondo = document.getElementById('mover');
const btnArbol = document.getElementById('arbol');
const btnRueda = document.getElementById('ruedaBn');
const abuela = document.getElementById('abuela');

const audios = document.getElementsByClassName('audios');

abuela.setAttribute("xlink:href", "./img/kofan-frente.png");

btnRueda.addEventListener('click', inicio);

function inicio(){
	fondo.classList.add('mover');
	btnRueda.classList.add('rueda');
	abuela.setAttribute("xlink:href", "./img/kofan-abuela.png");
	abuela.classList.add('abuela');
	btnRueda.removeEventListener('click', inicio);
	btnRueda.classList.remove('click');

	var movimiento=setTimeout(function(){
		abuela.setAttribute("xlink:href", "./img/kofan-frente.png");
		//
		abuela.classList.add("saludo");
		
			setTimeout(()=>{
				personajeSaludo();
				
			},2000);
		},5000);
}

function personajeSaludo(){
	abuela.setAttribute("xlink:href", "./img/kofan-saludo.png");
	audios[0].play();
	setTimeout(()=>{
	 personajeStop();
	},5000)
 }

function personajeStop(){
	abuela.setAttribute("xlink:href", "./img/kofan-frente.png");
	btnArbol.classList.add("prueba");
	btnArbol.style.opacity = "1";
	btnArbol.classList.add('click');
}

btnArbol.addEventListener("click", function(){
btnArbol.style.display="none"
audios[1].play();
})
	
