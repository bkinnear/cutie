var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function checkKey(e) {
    var event = window.event ? window.event : e;
    console.log(event.keyCode)
}

function update() {
	ctx.beginPath();
	ctx.arc(Math.random()*95, Math.random()*50, Math.random()*40, 0, 2 * Math.PI);
	ctx.stroke();
}

setInterval(update, 25);
