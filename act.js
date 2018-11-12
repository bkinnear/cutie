<!DOCTYPE html>
<html>
<head>
	<style type="text/css">
		body{
			background-color : black;
		}
		p{
			color : purple;
		}
		.button{
			width : 148px;
			height : 60px;
			font-size : 200%;
		}
		.table{
			margin-top : -495px;
			margin-left : 610px;
		}
		.shop{
			display : none;
			z-index = 2;
		}
		.subScreen{
			display : inline;
		}
		.small_button{
			width : 148px;
			height : 60px;
			font-size : 110%;
			position : absolute;
			top : 497px;
			left : 130px;
		}
		.items{
			z-index : 1;
			width : 75px;
			height : 75px;
		}
		#myCanvas{
			background-color : white;
			border : 4px dotted red;
		}
		#wrapper{
			display:inline;
			width : 480px;
			height : 240px;
		}
		#shopUI{
			background-color : #A04936;
			border : 8px solid red;
			border-radius : 30px;
			display : none;
			margin-bottom : 200px;
			margin-left : -560px;
			z-index : 1;
		}
		#hpBuy{
			position : absolute;
			top : 100px;
			left : 360px;
			width : 148px;
			height : 60px;
			font-size : 200%;
		}
		#mpBuy{
			position : absolute;
			top : 200px;
			left : 360px;
			width : 148px;
			height : 60px;
			font-size : 200%;
		}
		#status{
			width : 300px;
			height : 170px;
			border : 4px double red;
			background-color : #A04936;
		}
		#console{
			width : 300px;
			height : 295px;
			border : 4px double red;
			background-color : gray;
		}
		#hpPotion{
			position : absolute;
			display : none;
			left : 100px;
			top : 150px;
		}
		#mpPotion{
			position : absolute;
			display : none;
			left : 100px;
			top : 240px;
		}
		#playerButtons{
			width : 600px;
			height : 77px;
			border : 1px solid red;
			margin-top : -7px;
			margin-left : 3px;
			background-color : #A04936;
		}
		#inventory{
			top : 240px;
			right : 520px;
		}
		#sword{
			position : absolute;
			top : 240px;
			left : 670px;
		}
		#minigun{
			position : absolute;
			top : 240px;
			left : 800px;

		}
		#redPotion{
			position : absolute;
			top : 325px;
			left : 670px;
		}
		#bluePotion{
			position : absolute;
			top : 325px;
			left : 800px;
		}
		#sAttack{
			position : absolute;
			top : 410px;
			left : 670px;
		}
		#aUpgrade{
			position : absolute;
			top : 497px;
			left : 312px;
		}
		#wUpgrade{
			position : absolute;
			top : 497px;
			left : 460px;
		}
		#coin{
			height : 26px;
			position : absolute;
			top : 413px;
			left : 780px;
		}
		#numBluePotion{
			height : 26px;
			position : absolute;
			top : 440px;
			left : 780px;
		}
		#numRedPotion{
			height : 26px;
			position : absolute;
			top : 465px;
			left : 780px;
		}
	</style>
</head>
<body>
	<canvas id="myCanvas" width="600px" height="480px"></canvas>
	<div id="wrapper">
		<canvas id="shopUI" width="480%" height="240%"></canvas>
		<img class="shop" id="hpPotion" src="C:\Users\allen\Desktop\San\작업\redPotion.png" alt="Red Potion">
		<button class="shop" id="hpBuy" onclick="buy('hp')">Buy</button>
		<img class="shop" id="mpPotion" src="C:\Users\allen\Desktop\San\작업\bluePotion.png" alt="Blue Potion">
		<button class="shop" id="mpBuy" onclick="buy('mp')">Buy</button>
	</div>
		
	<div class="subScreen">
		<table class="table">
			<tr>
				<td><canvas id="status"></canvas></td>
			</tr>
			<tr>
				<td>
					<div id="inventory">
						<canvas id="console"></canvas>
						<button class="items" id="sword" onclick="inventory();"><img src="C:\Users\allen\Desktop\San\작업\sword.png">Sword</img></button>
						<button class="items" id="minigun" onclick="inventory();"><img src="C:\Users\allen\Desktop\San\작업\minigun.png">Minigun</img></button>
						<button class="items" id="redPotion" onclick="inventory();"><img src="C:\Users\allen\Desktop\San\작업\redPotion.png" height="40px">Red Potion</img></button>
						<button class="items" id="bluePotion" onclick="inventory();"><img src="C:\Users\allen\Desktop\San\작업\bluePotion.png" height="40px">Blue Potion</img></button>
						<button class="items" id="sAttack" onclick="inventory();"><img src="C:\Users\allen\Desktop\San\작업\sAttack.png" height="40px"><br>S. Attack</img></button>
						<img id="coin" src="C:\Users\allen\Desktop\San\작업\Coin.png">
						<img id="numRedPotion" src="C:\Users\allen\Desktop\San\작업\redPotion.png">
						<img id="numBluePotion" src="C:\Users\allen\Desktop\San\작업\bluePotion.png">
					</div>
				</td>
			</tr>
		</table>
	</div>
	<script src="monster.js"></script>
	<script src="player.js"></script>
	<script src="status.js"></script>
	<script src="act.js"></script>
	<script src="main.js"></script>
	<div id="playerButtons">
	
		<table>
			<tr><button class="button" onclick="shop();" style="margin-left:4px">Shop</button></tr>
			<tr><button class="small_button" id="aUpgrade">Armor<br>Upgrade</button></tr>
			<tr><button class="small_button" id="wUpgrade">Weapon<br>Upgrade</button></tr>
			<tr><button class="button" onclick="quit();">Nothing</button></tr>
		</table>
	</div>

	<p class="string">Hello World!</p>
</body>
</html>
