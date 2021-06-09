var firebaseConfig = {
    apiKey: "AIzaSyAXKfv_fm_ok-EzL7yJ93ji6tQNYj4RsB4",
    authDomain: "randyproject-39d05.firebaseapp.com",
    projectId: "randyproject-39d05",
    storageBucket: "randyproject-39d05.appspot.com",
    messagingSenderId: "582693121677",
    appId: "1:582693121677:web:e73777c4ede5d57245fcc4",
    measurementId: "G-008R743CMB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
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


window.onload = function () {
    var mainForm = document.getElementById("contact-form");
    mainForm.onsubmit = function (e) {
        // error2 var needed for when first submission is invalid
        e.preventDefault();
        // but second submission is correct
        var error = false;
        var error2 = false;
        // initialize inputs variable from all inputs with class "required"
        var requiredInputs = document.querySelectorAll(".required");
        for (var i = 0; i < requiredInputs.length; i++) {
            error = false;
            // if blank input, prevent form submission
            // make input fields red and set error to true
            if (isBlank(requiredInputs[i])) {
                e.preventDefault();
                makeRed(requiredInputs[i]);
                error = true;
                error2 = true;
            }
            // make input field normal if no error
            // usage when first case is error, but second is not
            if (error == false) {
                makeClean(requiredInputs[i]);
            }
        }
        if (error2 == false) {
            // no input errors, should then log into account through firebase
            var email = requiredInputs[0].value;
            var password = requiredInputs[1].value;
            firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
                //get current user and display the username
                var fuser = firebase.auth().currentUser;
                alert("Welcome " + fuser.displayName);
                //route to tracking page
                window.location.href = "../TrackingPage/tracking.html?userID=" + fuser.uid + "&username=" + fuser.displayName;
            }).catch(err => {
                alert(err.message);
            });
        }

    }
}