/* French initialisation for the jQuery dateplustimepicker plugin. */
jQuery(function($){
	$.dateplustimepicker.regional['fr'] = {
        hourText: 'Heures',
        minuteText: 'Minutes',
        secondText: 'Secondes',
        timeFormat: 'hh:mm tt',
        timeOnlyTitle: 'Sélectionner une heure',
        timeText: 'Heure'
	};
	$.dateplustimepicker.setDefaults($.dateplustimepicker.regional['fr']);
});