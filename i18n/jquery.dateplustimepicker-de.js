/* German initialisation for the jQuery dateplustimepicker plugin. */
jQuery(function($){
	$.dateplustimepicker.regional['de'] = {
        hourText: 'Stunden',
        minuteText: 'Minuten',
        secondText: 'Sekunden',
        timeFormat: 'hh:mm tt',
        timeOnlyTitle: 'Uhrzeit wählen',
        timeText: 'Zeit'
	};
	$.dateplustimepicker.setDefaults($.dateplustimepicker.regional['de']);
});
