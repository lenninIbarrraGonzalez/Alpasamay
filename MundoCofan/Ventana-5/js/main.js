


var abuela=document.querySelector('#abuela')
var rueda=document.querySelector('#ruedaCompleta')
var fondo=document.querySelector('#moverFondo')
var simbolo1=document.querySelector('#simbolo-1')
var simbolo2=document.querySelector('#simbolo-2');
var simbolo3=document.querySelector('#simbolo-3');
var letrero1=document.querySelector('#letrero-1')
var letrero2=document.querySelector('#letrero-2')




 // var movimiento=setTimeout(function(){

 // abuela.classList.add("saludo");
 // simbolo1.classList.add("prueba");

 // },3000);


//  console.log(terminoTiempo)	

// if(terminoTiempo===true ){
	

// 	console.log(terminoTiempo)	

// } 





 simbolo1.classList.add("prueba")

abuela.setAttribute("xlink:href", "./img/inga-frente.png");



simbolo1.addEventListener("click", function(evt){
fondo.style.transform="translateX(-110px)"
abuela.setAttribute("xlink:href", "./img/inga-abuela.png");
// rueda.style.animationName="girar";
rueda.classList.add("rodar15")

abuela.style.animationName="caminar";
letrero1.classList.add("aparecer")

})

abuela.addEventListener("click", function(evt){

	remover()

})


simbolo2.addEventListener("click", function(evt){
fondo.style.transform="translateX(-220px)"	

 letrero1.classList.add("oculto")
 abuela.setAttribute("xlink:href", "./img/inga-abuela.png");
 rueda.style.transform="rotate(-40deg)"
 abuela.style.animationName="caminar";
 letrero2.classList.add("aparecer")

 })


simbolo3.addEventListener("click", function(evt){
fondo.style.transform="translateX(-330px)"
 letrero2.classList.add("oculto")
 abuela.setAttribute("xlink:href", "./img/inga-abuela.png"); 

 rueda.style.transform="rotate(-70deg)"
 abuela.style.animationName="caminar";
 letrero3.classList.add("aparecer")

 })




function remover(){
abuela.setAttribute("xlink:href", "./img/inga-frente.png");

abuela.style.animationName="";
letrero1.classList.remove("aparecer")

}











// montana.addEventListener('click', function(){
// 	console.log("bien")

// 	montanacolor.classList.remove('colorearVacio')
// })


// montana.addEventListener('click',saludar);


// function saludar(){


// }








