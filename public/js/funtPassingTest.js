function createDataArray(array, callback){

var newArray = array;
var LoadedYN = false; 
var myService;
//var feedUrl = "https://www.google.com/calendar/feeds/710jh8nvmf1nu58fqbqmccd4kg%40group.calendar.google.com/public/full";
var feedUrl = "https://www.google.com/calendar/feeds/d2r7ns1jir1i2bfjr3ujapkmfo%40group.calendar.google.com/public/full";

//https://www.google.com/calendar/feeds/710jh8nvmf1nu58fqbqmccd4kg%40group.calendar.google.com/public/basic
//document.getElementById("inputStuff").innerHTML = bodyInnerContent;

google.load("gdata", "1");
google.setOnLoadCallback(getMyFeed);

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
  for (var i=0; i<entryArray.length; i++){
  	//console.log("The feed is: "+myResultsFeedRoot.feed.getEntries()[0].getContent().getText());
  	var Title = entryArray[i].getTitle().getText();
  	//var StartTime = JSON.stringify(entryArray[i].getTimes().getStartTime().date).replace(/\"/g, "");
  	var StartTime = JSON.stringify(entryArray[i].getTimes()[0].getStartTime().date).replace(/\"/g, "");
  	//console.log("THINGGG: "+JSON.stringify(entryArray[i].getTimes()));
  		//.getStartTime().date).replace(/\"/g, ""))
  	var EndTime = JSON.stringify(entryArray[i].getTimes()[0].getEndTime().date).replace(/\"/g, "");
  	//console.log("The feed Title is: "+ Title);
  	//console.log("The feed Start Time is: "+ StartTime);
  	StartTime = changeTimeZones(StartTime, 5);
  	//console.log("The feed End Time is: "+ EndTime);
  	EndTime = changeTimeZones(EndTime, 5);
  	var UIDString = "i".toString();
  	newArray[i] = {uid:i,begins:StartTime,ends:EndTime,notes:Title,color:null};
  	bodyInnerContent += "<h1>The feed Title is: "+Title+"<br />The feed Start Time is: "+StartTime+"<br />The feed End Time is: "+EndTime+"</h1><br /><br />";

  	if (i>=20){ break; }
  }
  //console.log("results from feed are in array! : ");
  	for (var q=0;q<newArray.length;q++){
  		//console.log(newArray[q]);
  	}
  	callback();
}

function changeTimeZones(string, amount){
	hour = string.charAt(11);
	hour += string.charAt(12);
	var newTime;
	var newDay = "";
	//console.log("Hour Is: "+hour);
	if (hour == "00"){ newHour = "19"; newDay = changeDay(string, amount); }
	if (hour == "01"){ newHour = "20"; newDay = changeDay(string, amount); }
	if (hour == "02"){ newHour = "21"; newDay = changeDay(string, amount); }
	if (hour == "03"){ newHour = "22"; newDay = changeDay(string, amount); }
	if (hour == "04"){ newHour = "23"; newDay = changeDay(string, amount); }
	if (hour == "05"){ newHour = "00"; }
	if (hour == "06"){ newHour = "01"; }
	if (hour == "07"){ newHour = "02"; }
	if (hour == "08"){ newHour = "03"; }
	if (hour == "09"){ newHour = "04"; }
	if (hour == "10"){ newHour = "05"; }
	if (hour == "11"){ newHour = "06"; }
	if (hour == "12"){ newHour = "07"; }
	if (hour == "13"){ newHour = "08"; }
	if (hour == "14"){ newHour = "09"; }
	if (hour == "15"){ newHour = "10"; }
	if (hour == "16"){ newHour = "11"; }
	if (hour == "17"){ newHour = "12"; }
	if (hour == "18"){ newHour = "13"; }
	if (hour == "19"){ newHour = "14"; }
	if (hour == "20"){ newHour = "15"; }
	if (hour == "21"){ newHour = "16"; }
	if (hour == "22"){ newHour = "17"; }
	if (hour == "23"){ newHour = "18"; }
	newTime = string.substr(0, 11) + newHour + string.substr(13, 11);
	if (!(newDay === "")){
		newTime = newTime.substr(0,8) + newDay + newTime.substr(10, 14);
	}
	//console.log("NEW TIME: "+newTime);
	return newTime;

}
function changeDay(string, amount) {
	day = string.charAt(8);
	day += string.charAt(9);
	var newDay;
	if (day == "01"){ newDay = "28"; }
	if (day == "02"){ newDay = "01"; }
	if (day == "03"){ newDay = "02"; }
	if (day == "04"){ newDay = "03"; }
	if (day == "05"){ newDay = "04"; }
	if (day == "06"){ newDay = "05"; }
	if (day == "07"){ newDay = "06"; }
	if (day == "08"){ newDay = "07"; }
	if (day == "09"){ newDay = "08"; }
	if (day == "10"){ newDay = "09"; }
	if (day == "11"){ newDay = "10"; }
	if (day == "12"){ newDay = "11"; }
	if (day == "13"){ newDay = "12"; }
	if (day == "14"){ newDay = "13"; }
	if (day == "15"){ newDay = "14"; }
	if (day == "16"){ newDay = "15"; }
	if (day == "17"){ newDay = "16"; }
	if (day == "18"){ newDay = "17"; }
	if (day == "19"){ newDay = "18"; }
	if (day == "20"){ newDay = "19"; }
	if (day == "21"){ newDay = "20"; }
	if (day == "22"){ newDay = "21"; }
	if (day == "23"){ newDay = "22"; }
	if (day == "24"){ newDay = "23"; }
	if (day == "25"){ newDay = "24"; }
	if (day == "26"){ newDay = "25"; }
	if (day == "27"){ newDay = "26"; }
	if (day == "28"){ newDay = "27"; }
	if (day == "29"){ newDay = "28"; }
	if (day == "30"){ newDay = "29"; }
	if (day == "31"){ newDay = "30"; }
	return newDay;
}
//"color":"#00630F"
//[ {"uid":"0","begins":"2014-01-29 14:30:00","ends":"2014-01-29T19:45:00.000Z","notes":"The cake is a lie","color":null},

function handleError(e) {
  alert("There was an error!");
  alert(e.cause ? e.cause.statusText : e.message);
}

function buildWebsiteCalendarArray(Arrayy){
	//console.log("len2: "+Arrayy.length);
	addEvents(Arrayy);

}
}
var newArray = new Array();
function getEventArray(){ return newArray; }
execute(newArray, getEventArray, createDataArray, buildCalendar, formatDateRange);

function execute(newArray, getEventArray, createDataArray, buildCalendar, formatDateRange){
	createDataArray(newArray, function(){
		buildCalendar();
	});
	formatDateRange();
}


function buildCalendar(){

	$(function(){
	//console.log("going to build calendar!");
	$calendar = $('#calendar').cal({
		
		startdate		: $.cal.date().addDays(1-$.cal.date().format('N')), // Week beginning sunday.
		
		allowresize		: false,
		allowmove		: false,
		allowselect		: false,
		allowremove		: false,
		allownotesedit	: false,
		
		//maskdatelabel	: 'D',
		
		eventselect : function( uid ){
			console.log( 'Selected event: '+uid );
		},
		
		eventremove : function( uid ){
			console.log( 'Removed event: '+uid );
		},
		
		eventnotesedit : function( uid ){
			console.log( 'Edited Notes for event: '+uid );
		},
		
		// Use the random event generator to build a set of random events.
		events : getEventArray()
	});
	
	/**
	 * Set the initial header value.
	 */
	$('#date_head').dateRange( $calendar.cal( 'option', 'startdate' ), $calendar.cal( 'option', 'startdate' ).addDays( $calendar.cal('option','daystodisplay')-1 ) );
	
	/**
	 * Button click handler. 
	 *
	 * TODO: Turn this into a drop-in module for calendars once we've got the capability to 
	 * 		 toggle calendar views without reloading. Include 'formatRange' method.
	 */
	$('#controls').on('click','button[name]',function(){
		
		var $this = $(this), action = $this.attr('name');
		
		// If this is already the current state, just exit.
		if( $this.is('.on') ) return;
		
		// Switch to the new state.
		switch( action ) {
			
			/** 
			 * TODO: For now... ideally you'd be able to toggle between views without reloading.
			 */
			case 'day'		: window.location = 'day.html'; break;
			case 'year'		: window.location = 'year.html'; break;
			case 'month'	: window.location = 'month.html'; break;
			
			case 'prev'		:
			case 'today'	:
			case 'next'		:
				
				var today	 = $.cal.date(),
					starting = $calendar.cal('option','startdate'),
					duration = $calendar.cal('option','daystodisplay'),
					newstart = starting,
					newend;
				
				switch( action ){	
					case 'next' : newstart = starting.addDays(duration); $('button[name="today"]').parent().removeClass('on'); break;
					case 'prev'	: newstart = starting.addDays(0-duration); $('button[name="today"]').parent().removeClass('on'); break;
					case 'today': newstart = $.cal.date().addDays(1-$.cal.date().format('N')); break;
				}
				
				// Work out the new end date.
				newend = newstart.addDays(duration-1);
				 
				// Set the new startdate.
				$calendar.cal( 'option','startdate', newstart );
				
				if( today >= newstart && today <= newend ) $('button[name="today"]').parent().addClass('on');
				
				// Set the new date in the header.
				$('#date_head').dateRange( newstart, newend )
			break;
		}
	});
	});
}

function formatDateRange(){
/**
 * jQuery dateRange plugin 1.0.0
 * Copyright 2012, Digital Fusion
 * Licensed under the MIT license.
 * http://teamdf.com/jquery-plugins/license/
 *
 * @author		: Sam Sehnert | sam@teamdf.com
 * @dependancy 	: http://github.com/teamdf/jquery-calendar/ ($.cal.date)
 *
 * Formats and displays a minimal text representation of a date range.
 */
(function($){
	
	// The plugin name. Override if you find namespace collisions.
	var plugin_name = 'dateRange';
	
	// Set the plugin defaults.
	var defaults = {
		month		: 'jS',
		year		: 'jS M',
		full		: 'jS M Y',
		separator	: ' - '
	}
	
	/**
	 * The plugin function which does the date formatting magic.
	 *
	 * @param mixed start			: The start of the range. A date object, or a parseable date string.
	 * @param mixed end				: The end of the range. A date object, or a parseable date string.
	 * @param object options		: An object containing settings (date formats to print under different conditions).
	 * 
	 * @return jQuery Collection;
	 */
	$.fn[plugin_name] = function( start, end, options ){
		
		// Settings to the defaults.
		var settings = $.extend({},defaults);
		
		// Make sure these are extended date objects.
		start	= $.cal.date(start);
		end		= $.cal.date(end);
		
		// If options exist, lets merge them
		// with our default settings.
		if( options ) $.extend( settings, options )
		
		var diffDays	= start.format('Ymd') != end.format('Ymd'),
			diffMonths	= diffDays ? start.format('Ym') != end.format('Ym') : false,
			diffYears	= diffMonths ? start.format('Y') != end.format('Y') : false,
			startFormat	= diffYears || !diffDays ? settings.full : ( diffMonths ? settings.year : settings.month );
		//console.log("about to return date");
		// Return the formatted date.
		return this.text(start.format(startFormat)+( diffDays ? settings.separator+end.format(settings.full) : '' ));
	}
	
})(jQuery);


}






//////////