var newArray = new Array();
			//buildWebsiteCalendarArray(newArray);
			var LoadedYN = false; 
			var myService;
			//var feedUrl = "https://www.google.com/calendar/feeds/710jh8nvmf1nu58fqbqmccd4kg%40group.calendar.google.com/public/full";
			//var feedUrl = "https://www.google.com/calendar/feeds/d2r7ns1jir1i2bfjr3ujapkmfo%40group.calendar.google.com/public/full";
			var feedUrl = "https://www.google.com/calendar/feeds/d2r7ns1jir1i2bfjr3ujapkmfo%40group.calendar.google.com/public/basic";

			//https://www.google.com/calendar/feeds/710jh8nvmf1nu58fqbqmccd4kg%40group.calendar.google.com/public/basic
			//document.getElementById("inputStuff").innerHTML = bodyInnerContent;
			//console.log("len: "+newArray.length)
			  //buildWebsiteCalendarArray(newArray);

			//return newArray;
			function thingLoaded(){
				LoadedYN = true;
			}
			function getEventArray(){ 

				//if (LoadedYN){
				//	console.log("array length: "+newArray.length);
					return newArray;
				//}
				//else {
				//	console.log("array lengthh: "+newArray.length);
					setTimeout('getEventArray();', 5000);
				//	LoadedYN = true;
				//}
				/*
					function mySandwich(param1, param2, callback) {  
					    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);  
					    callback();  
					}  
					  
					mySandwich('ham', 'cheese', function() {  
					    alert('Finished eating my sandwich.');  
					});  
				*/ 
			}

			google.load("gdata", "1");
			google.setOnLoadCallback(getMyFeed);
			//return newArray;
		
		function setupMyService(){
			myService = new google.gdata.calendar.CalendarService('exampleCo-exampleApp-1');
		}
		function getMyFeed2(newArray){
			setupMyService();
		  	//console.log("getFeed2: "+ myService.getEventsFeed(feedUrl, handleMyFeed, handleError));
		}
		function getMyFeed() {
		  setupMyService();

		  myService.getEventsFeed(feedUrl, handleMyFeed, handleError);
		}
		function handleMyFeed(myResultsFeedRoot) {
		  //alert("This feed's title is: " + myResultsFeedRoot.feed.getTitle().getText());
		  var entryArray = myResultsFeedRoot.feed.getEntries().slice(0);
		  //console.log("entryArray length: "+entryArray.length);
		  var bodyInnerContent = "<h1 style=\"text-align:center;\">Google Calendar Events Script</h1><br />";
		  //var newArray = new Array();
		  for (var i=0; i<entryArray.length; i++){
		  	//console.log("The feed is: "+myResultsFeedRoot.feed.getEntries()[0].getContent().getText());
		  	var Title = entryArray[i].getTitle().getText();
		  	//var StartTime = JSON.stringify(entryArray[i].getTimes().getStartTime().date).replace(/\"/g, "");
		  	var StartTime = JSON.stringify(entryArray[i].getTimes()[0].getStartTime().date).replace(/\"/g, "");
		  	//console.log("THINGGG: "+JSON.stringify(entryArray[i].getTimes()));
		  		//.getStartTime().date).replace(/\"/g, ""))
		  	var EndTime = JSON.stringify(entryArray[i].getTimes()[0].getEndTime().date).replace(/\"/g, "");
		  	//document.getElementById("News").innerHTML = "TEST";//Title+" "+StartTime+" "+EndTime+"<br />";
		  	//console.log("The feed Title is: "+ Title);
		  	//console.log("The feed Start Time is: "+ StartTime);
		  	//console.log("The feed End Time is: "+ EndTime);
		  	var UIDString = "i".toString();
		  	newArray[i] = {uid:i,begins:StartTime,ends:EndTime,notes:Title,color:null};
		  	//bodyInnerContent += "<h1>The feed Title is: "+Title+"<br />The feed Start Time is: "+StartTime+"<br />The feed End Time is: "+EndTime+"</h1><br /><br />";

		  	if (i>=20){ break; }
		  }

		  //document.getElementById("inputStuff").innerHTML = bodyInnerContent;
		  //console.log("results from feed are in array! : ");
		  	for (var q=0;q<newArray.length;q++){
		  		//console.log(newArray[q]);
		  	}

		  	return newArray;
		}
		//"color":"#00630F"
		//[ {"uid":"0","begins":"2014-01-29 14:30:00","ends":"2014-01-29T19:45:00.000Z","notes":"The cake is a lie","color":null},

		function handleError(e) {
		  alert("There was an error!");
		  alert(e.cause ? e.cause.statusText : e.message);
		}
			//console.log("LENGTHARRAY: "+newArray.length)
			//return newArray;

		function buildWebsiteCalendarArray(Arrayy){
			//newArray2 = 
			//console.log("len2: "+Arrayy.length);
			//var calElements = getEvents();
			//console.log(calElements.length);
			addEvents(Arrayy);

		}