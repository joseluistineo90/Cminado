function aleatorio(minimo,maximo)
{
	var numero = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
	return numero;
}

var campo = [ [aleatorio(0,1),aleatorio(0,1),aleatorio(0,1),aleatorio(0,1)],
				[aleatorio(0,1),aleatorio(0,1),aleatorio(0,1),aleatorio(0,1)],
				[aleatorio(0,1),aleatorio(0,1),aleatorio(0,1),aleatorio(0,1)],
				[aleatorio(0,1),aleatorio(0,1),aleatorio(0,1),aleatorio(0,1)]
	]

var vidas = 3;
var puntos = 0;
var fallas = 0;


function selecion(x,y){
	var comp = campo[x][y];
	var cam = "a"+x+y;
	var bom = '<img src="img/b.png"/><audio autoplay><source src="audio/1.ogg" type="audio/ogg"><source src="audio/1.mp3" type="audio/mpeg"></audio>';
	var pas = '<img src="img/p.png"/><audio autoplay><source src="audio/0.ogg" type="audio/ogg"><source src="audio/0.mp3" type="audio/mpeg"></audio>';
	
	 if(comp == 1){
	 	vidas--;
	 	fallas++;
	 	document.getElementById(cam).innerHTML = bom;


	 }else{
	 	puntos= puntos+25;
	 	document.getElementById(cam).innerHTML = pas;
	 }
	document.getElementById("puntos").innerHTML = '<span class="v"><br>Vidas: 0'+vidas+'</span><span class="p"><br>Puntos: '+puntos+'</span><span class="f"><br>Fallas: '+fallas+'</span>';
	if(vidas==0){
	document.getElementById("perder").style.display ="block";

}
if(puntos==100){
	document.getElementById("ganastes").style.display="block";
}
}

