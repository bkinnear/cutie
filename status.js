var statCanvas = document.getElementById("status");
var statCtx = statCanvas.getContext("2d");

function statusUpdate() {
	// player hp bar
	statCtx.fillStyle = "#000000";
	statCtx.fillRect(0, 0, statCanvas.width, 30);
	statCtx.fillStyle = "#00FF00";
	statCtx.fillRect(0, 0, statCanvas.width*(player.hp/100), 30);
	statCtx.fillStyle = "#FFFFFF";
	statCtx.fillText("HP", 16, 16);

	// player armour
	statCtx.fillStyle = "#000000";
	statCtx.fillRect(0, 32, statCanvas.width, 30);
	statCtx.fillStyle = "#888888";
	statCtx.fillRect(0, 32, statCanvas.width*(player.armour/100), 30);
	statCtx.fillStyle = "#FFFFFF";
	statCtx.fillText("ARMOUR", 16, 48);

	// player damage
	statCtx.fillStyle = "#000000";
	statCtx.fillRect(0, 64, statCanvas.width, 30);
	statCtx.fillStyle = "#888888";
	statCtx.fillRect(0, 64, statCanvas.width*(player.damage/100), 30);
	statCtx.fillStyle = "#FFFFFF";
	statCtx.fillText("DMG", 16, 80);

	// sinusoidal power
	statCtx.fillStyle = "#000000";
	statCtx.fillRect(0, 96, statCanvas.width, 30);
	statCtx.fillStyle = "#888888";
	statCtx.fillRect(0, 96, statCanvas.width*(player.sinepower/100), 30);
	statCtx.fillStyle = "#FFFFFF";
	statCtx.fillText("SINE?", 16, 112);
}

setInterval(statusUpdate, 100);
