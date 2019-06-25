
/*juego modificado Boberto*/

// var bucle;
// var playing = false;



//ancho y alto para el canvas
const canvasWidth = 1200;
const canvasHeight = 700;

const canvas = document.getElementById('canvas');

//inicializando el ancho y el alto del canvas

canvas.width = canvasWidth;
canvas.height = canvasHeight;


//contexto 2d para el canvas
const ctx = canvas.getContext("2d");

//****************************************


//ancho y alto para usar en el spritesheet, tomado de las propiedades de la imagen
const spriteWidth = 1472;
const spriteHeight= 325;

//manejo de 8 columnas y 2 filas para los spritesheet
const rows = 1;
const cols = 8;

// x y y cordenadas para renderizar el sprite
//X sirve para  moverse sobr el eje x
var x = 0;

//sirve para moverse en el eje y en este caso es estatica
var y = canvasHeight-spriteHeight;

// Para obtener el ancho de un solo sprite dividimos el ancho del sprite con el número de columnas
// porque todos los sprites son de igual anchura y altura
//son dos contantes alto y ancho de los fotogramas

var width = spriteWidth / cols; // 864/8 = 108

var heigth = spriteHeight / rows; // 280 / 2 = 140

//velocidad del movimiento
var speed = 2;

// Cada fila contiene 8 cuadros y al inicio mostraremos el primer cuadro
// (asumiendo que el índice es 0)
var curFrame = 0;

//El numero de frame es 8;
var frameCount = 8;



////x and y coordinates of the canvas to get the single frame 
// coordenadas x e y del lienzo para obtener el cuadro único
var srcX = 0;
var srcY = 0;

///The 0th (first) row is for the right movement
/// La fila 0 (primera) es para el movimiento correcto
var trackRigth = 0;

//1st (second) row for the left movement (counting the index from 0)
// 1ª fila (segunda) para el movimiento a la izquierda (contando el índice desde 0)
var trackLeft = 0;



// siguiendo el movimiento a la izquierda y escribe
var left = false;

// Suponiendo que al inicio el personaje se moverá al lado derecho
var right = true;


//creando un objeto imagen
var character = new Image();

character.src = "img/boberto.png"


// window.onload=function() {
//   draw();
// }

function moverLeft() {
  left = true;
  right = false;
}

function moverRight() {
  left = false;
  right = true;
}

// Ahora crearemos una función para actualizar el índice de cuadros.
// Como puede ver una variable llamada curFrame que se inicializa con 0.
// Tenemos que actualizarla cada vez que procesemos un sprite. Así que crea
// una función llamada updateFrame () 


//pruerba curva de BEZIER;


function updateFrame(){
//enemos que borrar el sprite ya dibujado antes de renderizar el nuevo sprite.
  //Para ello utilizaremos el método clearRect () .
  ctx.clearRect(x, y, width, heigth);
  

  //actualizando el frame index
  curFrame = ++curFrame % frameCount;

  //calculando la cordenada x del spriteSheet
  srcX = curFrame * width;
  

  


  if(left && x > 0) {
    srcY = trackLeft * heigth;
    //pixles a avanzar en x
    x-= speed;
  }

  if(right && x < (canvasWidth / 2)){
    srcY = trackRigth * heigth;
    x+= speed;
    // cancelAnimationFrame(bucle);
    // playing = false;
  }


  // console.log("variable x", x);
  // console.log("variable y", y);
  // console.log("variable width", width);
  // console.log("variable heigth", heigth);
  // console.log("variable curFrame", curFrame)
  // console.log("variable scrX", srcX);
  // console.log("variable scrY", srcY);
  
 
}

// Ahora finalmente vamos a crear la función para renderizar el sprite.
// Representamos la imagen utilizando el método drawImage () con el contexto
// que se ha establecido para el lienzo.

function draw() {
  //actualizamos el frame
  updateFrame();
  // ctx.context.drawImage(Image, dX, dY, dWidth, dHeight);

  // Recortar imagen
  // El método drawImage() también puede utilizarse para recortar y pegar un trozo de la imagen en un canvas.
  // en este caso el método necesita nueve parámetros:
  // cxt.drawImage(imagen,Xi,Yi,ancho_i,alto_i,Xc,Yc,ancho_c,alto_c)
  // El primer parámetro (imagen) es el objeto-imagen de javascript.

  // Los siguientes cuatro parámetros (del 2 al 5 inclusive) se refieren a la imagen. De éstos los dos primeros
  // (Xi,Yi) son las coordenadas del recorte dentro de la imagen, estas coordenadas se refieren al punto superior
  // izquierdo dentro de la imagen donde empieza el recorte. Los dos parámetros siguientes (ancho_i,alto_i) son el
  // ancho y el alto del recorte.

  // Los últimos cuatro parámetros (del 6 al 9 inclusive) se refieren al canvas. De éstos los dos primeros (Xc,Yc)
  // se refieren a las coordenadas del canvas donde se incluirá el recorte. Los otros dos (ancho_c,alto_c) son el ancho y el alto del recorte dentro del canvas.
  ctx.drawImage(character, srcX, srcY, width, heigth, x, y, width, heigth);

  text();
  
  // bucle = requestAnimationFrame(draw);
  
}


//funcion para dibujar un texto

function text() {
  const text = "Mi juego";
  ctx.font="bold 80px arial";
  ctx.fillText(text, 500, 100, 800);
  
}

// Necesitamos llamar a la función de dibujo repetidamente para continuar renderizando los sprites
// en el lienzo. Esto se puede hacer fácilmente usando el método setInterval .

setInterval(draw, 100);


