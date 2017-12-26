$(function() {
	$('.menu-title').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('blue');
		
	});
	$('images a').fancybox();
});