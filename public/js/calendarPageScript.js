
setTimeout(doITT, 1000);
	function doITT(){

	$(function(){
		//setTimeout(5000);
		//console.log("going to build calendar!");
	$calendar = $('#calendar').cal({
		
		startdate		: $.cal.date().addDays(1-$.cal.date().format('N')), // Week beginning sunday.
		
		allowresize		: false,
		allowmove		: false,
		allowselect		: true,
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
		//events : randomEvents()
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