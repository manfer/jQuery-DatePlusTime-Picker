/* Portuguese initialisation for the jQuery dateplustimepicker plugin. */
jQuery(function($){
	$.dateplustimepicker.regional['pt'] = {
        hourText: 'Horas',
        minuteText: 'Minutos',
        secondText: 'Segundos',
        timeFormat: 'hh:mm tt',
        timeOnlyTitle: 'Selecione um tempo',
        timeText: 'Tempo'
	};
	$.dateplustimepicker.setDefaults($.dateplustimepicker.regional['pt']);
});