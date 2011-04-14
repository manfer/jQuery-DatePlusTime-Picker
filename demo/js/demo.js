$(document).ready(function() {

	// inputs with jquery ui style
	$("#dateplustimepicker-demos input").addClass('ui-widget ui-state-default ui-corner-all');

	// select with jquery ui style
	$('#format-switcher').addClass('ui-widget ui-state-default ui-corner-left');
	
	// documentation simple example in tabs
	$('#overview-example-tabs').tabs();

	//Prepare the option types
	var paramDescriptions = {
		'String': '<pre class="prettyprint lang-js"><code> "I\'m a String in JavaScript!"\n \'So am I!\'</code></pre><p>A string in JavaScript is an immutable object that contains none, one or many characters.</p><p>The type of a string is "string".</p><pre class="prettyprint lang-js"><code> typeof "some string"; // "string"</code></pre><p class="more">read more about the String type at <a href="http://docs.jquery.com/Types#String">http://docs.jquery.com/Types#String</a></p>',
		'Number': '<pre class="prettyprint lang-js"><code> 12\n 3.543</code></pre><p>Numbers in JavaScript are double-precision 64-bit format IEEE 754 values. They are immutable, just as <a href="#String" title="">strings</a>. All operators common in c-based languages are available to work with numbers (+, -, *, /, %, =, +=, -=, *=, /=, ++, --).</p><p>The type of a number is "number".</p><pre class="prettyprint lang-js"><code> typeof 12 // "number"\n typeof 3.543 // "number"</code></pre><p class="more">read more about the Number type at <a href="http://docs.jquery.com/Types#Number">http://docs.jquery.com/Types#Number</a></p>',
		'Boolean': '<p>A boolean in JavaScript can be either true or false:</p><pre class="prettyprint lang-js"><code> if ( true ) console.log("always!")\n if ( false ) console.log("never!")</code></pre><p>When an option is specified as a boolean, it often looks like this:</p><pre class="prettyprint lang-js"><code>$("...").somePlugin({\n  hideOnStartup: true,\n  onlyOnce: false\n});</code></pre>',
		'Object': '<p>Everything in JavaScript is an object, though some are more objective (haha). The easiest way to create an object is the object literal:</p><pre class="prettyprint lang-js"><code> var x = {};\n var y = {\n   name: "Pete",\n   age: 15\n };</code></pre><p>The type of an object is "object":</p><pre class="prettyprint lang-js"><code> typeof {} // "object"</code></pre><p class="more">read more about the Object type at <a href="http://docs.jquery.com/Types#Object"></a>></p>',
		'Options': '<p>Options in jQuery are plain JavaScript objects. Whenever Options is mentioned as a type, that object and also all of its properties should be optional. There are exceptions where at least one option is required. jQuery\'s most prominent use of Options is its <a href="/Ajax/jQuery.ajax" title="Ajax/jQuery.ajax">AJAX</a>-method. Nearly all jQuery plugins provide an Options-based API: They work without any configuration, but allow the user to specify whatever customization (s)he needs.</p><p>Let\'s look at an example from the form plugin. It allows you to submit a form via AJAX with this simple line of code:</p><pre class="prettyprint lang-js"><code> $("#myform").ajaxForm();</code></pre><p>In that mode, it uses the form\'s action-attribute as the AJAX-URL and the form\'s method-attribute to determine whether to GET or POST the form. You can override both defaults by specifying them as options:</p><pre class="prettyprint lang-js"><code> $("#myform").ajaxForm({\n   url: "mypage.php",\n   type: "POST"\n });</code></pre>',
		'Array': '<p>Arrays in JavaScript are mutable lists with a few built-in methods. You can define arrays using the array literal:</p><pre class="prettyprint lang-js"><code> var x = [];\n var y = [1, 2, 3];</code></pre><p>The type of an array is "object":</p><pre class="prettyprint lang-js"><code> typeof []; // "object"\n typeof [1, 2, 3]; // "object"</code></pre><p>Reading and writing elements to an array uses the array-notation:</p><pre class="prettyprint lang-js"><code> x[0] = 1;\n y[2] // 3</code></pre><p class="more">read more about the Array type at <a href="http://docs.jquery.com/Types#Array">http://docs.jquery.com/Types#Array</a></p>',
		'Map': '<p>The map type is used by the AJAX function to hold the data of a request.  This type could be a string, an array&lt;form elements&gt;, a jQuery object with form elements or an object with key/value pairs. In the last case, it is possible to assign multiple values to one key by assigning an array.</p><pre class="prettyprint lang-js"><code>{\'key[]\':[\'valuea\',\'valueb\']}</code></pre><p>becomes on the server-side (in PHP):</p><pre class="prettyprint lang-js"><code>$_REQUEST[\'key\'][0]="valuea";\n$_REQUEST[\'key\'][1]="valueb";</code></pre><p>in Rails or Merb:</p><pre class="prettyprint lang-js"><code> params[:key] = ["valuea", "valueb"]</code></pre>',
		'Function': '<p>A function in JavaScript can be either named or anonymous. An anonymous function can be assigned to a variable or passed to a method.</p><pre class="prettyprint lang-js"><code>function named() {}\nvar handler = function() {}</code></pre><p>You see a lot of anonymous functions in jQuery code:</p><pre class="prettyprint lang-js"><code> $(document).ready(function() {});\n $("a").click(function() {});\n $.ajax({\n   url: "someurl.php",\n   success: function() {}\n });</code></pre><p>The type of a function is "function".<p class="more">read more about the Function type at <a href="http://docs.jquery.com/Types#Function">http://docs.jquery.com/Types#Function</a></p></p>',
		'Callback': '<p>A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered. jQuery\'s event system uses such callbacks everywhere:</p><pre class="prettyprint lang-js"><code> $("body").click(function(event) {\n   console.log("clicked: " + event.target);\n });</code></pre><p>Most callbacks provide arguments and a scope. In the event-handler example, the callback is called with one argument, an Event. The scope is set to the handling element, in the above example, document.body.</p><p>Some callbacks are required to return something, others make that return value optional. To prevent a form submission, a submit event handler can return false:</p><pre class="prettyprint lang-js"><code> $("#myform").submit(function() {\n   return false;\n });</code></pre><p>Instead of always returning false, the callback could check fields of the form for validity, and return false only when the form is invalid.</p>',
		'Selector': '<p>A selector is used in jQuery to select DOM elements from a DOM document. That document is, in most cases, the DOM document present in all browsers, but can also be a XML document received via AJAX.</p><p>The selectors are a composition of CSS and custom additions. XPath selectors are available as a plugin.</p><p>All selectors available in jQuery are documented on the <a href="/Selectors" title="Selectors">Selectors API page</a>.</p><p>There are lot of plugins that leverage jQuery\'s selectors in other ways. The validation plugin accepts a selector to specify a dependency, whether an input is required or not:</p><pre class="prettyprint lang-js"><code> emailrules: {\n   required: "#email:filled"\n }\n</code></pre><p>This would make a checkbox with name "emailrules" required only if the user entered an email address in the email field, selected via its id, filtered via a custom selector ":filled" that the validation plugin provides.</p><p>If Selector is specified as the type of an argument, it accepts everything that the jQuery constructor accepts, eg. Strings, Elements, Lists of Elements.</p>',
		'Event': '<p>jQuery\'s event system normalizes the event object according to W3C standards. The event object is guaranteed to be passed to the event handler (no checks for window.event required). It normalizes the target, relatedTarget, which, metaKey and pageX/Y properties and provides both stopPropagation() and preventDefault() methods.</p><p>Those properties are all documented, and accompanied by examples, on the <a href="http://docs.jquery.com/Events/jQuery.Event" title="Events/jQuery.Event">Event</a> page.</p>',
		'Element': '<p>An element in the Document Object Model (DOM) has attributes, text and children. It provides methods to traverse the parent and children and to get access to its attributes. Due to a lot of flaws in DOM API specifications and implementations, those methods are no fun to use. jQuery provides a wrapper around those elements to help interacting with the DOM. But often enough you will be working directly with DOM elements, or see methods that (also) accept DOM elements as arguments.</p><p>Whenever you use jQuery\'s each-method, the context of your callback is set to a DOM element. That is also the case for event handlers.</p><p>Some properties of DOM elements are quite consistent among browsers. Consider this example of a simple on-blur-validation:</p><pre class="prettyprint lang-js"><code>$(":text").blur(function() {\n  if(!this.value) {\n   alert("Please enter some text!");\n  }\n});</code></pre><p>You could replace this.value with $(this).val() to access the value of the text input via jQuery, but in that case you don\'t gain anything.</p>'
	};

	$('#widget-docs dd.option-type').each(function() {
		
		var html = $(this).text();
		var words = $.map(html.split(','), function(n) { return paramDescriptions[$.trim(n)] ? '<span>'+$.trim(n)+'</span>' : $.trim(n); });
		$(this).html(words.join(', '));
		
		$('span', this).click(function() {
			if(paramDescriptions[this.innerHTML]) $('<div>'+paramDescriptions[this.innerHTML]+'</div>').dialog({ open: function() { $(this).parent().attr('id', 'demo-dialog'); prettyPrint(); }, modal: true, title: this.innerHTML, width: 500 });
		});

	});


	$("#widget-docs").tabs();
	$("#widget-docs > div").addClass('clearfix'); //This fixes clearing of containers
	$("#widget-down").tabs();
	$("#widget-down > div").addClass('clearfix'); //This fixes clearing of containers

	//show details/hide details
	$("#options .options-list, #events .events-list").before('<div class="toggle-docs-links"><a class="toggle-docs-detail" href="#">Show details</a> | <a class="toggle-docs-example" href="#">Hide examples</a></div>');

	$("#methods .methods-list").before('<div class="toggle-docs-links"><a class="toggle-docs-detail" href="#">Show details</a></div>');

	var showExamples = true;
	$(".toggle-docs-detail").toggle(function(e){
		var details = $(this).text("Hide details")
			.parent().next("ul").find("li > div:first-child").addClass("header-open");
		$(this).parent().next("ul").find("li > div:first-child span").removeClass('ui-icon-triangle-1-e').addClass('ui-icon-triangle-1-s');
		if ( showExamples ) {
			details.nextAll().show();
		} else {
			details.next().show();
		}
		e.preventDefault();
	},function(e){
		$(this).parent().next("ul").find("li > div:first-child span").addClass('ui-icon-triangle-1-e').removeClass('ui-icon-triangle-1-s');
		$(this).text("Show details")
			.parent().next("ul").find("li > div:first-child").removeClass("header-open")
			.nextAll().hide();
		e.preventDefault();
	});

	$(".toggle-docs-example").click(function(e){
		if ( showExamples ) {
			showExamples = false;
			$(".toggle-docs-example").text("Show examples").parent().next("ul").find("div.header-open ~ .option-examples, div.header-open ~ .event-examples").hide();
		} else {
			showExamples = true;
			$(".toggle-docs-example").text("Hide examples").parent().next("ul").find("div.header-open ~ .option-examples, div.header-open ~ .event-examples").show();
		}
		e.preventDefault();
	});

	//Initially hide all options/methods/events
	$('div.option-description, div.option-examples, div.event-description, div.event-examples, div.method-description, div.method-examples').hide();
	
	//Make list items collapsible
	$('div.option-header h3, div.event-header h3, div.method-header h3').live('click', function() {
		var details = $(this).parent().toggleClass('header-open');
		$("span.ui-icon", $(this)).toggleClass('ui-icon-triangle-1-e').toggleClass('ui-icon-triangle-1-s');
		if ( showExamples ) {
			details.nextAll().toggle();
		} else {
			details.next().toggle();
		}
	});
	
	//Add icon to list items
	$('div.option-header h3, div.event-header h3, div.method-header h3').prepend('<div class="triangle-container"><span class="ui-icon ui-icon-triangle-1-e"></span></div>');

	// dialog to show in dialog dateplustimepicker
	$('#dialog').dialog({
		autoOpen: false,
		modal: true,
		title: 'Select date and time',
		width: '200',
		height: '80',
		show: 'clip',
		resizable: false
	});

	// accordion for demos
	$('#demos-accordion').accordion({
		autoHeight: false,
		clearStyle: true
	});

	// dateplustimepickers
	$('#simple-dateplustimepicker').dateplustimepicker();

	// in dialog dateplustimepicker and its buttons
	$('#displayDialog-button').button();
	$('#displayDialog-button').click(function() {
		$('#dialog').dialog('open');
		// prevent datepicker appearing opened because it gains focus
		$('#datetime').blur();
		setTimeout(function() {
			$.datepicker._hideDatepicker();
		}, 300);
	});

	$('#getDatetime-button').button();
	$('#getDatetime-button').click(function() {
		var date = $('#indialog-dateplustimepicker').dateplustimepicker('getDateTime');
		if (date!==null) {
			$('#datetime-display').html('<strong>Datetime: </strong><i>' + date.toString() + '</i>');
		}
		else {
			$('#datetime-display').html('Nothing selected yet. Open modal dialog and choose a datetime.');
		}
	});

	$('#getTime-button').button();
	$('#getTime-button').click(function() {
		var time = $('#indialog-dateplustimepicker').dateplustimepicker('getTime');
		if (time!==null) {
			$('#datetime-display').html('<strong>Time: </strong><i>' + time.formatTime('hh:mmtt') + '</i>');
		}
		else {
			$('#datetime-display').html('Nothing selected yet. Open modal dialog and choose a datetime.');
		}
	});

	$('#getDate-button').button();
	$('#getDate-button').click(function() {
		var date = $('#indialog-dateplustimepicker').dateplustimepicker('getDate');
		if (date!==null) {
			$('#datetime-display').html('<strong>Datetime: </strong><i>' + date.toString() + '</i>');
		}
		else {
			$('#datetime-display').html('Nothing selected yet. Open modal dialog and choose a datetime.');
		}
	});

	$('#indialog-dateplustimepicker').dateplustimepicker({
		timeFormat: 'hh:mmtt',
		altField: '#testAlt',
		altTimeFormat: 'h:m',
		defaultTime: 0,
		minTime: 0,
		maxTime: { hours: 24 },
		step: {	minutes: 15 },
		show: 'fold',
		showButtonPanel: true
	});
	
	// inline dateplustimepicker
	$('#inline-dateplustimepicker').dateplustimepicker({
		timeFormat: 'hh:mm:ss'
	});

	// dateplustimepicker with time limits
	$('#limit-dateplustimepicker').dateplustimepicker({
		minTime: { hours: 8, minutes: 30 },
		maxTime: { hours: 20 }
	});

	// dateplustimepicker with step
	$('#step-dateplustimepicker').dateplustimepicker({
		timeFormat: 'hh:mm:ss',
		minTime: { hours: 9 },
		maxTime: { hours: 15 },
		step: {	hours: 1, minutes: 5, seconds: 30 }
	});

	// dateplustimepicker in multimonth view
	$('#multimonth-dateplustimepicker').dateplustimepicker({
		numberOfMonths: 2 
	});

	// dateplustimepicker with grids
	$('#grid-dateplustimepicker').dateplustimepicker({
		hourGrid: 4,
		minuteGrid: 10,
		secondGrid: 10 
	});

	// dateplustimepicker different time formats
	$('#format-dateplustimepicker').dateplustimepicker();
	$('#format-switcher').change(function(){
		var format = $('option:selected', this).val();
		$('#format-dateplustimepicker').dateplustimepicker('option', 'timeFormat', format);
	});

	// dateplustimepicker - only time
	$('#timeonly-dateplustimepicker').dateplustimepicker({
		timeOnly: true
	});

	// dateplustimepicker with alternative field
	$('#withalt-dateplustimepicker').dateplustimepicker({
		altField: '#withalt-dateplustimepicker-altField',
		altFormat: 'D, dd M yy',
		altTimeFormat: 'hh:mm TT'
	});

	// dateplustimepicker with alternative field to display time
	$('#withAltTime-dateplustimepicker').dateplustimepicker({
		altTimeField: '#withAltTime-dateplustimepicker-alt',
		dateFormat: 'D, dd M yy',
		timeFormat: 'hh:mmTT'
	});

	//Make show source collapsible
	$('div.demo-source-wrapper div.demo-source').hide();
	$('div.demo-source-button a').click(function() {
		var text = $(this).text() === 'View Source' ? 'Hide Source' : 'View Source';
		$(this).text(text);
		$('.demo-source', $(this).parent().parent()).toggle();
	});

	//Make donate collapsible
	// $('#donate-button').hide();
	$('#donate-toggle a').click(function() {
		var text = $(this).text() === 'Donate' ? 'Hide Donate Button' : 'Donate';
		$(this).prev().toggleClass("ui-icon-triangle-1-e").toggleClass("ui-icon-triangle-1-s");
		$(this).text(text);
		$('#donate-toggle').nextAll().toggle();
	});

	//Load themeswitcher
    $('#theme-switcher').themeswitcher({loadTheme: 'Pepper Grinder'});

    // Simple Menu
	var currentMenu = "demos";
	$(".menu-content").hide();
	$("#dateplustimepicker-" + currentMenu).show();
	$(".menu-item").click(function() {
		if (currentMenu == $(this).html().toLowerCase()) return;
		$(".menu-item").removeClass("inview").addClass("outofview");
		$(this).addClass("inview").removeClass("outofview");
		$(".menu-content").hide();
		currentMenu = $(this).html().toLowerCase();
		$("#dateplustimepicker-" + currentMenu).show();
	});

	prettyPrint();

});