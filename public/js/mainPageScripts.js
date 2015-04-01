		function NavBarRollon(Element){
			Element.style.color = "#CFB53B";
		}
		function NavBarRolloff(Element){
			Element.style.color = "#7a7a8a";
		}
		function logoRollon(Element){
			Element.style.color = "#CFB53B";
		}
		function logoRolloff(Element){
			Element.style.color = "#7c76b8";
		}
		function HideTransparency(Element){
			Element.style.opacity = "0";
		}
		function ShowTransparency(Element){
			Element.style.opacity = ".5";
		}
		function loginShowHide(){
			if (!(document.getElementById("loginArea").style.display === "inline-block")) {
				document.getElementById("loginArea").style.display = "inline-block";
			} else {
				document.getElementById("loginArea").style.display = "none";
			}
		}
		function pastEventsButton(){
			document.getElementById("FrontPageContent").style.display = "none";
			document.getElementById("UpcomingEventsPageContent").style.display = "none";
			document.getElementById("PastEventsPageContent").style.display = "block";
		}
		function upcomingEventsButton(){
			document.getElementById("FrontPageContent").style.display = "none";
			document.getElementById("PastEventsPageContent").style.display = "none";
			document.getElementById("UpcomingEventsPageContent").style.display = "block";
		}
		function backToMainPage(){
			if (document.getElementById("FrontPageContent").style.display === "none"){
				document.getElementById("FrontPageContent").style.display = "block";
				document.getElementById("PastEventsPageContent").style.display = "none";
				document.getElementById("UpcomingEventsPageContent").style.display = "none";
			} else { }
		}
		function ScrollToElement(Element){
			var heightFromTop;
			if (Element.innerHTML === "About") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "Resources") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "Events") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "News") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "Rush") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "Contact") { heightFromTop = getHeightFromTopOfPage(Element); }
		}
		function getHeightFromTopOfPage(ele){
			//var ele = document.getElementById("News");
			var x = 0;
			while(ele){
			   x += ele.offsetTop;
			   ele = ele.offsetParent;
			}
			console.log("Height to top: "+x);
			x -= 90;
			console.log("New Height: "+x);
			//$('html, body').animate({window.scrollTo(0,x)}, 1200);



			return x;
				//window.scrollTo(0,x);
		}
		function scrollYo(){
			var x = getHeightFromTopOfPage(Element);
			console.log("scrollYo"+x);
			window.scrollTo(0,x);
		}
		$(document).ready(function() {
			$("#MainIcon").click(function(){
				backToMainPage();
				$('html, body').animate({scrollTop: $("#IconTop").offset().top}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavAbout").click(function(){
				backToMainPage();
				$('html, body').animate({scrollTop: $("#About").offset().top- 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavResources").click(function(){
				backToMainPage();
				$('html, body').animate({scrollTop: $("#Resources").offset().top - 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavEvents").click(function(){
				backToMainPage();
				$('html, body').animate({scrollTop: $('#Events').offset().top- 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavNews").click(function(){
				backToMainPage();
				$('html, body').animate({scrollTop: $("#News").offset().top - 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavRush").click(function(){
				backToMainPage();
				$('html, body').animate({scrollTop: $("#Rush").offset().top - 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavContact").click(function(){
				backToMainPage();
				$('html, body').animate({scrollTop: $("#Contact").offset().top - 100}, 1200);
			});
		});
		/**
		$(document).ready(function() {
			$("#test2").click(function(){
				//$('html').animate({scrollTop: $("#News").offset().top}, 1200);
				var elementt = $("#News");
				$('html').animate({scrollTop: getHeightFromTopOfPage(document.getElementById("News"))}, 1200);
			});
		});
		*/