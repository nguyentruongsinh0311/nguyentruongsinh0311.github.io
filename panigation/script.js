//data
var data=[{link: "img/chim1.jpg",caption:"Đây là chim 1"},{link: "img/chim2.jpg",caption:"Đây là chim 2"},{link: "img/chim3.jpg",caption:"Đây là chim 3"},{link: "img/chim4.jpg",caption:"Đây là chim 4"},{link: "img/chim5.jpg",caption:"Đây là chim 5"},{link: "img/chim6.jpg",caption:"Đây là chim 6"},{link: "img/chim7.jpg",caption:"Đây là chim 7"},{link: "img/chim8.jpg",caption:"Đây là chim 8"},{link: "img/chim9.jpg",caption:"Đây là chim 9"},{link: "img/chim10.jpg",caption:"Đây là chim 10"},{link: "img/chim11.jpg",caption:"Đây là chim 11"},{link: "img/chim12.jpg",caption:"Đây là chim 12"},{link: "img/chim13.jpg",caption:"Đây là chim 13"},{link: "img/chim14.jpg",caption:"Đây là chim 14"},{link: "img/chim15.jpg",caption:"Đây là chim 15"}];

//Ham chuyen 1 mang thanh nhieu mang
var convert = function(n){
	var arr = [];
	for(var i=0;i<data.length;i+=n){
		var arr1 = [];
		for(var j=i;j<i+n;j++){
			if(j<data.length)
				arr1.push(data[j]);
		}
		arr.push(arr1);
	}
	return arr;
}

//ham fill 1 mang anh vao #content
var fill = function(arr){
	$("#content").html('');
	for(var i=0; i<arr.length;i++){
		$("#content").append("<div><img src="+ arr[i].link +"><p>"+arr[i].caption+"</p></div>");
	}
}

//Click button chon so luong
$("button").click(function(){
	//reset page
	$("#content").html('');
	$("#footer-pagination").html('');
	var current = 0;

	//lay value from input
	var val = $("input").val();

	//chia nho mang theo value va truyen anh vao trang
	if(val<15){
		var arr = convert(parseInt(val)).slice();
		fill(arr[current]);
	} else{
		fill(data);
		$("#footer-pagination").append("...")
	}
	
	
	//tao paginations
	if(arr.length>1){
		for(var j=0; j<arr.length;j++){
			$("#footer-pagination").append("<span>"+(j+1)+"</span")
		}
	} 

	//chon vung paginations
	var spans = $("#footer-pagination span");
	$(spans[0]).css("background-color","#ccc");

	//Chuyen page theo span
	$(spans).click(function(){
		var value = $(this).index();
		fill(arr[value]);
		current = value;
		$(spans).css("background-color","#eee");
		$(spans[current]).css("background-color","#ccc");
	});

	//Next page
	$("#next").click(function(){
		if(current<arr.length-1){
			current++;
			fill(arr[current]);
			$(spans).css("background-color","#eee");
			$(spans[current]).css("background-color","#ccc");
		}
	});

	//Prev page
	$("#prev").click(function(){
		if(current>0){
			current--;
			fill(arr[current]);
			$(spans).css("background-color","#eee");
			$(spans[current]).css("background-color","#ccc");
		}
	});
});



