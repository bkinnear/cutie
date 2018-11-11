function addMonster(array, x, y, type) {
	var mon = new Object();
	mon.x = x;
	mon.y = y;
	mon.type = type;
	array.push(mon);
}
