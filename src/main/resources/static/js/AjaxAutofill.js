$(document).ready(function(){
	$("#typeahead").on("keyup", function(){
		AjaxAutofill.getSuggestion()
	});
});

let AjaxAutofill = {
		
		callData: null,
	
		getSuggestion: function(){
			let input = $("#typeahead").val();
			AjaxAutofill.makeAjaxCall(input);
		},
		
		makeAjaxCall: function(input){
			let decoratedURL = "/country/" + input.toLowerCase();
			$.ajax({
				url: decoratedURL,
				success: function(data){
					console.log(data);
					AjaxAutofill.callData = data;
					AjaxAutofill.replaceTextArea(AjaxAutofill.objectToString(data));
					return data;
				},
				error: function(){
					console.log("FAILED!!!!!");
				}
			})
		},
		
		replaceTextArea: function(suggestion){
			$("#suggestionBox").text(suggestion + "");
		},
		objectToString: function(ajaxObject){
			let str = "";
			if(ajaxObject !== null && ajaxObject !== undefined){
				for(i=0; i<ajaxObject.length; i++){
					str = str + ajaxObject[i].nicename + "\n";
				}
			}
			return str;
		}
		
};

window.AjaxAutofill = AjaxAutofill;