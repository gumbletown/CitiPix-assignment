/** 

Pseudo Code

Wait until document is ready 

When the user clicks the UPDATE button run a function that looks at what text has been entered in the input field and changes the background image accordingly. 

Create a variable to store the value entered into the input with id city-type.

If user inputs "New York" or "New York City" or "NYC" and clicks UPDATE, change the background image to nyc.jpg. Disregard spaces & exta lines that might be entered.

Or, if user submits "San Francisco" or "SF" or "Bay Area", change the background image to sf.jpg

Or, if user submits "Los Angeles" or "LA" or "LAX", change the background image to la.jpg

Or, if user submits "Sydney" or "SYD", change the background image to sydney.jpg

Or, if user submits "Austin" or "ATX", change the background image to austin.jpg

Or, if any other text is submitted, background image displayed remains as citipix_skyline.jpg and show a pop-up alert message.

*/

$(document).ready(function(){

    $("#submit-btn").click(showCityPix);

    function showCityPix() {
    	
    	var city = $.trim($("#city-type").val());

		if (city === "New York" || city === "new york" || city === "New York City" || city === "new york city" || city === "NYC" || city === "nyc") {
			$("body").css("background-image", "url('images/nyc.jpg')");
			$('input[type="text"]').val("");
		} 
		else if (city === "San Francisco" || city === "san francisco" || city === "SF" || city === "sf" || city === "Bay Area" || city === "bay area") {
			$("body").css("background-image", "url('images/sf.jpg')");
			$('input[type="text"]').val("");
		} 
		else if (city === "Los Angeles" || city === "los angeles" || city === "LA" || city === "la" || city === "LAX" || city === "lax") {
			$("body").css("background-image", "url('images/la.jpg')");
			$('input[type="text"]').val("");
		} 
		else if (city === "Sydney" || city === "sydney" || city === "SYD" || city === "syd" || city === "Syd") {
			$("body").css("background-image", "url('images/sydney.jpg')");
			$('input[type="text"]').val("");
		} 
		else if (city === "Austin" || city === "austin" || city === "ATX" || city === "atx" || city === "Atx") {
			$("body").css("background-image", "url('images/austin.jpg')");
			$('input[type="text"]').val("");
		} 
		else {
			$("body").css("background-image", "url('images/citipix_skyline.jpg')");
			alert("Oops, there are pix of this city!");
			$('input[type="text"]').val("");
		}

		return false;

    }
 

  });