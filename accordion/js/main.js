$(function() {
	$('.menu-title').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('blue');

		//noi dung hien ra
		$(this).next().slideToggle(500);
		
		//su dung ham animate

		$('body,html').animate({scrollTop: $(this).offset().top}, 1000)
		
	});
	// xu li anh
	$('.images a').fancybox({
		openEffect:'elastic', 
	});

	//accodion
	$('.content').slideUp();

});