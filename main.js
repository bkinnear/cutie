var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.addEventListener('keydown',this.keyDown,false);
window.addEventListener('keyup',this.keyUp,false);
window.addEventListener('mousemove',this.mouseMove,false);

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

	if (code == 27)
		shopClose();
	
	// movement
	if (code === 37)	//left
		onUpdate.moveLeft = true;
	if (code === 38)	//up
		onUpdate.moveUp = true;
	if (code === 39)	//right
		onUpdate.moveRight = true;
	if (code === 40)	//down
		onUpdate.moveDown = true;
	if (code === 65)	//left
		onUpdate.moveLeft = true;
	if (code === 87)	//up
		onUpdate.moveUp = true;
	if (code === 68)	//right
		onUpdate.moveRight = true;
	if (code === 83)	//down
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
	if (code === 65)	//left
		onUpdate.moveLeft = false; 
	if (code === 87)	//up
		onUpdate.moveUp = false;
	if (code === 68)	//right
		onUpdate.moveRight = false;
	if (code === 83)	//down
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

function drawPlayer() {
	drawCircle(player.x, player.y, 16, "#FF0000");
	drawCircle(player.x + 22*Math.cos(player.direction+Math.PI/4), player.y + 22*Math.sin(player.direction+Math.PI/4), 5, "#FF0000");
	drawCircle(player.x + 22*Math.cos(player.direction-Math.PI/4), player.y + 22*Math.sin(player.direction-Math.PI/4), 5, "#FF0000");
}

function drawMonsters() {
	for (var i = 0; i < monsters.length; i++) {
		mon = monsters[i];
		drawCircle(mon.x, mon.y, 16, "#FF0000");
		drawCircle(mon.x + 22*Math.cos(mon.direction+Math.PI/4), mon.y + 22*Math.sin(mon.direction+Math.PI/4), 5, "#FF0000");
		drawCircle(mon.x + 22*Math.cos(mon.direction-Math.PI/4), mon.y + 22*Math.sin(mon.direction-Math.PI/4), 5, "#FF0000");
	}
}

function update() {
	clearScreen();
	
	drawMonsters();
	drawPlayer();

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

function spawnMonster() {
	addMonster(monsters, Math.random()*canvas.width, Math.random()*canvas.height, "Slimebo");
	setTimeout(spawnMonster, 5000);
}

setInterval(update, 15); // 66.667fps
setTimeout(spawnMonster, 5000);
