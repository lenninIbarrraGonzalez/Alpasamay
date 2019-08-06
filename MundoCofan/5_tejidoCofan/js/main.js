
const abuela=document.querySelector('#abuela');
const rueda=document.querySelector('#ruedaCompleta');
const fondo=document.querySelector('#moverFondo');
const simbolo1=document.querySelector('#simbolo-1');
const simbolo2=document.querySelector('#simbolo-2');
const simbolo3=document.querySelector('#simbolo-3');
const letrero1=document.querySelector('#letrero-1');
const letrero2=document.querySelector('#letrero-2');
const letrero3=document.querySelector('#letrero-3');
var subAgradecimiento=document.getElementById('subAgradecimiento');

const btnStart = document.getElementById('ruedaCompleta');

audiosTejidos = document.getElementsByClassName('audio');

btnStart.addEventListener('click', start);
abuela.setAttribute("width","1012.68")
abuela.setAttribute("xlink:href", "./img/cofan-frente.png");
letrero1.classList.add("desaparecer");
letrero2.classList.add("desaparecer");
letrero3.classList.add("desaparecer");


function start(){
	audiosTejidos[4].play();
	btnStart.removeEventListener('click', start);
	btnStart.classList.remove("simbolo");
	firstEstation();
}

function firstEstation(){
	abuela.setAttribute("width","1156")
	fondo.style.transform="translateX(-82px)";
	abuela.setAttribute("xlink:href", "./img/cofan-abuela.png");
	rueda.classList.add("rodar15")
	abuela.style.animationName="caminar";
	setTimeout(()=>{
		removerFirst();
	},3500)
}

function removerFirst(){
	abuela.setAttribute("width","1012.68")
	abuela.setAttribute("xlink:href", "./img/cofan-frente.png");
	abuela.style.animationName="";
	audiosTejidos[0].play();
	letrero1.classList.add("aparecer");
	simbolo1.classList.add("prueba");
	letrero1.desaparecer
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
	abuela.setAttribute("width","1156")
	fondo.style.transform="translateX(-164px)";
 	abuela.setAttribute("xlink:href", "./img/cofan-abuela.png");
 	rueda.style.transform="rotate(-42deg)";
	 abuela.style.animationName="caminar";
	     	setTimeout(()=>{
			removerSecond();
		},3000)
}

function removerSecond(){
	abuela.setAttribute("width","1012.68")
	abuela.setAttribute("xlink:href", "./img/cofan-frente.png");
	abuela.style.animationName="";
	audiosTejidos[1].play();
	
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
	abuela.setAttribute("width","1156");
  fondo.style.transform="translateX(-240px)";
  abuela.setAttribute("xlink:href", "./img/cofan-abuela.png"); 
  rueda.style.transform="rotate(-63deg)"
  abuela.style.animationName="caminar";
    		setTimeout(()=>{
			removerThird();
  	},3000)
}

function removerThird(){
	abuela.setAttribute("width","1012.68")
	abuela.setAttribute("xlink:href", "./img/cofan-frente.png");
	abuela.style.animationName="";
	audiosTejidos[2].play();
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
	abuela.setAttribute("width","1156")
	fondo.style.transform="translateX(-330px)";
	abuela.setAttribute("xlink:href", "./img/cofan-abuela.png"); 
  rueda.style.transform="rotate(-110deg)";
  abuela.style.animationName="caminar";
  	setTimeout(()=>{		
		final();	
 		},3500)
}

function final(){
	abuela.setAttribute("width","1012.68")
	abuela.setAttribute("xlink:href", "./img/cofan-saludo.png");
	subAgradecimiento.classList.toggle('desaparecer')
	abuela.style.animationName="";
	abuela.classList.add("saludo");
	audiosTejidos[3].play();

	setTimeout(()=>{
		window.open("../../Menu/menu.html", "_self");
	}, 8000);
}