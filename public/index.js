// var images = new Array()
// function preload() {
//   for (i = 0; i < preload.arguments.length; i++) {
//     images[i] = new Image()
//     images[i].src = preload.arguments[i]
//   }
// }

window.onload = function () {

    // preload(
    //     "./Images/liam1.png",
    //     "./Images/liam2.JPG",
    //     "./Images/livyliam.JPG",
    //     "./Images/wyattmaddie.jpeg",
    //     "https://www.youtube.com/embed/olz4c-x_jvc",
    //     "https://www.youtube.com/embed/wae5ZGp-v3w",
    //     "https://www.youtube.com/embed/npn1Jncglu8",
    //     "./Images/busyquizzy.png",
    //     "./Images/headshot.jpeg",
    //     "./Images/codersplatform.png",
    //     "./Images/resum.png"
    //   );

    document.getElementById("homePage").style.display = "";
    document.getElementById("topNav").style.display = "none";
    // console.log("hey")

    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("projectPage").style.display = "none";
    document.getElementById("resumePage").style.display = "none";
    document.getElementById("laxPage").style.display = "none";

    document.getElementById('message').addEventListener('keydown', function (e) {
        if (e.key == 'Tab') {
            // e.preventDefault();
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
    var mainForm = document.getElementById("contact-form");
    mainForm.onsubmit = function (e) {
        //error2 var needed for when first submission is invalid
        e.preventDefault();
        //but second submission is correct
        var error = false;
        var error2 = false;
        //initialize inputs variable from all inputs with class "required"
        var requiredInputs = document.querySelectorAll(".required");
        for (var i = 0; i < requiredInputs.length; i++) {
            error = false;
            console.log(requiredInputs[0].value + "   " + requiredInputs[1].value);
            //if blank input, prevent form submission
            //make input fields red and set error to true
            if (isBlank(requiredInputs[i])) {
                e.preventDefault();
                makeRed(requiredInputs[i]);
                error = true;
                error2 = true;
            }
            //make input field normal if no error
            //usage when first case is error, but second is not
            if (error == false) {
                makeClean(requiredInputs[i]);
            }
        }
        if (error2 == false) {
            //no input errors, should create a post/send me an email
            // these IDs from the previous steps
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(function () {
                    document.getElementById("contact-form").reset();
                    alert('Email successfully sent!');
                }, function (error) {
                    alert('Failed to send email, please try again!');
                    console.log('FAILED...', error);
                });
        }
    }
    //style the feed

}

/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- TOGGLE HAMBURGER MENU -------------------///////////////
///////////////////////////////////////////////////////////////////////////////////// 
// TOGGLE BETWEEN HIDDEN/SHOWN STATE
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function loadHomePage() {
    document.getElementById("homePage").style.display = "";
    document.getElementById("topNav").style.display = "none";

    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("projectPage").style.display = "none";
    document.getElementById("resumePage").style.display = "none";
    document.getElementById("laxPage").style.display = "none";
}
function loadAboutPage() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("topNav").style.display = "";

    document.getElementById("aboutPage").style.display = "";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("projectPage").style.display = "none";
    document.getElementById("resumePage").style.display = "none";
    document.getElementById("laxPage").style.display = "none";
}
function loadContactPage() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("topNav").style.display = "";

    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("contactPage").style.display = "";
    document.getElementById("projectPage").style.display = "none";
    document.getElementById("resumePage").style.display = "none";
    document.getElementById("laxPage").style.display = "none";
}
function loadProjectPage() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("topNav").style.display = "";

    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("projectPage").style.display = "";
    document.getElementById("resumePage").style.display = "none";
    document.getElementById("laxPage").style.display = "none";
}
function loadResumePage() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("topNav").style.display = "";

    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("projectPage").style.display = "none";
    document.getElementById("resumePage").style.display = "";
    document.getElementById("laxPage").style.display = "none";
}
function loadLaxPage() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("topNav").style.display = "";

    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("projectPage").style.display = "none";
    document.getElementById("resumePage").style.display = "none";
    document.getElementById("laxPage").style.display = "";
}



//function to check if input field is blank
function isBlank(inputField) {
    //checks for empty checkbox
    if (inputField.type === "checkbox") {
        if (inputField.checked) {
            return false;
        }
        else {
            return true;
        }
    }
    //checks for empty input fields
    if (inputField.value === "") {
        return true;
    }
    else {
        return false;
    }
}
//function to make the input fields red
function makeRed(inputDiv) {
    //input field set to red
    inputDiv.style.backgroundColor = "#c80815";
}

//function to reset the input fields to normal
function makeClean(inputDiv) {
    //text set to black
    inputDiv.parentNode.style.color = "#000000";
    //text field set to white	
    inputDiv.style.backgroundColor = "#FFFFFF";

}