/**
 * Generate a random set of events.
 *
 * @param int min			: The minimum number of random events to return.
 * @param int max			: The maximum number of random events to return.
 *
 * @return array : An array of randomly generated event objects for
 *				 :  use in the calendar.
 */
function randomEvents( min, max, uidsuffix, daysbefore, daysafter )
{
	/*
	if( !min ) min = 50;
	if( !max ) max = 800;
	if( !daysbefore )	daysbefore = -21;
	if( !daysafter )	daysafter  = 21;
	if( !uidsuffix ) uidsuffix = '';
	
	var mins		= ['00','15','30','45'];
	var durations	= [15,15,15,15,30,30,30,30,30,45,45,45,45,45,60,60,60,60,60,60,90,120,165,210,245,300,600];
	var colors		= [ null, null, null, null, null, null, null, null, null, null, '#dddddd', '#7E0000', '#00630F', '#00630F' ];
	var notes		= [
		'Meeting',
		'Lunch',
		'Client',
		'Dentist Appointment',
		'Haircut',
		'Dinner',
		'Meeting with Boss',
		'Flight',
		'The big game',
		'Eye exam',
		'Doctor Appointment',
		'Take the car in for a service',
		'Walk the dog',
		'The cake is a lie',
		'Party'
	];
	var events 		= [], dayadd, hour, begins;
	
	for( var e=0; e<randomBetween(min,max); e++ ){
		
		dayadd		= randomBetween(daysbefore,daysafter);
		hour		= randomBetween(3,20);
		begins		= $.cal.date().addDays(dayadd).format('Y-m-d')+' '+( hour < 10 ? '0'+hour : hour )+':'+randomFrom(mins)+':00';
		
		events[e] = {
			uid		: e+uidsuffix,
			begins	: begins,
			ends	: $.cal.date(begins).addMinutes(randomFrom(durations)),
			notes	: randomFrom(notes),
			color	: randomFrom(colors)
		};
	}
	console.log("events: "+JSON.stringify(events));
	return events;
	*/



	/* return [
{"uid":"0","begins":"2014-01-29 14:30:00","ends":"2014-01-29T19:45:00.000Z","notes":"The cake is a lie","color":null},
{"uid":"1","begins":"2014-01-14 14:00:00","ends":"2014-01-14T20:30:00.000Z","notes":"Lunch","color":null},
{"uid":"2","begins":"2014-01-31 15:15:00","ends":"2014-01-31T20:30:00.000Z","notes":"Walk the dog","color":null},
{"uid":"3","begins":"2013-12-28 18:00:00","ends":"2013-12-29T00:00:00.000Z","notes":"Party","color":null},
{"uid":"4","begins":"2014-01-09 04:15:00","ends":"2014-01-09T09:30:00.000Z","notes":"Walk the dog","color":null},
{"uid":"5","begins":"2014-01-19 16:15:00","ends":"2014-01-19T21:30:00.000Z","notes":"Haircut","color":"#dddddd"},
{"uid":"6","begins":"2014-01-01 08:00:00","ends":"2014-01-01T18:00:00.000Z","notes":"The cake is a lie","color":null},
{"uid":"7","begins":"2014-01-05 12:00:00","ends":"2014-01-05T22:00:00.000Z","notes":"Doctor Appointment","color":"#00630F"},
{"uid":"8","begins":"2014-01-22 17:15:00","ends":"2014-01-23T01:45:00.000Z","notes":"Haircut","color":"#00630F"},
{"uid":"9","begins":"2014-01-02 20:00:00","ends":"2014-01-03T01:15:00.000Z","notes":"Doctor Appointment","color":"#7E0000"},
{"uid":"10","begins":"2014-01-21 18:15:00","ends":"2014-01-22T00:15:00.000Z","notes":"Eye exam","color":null},
{"uid":"11","begins":"2014-01-05 16:15:00","ends":"2014-01-05T21:30:00.000Z","notes":"The cake is a lie","color":null},
{"uid":"12","begins":"2014-01-08 09:30:00","ends":"2014-01-08T16:30:00.000Z","notes":"Party","color":null},
{"uid":"13","begins":"2014-01-19 08:30:00","ends":"2014-01-19T14:30:00.000Z","notes":"Haircut","color":"#7E0000"},
{"uid":"14","begins":"2014-01-16T20:45:00.000Z","ends":"2014-01-17T02:45:00.000Z","notes":"Eye exam","color":null},
{"uid":"15","begins":"2014-01-22 20:15:00","ends":"2014-01-23T02:00:00.000Z","notes":"Doctor Appointment","color":null},
{"uid":"16","begins":"2014-01-08 13:00:00","ends":"2014-01-08T18:45:00.000Z","notes":"Lunch","color":null},
{"uid":"17","begins":"2014-01-06 15:00:00","ends":"2014-01-06T20:15:00.000Z","notes":"Meeting with Boss","color":"#7E0000"},
{"uid":"18","begins":"2014-01-10 20:15:00","ends":"2014-01-11T02:45:00.000Z","notes":"Take the car in for a service","color":"#7E0000"},
{"uid":"19","begins":"2014-01-20 08:00:00","ends":"2014-01-20T13:15:00.000Z","notes":"Haircut","color":"#00630F"},
{"uid":"20","begins":"2014-02-04 09:45:00","ends":"2014-02-04T16:45:00.000Z","notes":"Walk the dog","color":null},
{"uid":"21","begins":"2014-02-01 07:30:00","ends":"2014-02-01T12:45:00.000Z","notes":"Eye exam","color":null},
{"uid":"22","begins":"2014-02-05 13:00:00","ends":"2014-02-05T18:45:00.000Z","notes":"The big game","color":null},
{"uid":"23","begins":"2014-01-24 14:30:00","ends":"2014-01-24T20:30:00.000Z","notes":"Haircut","color":null},
{"uid":"24","begins":"2013-12-31 10:00:00","ends":"2013-12-31T16:30:00.000Z","notes":"Dinner","color":"#00630F"},
{"uid":"25","begins":"2014-02-03 16:30:00","ends":"2014-02-03T21:45:00.000Z","notes":"Party","color":null},
{"uid":"26","begins":"2014-02-03 07:00:00","ends":"2014-02-03T14:45:00.000Z","notes":"Party","color":"#dddddd"},
{"uid":"27","begins":"2013-12-26 18:00:00","ends":"2013-12-27T00:00:00.000Z","notes":"Meeting with Boss","color":null},
{"uid":"28","begins":"2013-12-31 09:30:00","ends":"2013-12-31T15:00:00.000Z","notes":"Dentist Appointment","color":null},
{"uid":"29","begins":"2014-01-20 16:30:00","ends":"2014-01-21T07:30:00.000Z","notes":"Walk the dog","color":null},
{"uid":"30","begins":"2014-01-26 08:30:00","ends":"2014-01-26T13:45:00.000Z","notes":"Lunch","color":null},
{"uid":"31","begins":"2014-01-07 03:45:00","ends":"2014-01-07T09:00:00.000Z","notes":"Party","color":null},
{"uid":"32","begins":"2014-01-09 09:15:00","ends":"2014-01-09T15:15:00.000Z","notes":"Client","color":null},
{"uid":"33","begins":"2014-01-01 14:00:00","ends":"2014-01-02T05:00:00.000Z","notes":"Meeting","color":null},
{"uid":"34","begins":"2014-01-23 19:15:00","ends":"2014-01-24T00:30:00.000Z","notes":"Take the car in for a service","color":"#dddddd"},
{"uid":"35","begins":"2014-02-02 17:30:00","ends":"2014-02-02T23:15:00.000Z","notes":"Meeting with Boss","color":null},
{"uid":"36","begins":"2014-01-16 09:45:00","ends":"2014-01-16T15:30:00.000Z","notes":"Take the car in for a service","color":"#00630F"},
{"uid":"37","begins":"2014-02-05 04:15:00","ends":"2014-02-05T10:00:00.000Z","notes":"Doctor Appointment","color":null},
{"uid":"38","begins":"2014-01-04 17:45:00","ends":"2014-01-04T23:00:00.000Z","notes":"Meeting","color":null},
{"uid":"39","begins":"2014-01-18 17:45:00","ends":"2014-01-18T23:00:00.000Z","notes":"Meeting","color":null},
{"uid":"40","begins":"2014-01-09 09:15:00","ends":"2014-01-09T14:45:00.000Z","notes":"The big game","color":null},
{"uid":"41","begins":"2014-01-23 14:30:00","ends":"2014-01-23T20:15:00.000Z","notes":"Lunch","color":null},
{"uid":"42","begins":"2014-01-27 08:15:00","ends":"2014-01-27T14:00:00.000Z","notes":"Take the car in for a service","color":null},
{"uid":"43","begins":"2014-01-30 19:00:00","ends":"2014-01-31T00:15:00.000Z","notes":"Meeting","color":null},
{"uid":"44","begins":"2014-01-03 09:15:00","ends":"2014-01-03T14:30:00.000Z","notes":"Flight","color":"#7E0000"},
{"uid":"45","begins":"2014-01-23 04:15:00","ends":"2014-01-23T09:45:00.000Z","notes":"Party","color":null},
{"uid":"46","begins":"2014-02-05 15:00:00","ends":"2014-02-05T21:30:00.000Z","notes":"Dinner","color":null},
{"uid":"47","begins":"2014-01-05 14:15:00","ends":"2014-01-05T20:15:00.000Z","notes":"Dinner","color":null},
{"uid":"48","begins":"2014-01-08 15:45:00","ends":"2014-01-09T06:45:00.000Z","notes":"Flight","color":null},
{"uid":"49","begins":"2014-02-03 19:00:00","ends":"2014-02-04T01:00:00.000Z","notes":"Client","color":"#dddddd"},
{"uid":"50","begins":"2014-01-19 03:15:00","ends":"2014-01-19T09:00:00.000Z","notes":"Lunch","color":null},
{"uid":"51","begins":"2014-01-26 19:15:00","ends":"2014-01-27T01:00:00.000Z","notes":"Party","color":null},
{"uid":"52","begins":"2014-01-14 05:30:00","ends":"2014-01-14T13:15:00.000Z","notes":"Dentist Appointment","color":null},
{"uid":"53","begins":"2013-12-30 09:45:00","ends":"2013-12-30T15:30:00.000Z","notes":"Flight","color":null},
{"uid":"54","begins":"2013-12-28 20:30:00","ends":"2013-12-29T02:30:00.000Z","notes":"Take the car in for a service","color":null},
{"uid":"55","begins":"2014-01-17 17:15:00","ends":"2014-01-17T23:00:00.000Z","notes":"Flight","color":null},
{"uid":"56","begins":"2014-01-14 13:30:00","ends":"2014-01-14T19:30:00.000Z","notes":"Dinner","color":null},
{"uid":"57","begins":"2013-12-26 08:15:00","ends":"2013-12-26T13:45:00.000Z","notes":"Meeting","color":null},
{"uid":"58","begins":"2014-01-11 03:45:00","ends":"2014-01-11T09:00:00.000Z","notes":"Walk the dog","color":null},
{"uid":"59","begins":"2014-01-05 03:00:00","ends":"2014-01-05T08:45:00.000Z","notes":"Party","color":null},
{"uid":"60","begins":"2014-01-09 04:00:00","ends":"2014-01-09T09:45:00.000Z","notes":"Client","color":null},
{"uid":"61","begins":"2014-01-25 11:45:00","ends":"2014-01-25T17:00:00.000Z","notes":"Doctor Appointment","color":null},
{"uid":"62","begins":"2014-01-19 05:30:00","ends":"2014-01-19T11:30:00.000Z","notes":"Eye exam","color":null},
{"uid":"63","begins":"2014-02-06 05:45:00","ends":"2014-02-06T11:45:00.000Z","notes":"Eye exam","color":null},
{"uid":"64","begins":"2014-01-03 17:30:00","ends":"2014-01-03T23:15:00.000Z","notes":"Party","color":"#00630F"},
{"uid":"65","begins":"2014-01-04 05:45:00","ends":"2014-01-04T11:00:00.000Z","notes":"Dentist Appointment","color":"#dddddd"},
{"uid":"66","begins":"2014-01-19 07:00:00","ends":"2014-01-19T13:00:00.000Z","notes":"Doctor Appointment","color":"#7E0000"},
{"uid":"67","begins":"2013-12-26 06:15:00","ends":"2013-12-26T13:15:00.000Z","notes":"Flight","color":null},
{"uid":"68","begins":"2014-01-06 12:45:00","ends":"2014-01-06T18:15:00.000Z","notes":"Meeting with Boss","color":"#00630F"},
{"uid":"69","begins":"2013-12-31 13:00:00","ends":"2013-12-31T21:30:00.000Z","notes":"Walk the dog","color":null}
];
}
*/
events = getEvents2();
return events; 
}
/**
 * Random number function. Used in randomEvents()
 *
 * @param int from			: The lowest number to return.
 * @param int to			: The highest number to return.
 *
 * @return : A number between (inclusive) from -> to.
 */
function randomBetween( from, to )
{
    return Math.floor(Math.random()*(to-from+1)+from);
}

/**
 * Random array item function. Used in randomEvents()
 *
 * @param array arr			: returns a random array element in a numerically keyed array.
 *
 * @return string : array item.
 */
function randomFrom(arr)
{
	return arr[randomBetween(0,arr.length-1)];
}


function buildArray()
{
	google.load("gdata", "1");
	google.setOnLoadCallback(getMyFeed);

	var myService;
	var feedUrl = "https://www.google.com/calendar/feeds/710jh8nvmf1nu58fqbqmccd4kg%40group.calendar.google.com/public/full";

	function setupMyService(){
		myService = new google.gdata.calendar.CalendarService('exampleCo-exampleApp-1');
	}

	function getMyFeed() {
	  setupMyService();

	  myService.getEventsFeed(feedUrl, handleMyFeed, handleError);
	}
	function handleMyFeed(myResultsFeedRoot) {
	  //alert("This feed's title is: " + myResultsFeedRoot.feed.getTitle().getText());
	  var entryArray = myResultsFeedRoot.feed.getEntries().slice(0);
	  //var bodyInnerContent = "<h1 style=\"text-align:center;\">Google Calendar Events Script</h1><br />";
	  for (var i=0; i<entryArray.length; i++){
	  	//console.log("The feed is: "+myResultsFeedRoot.feed.getEntries()[0].getContent().getText());
	  	var Title = entryArray[i].getTitle().getText();
	  	var StartTime = JSON.stringify(entryArray[i].getTimes()[0].getStartTime());
	  	var EndTime = JSON.stringify(entryArray[i].getTimes()[0].getEndTime());
	  	console.log("The feed Title is: "+ Title);
	  	console.log("The feed Start Time is: "+ StartTime);
	  	console.log("The feed End Time is: "+ EndTime);

	  	//bodyInnerContent += "<h1>The feed Title is: "+Title+"<br />The feed Start Time is: "+StartTime+"<br />The feed End Time is: "+EndTime+"</h1><br /><br />";

	  	if (i>=20){ break; }
	  }
	  //document.getElementsByTagName("body")[0].innerHTML = bodyInnerContent;
	}

	function handleError(e) {
	  alert("There was an error!");
	  alert(e.cause ? e.cause.statusText : e.message);
	}
}






