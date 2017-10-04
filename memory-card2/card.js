var cards = ['a1','a2','a3','a4','a5','a6','a7','a8',];
var current = null;  // bien dung de luu quan bai da lat len
var count = 0;
var remainingTime = 60;

	
	document.getElementById('bg-music').load();
	document.getElementById('bg-music').play();

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

	//ham choi nhac
function playsound(sound){
	document.getElementById(sound+'-sound').load();
	document.getElementById(sound+'-sound').play();

}
function modal(type){
		 $('.modal-backdrop').css('display', 'block');
		 $('.modal.' + type).fadeIn();
}

	//khoi tao ham xoay bai
function flip(card){
	$(card).css('pointer-events', 'none');
	$(card).toggleClass('flipped');
	playsound('flip');
	if(!current){
		current = $(card);
		}
	else{
		 $('.card').css('pointer-events', 'none');
		if(current.attr('data-name') != $(card).attr('data-name')){
				//khac nhau
			setTimeout(function(){
				console.log('khac nhau');
				current.toggleClass('flipped');
				$(card).toggleClass('flipped');
				current = null;
				$('.card').css('pointer-events', 'auto');
				
			},800);
			playsound('no');
		}
		else{
			//giong nhau
			count++;
			setTimeout(function(){
				$(card).css('opacity','0').attr('onclick','').children().children('img').css('cursor','default');
				current.css('opacity', '0').attr('onclick','').children().children('img').css('cursor', 'default');
				current = null;				
				$('.card').css('pointer-events', 'auto');
				playsound('yes');
				//thang cuoc
				if (count == 8){
					document.getElementById('bg-music').load();
					playsound('win');
					clearInterval(run);
					modal('win')
					run = null;

				}
		},600);
			
		}
	}

}


$(function(){
	//nhan doi mang de tao cap bai
	cards = cards.concat(cards);
	//dao vi tri quan bai
	cards = shuffle(cards);
	//chen quan bai vao trong element co class "content"	
	var html = '';
	for(var i = 0 ; i < cards.length;i++){
		html += '<div class="grid">' +
		'<div class="card" data-name="'+ cards[i] +' "onclick="flip(this)">' +
		'<div class = "front"><img src="img/backs.jpg"/></div>' +
		'<div class = "back"><img src="img/'+cards[i] +'.png"/></div>'+
		'</div></div>';
	};
	$('.content').html(html);

});

	//tao thoi gian choi trong game
var run = setInterval(function(){
	remainingTime--;
	$('.timeout').html("0:" + remainingTime); 
	if(remainingTime <10){
		$('.timeout').html("0:0" + remainingTime); 
	}
	if (remainingTime == 0){
	//thua cuoc
	clearInterval(run);
	run = null;
	document.getElementById('bg-music').load();
	playsound('lose');
	modal('lose');
}
},1000);
