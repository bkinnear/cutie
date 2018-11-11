var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.addEventListener('keydown',this.check,false);

var player = {
	x:0,
	y:0,
	speed:6
}

var onUpdate = {
	moveLeft: false,
	moveRight: false,
	moveUp: false,
	moveDown: false
}


function check(e) {
	var code = e.keyCode;

	if (code === 37)	//left
		onUpdate.moveLeft = true;
	if (code === 38)	//up
		onUpdate.moveUp = true;
	if (code === 39)	//right
		onUpdate.moveRight = true;
	if (code === 40)	//down
		onUpdate.moveDown = true;
}

function clearScreen() {
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(x, y, r, c) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.fillStyle = c;
	ctx.fill();
}

function update() {
	clearScreen();

	drawCircle(player.x, player.y, 16, "#FF0000");

	if (onUpdate.moveLeft) {
		onUpdate.moveLeft = false;
		player.x -= player.speed;
	}
	if (onUpdate.moveRight) {
		onUpdate.moveRight = false;
		player.x += player.speed;
	}
	if (onUpdate.moveUp) {
		onUpdate.moveUp = false;
		player.y -= player.speed;
	}
	if (onUpdate.moveDown) {
		onUpdate.moveDown = false;
		player.y += player.speed;
	}
}

setInterval(update, 15); // approx. 60fps
