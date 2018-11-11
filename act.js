var checkShopUI = 0;
var shopUI = document.getElementById("shopUI");
var shopUI2d = shopUI.getContext("2d");

shopUI2d.font="24px Consolas";
shopUI2d.fillText("Shop", 230, 40);

function shop(){
	elem = document.getElementById("string");
	elem.style.color = 'red';
	
	if(checkShopUI == 0){
		shopUI.style.display = 'inline';
		checkShopUI = 1;
	}
	else{
		shopUI.style.display = 'none';
		checkShopUI =0;
	}
}
function update(){
	
}