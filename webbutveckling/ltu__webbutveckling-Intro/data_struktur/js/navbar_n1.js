// Stiländring då man markerar något och radering av stilen
		function styleM1(){document.getElementById("m1").style.backgroundColor = "rgb(255, 140, 0)";	document.getElementById("m1").style.borderRadius = "30px";	document.getElementById("m1").style.color = "rgb(0, 0 ,0)";}
			function styleM1Reset(){document.getElementById("m1").style.backgroundColor = "";	document.getElementById("m1").style.borderRadius = "";	document.getElementById("m1").style.color = "";}
					
	function styleM2(){document.getElementById("m2").style.backgroundColor = "rgb(255, 140, 0)";	document.getElementById("m2").style.borderRadius = "30px";	document.getElementById("m2").style.color = "rgb(0, 0 ,0)";}
		function styleM2Reset(){document.getElementById("m2").style.backgroundColor = "";	document.getElementById("m2").style.borderRadius = "";	document.getElementById("m2").style.color = "";}
		
	function styleM3(){document.getElementById("m3").style.backgroundColor = "rgb(255, 140, 0)";	document.getElementById("m3").style.borderRadius = "30px";	document.getElementById("m3").style.color = "rgb(0, 0 ,0)";}
		function styleM3Reset(){document.getElementById("m3").style.backgroundColor = "";	document.getElementById("m3").style.borderRadius = "";	document.getElementById("m3").style.color = "";}

		// Laddning av Kontakta mig	
	function loadContactForm()
			{
						// Raderar undermenyn + alla markeringar i navbaren
									document.getElementById("under_meny").innerHTML = "";
									
									styleM1Reset();
									styleM2Reset();
									styleM3Reset();
									
							// Navbar - Laddar sidor Nivå 1		
											var xhttp = new XMLHttpRequest();
													xhttp.onreadystatechange = function()
																{
																			if (this.readyState == 4 && this.status == 200)
																						{
																									document.getElementById("load_content").innerHTML = this.responseText;
																						}
																};
																xhttp.open("GET", "data_struktur/sidor/contactform.html", true);
																xhttp.send();
			}

// --------------------------------------------------------------------------------------------------------------------
	//		Laddning av valt meny alternativ

function headPage()
			{
						// Navbar - Markeringar Nivå 1: Reset
									styleM1Reset();
									styleM2Reset();
								 styleM3Reset();
									
						// Gömmer undermenyn
									document.getElementById("under_meny").innerHTML = "";
						// Navbar - Laddar sidor Nivå 1		
						 			var xhttp = new XMLHttpRequest();
												xhttp.onreadystatechange = function()
															{
																		if (this.readyState == 4 && this.status == 200)
																					{
																								document.getElementById("load_content").innerHTML = this.responseText;
																					}
															};
															xhttp.open("GET", "dokument/head_page.html", true);
															xhttp.send();																	
			}
				
// --------------------------------------------------------------------------------------------------------------------
function n1HMVad3d()
				{								
							// Navbar - Markeringar Nivå 1: Reset
										styleM2Reset();
										styleM3Reset();
										
								// Navbar - Markeringar Nivå 1
											styleM1();
										
								// Navbar - Laddar sidor Nivå 1		
											var xhttp = new XMLHttpRequest();
													xhttp.onreadystatechange = function()
																{if (this.readyState == 4 && this.status == 200)
																						{document.getElementById("load_content").innerHTML = this.responseText;}
																};
																
													xhttp.open("GET", "dokument/3d.html", true);
													xhttp.send();
													
													// Navbar - Laddar undermeny Nivå 1		
																var xhttp = new XMLHttpRequest();
																		xhttp.onreadystatechange = function()
																					{if (this.readyState == 4 && this.status == 200)
																											{document.getElementById("under_meny").innerHTML = this.responseText;}
																					};
																					
																		xhttp.open("GET", "data_struktur/sidor/menu_3d.html", true);
																		xhttp.send();
				}
				
function n1HMTjP()
				{
								// Navbar - Markeringar Nivå 1: Reset
										styleM1Reset();
										styleM3Reset();
										
								// Navbar - Markeringar Nivå 1
											styleM2();
										
								// Navbar - Laddar sidor Nivå 1 
											var xhttp = new XMLHttpRequest();
													xhttp.onreadystatechange = function()
																{if (this.readyState == 4 && this.status == 200)
																						{document.getElementById("load_content").innerHTML = this.responseText;}
																};
																
													xhttp.open("GET", "dokument/service_products.html", true);
													xhttp.send();
													
													// Navbar - Laddar undermeny Nivå 1	
																var xhttp = new XMLHttpRequest();
																		xhttp.onreadystatechange = function()
																					{if (this.readyState == 4 && this.status == 200)
																											{document.getElementById("under_meny").innerHTML = this.responseText;}
																					};
																					
																		xhttp.open("GET", "data_struktur/sidor/menu_serviceproducts.html", true);
																		xhttp.send();
				}
				
function n1HMOm()
				{					
								//Navbar - Markeringar Nivå 1: Reset
										styleM1Reset();
										styleM2Reset();
								
								// Navbar - Markeringar Nivå 1
											styleM3();
										
								// Navbar - Laddar sidor Nivå 1		
											var xhttp = new XMLHttpRequest();
													xhttp.onreadystatechange = function()
																{if (this.readyState == 4 && this.status == 200)
																						{document.getElementById("load_content").innerHTML = this.responseText;}
																};
																
													xhttp.open("GET", "dokument/about_me.html", true);
													xhttp.send();
													
													// Navbar - Laddar undermeny Nivå 1	
																var xhttp = new XMLHttpRequest();
																		xhttp.onreadystatechange = function()
																					{if (this.readyState == 4 && this.status == 200)
																											{document.getElementById("under_meny").innerHTML = this.responseText;}
																					};
																					
																		xhttp.open("GET", "data_struktur/sidor/menu_sociacom.html", true);
																		xhttp.send();
				}