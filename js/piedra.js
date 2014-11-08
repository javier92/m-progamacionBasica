var opcionMaquina ; 
var opcionUsuario ;
var score = [0,0]
var opciones = ["Piedra", "Papel", "Tijeras", "Largato", "Spock"]
var resultados = [ 
	["empate","perdistes","ganastes","ganastes","perdistes"], //Piedra
	["ganastes","empate","perdistes","perdistes","ganastes"], //Papel
	["perdistes","ganastes","empate","ganastes","perdistes"], //Tijeras
	["perdistes","ganastes","perdistes","empate","ganastes"], //Largato
	["ganastes","perdistes","ganastes",	"perdistes","empate"] //Spock
];

var btn = document.getElementById("btn");
var result = document.getElementById("result");
var user = document.getElementById("user");
var machine = document.getElementById("machine");

btn.addEventListener('click',initGame,false)

function aleatorio(minimo,maximo){
	return Math.floor(Math.random() * (maximo - minimo)) + minimo;
};

// comprobamos que el valor itroducido por el usuario sea valido
function initGame(){
	opcionMaquina = aleatorio(5,0);
	opcionUsuario = parseInt(prompt("¡ que eligues\n piedra: 0\n papel: 1\n tijera: 2", 0));

	if(opcionUsuario >= 0 && opcionUsuario <= 4 ){

		 user.innerHTML = "Tu elegiste: " + opciones[opcionUsuario];
		 machine.innerHTML = "La maquina eligio: " + opciones[opcionMaquina];


		// Evaluació de empate
		if (opcionUsuario == opcionMaquina) {
		 	result.innerHTML = "Es un empate";
		 	//console.log("Es un empate");

		}
		// evaluacion victoria
		else if (resultados[opcionUsuario][opcionMaquina] == "ganastes"){
		 	result.innerHTML = "Felecidades le has ganado a la Maquina :)";
			score[0] ++
		 	//console.log("Felicidades le has ganado a la Maquina :)");
		}
		else{
		 	result.innerHTML = "Has perdido contra una maquina sin cerebro :(";
			//console.log("Has perdido contra una maquina sin cerebro :(");
			score[1] ++
		}

	}
	else { 
		console.log("Elige un Numero entre 0 y 4 idiota");
	};

	console.log("puntaje jugador: " + score[0] + "\n" + "puntaje maquina: " + score[1])
};