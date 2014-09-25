function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:
function startup(){
window.alert("Loading Program");
preload([
'img/arrogance_but.png',
'img/arrogance.png',
'img/drinkybuddy.png',
'img/icon.png',
'img/kings.png',
'img/ringoffire.png',
'img/sixcups_but.png',
'img/sixcups.png',
'img/cards/C2.png',
'img/cards/C3.png',
'img/cards/C4.png',
'img/cards/C5.png',
'img/cards/C6.png',
'img/cards/C7.png',
'img/cards/C8.png',
'img/cards/C9.png',
'img/cards/C10.png',
'img/cards/CJ.png',
'img/cards/CQ.png',
'img/cards/CK.png',
'img/cards/CA.png',
'img/cards/D2.png',
'img/cards/D3.png',
'img/cards/D4.png',
'img/cards/D5.png',
'img/cards/D6.png',
'img/cards/D7.png',
'img/cards/D8.png',
'img/cards/D9.png',
'img/cards/D10.png',
'img/cards/DJ.png',
'img/cards/DQ.png',
'img/cards/DK.png',
'img/cards/DA.png',
'img/cards/H2.png',
'img/cards/H3.png',
'img/cards/H4.png',
'img/cards/H5.png',
'img/cards/H6.png',
'img/cards/H7.png',
'img/cards/H8.png',
'img/cards/H9.png',
'img/cards/H10.png',
'img/cards/HJ.png',
'img/cards/HQ.png',
'img/cards/HK.png',
'img/cards/HA.png',
'img/cards/S2.png',
'img/cards/S3.png',
'img/cards/S4.png',
'img/cards/S5.png',
'img/cards/S6.png',
'img/cards/S7.png',
'img/cards/S8.png',
'img/cards/S9.png',
'img/cards/S10.png',
'img/cards/SJ.png',
'img/cards/SQ.png',
'img/cards/SK.png',
'img/cards/SA.png',
'img/coin/head.png',
'img/coin/tail.png',
'img/dice/1.png',
'img/dice/2.png',
'img/dice/3.png',
'img/dice/4.png',
'img/dice/5.png',
'img/dice/6.png'
]);
document.getElementById("off").innerHTML=("Files Loading, Please Continue Using App");
}