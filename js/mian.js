var fruit_1=new Array();
var fruit_2=new Array();
var fruit_3=new Array();
var fruit_4=new Array();
var fruit_5=new Array();

var fruit_num_obj=documnet.getElementById("num");
var fruit_name_obj=documnet.getElementById("name");
var fruit_number_obj=documnet.getElementById("number");
var fruit_price_obj=documnet.getElementById("price");
var fruit_discount_obj=documnet.getElementById("discount");

function addToArrray(){
	fruit_1.push(fruit_num_obj.value);
	fruit_2.push(fruit_num_obj.value);
	fruit_3.push(fruit_num_obj.value);
	fruit_4.push(fruit_num_obj.value);
	fruit_5.push(fruit_num_obj.value);
}
function testResult(){
	alert(fruit_1[0]+fruit_2[0]+fruit_3[0]+fruit_4[0]+fruit_5[0]);
}

