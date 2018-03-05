
$(document).ready(function(){
	
	$('.map--floor--right--container').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.map--floor--left--img').removeClass('current');
		$('.map--floor--right--container').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})