  // kéo xuống khoảng cách 300px thì xuất hiện nút Top-up
    var offset = 300;
  // thời gian di trượt 0.75s ( 1000 = 1s )
    var duration = 750;
  $(function(){
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset)
        $('#top-up').fadeIn(duration);
          else
        $('#top-up').fadeOut(duration);
    });
    $('#top-up').click(function () {
    $('body,html').animate({scrollTop: 0}, duration);
    });
  });



$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('#nav').addClass('change');
    }
    else {
    $('#nav').removeClass('change');
    }
  });
});


 $(document).ready(function() {
    $(window).scroll(function() {
    if($(document).scrollTop() > 50) {
    	 $('div').removeClass('mouse');
        $('div').removeClass('mouse-in');
        $('div').removeClass('mouse-croll');
    }
  });
});