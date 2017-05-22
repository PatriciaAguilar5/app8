// JavaScript Document

$(document).ready(function(e) {
  document.addEventListener("deviceready",function(){
	  
	  $('#izquierda').on("swipeleft",function(){
		  navigator.notificacion.alert("Deslizo a la izquierda",function(){"Aplicacion7","Aceptar"});
});

$('#derecha').on("swiperight",function(){
	navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notificacion.beep(1);
			break;
			
			case 2:
			navigator.notificacion.vibrar(1000);
			break;
		}
	},"Aplicacion7","Beep,Vibrar,Cancelar");
	
});
  },false);
});
			
			
