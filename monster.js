function addMonster(array, x, y, type) {
	var mon = new Object();
	mon.hp = 100;
	mon.x = x;
	mon.y = y;
	mon.direction = 0;
	mon.speed = 1;
	mon.type = type;
	array.push(mon);
}
