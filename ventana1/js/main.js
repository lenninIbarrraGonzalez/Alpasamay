


var abuela=document.querySelector('#abuela')
var montana=document.querySelector('#montanaAnim')
var montanacolor=document.querySelector('#montanacolor');
var fondocolor=document.querySelector('#fondo-color');




 var movimiento=setTimeout(function(){

abuela.setAttribute("xlink:href", "./img/inga-frente.png");
 abuela.classList.add("saludo");
 montana.classList.add("prueba");



 },5200);


montana.addEventListener("click", function(){


	fondocolor.style.opacity=1
	montanacolor.style.opacity=1
	montana.style.display="none"
	abuela.setAttribute("xlink:href", "./img/inga-saludo.png");

 })


















