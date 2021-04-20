$(document).ready(function(){
    $('#phoneNumber').on('keydown', function(e){
        PhoneNumberInputHandler.init(e, "up");
    });
    $('#phoneNumber').on('keydown', function(e){
    	PhoneNumberInputHandler.init(e, "down");
    });
    PhoneNumberInputHandler.initListenerOnSubmit();
})

let PhoneNumberInputHandler = {

    init: function(event, keystate){
        if(event !== undefined){
            switch(event.which){
                case(9): return; break;
                case(16): return; break;
                default: break;
            }
        }
        let inputField = $('#phoneNumber');
        let inputFieldValue = this.inputCleaner(inputField);
        if(keystate==="down"){
        	inputField.val(this.decoratorDOWN(inputFieldValue));
        }
        if(keystate==="up"){
        	inputField.val(this.decoratorUP(inputFieldValue));
        }
    },
    inputCleaner: function(inputField){
        return inputField.val().replace(/[^\d]/g, "");
    },
    decoratorDOWN: function(inputFieldValue){
        if(inputFieldValue.length < 4){
            return inputFieldValue;
        }

        if (inputFieldValue.length < 7) {
            return `(${inputFieldValue.slice(0, 3)}) ${inputFieldValue.slice(3)}`;
        }

        return `(${inputFieldValue.slice(0, 3)}) ${inputFieldValue.slice(3,6)}-${inputFieldValue.slice(6, 9)}`;

    },
    decoratorUP: function(inputFieldValue){
        if(inputFieldValue.length < 4){
            return inputFieldValue;
        }

        if (inputFieldValue.length < 7) {
            return `(${inputFieldValue.slice(0, 3)}) ${inputFieldValue.slice(3)}`;
        }

        return `(${inputFieldValue.slice(0, 3)}) ${inputFieldValue.slice(3,6)}-${inputFieldValue.slice(6, 10)}`;

    },
    initListenerOnSubmit: function() {
        let leftDiv = $('div.col-sm')[0];
        let leftButton = $(leftDiv).find('button');
        $(leftButton).on('click', function(){
            PhoneNumberInputHandler.submitAndShowText();
        });
    },
    submitAndShowText: function() {
        $('#modal-body-text').html($('#phoneNumber').val());
        let button = $('.btn-secondary')[0];
        $('#modal').on('shown.bs.modal', function () {
        	$(button).focus();
    	});
    }

}
window.PhoneNumberInputHandler = PhoneNumberInputHandler;