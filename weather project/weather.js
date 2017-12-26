$(document).ready(function(){
	$('#submitWeather').click(function(event) {
		/* Act on the event */
		var city = $('#city').val();

		if(city != ''){

			$.ajax({

				url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=151016841b0e6117584e56b67b6093c6",
				type:"GET",
				dataType:"jsonp",
				success: function(data){
					var widget = show(data);
					$('#show').html(widget);
					$('#city').val('');
					console.log(data.weather[0].main);
					var Images = data.weather[0].main;
					if(Images == 'clear'){
						$('.container-fluid').addClass('img');
					}


				}


			});

		}else{
			$('#error').html("<div class='alert alert-danger errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>field cannot be empty</div>");
		}
	});
});
	


function show(data){
	return "<h2 style='font-size:30px; font-weight:bold;color:red;text-transform:uppercase;' class='text-center'>Current Weather for "+ data.name + ", " + data.sys.country + "</h2>" +
	"<h3><strong>Weather</strong>:"+ data.weather[0].main +"</h3>" +
	 "<h3><strong>Description</strong>:"+ data.weather[0].description +"<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " +"</h3>"+
	  "<h3><strong>Temperature</strong>:"+ data.main.temp +"&deg;C</h3>" +
	   "<h3><strong>Pressure</strong>:"+ data.main.pressure +" hPa</h3>" +
	    "<h3><strong>Humidity</strong>:"+ data.main.humidity +"%</h3>" +
	    "<h3><strong>Temperature minimum</strong>:"+ data.main.temp_min +"&deg;C</h3>" +
	    "<h3><strong>Temperature maximum</strong>:"+ data.main.temp_max +"&deg;C</h3>" +
	     "<h3><strong>Wind Speed</strong>:"+ data.wind.speed +"m/s</h3>" ;
}


$( "#city" ).keypress(function( event ) {
	var city = $('#city').val();
  if ( event.which == 13 ) {
     		if(city != ''){

			$.ajax({

				url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=151016841b0e6117584e56b67b6093c6",
				type:"GET",
				dataType:"jsonp",
				success: function(data){
					var widget = show(data);
					$('#show').html(widget);
					$('#city').val('');
					var Images = data.weather[0].main;
					if (Images == 'Mist') {
						$('.container-fluid').addClass('img1');
					}
					else{
						$('.container-fluid').addClass('img');
					}
				}


			});

		}else{
			$('#error').html("<div class='alert alert-danger errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>field cannot be empty</div>");
		}
  };
});