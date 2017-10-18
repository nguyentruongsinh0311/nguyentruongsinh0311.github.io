var image = ['anh1','anh2','anh3','anh4','anh5','anh6','anh7','anh8','anh9','anh10','anh11','anh12',];
$(function(){
	var html = '';
	for(var i = 0 ; i < image.length; i++ ){
		html += '<div class="col-sx-6 col-sm-4 col-md-3">' +
		'<div class = "thumbnail"><img src="'+ image[i]+'.jpg" class = "img-reponsive"></div>'+'</div>'
	};
	$('.row').html(html);
});