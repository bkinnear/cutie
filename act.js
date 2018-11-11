var checkShopUI = 0;
var shopUI = document.getElementById("shopUI");
var hpBuy = document.getElementById("hpBuy");
var mpBuy = document.getElementById("mpBuy");
var shopUI2d = shopUI.getContext("2d");

shopUI2d.font="30px Consolas";
shopUI2d.fillText("Shop", 230, 30);
shopUI2d.fillText("Red Potion", 30, 90);
shopUI2d.fillText("Blue Potion", 30, 190);

function shop(){
	elem = document.getElementById("string");
	elem.style.color = 'red';
	
	if(checkShopUI == 0){
		shopUI.style.display = 'inline';
		hpBuy.style.display = 'inline';
		mpBuy.style.display = 'inline';
		checkShopUI = 1;
	}
	else{
		shopUI.style.display = 'none';
		hpBuy.style.display = 'none';
		mpBuy.style.display = 'none';
		checkShopUI =0;
	}
}
function update(){
	
}
