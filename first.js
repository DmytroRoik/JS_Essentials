var name,
time,
place,
$event;

$event = prompt("Enter your event:",'meeting');
function setValue(){
	var tempName=document.getElementById('nameField').value;
	var tempTime = document.getElementById('timeField').value;
	var tempPlace= document.getElementById('placeField').value;
	
	var errors=[];
	if(isDataValid(tempName))name=tempName;
	else errors.push("Name");

	if(isDataValid(tempPlace))place=tempPlace;
	else errors.push("Place");

	if(isTimeValid(tempTime))time=tempTime;
	else errors.push("Time");

	if(errors.length>0){
		alert("Error data: "+ errors.join(', '));
	}
	else console.log(name+ ' has a ' + $event+ ' today at '+ time+' somewhere in '+ place);
}

function isDataValid(data){//place and Name
	if(data.length==0)return false;
	for(let i=0;i<data.length;i++){
		if(/[0-9]/.test(data[i]))return false;
	}
	return true;
}
function isTimeValid(data){
	if(data.length!=5)return;
	else return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/.test(data);
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
if(isNumberValid(euro)&&euro!=0&&
	isNumberValid(dollar&&dollar!=0))
	{
		hrn[0]= euro * moneyRate.euroRate;
		hrn[1]= dollar * moneyRate.dollarRate;
		var euroToDollar = moneyRate.euroRate/moneyRate.dollarRate;
		alert(euro + ' euros are equal '+ hrn[0].toFixed(2) + 'grns, '+ dollar + ' dollars are equal ' + hrn[1].toFixed(2) +' grns, one euro is equal '+ euroToDollar.toFixed(3)  +' dollars.');
	}
	else alert ('some input data is incorrect');
}
function isNumberValid(data){
	if(data.length==0)return false;
	for(let i=0;i<data.length;i++){
		if(!/[0-9]/.test(data[i]))return false;
	}
	return true;
}


