const fondo = document.getElementById('mover');
const btnArbol = document.getElementById('arbol');
const btnRueda = document.getElementById('ruedaBn');
const abuela = document.getElementById('abuela');
var subSaludo=document.getElementById('subSaludo');
var subHistoria=document.getElementById('subHistoria');
const audios = document.getElementsByClassName('audios');

abuela.setAttribute("width","1012.68");
abuela.setAttribute("xlink:href", "./img/kofan-frente.png",);


btnRueda.addEventListener('click', inicio);

function inicio(){
	audios[2].play();
	fondo.classList.add('mover');
	btnRueda.classList.add('rueda');
	abuela.setAttribute("xlink:href", "./img/kofan-abuela.png");
	abuela.setAttribute("width","1156")
	abuela.classList.add('abuela');
	btnRueda.removeEventListener('click', inicio);
	btnRueda.classList.remove('click');

	var movimiento=setTimeout(function(){
		abuela.setAttribute("xlink:href", "./img/kofan-frente.png");
		abuela.setAttribute("width","1012.68")

		//
		abuela.classList.add("saludo");
		
			setTimeout(()=>{
				personajeSaludo();
				
			},2000);
		},5000);
}

function personajeSaludo(){
	abuela.setAttribute("xlink:href", "./img/kofan-saludo.png");
	 subSaludo.classList.toggle('desaparecer')
	 audios[0].play();
	setTimeout(()=>{
	 personajeStop();
	},5000)
 }

function personajeStop(){
	abuela.setAttribute("xlink:href", "./img/kofan-frente.png");
	abuela.setAttribute("width","1012.68")
	btnArbol.classList.add("prueba");
	btnArbol.style.opacity = "1";
	btnArbol.classList.add('click');
}

btnArbol.addEventListener("click", function(){
subSaludo.classList.toggle('desaparecer')
subHistoria.classList.toggle('desaparecer')	
btnArbol.style.display="none"
audios[1].play();
	setTimeout(()=>{
		window.open("../2_territorioCofan/index.html", "_self");
	},20000);
})
	
