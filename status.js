var statCanvas = document.getElementById("status");
var statCtx = canvas.getContext("2d");

function statusUpdate() {
	statCtx.fillStyle = "#000000";
	statCtx.fillRect(0, 0, statCanvas.width, 32);
	statCtx.fillStyle = "#00FF00"
	ststCtx.fillRect(0, 0, statCanvas.width*(hp/100), 32)
}

setInterval(statusUpdate, 100);
