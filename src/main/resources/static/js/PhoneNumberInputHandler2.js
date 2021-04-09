$(document).ready(function(){
    $('.phoneNumber2').each(function(){
        $(this).on('keyup', function(e){
            PhoneNumberInputHandler2.init(this, e);
        });
    });
    PhoneNumberInputHandler2.initListenerOnSubmit();
});

let PhoneNumberInputHandler2 = {

    init: function(input, event){
        let MAXLENGTH = 3;
        if($(input).is(':last-child')){
            MAXLENGTH = 4;
        }
        $(input).val(this.inputCleaner(input));
        $(input).val(this.limitDigits(input, MAXLENGTH));
        this.eventHandler(MAXLENGTH, input, event);
    },

    inputCleaner: function(input){
        return $(input).val().replace(/[^\d]/g, "");
    },

    limitDigits: function(input, MAXLENGTH){
        let inputValue = $(input).val();
        if(inputValue.length > MAXLENGTH){
            return inputValue.slice(0, -1); 
        }
        return inputValue;
    },

    eventHandler: function(MAXLENGTH, input, event){
        let inputValue = $(input).val();
        switch(event.which){
            case(8):
                break;
            case(9):
                break;
            case(16):
            	break;
            case(37):
            	break;
            case(38):
            	break;
            case(39):
            	break;
            case(40):
            	break;
            default:
                if(inputValue.length === MAXLENGTH){
                    if($(input).next().length === 0){
                        $(input).parent().parent().find('button').focus()
                    }
                    $(input).next().focus();
                }
                break;
        }
    },
    initListenerOnSubmit: function() {
        let rightDiv = $('div.col-sm')[1];
        let rightButton = $(rightDiv).find('button');
        $(rightButton).on('click', function(){
            PhoneNumberInputHandler2.submitAndShowText();
            console.log('listener set');
        });
    },
    submitAndShowText: function() {
        let phoneNumber = "";
        $('.phoneNumber2').each(function(){
            phoneNumber = phoneNumber + $(this).val();
        });
        $('#modal-body-text').html(PhoneNumberInputHandler2.formatOutput(phoneNumber));
    },
    formatOutput: function(phoneNumber) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`
    }

}

window.PhoneNumberInputHandler2 = this.PhoneNumberInputHandler2;