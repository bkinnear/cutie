function addMonster(array, x, y, type) {
	var mon = new Object();
	mon.x = x;
	mon.y = y;
	mon.direction = 0;
	mon.type = type;
	array.push(mon);
}
