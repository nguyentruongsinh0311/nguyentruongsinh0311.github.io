
function change(){
	$("body").toggleClass("backgroundColor");
	$(".btnspc").toggleClass("backgroundColor");
	$(".btn").toggleClass("btnchange");
	$(".btnspc").toggleClass("btnspcchange");
}
	function extend(){
		$(".test").toggle(500);
	}

var box = $('#result')[0];
function addtoscreen(x){
	box.value += x;
	if (x === 'c'){
		box.value = '';
	}
}
function answer(){
	x=box.value;
	x = eval(x);
	box.value=x;
}
function ran() {
    box.value = Math.random();
}
function del(){
	box.value=box.value.substr(0,box.value.length-1)
}
function square(){
	x= box.value;
	x=eval(x*x);
	box.value=x;
}
function squareRoot(){
	box.value=Math.sqrt(box.value)
}

function percent(){
	box.value = (box.value*0.01)
}
function pi(){
	box.value = Math.PI;
}
function sin(){
	box.value = Math.sin(box.value * Math.PI / 180);
}
function cos(){
	box.value = Math.cos(box.value * Math.PI / 180);	
}

function tan(){
	box.value = (Math.sin(box.value * Math.PI / 180)/Math.cos(box.value * Math.PI / 180));
}
function one(){
	box.value = 1/box.value;
}

function mu3(){
	x = box.value;
	x = (x*x*x);
	box.value= x;
}
function hamE(){
	box.value = Math.E;
}
function log(){
	x = box.value;
	x = Math.LN2;
	box.value = x;
}
function giaithua(){
	var x = box.value;
	a = 1;
	for (i = 1 ; i <= x ; i ++ ){a*=i}
	box.value = a;

}
function abs(){
	box.value = Math.abs(box.value);
}
