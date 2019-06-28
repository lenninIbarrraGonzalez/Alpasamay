const btnKamentsa = document.getElementById("kamentsa");
const btnInga = document.getElementById("inga");
const btnCofan = document.getElementById("cofan");
const btnZiona = document.getElementById("ziona");
var fondo = document.getElementById("fondo");

var audioKamentsa = document.getElementById("audio_kamentsa");
var audioFondo = document.getElementById("audio_fondo");
const audioInga = document.getElementById("audio_inga");
const audioKofan = document.getElementById("audio_kofan");
const audioSiona = document.getElementById("audio_siona");


btnKamentsa.addEventListener('click', msn);
btnInga.addEventListener('click', msn);
btnCofan.addEventListener('click', msn);
btnZiona.addEventListener('click', msn);



const $btnAbout = document.getElementById('btn-about');

const $hideButton = document.getElementById('hide-modal');
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $modalClose = document.getElementById('modal-close');

function msn(ev) {
  console.log(ev);
  const dataZona = ev.target.dataset.zona;

  switch(dataZona) {
    
     case 'z-kamentsa' : 
      startAnimation(dataZona);
      // setTimeout(()=> {
      //    restartCss(dataZona);
      // },6000);
     
      goPresentation();
      return 
     case 'z-inga' : 
      
      startAnimation(dataZona);
    //   setTimeout(()=> {
    //     restartCss(dataZona);
    //  },6000);
     goPresentation();
       return 
     case 'z-ziona' : 
      startAnimation(dataZona);
    //   setTimeout(()=> {
    //     restartCss(dataZona);
    //  },6000);
      goPresentation();
      return 
     case 'z-cofan' : 
      startAnimation(dataZona);
      // setTimeout(()=> {
      //   restartCss(dataZona);
    //  },6000);
      goPresentation();
      return 
  }
}

function restartCss (dataZona){
  if(dataZona === 'z-kamentsa'){
    fondo.classList.remove("moveKamentsa");
    console.log("removiendo opacity")
    btnKamentsa.classList.remove("opacity");
  }if(dataZona === 'z-inga'){
    fondo.classList.remove("moveInga");
    btnInga.classList.remove("opacity")
  }
  if(dataZona === 'z-ziona'){
    fondo.classList.remove("moveZiona");
    btnZiona.classList.remove("opacity");
  }
  if(dataZona === 'z-cofan'){
    fondo.classList.remove("moveCofan");
    btnCofan.classList.remove("opacity");
  }
}

function startAnimation(dataZona) {
    if(dataZona === 'z-kamentsa'){
      fondo.classList.add("moveKamentsa");
      btnKamentsa.style.opacity=1;
      // audioFondo.pause();
      //audioKamentsa.play();

      desaparecerBotones(dataZona)      
    }
    if(dataZona === "z-inga"){
       fondo.classList.add("moveInga");
       btnInga.style.opacity=1;
       desaparecerBotones(dataZona) 
    }
    if(dataZona === 'z-ziona'){
      fondo.classList.add("moveSiona");
      btnZiona.style.opacity=1;
      desaparecerBotones(dataZona) 
    }
    if(dataZona === 'z-cofan'){
      fondo.classList.add("moveKofan");
      btnCofan.style.opacity=1;
      desaparecerBotones(dataZona) 
    }
  }
  
function goPresentation() {
  setTimeout(()=> {
    window.open("../Puzzle/index.html", "_self");
  },6000);
}

function desaparecerBotones(dataZona){
  if(dataZona=='z-kamentsa'){
  btnInga.style.display='none';
  btnZiona.style.display='none';
  btnCofan.style.display='none';
  }
  if(dataZona === 'z-inga'){
  btnKamentsa.style.display='none';
  btnZiona.style.display='none';
  btnCofan.style.display='none';
  }

  if(dataZona === 'z-ziona'){
  btnInga.style.display='none';
  btnKamentsa.style.display='none';
  btnCofan.style.display='none';
  }

  if(dataZona === 'z-cofan'){
  btnInga.style.display='none';
  btnZiona.style.display='none';
  btnKamentsa.style.display='none';
  }
 }

function playSoundKamentsa(){
 
  audioKamentsa.play();
}
function playSoundInga(){
  audioInga.play();
}
function playSoundCofan(){
  audioKofan.play();
}
function playSoundZiona(){
  audioSiona.play();
}



 
// script para manejo del modal



// $btnAbout.addEventListener('click',()=>{
//   $btnAbout.style.animation = 'modalOn .8s fordwars';
//   // $overlay.classList.remove('active');
//   console.log("pasoooo");
// });

// $hideButton.addEventListener('click', (event)=>{
//   $modal.style.animation = 'modalIn .8s fordwars';
//   // alert("puta");
//   $overlay.classList.remove('active');
// });
 
// $modalClose.addEventListener('click', (event)=>{
//   $modal.style.animation='modalOut .8s forwards';
//   $overlay.classList.remove('active');
// });

//   // muestra el modal y el overlay cuando le doy click a la imagen
// // $img.addEventListener('click',(event)=>{
// //       $modal.style.animation = 'modalIn .8s forwards';
// //       $overlay.classList.add('active');
// // });

// $overlay.addEventListener('click', (event) => {
//     const flyoutModal = document.getElementById('modal');
//     const buttonsModal = document.getElementById('modal-buttons');
//     //permite controlar que no se realice ninguna acción si se pulsa el boton no
//     const btnnegative = document.getElementById('btn-negative');
//     // const $modalClose = document.getElementById('modal-close');

//     let targetElement = event.target;
//     if (targetElement == flyoutModal ||
//         targetElement.parentNode == flyoutModal ||
//         targetElement.parentNode == buttonsModal  ||
//         targetElement == btnnegative){
//       console.log('dentro');
//       console.log(event);
//     // }else if(targetElement == $modalClose){
//     //     $modal.style.animation='modalIn .8s forwards';
//     //     $overlay.classList.remove('active');
//     //     console.log('vida puta');
//     }
//     else{
//       console.log('fuera');
//       console.log(event);
//       $overlay.classList.remove('active');
//     //   $modal.className = "modal out";
//     }
// });