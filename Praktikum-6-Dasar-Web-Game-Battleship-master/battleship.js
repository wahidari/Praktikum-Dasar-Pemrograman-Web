
var maps = [[], [], [], [], [], [], []];
var ship = 3;
var hit = 0;
var numInput = 4;
var taken = [];

var view = {
	//tampilkan pesan hit atau miss
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	//tampilkan image kapal di lokasi tebakan true dengan param tebakan
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	//tampilkan image miss di lokasi tebakan false dengan param tebakan
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	},
	displayAlert: function(alerts){
		alert(alerts);
	}
}; 

function collasion(dir, x, y) {
	console.log("collaison");
	console.log("baris = " + y + ", kolom = " + x);
	//cek vertical Collasion
	if (dir === 0) {
		for (var i = 0; i < 3; i++) {
			if (maps[x][y + i] == 1) {
				console.log("collaison");
				return false;
			}
		}
	}
	//cek horizontal collasion
	if (dir === 1) {
		for (var i = 0; i < 3; i++) {
			if (maps[x + i][y] == 1) {
				console.log("collaison");
				return false;
			}
		}
	}
	return true;
}

function geneRateshipLocation() {
	for (var i = 0; i < ship; i++) {
		var repeat = true;
		do {
			var dir = Math.floor(Math.random() * 2);
            //vertical
            if (dir === 0) {
            	console.log("vertical");
            	var y = Math.floor(Math.random() * 5);
            	var x = Math.floor(Math.random() * 7);
            	if (collasion(dir, x, y) === true) {
            		for (var i = 0; i < 3; i++) {
            			//fill the map with 1 if not collasion
            			maps[x][y + i] = 1;
            			// console.log(maps[x][y + i]);
            		}
            		repeat = false;
            	}

            }
            //horizontal
            if (dir === 1) {
            	console.log("horizontal");
            	var x = Math.floor(Math.random() * 5);
            	var y = Math.floor(Math.random() * 7);
            	if (collasion(dir, x, y) === true) {
            		for (var i = 0; i < 3; i++) {
            			//fill the map with 1 if not collasion
            			maps[x + i][y] = 1;
            			// console.log(maps[x + i][y]);
            		}
            		repeat = false;
            	}

            }
        } while (repeat);
    }
}

function fire(guess) {
	var tebakan=guess;
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
	var y = alphabet.indexOf(tebakan.charAt(0));
	var x = tebakan.charAt(1);
	//cek ship hit
	// if (hit === 3) {
	// 	view.displayMessage("You Get All Ship !");
	// 	view.displayAlert("You Win, Refresh Your Browser To Play Again !");
	// } 
	//Cek Num Of input
	if (numInput < 0 ) {
		view.displayAlert("Game Over, Refresh Your Browser !");
	}
	//Wrong Input
	else if (tebakan === null || tebakan.length !== 2) {
		view.displayAlert("Input Can't Be Null And Must Be 2 Char");
	}
	//Input Already Taken
	else if (taken.indexOf(tebakan) !== -1) {
		view.displayAlert("Oops, you already hit that location!");
	} 
	else {
		//tampilkan pesan hit
		if (maps[x][y] === 1) {
			view.displayHit(y + "" + x);
			hit++;
			view.displayMessage("HIT! | Live = " + numInput + " | Ship Hit = " + hit);
			numInput--;
			if (hit === 3) {
				view.displayMessage("You Get All Ship !");
				view.displayAlert("You Win, Refresh Your Browser To Play Again !");
			} 

		}
        //tampilkan pesan miss
        if (maps[x][y] === 0) {
        	view.displayMiss(y + "" + x);
        	view.displayMessage("You Missed! | Live = " + numInput + " | Ship Hit = " + hit);
        	numInput--;
        }
        //tambahkan tebakan ke taken
        taken.push(tebakan);
    }
    //kosongkan input
    document.getElementById("guessInput").innerHTML = "";
}

//Fill Map With 0
function fillmap() {
	for (var row = 0; row < 7; row++) {
		for (var col = 0; col < 7; col++) {
			maps[row][col] = 0;
		}
	}
	geneRateshipLocation();
}

function handleFireButton() {
	//mengambil nilai inputan
	var guessInput = document.getElementById("guessInput");
	//menyimpan nilai inputan dengan huruf besar
	var guess = guessInput.value.toUpperCase();
	//memproses inputan
	fire(guess);
}

window.onload = init;

function init() {
	//Nama Player
	person = prompt("Please enter your name", "Player");
	if (person != null) {
		document.getElementById("person").innerHTML = "Hi, " + person;
	}
	//memberikan event click pada tombol fire
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	//generate lokasi kapal
	fillmap();
}