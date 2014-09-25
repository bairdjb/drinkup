function flipCoin() 
{
            var sides = new Array("head","tail");
            var coin= sides[Math.floor(Math.random() * sides.length)];
            document.getElementById("coinArea").innerHTML = "<img src='img/coin/"+ coin +".png' style='width:100%'>";
            var audio = new Audio('/sounds/coin.mp3');
			audio.play();
        }
        
