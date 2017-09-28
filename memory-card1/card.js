var cards = ['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14',];
var current = null;  // bien dung de luu quan bai da lat len


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

function flip(card){
	$(card).toggleClass('flipped');
	if(!current){
		current = $(card);
		$(card).css('pointer-events','none')
	}
	else{
		$(card).css('pointer-events','none')
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
		'<div class = "front"><img src="img/back.jpg"/></div>' +
		'<div class = "back"><img src="img/'+cards[i] +'.png"/></div>'+
		'</div></div>';
	};
	$('.content').html(html);

});
