function changeFontSize(x) {
    var p1 = document.getElementById("paragraph1");
    p1.style.fontSize = x + "px" ;
    var p2 = document.getElementById("paragraph2");
    p2.style.fontSize = x + "px";
    var p3 = document.getElementById("paragraph3") ;
    p3.style.fontSize = x + "px" ;
    return ("da thay doi fontSize")
}


function increaseFontSize(paragraph) {
  var element = document.getElementsByClassName("abc");
  var size0 = element[paragraph - 1].style.fontSize;
  var numL = size0.search("px");
  var num = size0.substr(0, numL);
  if (num < 30){
    num++;
}
  var sizenow = num + "px";
  element[paragraph - 1].style.fontSize = sizenow;
}



function decreaseFontSize(paragraph) {
  var element = document.getElementsByClassName("abc");
  var size0 = element[paragraph - 1].style.fontSize;
  var numL = size0.search("px");
  var num = size0.substr(0, numL);
  if (num >10)
    num--;
  var sizenow = num + "px";
  element[paragraph - 1].style.fontSize = sizenow;
}

function changeColor(){
	document.getElementById("paragraph1").style.color = "blue";
	document.getElementById("paragraph2").style.color = "yellow";
	document.getElementById("paragraph3").style.color = "red";
}

function changeBgColor(color1){
	document.body.style.backgroundColor = color1; 
}

function copycontent(){
	document.getElementById("paragraph2").innerHTML = document.getElementById("paragraph1").innerHTML;
}