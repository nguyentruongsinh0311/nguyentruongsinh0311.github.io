var box = document.getElementById('result');
function addtoscreen(x){
	box.value += x;
	if (x === 'c'){
		box.value = '';
	}
}

function answer(){
	x=box.value;
	x = eval(x);
	box.value=((x*10)/10);
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
	console.log(typeof x);
}

function squareRoot(){
	box.value=Math.sqrt(box.value)
}

