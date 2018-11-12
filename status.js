var statCanvas = document.getElementById("status");
var statCtx = statCanvas.getContext("2d");

function statusUpdate() {
	// player hp bar
	statCtx.fillStyle = "#000000";
	statCtx.fillRect(0, 0, statCanvas.width, 32);
	statCtx.fillStyle = "#00FF00";
	statCtx.fillRect(0, 0, statCanvas.width*(player.hp/100), 32);

	// player armour
	statCtx.fillStyle = "000000";
	statCtx.fillRect(0, 64, statCanvas.width, 32);
	statCtx.fillStyle = "888888";
	statCtx.fillRect(0, 64, statCanvas.width*(player.armour/100), 32);

	// player damage
	statCtx.fillStyle = "000000";
	statCtx.fillRect(0, 96, statCanvas.width, 32);
	statCtx.fillStyle = "888888";
	statCtx.fillRect(0, 96, statCanvas.width*(player.damage/100), 32);

	// sinusoidal power
	statCtx.fillStyle = "000000";
	statCtx.fillRect(0, 128, statCanvas.width, 32);
	statCtx.fillStyle = "888888";
	statCtx.fillRect(0, 128, statCanvas.width*(player.sinepower/100), 32);

}

setInterval(statusUpdate, 100);
