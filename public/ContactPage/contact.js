//function to check if input field is blank
function isBlank(inputField) {
    //checks for empty checkbox
    if (inputField.type === "checkbox") {
	    if(inputField.checked){
	        return false;
        }
        else{
	        return true;
        }
    }
    //checks for empty input fields
    if (inputField.value === "" ) {
	    return true;
    }
    else{
        return false;
    }
}
//function to make the input fields red
function makeRed(inputDiv) {
    //input field set to red
   	inputDiv.style.backgroundColor = "#c80815";
}

//function to reset the input fields to normal
function makeClean(inputDiv){
    //text set to black
	inputDiv.parentNode.style.color = "#000000";
    //text field set to white	
    inputDiv.style.backgroundColor = "#FFFFFF";	

}


window.onload = function() {

    document.getElementById('message').addEventListener('keydown', function(e) {
        if (e.key == 'Tab') {
          e.preventDefault();
          var start = this.selectionStart;
          var end = this.selectionEnd;
      
          // set textarea value to: text before caret + tab + text after caret
          this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);
      
          // put caret at right position again
          this.selectionStart =
            this.selectionEnd = start + 1;
        }
      });

    var mainForm = document.getElementById("mainForm");
    mainForm.onsubmit = function(e){
        //error2 var needed for when first submission is invalid
        e.preventDefault();
        //but second submission is correct
        var error = false;
        var error2 = false;
        //initialize inputs variable from all inputs with class "required"
        var requiredInputs = document.querySelectorAll(".required");
        for (var i=0; i < requiredInputs.length; i++){
            error = false;
            console.log(requiredInputs[0].value + "   " + requiredInputs[1].value);
            //if blank input, prevent form submission
            //make input fields red and set error to true
            if(isBlank(requiredInputs[i])){
            e.preventDefault();
            makeRed(requiredInputs[i]);
            error = true;
            error2 = true;
            }
            //make input field normal if no error
            //usage when first case is error, but second is not
            if (error == false){
                makeClean(requiredInputs[i]);
            }   
        }
        if (error2 == false){
            //no input errors, should create a post/send me an email
            window.open('mailto:ryanr4@wit.edu?subject=' +requiredInputs[0].value +'&body=' + requiredInputs[1].value);
        }
    }
}