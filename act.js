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

printAmount();

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
		if(player.redPotions < 1){
			alert("You are punished.");
			player.hp -= 5;
		}
		else{
			player.hp += 20;
			player.redPotions -= 1;
		}
	}
	else if(inputItem == 'bluePotioin'){
		if(player.bluePotions < 1){
			alert("You are punished.");
		}
		else{
			player.mp += 40;
			player.bluePotions -= 1;
		}
	}
	else if(inputItem == 'sword'){
		player.equipped = "melee";
	}
	else if(inputItem == 'minigun'){
		player.equipped = "ranged";
	}
	else{
		alert("You do not have enough sinepower to use it.\nMade the sinepower be with you")
		player.mp = -99999999999;
	}
	numCoins2d.fillStyle = "#808080";
	numCoins2d.fillRect(0,0,numCoins.width, numCoins.height);
	printAmount();
}
function buy(potionKind){
	if(player.coins >= 20){
		if(potionKind == 'hp'){
			//add redpotion by 1
			player.redPotions += 1;
			player.coins -= 20;
			
		}
	}
	else if(player.coins > 999999999999){
		player.bluePotions += 1;
		player.coins -= 999999999999;
	}
	else{
		alert("You don't have enough money");
	}
	numCoins2d.fillStyle = "#808080";
	numCoins2d.fillRect(0,0,numCoins.width, numCoins.height);
	printAmount();
}
function printAmount(){
	numCoins2d.fillStyle = "#000000";
	numCoins2d.fillText(": "+player.coins, 190, 120);
	numCoins2d.fillText(": "+player.redPotions, 190, 132);
	numCoins2d.fillText(": "+player.bluePotions, 190, 144);
	//numCoins2d.fillText(": "+player.equipped, 190, 144);
	
}
function quit(){
	player.hp -= 1;
}
function upgrade(upgradeKind){
	if(upgradeKind == 'armour'){
		player.armour += 3;
		player.coins -= 25;
	}
	else{
		player.damage += 3;
		player.coins -= 25;
	}
	numCoins2d.fillStyle = "#808080";
	numCoins2d.fillRect(0,0,numCoins.width, numCoins.height);
	printAmount();
}
