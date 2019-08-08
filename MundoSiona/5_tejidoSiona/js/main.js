var abuela=document.querySelector('#abuela');
var rueda=document.querySelector('#ruedaCompleta');
var fondo=document.querySelector('#moverFondo');
var simbolo1=document.querySelector('#simbolo-1');
var simbolo2=document.querySelector('#simbolo-2');
var simbolo3=document.querySelector('#simbolo-3');
var letrero1=document.querySelector('#letrero-1');
var letrero2=document.querySelector('#letrero-2');
var letrero3=document.querySelector('#letrero-3');

var monbn = document.getElementById('id_montanas_bn');
var moncol = document.getElementById('id_montanas_col');

monbn.style.opacity="1";
moncol.style.opacity="0";

var letrero = document.getElementsByClassName("oculto");
var subAgradecimiento=document.getElementById('subAgradecimiento');

const btnStart = document.getElementById('ruedaCompleta');
var audiosTejidos = document.getElementsByClassName('audio');


btnStart.addEventListener('click', start);
abuela.setAttribute("width","1012.68")
abuela.setAttribute("xlink:href", "./img/siona-frente.png");

function start(){
	audiosTejidos[4].play();
	btnStart.removeEventListener('click', start);
	btnStart.classList.remove("simbolo");
	firstEstation();
}

function firstEstation(){
	abuela.setAttribute("width","1156")
	fondo.style.transform="translateX(-90px)";
	abuela.setAttribute("xlink:href", "./img/siona-abuela.png");
	rueda.classList.add("rodar15")
	abuela.style.animationName="caminar";
	setTimeout(()=>{
		removerFirst();
	},3500)
}

function removerFirst(){
abuela.setAttribute("width","1012.68")
abuela.setAttribute("xlink:href", "./img/siona-frente.png");
abuela.style.animationName="";
audiosTejidos[0].play();
letrero[0].classList.add("aparecer");
simbolo1.classList.add("prueba");
		setTimeout(()=>{
		 hideMsnFirst();
		},15000)
}

function hideMsnFirst(){
	letrero[0].classList.remove("aparecer");
		setTimeout(()=>{
			secondEstation();
		},1200)
}

function secondEstation(){
	abuela.setAttribute("width","1156")
	fondo.style.transform="translateX(-140px)";
 	abuela.setAttribute("xlink:href", "./img/siona-abuela.png");
 	rueda.style.transform="rotate(-50deg)";
 	abuela.style.animationName="caminar";
		setTimeout(()=>{
			removerSecond();
		},3000)
}

function removerSecond(){
	abuela.setAttribute("width","1012.68")
	abuela.setAttribute("xlink:href", "./img/siona-frente.png");
	abuela.style.animationName="";
	audiosTejidos[1].play();
	letrero[1].classList.add("aparecer");
	simbolo2.classList.add("prueba");
		setTimeout(()=>{
		 hideMsnSecond();
		},15000)
}

function hideMsnSecond(){
	letrero[1].classList.remove("aparecer");
	setTimeout(()=>{
		
		thirdEstation();
	},1200)
}

function thirdEstation(){
	abuela.setAttribute("width","1156");
  fondo.style.transform="translateX(-240px)";
  abuela.setAttribute("xlink:href", "./img/siona-abuela.png"); 
  rueda.style.transform="rotate(-80deg)"
  abuela.style.animationName="caminar";
	setTimeout(()=>{
		removerThird();
  	},3000)
}

function removerThird(){
	abuela.setAttribute("width","1012.68")
	abuela.setAttribute("xlink:href", "./img/siona-frente.png");
	abuela.style.animationName="";
	audiosTejidos[2].play();
	
	letrero[2].classList.add("aparecer");
	simbolo3.classList.add("prueba");
		setTimeout(()=>{
			hideMsnSThird();
		},15000)
}

function hideMsnSThird(){
	letrero[2].classList.remove("aparecer");
		setTimeout(()=>{
			exitEstation();
		},1200)
}

function exitEstation(){
	abuela.setAttribute("width","1156")
	fondo.style.transform="translateX(-330px)";
	abuela.setAttribute("xlink:href", "./img/siona-abuela.png"); 
	rueda.style.transform="rotate(-138deg)";
  	abuela.style.animationName="caminar";
  	setTimeout(()=>{		
		final();	
 	},3500)
}

function final(){
	abuela.setAttribute("xlink:href", "./img/siona-saludo.png");
	abuela.setAttribute("width","1012.68");

	abuela.style.animationName="";
	abuela.classList.add("saludo");
	audiosTejidos[3].play();

	monbn.style.opacity="0";
	moncol.style.opacity="1";

	subAgradecimiento.classList.toggle('desaparecer');
	
	setTimeout(()=>{
		window.open("../../Menu/menu.html", "_self");
	}, 9000);
}








