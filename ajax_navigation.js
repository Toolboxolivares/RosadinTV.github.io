$(function() {
  
  
$('nav a').click(function() { 
  var $linkClicked = $(this).attr('href');


if (startsWith($linkClicked,'#') == false)  {
  // Se trata de un URL
 OpenInNewTab(linkClicked);
  return false;
} else  {
  // Se trata de un Hashtag
}


document.location.hash = $linkClicked;
  if (!$(this).hasClass("active")) {
    $("nav a").removeClass("active");
    $(this).addClass("active");
    $('#ajax-main-content section').hide();
    $($linkClicked).fadeIn();
  
  
  var $nombre_categoria = capitalizeFirstLetter($linkClicked.slice(1))
  document.getElementById("titulo_actual").innerHTML = $nombre_categoria;
  
CerrarBarraNavegacion();
  
    return false;
  }
  else {    
    CerrarBarraNavegacion();
	  return false;
  }



});


var hash = window.location.hash;
hash = hash.replace(/^#/, '');
switch (hash) {
    case 'inicio' :
      $("#" + hash + "-link").trigger("click");
      break;
    case 'descarga' :
      $("#" + hash + "-link").trigger("click");
      break;
    case 'plugins' :
      $("#" + hash + "-link").trigger("click");
      break;
          case 'acerca' :
      $("#" + hash + "-link").trigger("click");
      break;
          case 'ayuda' :
      $("#" + hash + "-link").trigger("click");
      break;
}



 var oldLocation = location.href;
 setInterval(function() {
      if(location.href != oldLocation) {
           oldLocation = location.href
           // CAMBIO LA URL, 
           var hash = window.location.hash;
hash = hash.replace(/^#/, '');
switch (hash) {
    case 'inicio' :
      $("#" + hash + "-link").trigger("click");
      break;
    case 'descarga' :
      $("#" + hash + "-link").trigger("click");
      break;
    case 'plugins' :
      $("#" + hash + "-link").trigger("click");
      break;
          case 'acerca' :
      $("#" + hash + "-link").trigger("click");
      break;
          case 'ayuda' :
      $("#" + hash + "-link").trigger("click");
      break;
}
           //
      }
  }, 100); // TIMER (MS)
  
  
  function CerrarBarraNavegacion() {

    var isMobileVersion = document.getElementsByClassName('mdl-layout__obfuscator is-visible');
if (isMobileVersion.length > 0) {
  var d = document.querySelector('.mdl-layout');
  d.MaterialLayout.toggleDrawer();
}
  
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function OpenInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function startsWith(str, word) {
    return str.lastIndexOf(word, 0) === 0;
}


});


//Codigo a ejecutar al inicio

var ALEATORIO = ObtenerNumeroAleatorio(1,1); //1=SOLO TEMA ORIGINAL / 5=TEMA ALEATORIO

if (ALEATORIO ==1){ //Original
CambiarBackColor_ByClassName("mdl-layout__header-row","#640032"); //Barra de titulo
CambiarBackColor_ByClassName("demo-navigation mdl-navigation","#640032"); //Barra de navegacion
CambiarBackColor_ByClassName("mdl-layout__content","#6E0A3C"); //Contenido
}
if (ALEATORIO ==2){ //Rojo
CambiarBackColor_ByClassName("mdl-layout__header-row","#410000"); //Barra de titulo
CambiarBackColor_ByClassName("demo-navigation mdl-navigation","#410000"); //Barra de navegacion
CambiarBackColor_ByClassName("mdl-layout__content","#4B0A0A"); //Contenido
}
if (ALEATORIO ==3){ //Violeta
CambiarBackColor_ByClassName("mdl-layout__header-row","#410041"); //Barra de titulo
CambiarBackColor_ByClassName("demo-navigation mdl-navigation","#410041"); //Barra de navegacion
CambiarBackColor_ByClassName("mdl-layout__content","#4B0A4B"); //Contenido
}
if (ALEATORIO ==4){ //Azul
CambiarBackColor_ByClassName("mdl-layout__header-row","#000023"); //Barra de titulo
CambiarBackColor_ByClassName("demo-navigation mdl-navigation","#000023"); //Barra de navegacion
CambiarBackColor_ByClassName("mdl-layout__content","#0A0A2D"); //Contenido
}
if (ALEATORIO ==5){ //Verde
CambiarBackColor_ByClassName("mdl-layout__header-row","#0A3C0A"); //Barra de titulo
CambiarBackColor_ByClassName("demo-navigation mdl-navigation","#0A3C0A"); //Barra de navegacion
CambiarBackColor_ByClassName("mdl-layout__content","#003200"); //Contenido
}
if (ALEATORIO ==6){ //Negro (Deshabilitado)
CambiarBackColor_ByClassName("mdl-layout__header-row","#050505"); //Barra de titulo
CambiarBackColor_ByClassName("demo-navigation mdl-navigation","#050505"); //Barra de navegacion
CambiarBackColor_ByClassName("mdl-layout__content","#0F0F0F"); //Contenido
}


//Fin

//Funciones

function ObtenerNumeroAleatorio(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function CambiarBackColor_ByClassName(ClassString, Color) {
    var boxes = document.getElementsByClassName(ClassString),
        i = boxes.length;

    while(i--) {
        boxes[i].style.backgroundColor = Color;
    }
}

//Fin