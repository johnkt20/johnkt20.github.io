let butt=document.getElementById("btn");
let subt=document.getElementById("subtotal");
let tip=document.getElementById("tip");
var totalElem = document.getElementById('total');

butt.onclick=calcTip;

function calcTip() {
    let subtotalElem = subt.value;
     console.log(subtotalElem);
	var tipElem = tip.value;
	
	//var subtotal = 
	//var tip = 
	var total = (subtotalElem*tipElem)/100;
	totalElem.innerHTML = '$' + total;
}
