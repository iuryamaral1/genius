/*
	Jogo GENIUS
*/

var qtdJogadas = 0;
var arrayJogadas = new Array();
var arrayDivs = new Array();

window.onload = function() {
	init();
}

function init() {
	document.querySelectorAll("div").forEach(function(currentValue, currentIndex, listObj){
		var obj = listObj[currentIndex];
		obj.addEventListener("click", controlTurn, false);
		arrayDivs.push(obj);
	});
	qtdJogadas = 0;
	showColors();
	document.getElementById("statusJogada").innerHTML = "";
}

function controlTurn(e) {
	var obj = e.target;

	if(obj.id != arrayJogadas[qtdJogadas++]) {
		gameOver();
		return;
	}	
	
	if(qtdJogadas == arrayJogadas.length) {
		showColors();
		qtdJogadas = 0;
	}

	document.getElementById("statusJogada").innerHTML = "Faltam " + (arrayJogadas.length - qtdJogadas) + " jogadas para finalizar a rodada";
}

function gameOver() {
	alert('Voce perdeu');
	var btnReInit = document.createElement("button");
	btnReInit.innerHTML = "Reiniciar";
	btnReInit.addEventListener("click", init, false);
	document.body.appendChild(btnReInit);
}

function showColors() {
	for(var i = 0; i < arrayJogadas.length; i++) {
		var id = arrayJogadas[i];
		
		setTimeout(function(){
			showBlackAMoment(id)	
		}, 1000);		
	}

	var index = getRandomIntInclusive(0, 3);
	var id = arrayDivs[index].id;
	showBlackAMoment(id);
	arrayJogadas.push(id);
}

function showBlackAMoment(id) {
	setTimeout(function(){
		document.getElementById(id).style.background = "black";
		setTimeout(function(){
			document.getElementById(id).style.background = id;
		}, 1000);
	}, 500);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}