const btnKamentsa = document.getElementById("kamentsa");
const btnInga = document.getElementById("inga");
const btnCofan = document.getElementById("cofan");
const btnZiona = document.getElementById("ziona");
var fondo = document.getElementById("fondo");

btnKamentsa.addEventListener('click', msn);
btnInga.addEventListener('click', msn);
btnCofan.addEventListener('click', msn);
btnZiona.addEventListener('click', msn);

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
    window.open("presentacion.html", "_self");
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
