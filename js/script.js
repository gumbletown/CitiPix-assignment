/** 

Pseudo Code

Wait until document is ready 

Create a variable to store the value selected from a select menu with class city-type.

If user selects "NYC", change the background image to nyc.jpg. 
If user selects "SF", change the background image to sf.jpg
If user selects "LA", change the background image to la.jpg
If user selects "ATX", change the background image to austin.jpg
If user selects "SYD", change the background image to sydney.jpg

When no cities are selected, background image displayed remains as citipix_skyline.jpg.

*/

$(document).ready(function(){

    var city = ["NYC", "SFC", "LA", "ATX", "SYD"];

	city.forEach(function(e, index, arr){
		
		$('#city-type').append('<option value="' + e + '">' + e + '</option>');

		$("#city-type").change(function(){


		if (city[0]) {
			$("body").css("background-image", "url('images/nyc.jpg')");
		} 
		else if (city[1]) {
			$("body").css("background-image", "url('images/sf.jpg')");
			
		} 
		else if (city[2]) {
			$("body").css("background-image", "url('images/la.jpg')");
			
		} 
		else if (city[3]) {
			$("body").css("background-image", "url('images/austin.jpg')");
			
		} 
		else if (city[4]) {
			$("body").css("background-image", "url('images/sydney.jpg')");
			
		} 
		
});



	});
 

  });