function rollDice() 
{
            var faces = new Array("1","2","3","4","5","6");
            var die= faces[Math.floor(Math.random() * faces.length)];
            document.getElementById("diceArea").innerHTML = "<img src='img/dice/"+ die +".png' style='width: 100%'>";
            var audio3 = new Audio('/sounds/dice.mp3');
			audio3.play();
        }
		