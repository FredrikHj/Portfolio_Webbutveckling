  function styleM11(){document.getElementById("m11").style.backgroundColor = "rgb(255, 140, 0)";	document.getElementById("m11").style.borderRadius = "30px";	document.getElementById("m11").style.color = "rgb(0, 0 ,0)";}
			function styleM11Reset(){document.getElementById("m11").style.backgroundColor = "";	document.getElementById("m11").style.borderRadius = "";	document.getElementById("m11").style.color = "";}
   
		function styleM12(){document.getElementById("m12").style.backgroundColor = "rgb(255, 140, 0)";	document.getElementById("m12").style.borderRadius = "30px";	document.getElementById("m12").style.color = "rgb(0, 0 ,0)";}
			function styleM12Reset(){document.getElementById("m12").style.backgroundColor = "";	document.getElementById("m12").style.borderRadius = "";	document.getElementById("m12").style.color = "";}
   
			function styleM13(){document.getElementById("m13").style.backgroundColor = "rgb(255, 140, 0)";	document.getElementById("m13").style.borderRadius = "30px";	document.getElementById("m13").style.color = "rgb(0, 0 ,0)";}
			function styleM13Reset(){document.getElementById("m13").style.backgroundColor = "";	document.getElementById("m13").style.borderRadius = "";	document.getElementById("m13").style.color = "";}
			
			// --------------------------------------------------------------------------------------------------------------------
			function styleM21(){document.getElementById("m21").style.backgroundColor = "rgb(255, 140, 0)";	document.getElementById("m21").style.borderRadius = "30px";	document.getElementById("m21").style.color = "rgb(0, 0 ,0)";}
			function styleM21Reset(){document.getElementById("m21").style.backgroundColor = "";	document.getElementById("m21").style.borderRadius = "";	document.getElementById("m21").style.color = "";}
   
		function styleM22(){document.getElementById("m22").style.backgroundColor = "rgb(255, 140, 0)";	document.getElementById("m22").style.borderRadius = "30px";	document.getElementById("m22").style.color = "rgb(0, 0 ,0)";}
			function styleM22Reset(){document.getElementById("m22").style.backgroundColor = "";	document.getElementById("m22").style.borderRadius = "";	document.getElementById("m22").style.color = "";}
   
			// --------------------------------------------------------------------------------------------------------------------
	function n2M11()
				{						
								// Undermeny - Markeringar Nivå 2: Reset	
												styleM12Reset();
												styleM13Reset();
												
								// Undermeny - Markeringar Nivå 2			
											styleM11();
										
								// Undermeny - Laddar sidor Nivå 2
											var xhttp = new XMLHttpRequest();
													xhttp.onreadystatechange = function()
																{
																			if (this.readyState == 4 && this.status == 200)
																						{
																									document.getElementById("load_content").innerHTML = this.responseText;
																						}
																};
																
													xhttp.open("GET", "dokument/3d_printer.html", true);
													xhttp.send();
				}
				
						function n2M12()
									{													
													// Undermeny - Markeringar Nivå 2: Reset	
																	styleM11Reset();
																	styleM13Reset();
																	
													// Undermeny - Markeringar Nivå 2			
																styleM12();
															
												 // Undermeny - Laddar sidor Nivå 2
																var xhttp = new XMLHttpRequest();
																		xhttp.onreadystatechange = function()
																					{
																								if (this.readyState == 4 && this.status == 200)
																											{
																														document.getElementById("load_content").innerHTML = this.responseText;
																											}
																					};
																					
																		xhttp.open("GET", "dokument/3d_program.html", true);
																		xhttp.send();
									}
									
						function n2M13()
									{
													// Undermeny - Markeringar Nivå 2: Reset
																	styleM11Reset();
																	styleM12Reset();
																	
													// Undermeny - Markeringar Nivå 2			
																styleM13();
															
													// Undermeny - Laddar sidor Nivå 2
																var xhttp = new XMLHttpRequest();
																		xhttp.onreadystatechange = function()
																					{
																								if (this.readyState == 4 && this.status == 200)
																											{
																														document.getElementById("load_content").innerHTML = this.responseText;
																											}
																					};
																					
																		xhttp.open("GET", "dokument/3d_future.html", true);
																		xhttp.send();
									}
// --------------------------------------------------------------------------------------------------------------------
						function n2M21()
									{
													// Undermeny - Markeringar Nivå 2: Reset	
																	styleM22Reset();
																	
													// Undermeny - Markeringar Nivå 2			
																styleM21();
															
													// Undermeny - Laddar sidor Nivå 2
																var xhttp = new XMLHttpRequest();
																		xhttp.onreadystatechange = function()
																					{
																								if (this.readyState == 4 && this.status == 200)
																											{
																														document.getElementById("load_content").innerHTML = this.responseText;
																											}
																					};
																					
																		xhttp.open("GET", "dokument/3d_object.html", true);
																		xhttp.send();
									}
									
						function n2M22()
									{
													// Undermeny - Markeringar Nivå 2: Reset
																	styleM21Reset();
														
													// Undermeny - Markeringar Nivå 2			
																styleM22();
														
												 // Undermeny - Laddar sidor Nivå 2
																var xhttp = new XMLHttpRequest();
																		xhttp.onreadystatechange = function()
																					{
																								if (this.readyState == 4 && this.status == 200)
																											{
																														document.getElementById("load_content").innerHTML = this.responseText;
																											}
																					};
																					
																		xhttp.open("GET", "data_struktur/sidor/orderform.html", true);
																		xhttp.send();
									}