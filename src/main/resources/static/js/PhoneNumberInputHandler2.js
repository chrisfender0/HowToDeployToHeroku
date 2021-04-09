$(document).ready(function(){
    $('.phoneNumber2').each(function(){
        $(this).on('keyup', function(e){
            PhoneNumberInputHandler2.init(this, e);
        });
    });
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
            console.log("I SLICED HIM");
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
    }

}

window.PhoneNumberInputHandler2 = this.PhoneNumberInputHandler2;