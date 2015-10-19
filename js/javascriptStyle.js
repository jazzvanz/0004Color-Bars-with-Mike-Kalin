$(function(){


	$('.icon svg').on('click', function() {
		var clickCounter = $(this).data('clickcount');	
		var cellColor = $(this).data('cellcolor');	
		
		if (clickCounter == 0) {
			clickCounter++;
			$(this).data('clickcount', clickCounter);
		
 			$(this).parent().parent('div.cell').css( "border", "1px solid #fff" )
 			
 			$(this).parent('div.icon').css( "color", "#fff" );
 			
 			$(this).css("stroke", "#fff").css("stroke-alignment", "outer").css("stroke-width", "1");

			if (cellColor === "red") {
				$(this).parent().parent().css( "background-color", "#FF0000" );
				
				$(this).children('path').css( "fill", "#00FF48" );
				$(this).children('polygon').css( "fill", "#00FF48" );
				$(this).children('circle').css( "fill", "#00FF48" );
				$(this).children().children('path').css( "fill", "#00FF48" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("PRIMARY #FF0000 RGB(255,0,0)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("redOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////


			} else if (cellColor === "red-orange") {
				$(this).parent().parent().css( "background-color", "#FA7900" );
				
				$(this).children('path').css( "fill", "#00C6FA" );
				$(this).children('polygon').css( "fill", "#00C6FA" );
				$(this).children('circle').css( "fill", "#00C6FA" );
				$(this).children().children('path').css( "fill", "#00C6FA" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("TERTIARY #FA7900 RGB(250,121,0)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("redOrangeOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////

			} else if (cellColor === "orange") {
				$(this).parent().parent().css( "background-color", "#FDB900" );
				
				$(this).children('path').css( "fill", "#013BFD" );
				$(this).children('polygon').css( "fill", "#013BFD" );
				$(this).children('circle').css( "fill", "#013BFD" );
				$(this).children().children('path').css( "fill", "#013BFD" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("SECONDARY #FDB901 RGB(253,185,1)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("orangeOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////


			} else if (cellColor === "yellow-orange") {
				$(this).parent().parent().css( "background-color", "#FEDE00" );
				
				$(this).children('path').css( "fill", "#2400FE" );
				$(this).children('polygon').css( "fill", "#2400FE" );
				$(this).children('circle').css( "fill", "#2400FE" );
				$(this).children().children('path').css( "fill", "#2400FE" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("TERTIARY #FEDE00 RGB(254,222,0)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("yellowOrangeOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////


			} else if (cellColor === "yellow") {
				$(this).parent().parent().css( "background-color", "#FDFF00" );
				
				$(this).children('path').css( "fill", "#8100FF" );
				$(this).children('polygon').css( "fill", "#8100FF" );
				$(this).children('circle').css( "fill", "#8100FF" );
				$(this).children().children('path').css( "fill", "#8100FF" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("PRIMARY #FDFF00 RGB(253,255,0)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("yellowOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////

			} else if (cellColor === "yellow-green") {
				$(this).parent().parent().css( "background-color", "#D7FF00" );
				
				$(this).children('path').css( "fill", "#9C00FF" );
				$(this).children('polygon').css( "fill", "#9C00FF" );
				$(this).children('circle').css( "fill", "#9C00FF" );
				$(this).children().children('path').css( "fill", "#9C00FF" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("TERTIARY #D7FF00 RGB(215,255,0)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("yellowGreenOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////

			} else if (cellColor === "green") {
				$(this).parent().parent().css( "background-color", "#34C000" );
				
				$(this).children('path').css( "fill", "#C000AB" );
				$(this).children('polygon').css( "fill", "#C000AB" );
				$(this).children('circle').css( "fill", "#C000AB" );
				$(this).children().children('path').css( "fill", "#C000AB" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("SECONDARY #34C000 RGB(52,192,0)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("greenOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////


			} else if (cellColor === "blue-green") {
				$(this).parent().parent().css( "background-color", "#30C0A7" );
				
				$(this).children('path').css( "fill", "#C05830" );
				$(this).children('polygon').css( "fill", "#C05830" );
				$(this).children('circle').css( "fill", "#C05830" );
				$(this).children().children('path').css( "fill", "#C05830" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("TERTIARY #30C0A7 RGB(48,192,167)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("blueGreenOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////


			} else if (cellColor === "blue") {
				$(this).parent().parent().css( "background-color", "#0400FF" );

				$(this).children('path').css( "fill", "#FFD100" );
				$(this).children('polygon').css( "fill", "#FFD100" );
				$(this).children('circle').css( "fill", "#FFD100" );
				$(this).children().children('path').css( "fill", "#FFD100" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("PRIMARY #0400FF RGB(4,0,255)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("blueOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////

			} else if (cellColor === "blue-purple") {
				$(this).parent().parent().css( "background-color", "#6700BF" );

				$(this).children('path').css( "fill", "#B3BF00" );
				$(this).children('polygon').css( "fill", "#B3BF00" );
				$(this).children('circle').css( "fill", "#B3BF00" );
				$(this).children().children('path').css( "fill", "#B3BF00" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("TERTIARY #6700BF RGB(103,0,191)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("bluePurpleOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////


			} else if (cellColor === "purple") {
				$(this).parent().parent().css( "background-color", "#9500C0" );
				
				$(this).children('path').css( "fill", "#7AC000" );
				$(this).children('polygon').css( "fill", "#7AC000" );
				$(this).children('circle').css( "fill", "#7AC000" );
				$(this).children().children('path').css( "fill", "#7AC000" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("SECONDARY #9500C0 RGB(149,0,192)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("purpleOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////

			} else if (cellColor === "red-purple") {
				$(this).parent().parent().css( "background-color", "#BF0099" );
				
				$(this).children('path').css( "fill", "#29BF00" );
				$(this).children('polygon').css( "fill", "#29BF00" );
				$(this).children('circle').css( "fill", "#29BF00" );
				$(this).children().children('path').css( "fill", "#29BF00" );


				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("TERTIARY #BF0099 RGB(191,0,153)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("redPurpleOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////
			}

		} else if (clickCounter === 1) {
			clickCounter++;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).parent().parent().css( "background-color", "#00FF48" );
				
				$(this).children('path').css( "fill", "#E82C0C" );
				$(this).children('polygon').css( "fill", "#E82C0C" );
				$(this).children('circle').css( "fill", "#E82C0C" );
				$(this).children().children('path').css( "fill", "#E82C0C" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("COMPLEMENTARY #00ff48 RGB(0,225,72)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("redOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				var removenewE1 = document.getElementsByTagName("li")[1];
				var containernewE1 = removenewE1.parentNode;
				containernewE1.removeChild(removenewE1);
				/////////////////////////////////////


			} else if (cellColor === "red-orange") {
				$(this).parent().parent().css( "background-color", "#00C6FA" );
				
				$(this).children('path').css( "fill", "#E6C10B" );
				$(this).children('polygon').css( "fill", "#E6C10B" );
				$(this).children('circle').css( "fill", "#E6C10B" );
				$(this).children().children('path').css( "fill", "#E6C10B" );

				
				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY HEX #00C6FA RGB(0,198,250)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("redOrangeOne")[0];
				// position.appendChild(redOne);
				// /////////////////////////////////////////
				// var removeRedOrange = document.getElementsByClassName("boop")[0];
				// var containerRedOrange = removeRedOrange.parentNode;
				// containerRedOrange.removeChild(removeRedOrange);


				} else if (cellColor === "orange") {
				$(this).parent().parent().css( "background-color", "#013BFD" );
				
				$(this).children('path').css( "fill", "#E3540B" );
				$(this).children('polygon').css( "fill", "#E3540B" );
				$(this).children('circle').css( "fill", "#E3540B" );
				$(this).children().children('path').css( "fill", "#E3540B" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #00C6FA RGB(0,198,250)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("orangeOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "yellow-orange") {
				$(this).parent().parent().css( "background-color", "#2400FE" );
				
				$(this).children('path').css( "fill", "#E7E10C" );
				$(this).children('polygon').css( "fill", "#E7E10C" );
				$(this).children('circle').css( "fill", "#E7E10C" );
				$(this).children().children('path').css( "fill", "#E7E10C" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #2400FE RGB(36,0,254)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowOrangeOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "yellow") {
				$(this).parent().parent().css( "background-color", "#8100FF" );
				
				$(this).children('path').css( "fill", "#E8D30C" );
				$(this).children('polygon').css( "fill", "#E8D30C" );
				$(this).children('circle').css( "fill", "#E8D30C" );
				$(this).children().children('path').css( "fill", "#E8D30C" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #8100FF RGB(129,0,255)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "yellow-green") {
				$(this).parent().parent().css( "background-color", "#9C00FF" );
				
				$(this).children('path').css( "fill", "#E8DC0C" );
				$(this).children('polygon').css( "fill", "#E8DC0C" );
				$(this).children('circle').css( "fill", "#E8DC0C" );
				$(this).children().children('path').css( "fill", "#E8DC0C" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #9C00FF RGB(156,0,255)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowGreenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "green") {
				$(this).parent().parent().css( "background-color", "#C000AB" );
				
				$(this).children('path').css( "fill", "#89D70B" );
				$(this).children('polygon').css( "fill", "#89D70B" );
				$(this).children('circle').css( "fill", "#89D70B" );
				$(this).children().children('path').css( "fill", "#89D70B" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #C000AB RGB(192,0,171)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("greenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "blue-green") {
				$(this).parent().parent().css( "background-color", "#C05830" );
				
				$(this).children('path').css( "fill", "#2BD789" );
				$(this).children('polygon').css( "fill", "#2BD789" );
				$(this).children('circle').css( "fill", "#2BD789" );
				$(this).children().children('path').css( "fill", "#2BD789" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #C05830 RGB(192,88,48)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("blueGreenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "blue") {
				$(this).parent().parent().css( "background-color", "#FFD100" );
				
				$(this).children('path').css( "fill", "#0C42E8" );
				$(this).children('polygon').css( "fill", "#0C42E8" );
				$(this).children('circle').css( "fill", "#0C42E8" );
				$(this).children().children('path').css( "fill", "#0C42E8" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #FFD100 RGB(255,209,0)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("blueOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "blue-purple") {
				$(this).parent().parent().css( "background-color", "#B3BF00" );
				
				$(this).children('path').css( "fill", "#B00BD6" );
				$(this).children('polygon').css( "fill", "#B00BD6" );
				$(this).children('circle').css( "fill", "#B00BD6" );
				$(this).children().children('path').css( "fill", "#B00BD6" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #B3BF00 RGB(179,191,0)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("bluePurpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "purple") {
				$(this).parent().parent().css( "background-color", "#7AC000" );
				
				$(this).children('path').css( "fill", "#720BD7" );
				$(this).children('polygon').css( "fill", "#720BD7" );
				$(this).children('circle').css( "fill", "#720BD7" );
				$(this).children().children('path').css( "fill", "#720BD7" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #7AC000 RGB(122,192,0)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("purpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// // REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////


			} else if (cellColor === "red-purple") {
				$(this).parent().parent().css( "background-color", "#29BF00" );
				
				$(this).children('path').css( "fill", "#B40BD6" );
				$(this).children('polygon').css( "fill", "#B40BD6" );
				$(this).children('circle').css( "fill", "#B40BD6" );
				$(this).children().children('path').css( "fill", "#B40BD6" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("COMPLEMENTARY #29BF00 RGB(41,191,0)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("redPurpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removeredOrange = document.getElementsByClassName("redOrange")[1];
				// var containernewE1 = removeredOrange.parentNode;
				// containernewE1.removeChild(removeredOrange);
				// /////////////////////////////////////

			}
		} else if (clickCounter === 2) {
			
			clickCounter++;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).parent().parent().css( "background-color", "#EB2C0C" );
				
				$(this).children('path').css( "fill", "#E80C7A" );
				$(this).children('polygon').css( "fill", "#E80C7A" );
				$(this).children('circle').css( "fill", "#E80C7A" );
				$(this).children().children('path').css( "fill", "#E80C7A" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("ANALOGOUS #E82C0C RGB(232,44,12)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("redOne")[0];
				position.appendChild(redOne);
				///////////////////////////////////////
				// REMOVING TEXT BLOCK
				var removenewE1 = document.getElementsByTagName("li")[1];
				var containernewE1 = removenewE1.parentNode;
				containernewE1.removeChild(removenewE1);
				/////////////////////////////////////


			} else if (cellColor === "red-orange") {
				$(this).parent().parent().css( "background-color", "#E6C10B" );
				
				$(this).children('path').css( "fill", "#E6950B" );
				$(this).children('polygon').css( "fill", "#E6950B" );
				$(this).children('circle').css( "fill", "#E6950B" );
				$(this).children().children('path').css( "fill", "#E6950B" );

					// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #E3540B RGB(227,84,11)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("redOrangeOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "orange") {
				$(this).parent().parent().css( "background-color", "#E3540B" );
				
				$(this).children('path').css( "fill", "#E3900B" );
				$(this).children('polygon').css( "fill", "#E3900B" );
				$(this).children('circle').css( "fill", "#E3900B" );
				$(this).children().children('path').css( "fill", "#E3900B" );

						// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #E6C10B (230,193,11)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("orangeOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////



			} else if (cellColor === "yellow-orange") {
				$(this).parent().parent().css( "background-color", "#E7E10C" );
				
				$(this).children('path').css( "fill", "#E7B50C" );
				$(this).children('polygon').css( "fill", "#E7B50C" );
				$(this).children('circle').css( "fill", "#E7B50C" );
				$(this).children().children('path').css( "fill", "#E7B50C" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #E7E10C RGB(231,225,12)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowOrangeOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////



			} else if (cellColor === "yellow") {
				$(this).parent().parent().css( "background-color", "#E8D30C" );
				
				$(this).children('path').css( "fill", "#97E80C" );
				$(this).children('polygon').css( "fill", "#97E80C" );
				$(this).children('circle').css( "fill", "#97E80C" );
				$(this).children().children('path').css( "fill", "#97E80C" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #E8D30C RGB(232,211,12)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "yellow-green") {
				$(this).parent().parent().css( "background-color", "#E8DC0C" );
				
				$(this).children('path').css( "fill", "#79E80C" );
				$(this).children('polygon').css( "fill", "#79E80C" );
				$(this).children('circle').css( "fill", "#79E80C" );
				$(this).children().children('path').css( "fill", "#79E80C" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #E8DC0C RGB(232,220,12)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowGreenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				/////////////////////////////////////


			} else if (cellColor === "green") {
				$(this).parent().parent().css( "background-color", "#89D70B" );
				
				$(this).children('path').css( "fill", "#0BD718" );
				$(this).children('polygon').css( "fill", "#0BD718" );
				$(this).children('circle').css( "fill", "#0BD718" );
				$(this).children().children('path').css( "fill", "#0BD718" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #89D70B RGB(137,215,11)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("greenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "blue-green") {
				$(this).parent().parent().css( "background-color", "#2BD789" );
				
				$(this).children('path').css( "fill", "#2BC5D7" );
				$(this).children('polygon').css( "fill", "#2BC5D7" );
				$(this).children('circle').css( "fill", "#2BC5D7" );
				$(this).children().children('path').css( "fill", "#2BC5D7" );

				// // ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #2BD789 RGB(43,215,137)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("blueGreenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////



			} else if (cellColor === "blue") {
				$(this).parent().parent().css( "background-color", "#0C42E8" );
				
				$(this).children('path').css( "fill", "#4B0CE8" );
				$(this).children('polygon').css( "fill", "#4B0CE8" );
				$(this).children('circle').css( "fill", "#4B0CE8" );
				$(this).children().children('path').css( "fill", "#4B0CE8" );

				// // ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #0C42E8 RGB(12,66,232)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("blueOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "blue-purple") {
				$(this).parent().parent().css( "background-color", "#B00BD6" );
				
				$(this).children('path').css( "fill", "#410BD6" );
				$(this).children('polygon').css( "fill", "#410BD6" );
				$(this).children('circle').css( "fill", "#410BD6" );
				$(this).children().children('path').css( "fill", "#410BD6" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #B00BD6 RGB(176,11,214)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("bluePurpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "purple") {
				$(this).parent().parent().css( "background-color", "#720BD7" );
				
				$(this).children('path').css( "fill", "#D70BC5" );
				$(this).children('polygon').css( "fill", "#D70BC5" );
				$(this).children('circle').css( "fill", "#D70BC5" );
				$(this).children().children('path').css( "fill", "#D70BC5" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #720BD7 RGB(114,11,215)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("purpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "red-purple") {
				$(this).parent().parent().css( "background-color", "#B40BD6" );
				
				$(this).children('path').css( "fill", "#D60B4A" );
				$(this).children('polygon').css( "fill", "#D60B4A" );
				$(this).children('circle').css( "fill", "#D60B4A" );
				$(this).children().children('path').css( "fill", "#D60B4A" );

				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #B40BD6 RGB(180,11,214)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("redPurpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////
			}

		} else if (clickCounter === 3) {
		
			clickCounter++;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).parent().parent().css( "background-color", "#E80C7A" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				var redOne = document.createElement("li");
				var redOneText = document.createTextNode("ANALOGOUS #E80C7A RGB(232,12,122)");
				redOne.appendChild(redOneText);
				var position = document.getElementsByClassName("redOne")[0];
				position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				var removenewE1 = document.getElementsByTagName("li")[1];
				var containernewE1 = removenewE1.parentNode;
				containernewE1.removeChild(removenewE1);
				/////////////////////////////////////


			} else if (cellColor === "red-orange") {
				$(this).parent().parent().css( "background-color", "#E6950B" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #E3900B RGB(227,144,11)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("redOrangeOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "orange") {
				$(this).parent().parent().css( "background-color", "#E3900B" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #E6950B RGB(230,149,11)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("orangeOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////



			} else if (cellColor === "yellow-orange") {
				$(this).parent().parent().css( "background-color", "#E7B50C" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #E7B50C RGB(231,181,12)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowOrangeOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "yellow") {
				$(this).parent().parent().css( "background-color", "#97E80C" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #97E80C RGB(151,232,12)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "yellow-green") {
				$(this).parent().parent().css( "background-color", "#79E80C" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #79E80C RGB(121,232,12)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("yellowGreenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "green") {
				$(this).parent().parent().css( "background-color", "#0BD718" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #0BD718 RGB(11,215,24)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("greenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "blue-green") {
				$(this).parent().parent().css( "background-color", "#2BC5D7" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #2BC5D7 RGB(43,197,215)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("blueGreenOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				/////////////////////////////////////


			} else if (cellColor === "blue") {
				$(this).parent().parent().css( "background-color", "#4B0CE8" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #4B0CE8 RGB(75,12,232)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("blueOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "blue-purple") {
				$(this).parent().parent().css( "background-color", "#410BD6" );

				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #410BD6 RGB(65,11,214)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("bluePurpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "purple") {
				$(this).parent().parent().css( "background-color", "#D70BC5" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// // ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #D70BC5 RGB(215,11,197)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("purpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////


			} else if (cellColor === "red-purple") {
				$(this).parent().parent().css( "background-color", "#D60B4A" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

				// ADDING TEXT BLOCK
				// var redOne = document.createElement("li");
				// var redOneText = document.createTextNode("ANALOGOUS #D60B4A RGB(214,11,74)");
				// redOne.appendChild(redOneText);
				// var position = document.getElementsByClassName("redPurpleOne")[0];
				// position.appendChild(redOne);
				/////////////////////////////////////////
				// REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////
			}
		} else if (clickCounter === 4) {
		
			clickCounter++;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// REMOVING TEXT BLOCK
				var removenewE1 = document.getElementsByTagName("li")[1];
				var containernewE1 = removenewE1.parentNode;
				containernewE1.removeChild(removenewE1);
				/////////////////////////////////////



			} else if (cellColor === "red-orange") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "orange") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "yellow-orange") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "yellow") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "yellow-green") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "green") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "blue-green") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "blue") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "blue-purple") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "purple") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////

			} else if (cellColor === "red-purple") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

				// // REMOVING TEXT BLOCK
				// var removenewE1 = document.getElementsByTagName("li")[1];
				// var containernewE1 = removenewE1.parentNode;
				// containernewE1.removeChild(removenewE1);
				// /////////////////////////////////////
			}
			
			$(this).parent().parent().css( "background-color", "#66746a" );
				
			$(this).css("stroke-width", "1").css("stroke", "#000");

		} else if (clickCounter === 5) {
			clickCounter = 0;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).children('path').css( "fill", "#FF0000" );
				$(this).children('polygon').css( "fill", "#FF0000" );
				$(this).children('circle').css( "fill", "#FF0000" );
				$(this).children().children('path').css( "fill", "#FF0000" );
			} else if (cellColor === "red-orange") {
				$(this).children('path').css( "fill", "#FDB901" );
				$(this).children('polygon').css( "fill", "#FDB901" );
				$(this).children('circle').css( "fill", "#FDB901" );
				$(this).children().children('path').css( "fill", "#FDB901" );
			} else if (cellColor === "orange") {
				$(this).children('path').css( "fill", "#FA7900" );
				$(this).children('polygon').css( "fill", "#FA7900" );
				$(this).children('circle').css( "fill", "#FA7900" );
				$(this).children().children('path').css( "fill", "#FA7900" );
			} else if (cellColor === "yellow-orange") {
				$(this).children('path').css( "fill", "#FEDE00" );
				$(this).children('polygon').css( "fill", "#FEDE00" );
				$(this).children('circle').css( "fill", "#FEDE00" );
				$(this).children().children('path').css( "fill", "#FEDE00" );
			} else if (cellColor === "yellow") {
				$(this).children('path').css( "fill", "#FDFF00" );
				$(this).children('polygon').css( "fill", "#FDFF00" );
				$(this).children('circle').css( "fill", "#FDFF00" );
				$(this).children().children('path').css( "fill", "#FDFF00" );
			} else if (cellColor === "yellow-green") {
				$(this).children('path').css( "fill", "#D7FF00" );
				$(this).children('polygon').css( "fill", "#D7FF00" );
				$(this).children('circle').css( "fill", "#D7FF00" );
				$(this).children().children('path').css( "fill", "#D7FF00" );
			} else if (cellColor === "green") {
				$(this).children('path').css( "fill", "#34C000" );
				$(this).children('polygon').css( "fill", "#34C000" );
				$(this).children('circle').css( "fill", "#34C000" );
				$(this).children().children('path').css( "fill", "#34C000" );
			} else if (cellColor === "blue-green") {
				$(this).children('path').css( "fill", "#30C0A7" );
				$(this).children('polygon').css( "fill", "#30C0A7" );
				$(this).children('circle').css( "fill", "#30C0A7" );
				$(this).children().children('path').css( "fill", "#30C0A7" );
			} else if (cellColor === "blue") {
				$(this).children('path').css( "fill", "#0400FF" );
				$(this).children('polygon').css( "fill", "#0400FF" );
				$(this).children('circle').css( "fill", "#0400FF" );
				$(this).children().children('path').css( "fill", "#0400FF" );
			} else if (cellColor === "blue-purple") {
				$(this).children('path').css( "fill", "#6700BF" );
				$(this).children('polygon').css( "fill", "#6700BF" );
				$(this).children('circle').css( "fill", "#6700BF" );
				$(this).children().children('path').css( "fill", "#6700BF" );
			} else if (cellColor === "purple") {
				$(this).children('path').css( "fill", "#9500C0" );
				$(this).children('polygon').css( "fill", "#9500C0" );
				$(this).children('circle').css( "fill", "#9500C0" );
				$(this).children().children('path').css( "fill", "#9500C0" );
			} else if (cellColor === "red-purple") {
				$(this).children('path').css( "fill", "#BF0099" );
				$(this).children('polygon').css( "fill", "#BF0099" );
				$(this).children('circle').css( "fill", "#BF0099" );
				$(this).children().children('path').css( "fill", "#BF0099" );
			}
			$(this).parent().parent().css( "background-color", "#FFF" );

 			$(this).parent().parent('div.cell').css( "border", "1px solid #000" );

 			$(this).parent('div.icon').css( "color", "#000" );
		}


			// var newE1 = document.createElement("li");

			// var newText = document.createTextNode("avacado sentence two sentence three");

			// newE1.appendChild(newText);

			// var position = document.getElementsByTagName("ul")[0];

			// position.appendChild(newE1);


	});

		// THIS IS WHERE JAZZ STARTED TO TRY AND GET THE PARAGRAH WORKING.

			// var newE1 = document.createElement("li");

			// var newText = document.createTextNode("avacado sentence two sentence three");

			// newE1.appendChild(newText);

			// var position = document.getElementsByTagName("ul")[0];

			// position.appendChild(newE1);

		

            



});