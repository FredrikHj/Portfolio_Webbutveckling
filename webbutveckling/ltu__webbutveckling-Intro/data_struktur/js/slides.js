// Muka sidövergångar
	$(document).ready(function()
		{
			function fadeOut()
				{
					$("body").fadeOut(1000, redirectPage);
				}
			function redirectPage()
				{
					window.location = linkLocation;
				}	
		});	