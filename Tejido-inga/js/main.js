


var abuela=document.querySelector('#abuela');
var rueda=document.querySelector('#ruedaCompleta');
var fondo=document.querySelector('#moverFondo');
var simbolo1=document.querySelector('#simbolo-1');
var simbolo2=document.querySelector('#simbolo-2');
var simbolo3=document.querySelector('#simbolo-3');
var letrero1=document.querySelector('#letrero-1');
var letrero2=document.querySelector('#letrero-2');
var letrero3=document.querySelector('#letrero-3');

// simbolo1.classList.add("prueba")

abuela.setAttribute("xlink:href", "./img/inga-frente.png");

setTimeout(()=>{
	firstEstation();
},1500);



function firstEstation(){
	fondo.style.transform="translateX(-110px)";
	abuela.setAttribute("xlink:href", "./img/inga-abuela.png");
	rueda.classList.add("rodar15")
	abuela.style.animationName="caminar";
	
	
	setTimeout(()=>{
		removerFirst();
	},3000)
}


function removerFirst(){
abuela.setAttribute("xlink:href", "./img/inga-frente.png");
abuela.style.animationName="";
letrero1.classList.add("aparecer");
simbolo1.classList.add("prueba");
		setTimeout(()=>{
		 hideMsnFirst();
		},4000)

}

function hideMsnFirst(){
	letrero1.classList.remove("aparecer");
		setTimeout(()=>{
			secondEstation();
		},1200)
}

function secondEstation(){
	fondo.style.transform="translateX(-220px)";
 	abuela.setAttribute("xlink:href", "./img/inga-abuela.png");
 	rueda.style.transform="rotate(-40deg)";
 	abuela.style.animationName="caminar";
	
	 
		setTimeout(()=>{
			removerSecond();
		},3000)

}

function removerSecond(){
	abuela.setAttribute("xlink:href", "./img/inga-frente.png");
	abuela.style.animationName="";
	letrero2.classList.add("aparecer");
	simbolo2.classList.add("prueba");
	setTimeout(()=>{
	 hideMsnSecond();
	},4000)
}

function hideMsnSecond(){
	letrero2.classList.remove("aparecer");
	setTimeout(()=>{
		
		thirdEstation();
	},1200)
}


function thirdEstation(){
 fondo.style.transform="translateX(-330px)";
 abuela.setAttribute("xlink:href", "./img/inga-abuela.png"); 
 rueda.style.transform="rotate(-70deg)"
 abuela.style.animationName="caminar";
 

	setTimeout(()=>{
		removerThird();
  },3000)
}

function removerThird(){
	
	abuela.setAttribute("xlink:href", "./img/inga-frente.png");
	abuela.style.animationName="";
	letrero3.classList.add("aparecer");
	simbolo3.classList.add("prueba");
	setTimeout(()=>{
		hideMsnSThird();
	},4000)
}

function hideMsnSThird(){
	letrero3.classList.remove("aparecer");
	setTimeout(()=>{
		exitEstation();
	},1200)
}

function exitEstation(){
	fondo.style.transform="translateX(-440px)";
	abuela.setAttribute("xlink:href", "./img/inga-abuela.png"); 
 rueda.style.transform="rotate(-100deg)";
 abuela.style.animationName="caminar";
}


















// simbolo1.addEventListener("click", function(evt){
// fondo.style.transform="translateX(-110px)"
// abuela.setAttribute("xlink:href", "./img/inga-abuela.png");
// // rueda.style.animationName="girar";
// rueda.classList.add("rodar15")

// abuela.style.animationName="caminar";
// letrero1.classList.add("aparecer")

// })

// abuela.addEventListener("click", function(evt){

// 	remover()

// })


// simbolo2.addEventListener("click", function(evt){
// fondo.style.transform="translateX(-220px)"	

//  letrero1.classList.add("oculto")
//  abuela.setAttribute("xlink:href", "./img/inga-abuela.png");
//  rueda.style.transform="rotate(-40deg)"
//  abuela.style.animationName="caminar";
//  letrero2.classList.add("aparecer")

//  })


// simbolo3.addEventListener("click", function(evt){
// fondo.style.transform="translateX(-330px)"
//  letrero2.classList.add("oculto")
//  abuela.setAttribute("xlink:href", "./img/inga-abuela.png"); 

//  rueda.style.transform="rotate(-70deg)"
//  abuela.style.animationName="caminar";
//  letrero3.classList.add("aparecer")

//  })







 // var movimiento=setTimeout(function(){

 // abuela.classList.add("saludo");
 // simbolo1.classList.add("prueba");

 // },3000);


//  console.log(terminoTiempo)	

// if(terminoTiempo===true ){
	

// 	console.log(terminoTiempo)	

// } 
