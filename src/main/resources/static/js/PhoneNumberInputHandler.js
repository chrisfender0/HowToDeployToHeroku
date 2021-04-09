$(document).ready(function(){
    $('#phoneNumber').on('keydown', function(e){
        PhoneNumberInputHandler.init(e);
    });
})

let PhoneNumberInputHandler = {

    init: function(event){
        if(event !== undefined){
            switch(event.which){
                case(9): return; break;
                case(16): return; break;
                default: break;
            }
        }
        let inputField = $('#phoneNumber');
        let inputFieldValue = this.inputCleaner(inputField);
        inputField.val(this.decorator(inputFieldValue));
    },
    inputCleaner: function(inputField){
        return inputField.val().replace(/[^\d]/g, "");
    },
    decorator: function(inputFieldValue){
        if(inputFieldValue.length < 4){
            return inputFieldValue;
        }

        if (inputFieldValue.length < 7) {
            return `(${inputFieldValue.slice(0, 3)}) ${inputFieldValue.slice(3)}`;
        }

        return `(${inputFieldValue.slice(0, 3)}) ${inputFieldValue.slice(3,6)}-${inputFieldValue.slice(6, 9)}`;

    }

}
window.PhoneNumberInputHandler = PhoneNumberInputHandler;