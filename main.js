var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.addEventListener('keydown',this.keyDown,false);
window.addEventListener('keyup',this.keyUp,false);
window.addEventListener('mousemove',this.mouseMove,false);
window.addEventListener('mousedown',this.mouseDown,false);

var onUpdate = {
	moveLeft: false,
	moveRight: false,
	moveUp: false,
	moveDown: false
}

var mouse_x;
var mouse_y;

var monsters = [];
var projs = [];

var swapArrayElements = function(arr, indexA, indexB) {
	var temp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
};

function keyDown(e) {
	var code = e.keyCode;

	if (code == 27)		// escape
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

function mouseDown(e) {
	if (player.equipped = "melee") {
		for (var i = 0; i < monsters.length; i++) {
			var mon = monsters[i];
			if (distanceTo(player, mon) <= 32) {
				mon.hp -= 20 + player.damage;
				if (mon.hp <= 0) {
					if (i != monsters.length-1)
						swapArrayElements(monsters, i, monsters.length-1);
					monsters.pop();
					continue;
				}
			}
		}
	} else {
		var p = new Object();
		p.direction = player.direction;
		p.x = player.x;
		p.y = player.y;
		projs.push(p);
	}
}

function clearScreen() {
	ctx.fillStyle = "#00AA00";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(x, y, r, c) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.fillStyle = c;
	ctx.fill();
}

function drawRect(x, y, w, h, c) {
	ctx.fillStyle = c;
	ctx.fillRect(x, y, w, h);
}

function drawText(x, y, msg, c) {
	ctx.font = "10px Arial";
	ctx.fillStyle = c;
	ctx.fillText(msg, x, y);
}

function isColliding(targ0, targ1) {
	sqrDistance = Math.pow(targ0.x-targ1.x, 2) + Math.pow(targ0.y-targ0.y, 2);

	if (sqrDistance <= 128) { // closer centre to centre than 16 pixels
		return true;
	} else {
		return false;
	}
}

function distanceTo(targ0, targ1) {
	return Math.sqrt(Math.pow(targ0.x-targ1.x, 2) + Math.pow(targ0.y-targ1.y, 2));
}

function updatePlayer() {
	// player movement
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
	
	// updating player direction
	player.direction = Math.atan((mouse_y - player.y) / (mouse_x - player.x));
	if (mouse_x - player.x < 0)
		player.direction += Math.PI;
	
	// drawing player
	drawCircle(player.x, player.y, 16, "#FF0000");
	drawCircle(player.x, player.y, 16, "#FF0000");
	drawCircle(player.x + 22*Math.cos(player.direction+Math.PI/4), player.y + 22*Math.sin(player.direction+Math.PI/4), 5, "#FF0000");
	drawCircle(player.x + 22*Math.cos(player.direction-Math.PI/4), player.y + 22*Math.sin(player.direction-Math.PI/4), 5, "#FF0000");
}

function updateMonsters() {
	for (var i = 0; i < monsters.length; i++) {
		mon = monsters[i];

		var dying = false;

		for (var j = 0; j < projs.length; j++) {
			if (distanceTo(mon, projs[j]) < 16) {
				if (projs.length-1 != j)
					swapArrayElements(projs, j, projs.length-1);
				projs.pop();
				mon.hp -= 20 + player.damage;
				if (mon.hp <= 0)
					dying = true; 
			}
		}

		if (dying) {
			if(monsters.length-1 != i)
				swapArrayElement(projs,length-1);
			monsters.pop();
			continue;
		}

		if (isColliding(mon, player)) {
			if(Math.floor(Math.random()*(5+player.armour)) == 0) {
				player.hp -= 1;
			}
		}

		// moving monster
		if (mon.x < player.x)
			mon.x += mon.speed;
		if (mon.x > player.x)
			mon.x -= mon.speed;
		if (mon.y < player.y)
			mon.y += mon.speed;
		if (mon.y > player.y)
			mon.y -= mon.speed;

		// updating monster direction
		mon.direction = Math.atan((player.y - mon.y) / (player.x - mon.x));
		if (player.x - mon.x < 0)
			mon.direction += Math.PI;
	
		// drawing monster
		drawCircle(mon.x, mon.y, 16, "#003300");
		drawCircle(mon.x + 22*Math.cos(mon.direction+Math.PI/4), mon.y + 22*Math.sin(mon.direction+Math.PI/4), 5, "#003300");
		drawCircle(mon.x + 22*Math.cos(mon.direction-Math.PI/4), mon.y + 22*Math.sin(mon.direction-Math.PI/4), 5, "#003300");

		// labelling monster
		drawText(mon.x-20, mon.y-36, mon.type, "#000000");

		// drawing hp
		drawRect(mon.x-16, mon.y-34, 32, 6, "#000000");
		drawRect(mon.x-16, mon.y-34, 32*(mon.hp/100), 6, "#00FF00");
	}
}

function updateProjectiles() {
	for (var i = 0; i < projs.length; i++) {
		p = projs[i];
		p.x += player.proj_speed * cos(p.direction);
		p.y += player.proj_speed * sin(p.direction);

		if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
			if (projs.length-1 != i)
				swapArrayElements(projs, i, projs.length-1);
			projs.pop();
			continue;
		}	

		drawCircle(p.x, p.y, 2, "#FFFF00");
	}
}

function update() {
	clearScreen();	

	updateMonsters();
	updatePlayer();
	updateProjectiles();
}

function spawnMonster() {
	addMonster(monsters, Math.random()*canvas.width, Math.random()*canvas.height, "Slimebo");
	setTimeout(spawnMonster, 5000);
}

setInterval(update, 15); // ~66.667fps
setTimeout(spawnMonster, 5000);
