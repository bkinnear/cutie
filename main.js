var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.addEventListener('keydown',this.keyDown,false);
window.addEventListener('keyup',this.keyUp,false);
window.addEventListener('mousemove',this.mouseMove,false);

var player = {
	x:0,
	y:0,
	direction:0,
	speed:3
}

var onUpdate = {
	moveLeft: false,
	moveRight: false,
	moveUp: false,
	moveDown: false
}

var mouse_x;
var mouse_y;

var monsters = [];

function keyDown(e) {
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

function keyUp(e) {
	var code = e.keyCode;

	if (code === 37)	//left
		onUpdate.moveLeft = false;
	if (code === 38)	//up
		onUpdate.moveUp = false;
	if (code === 39)	//right
		onUpdate.moveRight = false;
	if (code === 40)	//down
		onUpdate.moveDown = false;
}

function mouseMove(e) {
	var rect = canvas.getBoundingClientRect();
	mouse_x = e.clientX - rect.left;
	mouse_y = e.clientY - rect.top;
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
	
	player.direction = Math.atan((mouse_y - player.y) / (mouse_x - player.x));
	if (mouse_x - player.x < 0)
		player.direction += Math.PI;
	drawCircle(player.x, player.y, 16, "#FF0000");
	drawCircle(player.x + 22*Math.cos(player.direction+Math.PI/4), player.y + 22*Math.sin(player.direction+Math.PI/4), 5, "#FF0000");
	drawCircle(player.x + 22*Math.cos(player.direction-Math.PI/4), player.y + 22*Math.sin(player.direction-Math.PI/4), 5, "#FF0000");

	if (onUpdate.moveLeft) {
		player.x -= player.speed;
	}
	if (onUpdate.moveRight) {
		player.x += player.speed;
	}
	if (onUpdate.moveUp) {
		player.y -= player.speed;
	}
	if (onUpdate.moveDown) {
		player.y += player.speed;
	}

	
}

setInterval(update, 15); // 66.667fps
setInterval(addMonster(monsters, 0, 0, "Slime"), 5000);
