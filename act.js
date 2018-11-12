var checkShopUI = 0;
var shopUI = document.getElementById("shopUI");
var shopItem = document.getElementsByClassName("shop");
var shopUI2d = shopUI.getContext("2d");
var numCoins = document.getElementById("console");
var numCoins2d = numCoins.getContext("2d");

shopUI2d.font="30px Consolas";
shopUI2d.fillText("Shop", 230, 30);
shopUI2d.fillText("Red Potion \t$20", 30, 90);
shopUI2d.fillText("Blue Potion\t$20", 30, 190);
numCoins2d.font="12px Consolas";
numCoins2d.fillText("Inventory", 100, 15);

function shop(){
	elem = document.getElementsByClassName("string");
	elem[0].style.color = 'red';
	
	if(checkShopUI == 0){
		shopUI.style.display = 'inline';
		for(var i=0; i < shopItem.length; i++){
			shopItem[i].style.display = 'inline';
		}
		checkShopUI = 1;
	}
	else{
		shopUI.style.display = 'none';
		for(var i=0; i < shopItem.length; i++){
			shopItem[i].style.display = 'none';
		}
		checkShopUI =0;
	}
}
function shopClose(){
	shopUI.style.display = 'none';
	for(var i=0; i < shopItem.length; i++){
		shopItem[i].style.display = 'none';
	}
	checkShopUI = 0;
}
function inventory(inputItem){
	if(inputItem == 'redPotion'){
		if(player.redPotion < 1){
			alert("You are punished.");
			player.hp -= 5;
		}
		else{
			player.hp += 20;
			player.redPotion -= 1;
		}
	}
	else if(inputItem == 'bluePotioin'){
		if(player.bluePotion < 1){
			alert("You are punished.");
		}
		else{
			player.mp += 40;
			player.bluePotion -= 1;
		}
	}
	else if(inputItem == 'sword'){
		player.equipped = "melee";
	}
	else if(inputItem == 'minigun'){
		player.equipped = "ranged";
	}
}
function buy(potionKind){
	if(player.coins >= 20){
		if(potionKind = 'hp'){
			//add redpotion by 1
			player.redPotion += 1;
			player.coins -= 20;
		}
		else{
			//add bluepotion by 1
			player.bluePotion += 1;
			player.coins -= 20;
		}
	}
	else{
		alert("You don't have enough money");
	}
}
function printAmount(){
	numCoins2d.fillText(": "+player.coins, 190, 120);
	numCoins2d.fillText(": "+player.redPotions, 190, 132);
	numCoins2d.fillText(": "+player.bluePotions, 190, 144);

}
function quit(){
	player.hp -= 1;
}

