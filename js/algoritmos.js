//el constructor de los pokemón
function Pokemon(atk,hp,nme){
	this.nme = nme
	this.atk = atk;
	this.hp = hp;
} 

var pikachu 	= new Pokemon(60,100,"pikachu");
var meow 		= new Pokemon(40,80,"meow");
var Entei		= new Pokemon(100,200, "Entei, el perro legendario")

var turno = 0;

$(document).on("ready",begin());


function begin(){

	var $turno = $("#turno");
	var $atkButton =$("#atkBtn");
	var $p1 = $("#playerOne");
	var $p2 = $("#playerTwo");

	function Batalla(e){
			pk1 = e.data.pk1;
			pk2 = e.data.pk2;
			console.log(pk1.nme +" VS "+ pk2.nme);

			$p1.find(".name").text(pk1.nme);
			$p2.find(".name").text(pk2.nme);

			while(pk1.hp > 0 && pk2.hp >0 ){

				if (turno == 0) {
					pk1.hp = pk1.hp - pk2.atk;
					console.log(pk1.nme + " Recibe " + pk2.atk + " de daño")
					turno = 1
					$turno.find("span").text(turno)

					var daño = pk2.atk * 100 / pk1.hp

					console.log(pk1.hp, daño)

					$p1.find(".hp span").width($p1.find(".hp span").width() - daño);
				}
				else{
					pk2.hp = pk2.hp - pk1.atk;
					console.log(pk2.nme + " Recibe " + pk1.atk + " de daño")
					turno = 0
					$turno.find("span").text(turno)

					console.log(pk2.hp)
				}
			}

			if(pk1.hp > 0){
				console.log(pk2.nme + " ha sido derrotado\n"+					pk1.nme + " Gana")
			} else{
				console.log(pk1.nme + " ha sido derrotado\n"+pk2.nme +" Gana")
			}

			turno = 0
	}

	$atkButton.on("click",{pk1 : pikachu, pk2: meow}, Batalla)
}


