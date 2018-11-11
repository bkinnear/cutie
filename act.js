var checkShopUI = 0;
var shopUI = document.getElementById("shopUI");
var shopItem = document.getElementsByClassName("shop");
console.log(shopItem);
var shopUI2d = shopUI.getContext("2d");

shopUI2d.font="30px Consolas";
shopUI2d.fillText("Shop", 230, 30);
shopUI2d.fillText("Red Potion", 30, 90);
shopUI2d.fillText("Blue Potion", 30, 190);

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
function update(){
	
}
