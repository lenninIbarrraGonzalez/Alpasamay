var abuela=document.querySelector('#abuela');
var rueda=document.querySelector('#ruedaCompleta');
var fondo=document.querySelector('#moverFondo');
var simbolo1=document.querySelector('#simbolo-1');
var simbolo2=document.querySelector('#simbolo-2');
var simbolo3=document.querySelector('#simbolo-3');
var letrero1=document.querySelector('#letrero-1');
var letrero2=document.querySelector('#letrero-2');
var letrero3=document.querySelector('#letrero-3');
var subAgradecimiento=document.getElementById('subAgradecimiento');

const btnStart = document.getElementById('ruedaCompleta');



// var audiosTejidos = document.getElementsByClassName('audio');


btnStart.addEventListener('click', start);
abuela.setAttribute("xlink:href", "./img/siona-frente.png");

function start(){
	btnStart.removeEventListener('click', start);
	btnStart.classList.remove("simbolo");
	firstEstation();
}

function firstEstation(){
	fondo.style.transform="translateX(-90px)";
	abuela.setAttribute("xlink:href", "./img/siona-abuela.png");
	rueda.classList.add("rodar15")
	abuela.style.animationName="caminar";
	setTimeout(()=>{
		removerFirst();
	},3500)
}

function removerFirst(){
abuela.setAttribute("xlink:href", "./img/siona-frente.png");
abuela.style.animationName="";
// audiosTejidos[0].play();
letrero1.classList.add("aparecer");
simbolo1.classList.add("prueba");
		setTimeout(()=>{
		 hideMsnFirst();
		},15000)
}

function hideMsnFirst(){
	letrero1.classList.remove("aparecer");
		setTimeout(()=>{
			secondEstation();
		},1200)
}

function secondEstation(){
	fondo.style.transform="translateX(-140px)";
 	abuela.setAttribute("xlink:href", "./img/siona-abuela.png");
 	rueda.style.transform="rotate(-50deg)";
 	abuela.style.animationName="caminar";
		setTimeout(()=>{
			removerSecond();
		},3000)
}

function removerSecond(){
	abuela.setAttribute("xlink:href", "./img/siona-frente.png");
	abuela.style.animationName="";
	// audiosTejidos[1].play();
	letrero2.classList.add("aparecer");
	simbolo2.classList.add("prueba");
		setTimeout(()=>{
		 hideMsnSecond();
		},15000)
}

function hideMsnSecond(){
	letrero2.classList.remove("aparecer");
	setTimeout(()=>{
		
		thirdEstation();
	},1200)
}

function thirdEstation(){
  fondo.style.transform="translateX(-240px)";
  abuela.setAttribute("xlink:href", "./img/siona-abuela.png"); 
  rueda.style.transform="rotate(-80deg)"
  abuela.style.animationName="caminar";
	setTimeout(()=>{
		removerThird();
  	},3000)
}

function removerThird(){
	
	abuela.setAttribute("xlink:href", "./img/siona-frente.png");
	abuela.style.animationName="";
	// audiosTejidos[2].play();
	letrero3.classList.add("aparecer");
	simbolo3.classList.add("prueba");
		setTimeout(()=>{
			hideMsnSThird();
		},15000)
}

function hideMsnSThird(){
	letrero3.classList.remove("aparecer");
		setTimeout(()=>{
			exitEstation();
		},1200)
}

function exitEstation(){
	fondo.style.transform="translateX(-330px)";
	abuela.setAttribute("xlink:href", "./img/siona-abuela.png"); 
	rueda.style.transform="rotate(-132deg)";
  	abuela.style.animationName="caminar";
  	setTimeout(()=>{		
		final();	
 	},3500)
}

function final(){
	abuela.setAttribute("xlink:href", "./img/siona-saludo.png");
	 subAgradecimiento.classList.toggle('desaparecer')
	abuela.style.animationName="";
	abuela.classList.add("saludo");
	// audiosTejidos[3].play();
}








