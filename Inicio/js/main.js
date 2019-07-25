// 

var entrar=document.getElementById('entrar');
var creditos=document.getElementById('creditos');
var agradecimientos=document.getElementById('agradecimientos');

const btn_volver = document.getElementById('btn-volver');

entrar.addEventListener("click", function(){
window.open("../Menu/menu.html", "_self");
 })

creditos.addEventListener("click", function(){
window.open("../Inicio/creditos.html", "_self");
 })

agradecimientos.addEventListener("click", function(){
window.open("../Inicio/agradecimiento.html", "_self");
})


btn_volver.addEventListener("click", function(){
  window.open("../Inicio/index.html")
})













