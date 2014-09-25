var faces = new Array("S2","S3","S4","S5","S6","S7","S8","S9","S10","SJ","SQ","SK","SA","C2","C3","C4","C5","C6","C7","C8","C9","C10","CJ","CQ","CK","CA","H2","H3","H4","H5","H6","H7","H8","H9","H10","HJ","HQ","HK","HA","D2","D3","D4","D5","D6","D7","D8","D9","D10","DJ","DQ","DK","DA");
            var kCount = 0;
            var signal = 0;
            
function signalCheck()
{
			if(signal === 0){
			signal =1;
			window.alert("Silent Mode Activated");}
			else {
			signal = 0;
			window.alert("Silent Mode Deactivated");}
			}
            
function pickCard() 
{
            var index = Math.floor(Math.random() * faces.length);
            var die= faces[index];
           if (die === "SK"){ kCount++;}
            if (die === "CK"){ kCount++;}
            if (die === "HK"){ kCount++;}
            if (die === "DK"){ kCount++;}
            faces.splice(index,1);
            if (kCount === 4){document.getElementById("cardArea").innerHTML = "Dirty Pint <br> You must drink the dirty pint.";document.getElementById("rof").disabled ="";}
            else{document.getElementById("cardArea").innerHTML = "<img src='img/cards/"+ die +".png' style='width: 100%'>";}
            if(signal === 0){var audio2 = new Audio('/sounds/card.mp3');
			audio2.play();}
        }

function flipCoin() 
{
            var sides = new Array("head","tail");
            var coin= sides[Math.floor(Math.random() * sides.length)];
            document.getElementById("coinArea").innerHTML = "<img src='img/coin/"+ coin +".png' style='width:100%'>";
            if(signal === 0){var audio = new Audio('/sounds/coin.mp3');
			audio.play();}
        }
        
function rollDice() 
{
            var faces = new Array("1","2","3","4","5","6");
            var die= faces[Math.floor(Math.random() * faces.length)];
            document.getElementById("diceArea").innerHTML = "<img src='img/dice/"+ die +".png' style='width: 100%'>";
            if(signal === 0){var audio3 = new Audio('/sounds/dice.mp3');
			audio3.play();}
        }
		