function SelectAmountComponent() {
	this.min = 1;
	this.max = 100;
	this.value = this.min;
	this.input = $('input[name="selectAmount"]');
	this.control = $('.SelectAmount-control');

	this.init();
}

SelectAmountComponent.prototype = {
	selfsac: null,

	// init input
	init: function() {
		selfsac = this;

		// init default value
		selfsac.input.val(selfsac.value);
        
		selfsac.registerListeners();

	},

	// register events
	registerListeners: function() {


		selfsac.input.change(function(event) {
			selfsac.validateInput();
		});

		selfsac.control.click(function(event) {
			selfsac.updateInput($(this));
		});

	},

	// validate input after change event
	validateInput: function() {
		
		var resetValue = false;

		// check numeric value
		if ($.isNumeric(selfsac.input.val())) {

			// check for decimal number
			if (selfsac.input.val() % 1 != 0) {
				resetValue = true;
			} else {

				// check min / max value
				if ((selfsac.input.val() >= selfsac.min) && (selfsac.input.val() <= selfsac.max)) {
					// set new value
					selfsac.value = selfsac.input.val();
				} else {
					resetValue = true;
				}

			}

		} else {
			resetValue = true;
		}

		if (resetValue) {
			selfsac.input.val(selfsac.value);
		}
		
	},

	// increment / decrement input value after control press 
	updateInput: function(control) {

		// determine operation type
		if (control.hasClass('SelectAmount-control--plus')) {

			// max value check
			if (selfsac.value < selfsac.max) {
				selfsac.value++;
				selfsac.input.val(selfsac.value);
			}
			
		} else {

			// min value check
			if (selfsac.value > selfsac.min) {
				selfsac.value--;
				selfsac.input.val(selfsac.value);
			}

		}

	}

};

$(function(){
	new SelectAmountComponent();
});
