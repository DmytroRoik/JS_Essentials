var name,
time,
place,
$event;

$event = prompt("Enter your event:",'meeting');
function setValue(){
	name=document.getElementById('nameField').value;
	time = document.getElementById('timeField').value;
	place= document.getElementById('placeField').value;
	if(name==''||time==''||place==''||event=="")
	{
		alert('input all data');
		return;
	}
	console.log(name+ ' has a ' + $event+ ' today at '+ time+' somewhere in '+ place);
}


function ConvertMoney () {
	var euro,
	dollar,
	hrn=[];

	var moneyRate = {
		dollarRate: 27.02,
		euroRate: 31.92 
	}

	euro=prompt("Enter count of euro(greater than 0)", 10);
	dollar=prompt("Enter count of dollars (greater than 0)", 10);

	if((!isNaN(euro)&&euro>0)&&
		(!isNaN(dollar)&&dollar>0))
	{
		hrn[0]= euro * moneyRate.euroRate;
		hrn[1]= dollar * moneyRate.dollarRate;
		var euroToDollar = moneyRate.euroRate/moneyRate.dollarRate;
		alert(euro + ' euros are equal '+ hrn[0].toFixed(2) + 'grns, '+ dollar + ' dollars are equal ' + hrn[1].toFixed(2) +' grns, one euro is equal '+ euroToDollar.toFixed(3)  +' dollars.');
	}
	else alert ('some input data is incorrect');
}


