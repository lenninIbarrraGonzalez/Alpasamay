
const abuela=document.querySelector('#abuela');
const rueda=document.querySelector('#ruedaCompleta');
const fondo=document.querySelector('#moverFondo');
const simbolo1=document.querySelector('#simbolo-1');
const simbolo2=document.querySelector('#simbolo-2');
const simbolo3=document.querySelector('#simbolo-3');
const letrero1=document.querySelector('#letrero-1');
const letrero2=document.querySelector('#letrero-2');
const letrero3=document.querySelector('#letrero-3');

const btnStart = document.getElementById('ruedaCompleta');

audiosTejidos = document.getElementsByClassName('audio');

btnStart.addEventListener('click', start);
abuela.setAttribute("xlink:href", "./img/cofan-frente.png");

function start(){
	btnStart.removeEventListener('click', start);
	btnStart.classList.remove("simbolo");
	firstEstation();
}

function firstEstation(){
	fondo.style.transform="translateX(-82px)";
	abuela.setAttribute("xlink:href", "./img/cofan-abuela.png");
	rueda.classList.add("rodar15")
	abuela.style.animationName="caminar";
	setTimeout(()=>{
		removerFirst();
	},3500)
}

function removerFirst(){
	abuela.setAttribute("xlink:href", "./img/cofan-frente.png");
	abuela.style.animationName="";
	audiosTejidos[0].play();
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
	fondo.style.transform="translateX(-164px)";
 	abuela.setAttribute("xlink:href", "./img/cofan-abuela.png");
 	rueda.style.transform="rotate(-42deg)";
 	abuela.style.animationName="caminar";
		setTimeout(()=>{
			removerSecond();
		},3000)
}

function removerSecond(){
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
  fondo.style.transform="translateX(-240px)";
  abuela.setAttribute("xlink:href", "./img/cofan-abuela.png"); 
  rueda.style.transform="rotate(-63deg)"
  abuela.style.animationName="caminar";
		setTimeout(()=>{
			removerThird();
  	},3000)
}

function removerThird(){
	
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
	fondo.style.transform="translateX(-330px)";
	abuela.setAttribute("xlink:href", "./img/cofan-abuela.png"); 
  rueda.style.transform="rotate(-110deg)";
  abuela.style.animationName="caminar";
  	setTimeout(()=>{		
		final();	
 		},3500)
}

function final(){
	abuela.setAttribute("xlink:href", "./img/cofan-saludo.png");
	abuela.style.animationName="";
	abuela.classList.add("saludo");
	audiosTejidos[3].play();
}