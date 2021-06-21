
// link firebase with this config var
var firebaseConfig = {
    apiKey: "AIzaSyAXKfv_fm_ok-EzL7yJ93ji6tQNYj4RsB4",
    authDomain: "randyproject-39d05.firebaseapp.com",
    projectId: "randyproject-39d05",
    storageBucket: "randyproject-39d05.appspot.com",
    messagingSenderId: "582693121677",
    appId: "1:582693121677:web:e73777c4ede5d57245fcc4",
    measurementId: "G-008R743CMB"
};
firebase.initializeApp(firebaseConfig);
// initialize 'global' var for database
const db = firebase.firestore();
var storage = firebase.storage().ref();


// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure


// set other 'global' vars
var currDate;
var currMonth;
var currTime;
var userID;
var username;
var email;
var myPhoneNumber;
var profPic;

var proteinTotal = 0;
var carbTotal = 0;
var vitaminTotal = 0;
var energyTotal = 0;
var waterTotal = 0;
var caffeineTotal = 0;
var potassiumTotal = 0;
var calciumTotal = 0;
var b12Total = 0;
var b6Total = 0;
var riboTotal = 0;
var sodiumTotal = 0;
var ironTotal = 0;
var fiberTotal = 0;
var sugarTotal = 0;
var transTotal = 0;
var polyTotal = 0;
var monoTotal = 0;
var cholTotal = 0;
var lipidFatTotal = 0;

var proteinTotalDaily = 0;
var carbTotalDaily = 0;
var vitaminTotalDaily = 0;
var energyTotalDaily = 0;
var waterTotalDaily = 0;
var caffeineTotalDaily = 0;
var potassiumTotalDaily = 0;
var calciumTotalDaily = 0;
var b12TotalDaily = 0;
var b6TotalDaily = 0;
var riboTotalDaily = 0;
var sodiumTotalDaily = 0;
var ironTotalDaily = 0;
var fiberTotalDaily = 0;
var sugarTotalDaily = 0;
var transTotalDaily = 0;
var polyTotalDaily = 0;
var monoTotalDaily = 0;
var cholTotalDaily = 0;
var lipidFatTotalDaily = 0;

var root = document.documentElement;
const lists = document.querySelectorAll('.hs');

lists.forEach(el => {
    const listItems = el.querySelectorAll('li');
    const n = el.children.length;
    el.style.setProperty('--total', n);
});



/********************************************************************/

/********************************************************************/
/*********************** LOAD FEED FUNCTIONS ************************/
/********************************************************************/

/********************************************************************/


/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- WINDOW ONLOAD FUNCTION ----------------/////////////////
///////////////////////////////////////////////////////////////////////////////////// 
// GET/SET TODAYS DATE, STYLE CALENDAR/FEED, SET GLOBAL VARS, CLEAR/LOAD FEED 
window.onload = function () {


    proteinTotal = 0;
    carbTotal = 0;
    vitaminTotal = 0;
    energyTotal = 0;
    waterTotal = 0;
    caffeineTotal = 0;
    potassiumTotal = 0;
    calciumTotal = 0;
    b12Total = 0;
    b6Total = 0;
    riboTotal = 0;
    sodiumTotal = 0;
    ironTotal = 0;
    fiberTotal = 0;
    sugarTotal = 0;
    transTotal = 0;
    polyTotal = 0;
    monoTotal = 0;
    cholTotal = 0;
    lipidFatTotal = 0;

    proteinTotalDaily = 0;
    carbTotalDaily = 0;
    vitaminTotalDaily = 0;
    energyTotalDaily = 0;
    waterTotalDaily = 0;
    caffeineTotalDaily = 0;
    potassiumTotalDaily = 0;
    calciumTotalDaily = 0;
    b12TotalDaily = 0;
    b6TotalDaily = 0;
    riboTotalDaily = 0;
    sodiumTotalDaily = 0;
    ironTotalDaily = 0;
    fiberTotalDaily = 0;
    sugarTotalDaily = 0;
    transTotalDaily = 0;
    polyTotalDaily = 0;
    monoTotalDaily = 0;
    cholTotalDaily = 0;
    lipidFatTotalDaily = 0;

    var s = getDateAndMonth();
    var day = s.substring(0, 2);
    var month = s.substring(3, 5);


    // statements to set month var
    if (month == '01') {
        month = "January";
    }
    else if (month == '02') {
        month = "February";
    }
    else if (month == '03') {
        month = "March";
    }
    else if (month == '04') {
        month = "April";
    }
    else if (month == '05') {
        month = "May";
    }
    else if (month == '06') {
        month = "June";
    }
    else if (month == '07') {
        month = "July";
    }
    else if (month == '08') {
        month = "August";
    }
    else if (month == '09') {
        month = "September";
    }
    else if (month == '10') {
        month = "October";
    }
    else if (month == '11') {
        month = "November";
    }
    else if (month == '12') {
        month = "December";
    }

    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            userID = user.uid;
            username = user.displayName;
            email = user.email;
            profPic = user.photoURL;
            // myPhoneNumber = user.phoneNumber;
            db.collection("users").where("userID", "==", userID).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    myPhoneNumber = doc.data().phoneNumber;
                    // profPic = doc.data().phoneNumber;
                    console.log(myPhoneNumber);
                    console.log(doc.data().profPic)
                    document.getElementById("accountProfPicIcon").style.display = "";
                    storage.child(doc.data().profPic).getDownloadURL().then((url) => {
                        console.log(url);

                        var img = document.getElementById('accountProfPicIcon');
                        //  var img = document.getElementById('accountProfPicIcon');
                        img.setAttribute('src', url);
                        document.getElementById('profPicDiv').style.display = 'unset';
                    })
                })
            });
            // console.log(userID);
            // db.collection("users").where("userID", "==", userID).get().then(doc) => {


            // });


            console.log("signed in: " + userID + " username: " + username + " email:" + email);
            console.log(profPic);

            // user.phoneNumber
            // user.photoURL
            // user.emailVerified
            // user.email
            // ...
            // initialize and set vars
            // style username display title

            document.getElementById("notLoginRegister").style.display = "";

            // clear the feed
            clearChildren();
            // load the feed
            // loadFeed(day, month);
            loadMyPublicPage();

        } else {
            // User is signed out
            // ...
            //   alert("No user is logged in")
            document.getElementById("notLoginRegister").style.display = "";

            console.log("signed Out");

            userSignedOut();

        }
    });


    var mainForm1 = document.getElementById("register-form");
    mainForm1.onsubmit = function (e) {
        // error2 var needed for when first submission is invalid
        e.preventDefault();
        // but second submission is correct
        var error = false;
        var error2 = false;
        // initialize inputs variable from all inputs with class "required"
        var requiredInputs = document.querySelectorAll(".required5");
        for (var i = 0; i < requiredInputs.length; i++) {
            error = false;
            console.log(requiredInputs.length);
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
            // no input errors, should then create an account through firebase
            // set variables from front end user input values
            var uName = requiredInputs[0].value;
            email = requiredInputs[1].value;
            console.log(uName);

            // create firebase account with email/password
            // this logic may be a little buggy and route to account page before creating the document in the firestore database
            firebase.auth().createUserWithEmailAndPassword(email, requiredInputs[2].value)
                .then((res) => {
                    var user = firebase.auth().currentUser;
                    // set current user id 
                    userId = firebase.auth().currentUser.uid;
                    // create a new document in firestore database with the following fields

                    // update this users display name with the inputted username
                    user.updateProfile({
                        displayName: uName,
                    })
                        .then(function () {
                            // route to home page and set the url params respectivly
                            db.collection("users").doc(userId).set({
                                username: user.displayName,
                                email: email,
                                userID: userId,
                                phoneNumber: "undefined",
                                profPic: "Randall.webp"
                            }).then(function () {
                                alert('Account successfully created and added to database! Welcome ' + user.displayName);
                                window.location.href = './tracking.html';
                                // window.location.href = "../TrackingPage/tracking.html?userID=" + userId + "&username=" + username + "&email=" + email;
                            }).catch(function (error) {
                                // An error happened.
                                alert(error);
                            });
                        })
                }).catch(function (error) {
                    // An error happened.
                    alert(error);
                });;
        }

    }
    var mainForm = document.getElementById("login-form");
    mainForm.onsubmit = function (e) {
        // error2 var needed for when first submission is invalid
        e.preventDefault();
        // but second submission is correct
        var error = false;
        var error2 = false;
        // initialize inputs variable from all inputs with class "required"
        var requiredInputs = document.querySelectorAll(".required6");
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
                window.location.href = './tracking.html';
                // window.location.href = "../TrackingPage/tracking.html?userID=" + fuser.uid + "&username=" + fuser.displayName + "&email=" + email;
            }).catch(err => {
                alert(err.message);
            });
        }
    }
    // document.getElementById("recentFoodsFeed").style.display = '';

    // // set 'global' vars
    // userID = getURLParameter("userID");
    // username = getURLParameter("username");
    // email = getURLParameter("username");

    // const user = firebase.auth().currentUser;

    // document.getElementById("ex56").innerHTML = "EX";
    // document.getElementById("food56").innerHTML= "FOOD";
    // document.getElementById("task56").innerHTML = "TASK";
    // format day var 
    // set month title and todays date on load
    document.getElementById("monthTitle").innerHTML = "" + month;
    // hide empty feed title
    document.getElementById("filler1").style.display = "none";
    // style the active date on calendar
    document.getElementById("days" + month).style.display = "";
    document.getElementById('id' + day + month).className = "active";
    // set global date/month vars
    currDate = day;
    currMonth = month;
    // style date title respectivly
    document.getElementById("todaysDate").innerHTML = currMonth + " / " + currDate;
    document.getElementById("historyFeed").style.display = "none";
    document.getElementById("historyTitle").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- ON CALENDAR DAY CLICK ------------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// SET GLOBAL DATE/MONTH VARS, STYLE CALENDAR/FEED, LOAD THIS DATES FEED 
function openDay(date, month) {
    // properly reformat date var with leading 0


    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            document.getElementById("notLoginRegister").style.display = "";
            document.getElementById("loginPage").style.display = "none";
            document.getElementById("registerPage").style.display = "none";


            var d = "" + date;
            if (d.length < 2) {
                d = "0" + d;
            }

            // set (reset) global date/month vars
            currDate = d;
            currMonth = setMonth(month);

            // clear the feed
            clearChildren();

            // load this dates feed
            loadFeed(date, month);

            // style calendar: 
            // remove the current active class & set the new active date
            var active = document.getElementsByClassName("active");
            if (active[0] != null) {
                active[0].className = "";
            }
            document.getElementById('id' + d + month).className = "active";

            // style feed: 
            // make date title visible & set content
            document.getElementById("todaysDate").style.display = "";
            document.getElementById("todaysDate").innerHTML = currMonth + " / " + currDate;

            // make add entry buttons visible
            document.getElementById("taskIcon").style.display = "";
            document.getElementById("taskIconLabel").style.display = "";
            document.getElementById("exerciseIcon").style.display = "";
            document.getElementById("exerciseIconLabel").style.display = "";
            document.getElementById("foodIcon").style.display = "";
            document.getElementById("foodIconLabel").style.display = "";



            // hide empty feed title element (filler1 = empty feed title)
            document.getElementById("filler1").style.display = "none";
        } else {
            // User is signed out
            // ...
            //   alert("No user is logged in")
            document.getElementById("notLoginRegister").style.display = "";

            console.log("signed Out");

            userSignedOut();
            var active = document.getElementsByClassName("active");
            if (active[0] != null) {
                active[0].className = "";
            }


        }
    });

}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- NEXT MONTH CLICK FUNCTION -------------/////////////////
/////////////////////////////////////////////////////////////////////////////////////
// STYLE CALENDAR/FEED (NO DATE SELECTION) 
function nextMonth(currMonth) {


    // clear the feed
    clearChildren();
    var active = document.getElementsByClassName("active");
    if (active[0] != null) {
        active[0].className = "";
    }

    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            // show empty feed title 
            document.getElementById("filler1").style.display = "";
        } else {

            userSignedOut();


        }
    });
    // hide date title, add post buttons
    document.getElementById("todaysDate").style.display = "none";


    document.getElementById("taskIcon").style.display = "none";
    document.getElementById("taskIconLabel").style.display = "none";
    document.getElementById("exerciseIcon").style.display = "none";
    document.getElementById("exerciseIconLabel").style.display = "none";
    document.getElementById("foodIcon").style.display = "none";
    document.getElementById("foodIconLabel").style.display = "none";

    // document.getElementById("favoritesDivID").style.display = "none";

    // statements to set & style the respective month displays on calendar
    if (currMonth == "December") {
        document.getElementById("monthTitle").innerHTML = "January";
        document.getElementById("daysJanuary").style.display = "";
        document.getElementById("daysDecember").style.display = "none";
    }
    if (currMonth == "November") {
        document.getElementById("monthTitle").innerHTML = "December";
        document.getElementById("daysDecember").style.display = "";
        document.getElementById("daysNovember").style.display = "none";
    }
    if (currMonth == "October") {
        document.getElementById("monthTitle").innerHTML = "November";
        document.getElementById("daysNovember").style.display = "";
        document.getElementById("daysOctober").style.display = "none";
    }
    if (currMonth == "September") {
        document.getElementById("monthTitle").innerHTML = "October";
        document.getElementById("daysOctober").style.display = "";
        document.getElementById("daysSeptember").style.display = "none";
    }
    if (currMonth == "August") {
        document.getElementById("monthTitle").innerHTML = "September";
        document.getElementById("daysSeptember").style.display = "";
        document.getElementById("daysAugust").style.display = "none";
    }
    if (currMonth == "July") {
        document.getElementById("monthTitle").innerHTML = "August";
        document.getElementById("daysAugust").style.display = "";
        document.getElementById("daysJuly").style.display = "none";
    }
    if (currMonth == "June") {
        document.getElementById("monthTitle").innerHTML = "July";
        document.getElementById("daysJuly").style.display = "";
        document.getElementById("daysJune").style.display = "none";
    }
    if (currMonth == "May") {
        document.getElementById("monthTitle").innerHTML = "June";
        document.getElementById("daysJune").style.display = "";
        document.getElementById("daysMay").style.display = "none";
    }
    if (currMonth == "April") {
        document.getElementById("monthTitle").innerHTML = "May";
        document.getElementById("daysMay").style.display = "";
        document.getElementById("daysApril").style.display = "none";
    }
    if (currMonth == "March") {
        document.getElementById("monthTitle").innerHTML = "April";
        document.getElementById("daysApril").style.display = "";
        document.getElementById("daysMarch").style.display = "none";
    }
    if (currMonth == "February") {
        document.getElementById("monthTitle").innerHTML = "March";
        document.getElementById("daysMarch").style.display = "";
        document.getElementById("daysFebruary").style.display = "none";
    }
    if (currMonth == "January") {
        document.getElementById("monthTitle").innerHTML = "February";
        document.getElementById("daysFebruary").style.display = "";
        document.getElementById("daysJanuary").style.display = "none";
    }
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- PREV MONTH CLICK FUNCTION --------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// STYLE CALENDAR/FEED (NO DATE SELECTION) 
function prevMonth(currMonth) {
    // clear the feed
    clearChildren();

    // show empty feed title 
    document.getElementById("filler1").style.display = "";

    var active = document.getElementsByClassName("active");
    if (active[0] != null) {
        active[0].className = "";
    }

    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            // show empty feed title 
            document.getElementById("filler1").style.display = "";
        } else {

            userSignedOut();


        }
    });
    // hide date title, add post buttons
    document.getElementById("todaysDate").style.display = "none";

    document.getElementById("taskIcon").style.display = "none";
    document.getElementById("taskIconLabel").style.display = "none";
    document.getElementById("exerciseIcon").style.display = "none";
    document.getElementById("exerciseIconLabel").style.display = "none";
    document.getElementById("foodIcon").style.display = "none";
    document.getElementById("foodIconLabel").style.display = "none";

    // document.getElementById("favoritesDivID").style.display = "none";


    // clear the current active date on calendar
    var active = document.getElementsByClassName("active");
    if (active[0] != null) {
        active[0].className = "";
    }

    // statements to set & style the respective month displays on calendar
    if (currMonth == "January") {
        document.getElementById("monthTitle").innerHTML = "December";
        document.getElementById("daysDecember").style.display = "";
        document.getElementById("daysJanuary").style.display = "none";
    }
    if (currMonth == "February") {
        document.getElementById("monthTitle").innerHTML = "January";
        document.getElementById("daysJanuary").style.display = "";
        document.getElementById("daysFebruary").style.display = "none";
    }
    if (currMonth == "March") {
        document.getElementById("monthTitle").innerHTML = "February";
        document.getElementById("daysFebruary").style.display = "";
        document.getElementById("daysMarch").style.display = "none";
    }
    if (currMonth == "April") {
        document.getElementById("monthTitle").innerHTML = "March";
        document.getElementById("daysMarch").style.display = "";
        document.getElementById("daysApril").style.display = "none";
    }
    if (currMonth == "May") {
        document.getElementById("monthTitle").innerHTML = "April";
        document.getElementById("daysApril").style.display = "";
        document.getElementById("daysMay").style.display = "none";
    }
    if (currMonth == "June") {
        document.getElementById("monthTitle").innerHTML = "May";
        document.getElementById("daysMay").style.display = "";
        document.getElementById("daysJune").style.display = "none";
    }
    if (currMonth == "July") {
        document.getElementById("monthTitle").innerHTML = "June";
        document.getElementById("daysJune").style.display = "";
        document.getElementById("daysJuly").style.display = "none";
    }
    if (currMonth == "August") {
        document.getElementById("monthTitle").innerHTML = "July";
        document.getElementById("daysJuly").style.display = "";
        document.getElementById("daysAugust").style.display = "none";
    }
    if (currMonth == "September") {
        document.getElementById("monthTitle").innerHTML = "August";
        document.getElementById("daysAugust").style.display = "";
        document.getElementById("daysSeptember").style.display = "none";
    }
    if (currMonth == "October") {
        document.getElementById("monthTitle").innerHTML = "September";
        document.getElementById("daysSeptember").style.display = "";
        document.getElementById("daysOctober").style.display = "none";
    }
    if (currMonth == "November") {
        document.getElementById("monthTitle").innerHTML = "October";
        document.getElementById("daysOctober").style.display = "";
        document.getElementById("daysNovember").style.display = "none";
    }
    if (currMonth == "December") {
        document.getElementById("monthTitle").innerHTML = "November";
        document.getElementById("daysNovember").style.display = "";
        document.getElementById("daysDecember").style.display = "none";
    }
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CLEAR THE CURRENT FEED -----------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// REMOVE ALL CHILD NODES FROM ALL FEEDS (FEED, EXERCISE, FOOD)
//TO DO SPLIT THIS INTO STYLING/SHOWING INSTEAD OF CLEARING CHILDREN
function clearChildren() {
    // clear HTML/TEXT content of all feeds

    document.getElementById('feed').textContent = '';
    document.getElementById('feed').innerHTML = '';
    document.getElementById('exFeed').textContent = '';
    document.getElementById('exFeed').innerHTML = '';
    document.getElementById('foodFeed').textContent = '';
    document.getElementById('foodFeed').innerHTML = '';
    document.getElementById("publicFeed").style.display = "none";
    document.getElementById("commentFeed").style.display = "none";
    document.getElementById("accountPFeed").style.display = "none";
    // document.getElementById("addFavButtonsDiv").style.display = "none";
    document.getElementById("publicPostDivID").style.display = "none";
    document.getElementById("historyTotalFeed").style.display = "none";
    document.getElementById("accountProfPicIcon").style.display = "none";


    // document.getElementById("publicPostIcon").style.display = "none";
    // document.getElementById("postLabel").style.display = "none";



    // document.getElementById("chartContainer").style.display = "none";
    // document.getElementById("chartContainer2").style.display = "none";
    // document.getElementById("chartContainer3").style.display = "none";

    document.getElementById("exFeedTitle").style.display = "none";
    document.getElementById("taskFeedTitle").style.display = "none";
    document.getElementById("foodFeedTitle").style.display = "none";
    document.getElementById("exFeed").style.display = "none";
    document.getElementById("taskFeed").style.display = "none";
    document.getElementById("foodFeed").style.display = "none";
    // document.getElementById("favFeed").style.display = "none";
    document.getElementById("taskIcon").style.display = "none";
    document.getElementById("taskIconLabel").style.display = "none";
    document.getElementById("exerciseIcon").style.display = "none";
    document.getElementById("exerciseIconLabel").style.display = "none";
    document.getElementById("foodIcon").style.display = "none";
    document.getElementById("foodIconLabel").style.display = "none";

    document.getElementById("totalFeed").style.display = "none";
    document.getElementById("totalFeed2").style.display = "none";

    document.getElementById("reccomendedFeed").style.display = "none";
    document.getElementById("idealNutritionValuesFeed").style.display = "none";
    document.getElementById("nutritionValues").style.display = "none";
    document.getElementById("apiInfo").style.display = "none";
    // document.getElementById("apiInfo2").style.display = "none";
    document.getElementById("dRecco").style.display = "none";
    document.getElementById("nutritionLoadButton").style.display = "none";

    // document.getElementById("totalFeed2").style.display = "none";





    // document.getElementById("favFeedTitle").style.display = "none";



    // remove child nodes of feed
    var el = document.getElementById('feed');
    while (el.firstChild) el.innerHTML = '';

    // remove child nodes of exercise feed
    var el1 = document.getElementById('exFeed');
    while (el1.firstChild) el1.innerHTML = '';

    // remove child nodes of food feed
    var el2 = document.getElementById('foodFeed');
    while (el2.firstChild) el2.innerHTML = '';

    // remove child nodes of task feed
    var el2 = document.getElementById('taskFeed');
    while (el2.firstChild) el2.innerHTML = '';

    var el2 = document.getElementById('foodGridFeed');
    while (el2.firstChild) el2.innerHTML = '';

    var el2 = document.getElementById('exerciseGridFeed');
    while (el2.firstChild) el2.innerHTML = '';

    var el2 = document.getElementById('taskGridFeed');
    while (el2.firstChild) el2.innerHTML = '';


    var el2 = document.getElementById('historyFeed1');
    while (el2.firstChild) el2.innerHTML = '';


    var el2 = document.getElementById('publicPostFeed');
    while (el2.firstChild) el2.innerHTML = '';
    var el2 = document.getElementById('commentPostFeed');
    while (el2.firstChild) el2.innerHTML = '';
    var el2 = document.getElementById('accountPostFeed');
    while (el2.firstChild) el2.innerHTML = '';

    // var el2 = document.getElementById('recentFoodsFeed');
    // while (el2.firstChild) el2.innerHTML = '';


    var el2 = document.getElementById('nutritionValuesFeedWeek');
    while (el2.firstChild) el2.innerHTML = '';
    var el2 = document.getElementById('nutritionValuesFeedDaily');
    while (el2.firstChild) el2.innerHTML = '';

    var el2 = document.getElementById('weekNutrientFeed');
    while (el2.firstChild) el2.innerHTML = '';
    var el2 = document.getElementById('todayNutrientFeed');
    while (el2.firstChild) el2.innerHTML = '';


    //   // remove child nodes of task feed
    //   var el2 = document.getElementById('fullFavFeed');
    //   while (el2.firstChild) el2.innerHTML = '';



    //TODO//
    // add taskFeed check

}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW TASK ELEMENT -----------//////////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW EXERCISE, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO EX FEED
function createNewTask(ttl, desc, t, id) {
    //TODO//
    // needs a hover attribute


    //TODO//
    // furthis this style implementation

    //format a string to set element html
    var fullString = "<br>";
    if (ttl != "") {
        fullString = fullString + "Title:<br>" + ttl + "<br><br>";
    }
    if (desc != "") {
        fullString = fullString + "Description:<br>" + desc + "<br><br>";
    }
    if (t != "") {
        fullString = fullString + "Time:<br>" + t + "<br><br>";
    }

    fullString = fullString + "</label>";

    // initialize new task div: set id & class name
    var newTask = document.createElement('div');
    newTask.id = "taskID";
    newTask.className = "testtt";
    newTask.innerHTML = fullString;
    var addEditElement = document.createElement('div');
    addEditElement.innerHTML = "<div onclick = '" + 'editThisTask("' + ttl + "^^^" + desc + "^^^" + t + "^^^" + id + '")' + "' class = 'buttonEditFeed'>EDIT</div>";
    // newTask.appendChild(addEditElement);
    // load new exercise div into the exercise feed
    document.getElementById("taskFeed").appendChild(newTask).appendChild(addEditElement);
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW FAV TASK ELEMENT -----------//////////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW EXERCISE, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO EX FEED
function createNewFavTask(ttl, desc, t, id) {
    //TODO//
    // needs a hover attribute

    // initialize new task div: set id & class name
    var newTask = document.createElement('div');
    var addEditElement = document.createElement('div');
    var addFavoriteElement = document.createElement('div');

    var newTask = document.createElement('li');


    // create the new task div and set HTML content w/ respective vars
    addEditElement.innerHTML = "<div onclick = '" + 'editThisTaskFav("' + ttl + "^^^" + desc + "^^^" + t + "^^^" + id + '")' + "' class = 'favButtonEdit'>EDIT</div>";

    addFavoriteElement.innerHTML = "<div onclick = '" + 'addFavTaskToDB("' + ttl + "," + desc + "," + t + '")' + "' class = 'favButtonAdd'>ADD</div>";
    newTask.appendChild(addFavoriteElement).appendChild(addEditElement);
    addEditElement.id = "editID"
    addFavoriteElement.id = "favoriteID"
    newTask.id = "favIDTask";
    newTask.className = "testtt";

    //TODO//
    // furthis this style implementation

    //format a string to set element html
    if (ttl != "") {
        newTask.innerHTML += "Title:<br>" + ttl + "<br><br>";
    }
    if (desc != "") {
        newTask.innerHTML += "Description:<br>" + desc + "<br><br>";

    }
    if (t != "") {
        newTask.innerHTML += "Time:<br>" + t + "<br><br>";
    }

    // load new exercise div into the exercise feed
    document.getElementById("taskGridFeed").appendChild(newTask)


}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW EXERCISE ELEMENT -----------//////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW EXERCISE, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO EX FEED
function createNewExercise(r, s, w, t, m, id) {
    //TODO//
    // needs a hover attribute



    //format a string to set element html
    var fullString = "<br>";
    if (m != "") {
        fullString = fullString + "Workout:<br>" + m + "<br><br>";
    }
    if (r != "") {
        fullString = fullString + "Reps:<br>" + r + "<br><br>";
    }
    if (s != "") {
        fullString = fullString + "Sets:<br>" + s + "<br><br>";
    }
    if (w != "") {
        fullString = fullString + "Weight:<br>" + w + "<br><br>";
    }
    if (t != "") {
        fullString = fullString + "Time:<br>" + t + "<br><br>";
    }

    fullString = fullString + "</label>";

    //TODO//
    // add a check for empty params and setting the following HTML

    // create the new exercise div and set HTML content w/ respective vars
    // initialize new exercise div: set id & class name
    var newExercise = document.createElement('div');
    newExercise.id = "exerciseID";
    newExercise.className = "testtt";
    newExercise.innerHTML = fullString;
    var addEditElement = document.createElement('div');
    addEditElement.innerHTML = "<div onclick = '" + 'editThisExercise("' + m + "^^^" + r + "^^^" + s + "^^^" + w + "^^^" + t + "^^^" + + id + '")' + "' class = 'buttonEditFeed'>EDIT</div>";

    // load new exercise div into the exercise feed
    document.getElementById("exFeed").appendChild(newExercise).appendChild(addEditElement);
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW FAV EXERCISE ELEMENT -----------//////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW EXERCISE, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO EX FEED
function createNewFavExercise(r, s, w, t, m, id) {
    //TODO//
    // needs a hover attribute

    // initialize new exercise div: set id & class name
    var newExercise = document.createElement('li');
    var addEditElement = document.createElement('div');
    var addFavoriteElement = document.createElement('div');
    newExercise.id = "favIDEx";
    newExercise.className = "testtt";
    // create the new exercise div and set HTML content w/ respective vars
    addEditElement.innerHTML = "<div onclick = '" + 'editThisExerciseFav("' + m + "^^^" + r + "^^^" + s + "^^^" + w + "^^^" + t + "^^^" + + id + '")' + "'  class = 'favButtonEdit'>EDIT</div>";
    addFavoriteElement.innerHTML = "<div onclick = '" + 'addFavExerciseToDB("' + m + "," + r + "," + s + "," + w + "," + t + '")' + "'  class = 'favButtonAdd'>ADD</div>";
    // load new exercise div into the exercise feed
    newExercise.appendChild(addFavoriteElement).appendChild(addEditElement);
    //format a string to set element html
    // var fullString = "";
    if (m != "") {
        newExercise.innerHTML += "Workout:<br>" + m + "<br><br>";
    }
    if (r != "") {
        newExercise.innerHTML += "Reps:<br>" + r + "<br><br>";
    }
    if (s != "") {
        newExercise.innerHTML += "Sets:<br>" + s + "<br><br>";
    }
    if (w != "") {
        newExercise.innerHTML += "Weight:<br>" + w + "<br><br>";
    }
    if (t != "") {
        newExercise.innerHTML += "Time:<br>" + t + "<br><br>";
    }
    //TODO//
    // add a check for empty params and setting the following HTML



    document.getElementById("exerciseGridFeed").appendChild(newExercise)
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW FOOD ELEMENT ---------------//////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW FOOD, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO FOOD FEED
function createNewFood(f, w, t, m, id) {
    //TODO//
    // needs a hover attribute

    var newFood = document.createElement('div');

    //format a string to set element html
    var fullString = "<br>";
    if (f != "") {
        fullString = fullString + "Food:<br>" + f + "<br><br>";
    }
    if (w != "") {
        fullString = fullString + "Beverage:<br>" + w + "<br><br>";
    }
    if (m != "") {
        fullString = fullString + "Note:<br>" + m + "<br><br>";
    }
    if (t != "") {
        fullString = fullString + "Time:<br>" + t + "<br><br>";
    }

    fullString = fullString + "</label>";

    //TODO//
    // add a check for empty params and setting the following HTML

    // create the new exercise div and set HTML content w/ respective vars

    newFood.innerHTML = fullString;
    var addEditElement = document.createElement('div');
    addEditElement.innerHTML = "<div onclick = '" + 'editThisFood("' + f + "^^^" + w + "^^^" + m + "^^^" + t + "^^^" + id + '")' + "' class = 'buttonEditFeed'>EDIT</div>";

    // fullString = fullString + "</label>";

    // initialize new food div: set id & class name

    newFood.id = "foodID";
    newFood.className = "testtt";

    // load new food div into the food feed
    document.getElementById("foodFeed").appendChild(newFood).appendChild(addEditElement);
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW FAV FOOD ELEMENT ---------------//////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW FOOD, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO FOOD FEED
function createNewFavFood(f, w, m, t, id) {
    //TODO//
    // needs a hover attribute

    var newFood = document.createElement('li');
    // initialize new food div: set id & class name
    var addFavoriteElement = document.createElement('div');
    var addEditElement = document.createElement('div');

    // create the new food div and set HTML content w/ respective vars
    addEditElement.innerHTML = "<div onclick = '" + 'editThisFoodFav("' + f + "^^^" + w + "^^^" + m + "^^^" + t + "^^^" + id + '")' + "' class = 'favButtonEdit'>EDIT</div>";

    addFavoriteElement.innerHTML = "<div onclick = '" + 'addFavFoodToDB("' + f + "," + w + "," + m + "," + t + '")' + "' class = 'favButtonAdd'>ADD</div>";
    newFood.appendChild(addFavoriteElement).appendChild(addEditElement);



    // var fullString = "";
    if (f != "") {
        // var food1 = document.createElement('div');
        newFood.innerHTML += "Food:<br>" + f + "<br><br>";
        // newFood.appendChild(food1)
    }
    if (w != "") {
        // var water1 = document.createElement('div');
        newFood.innerHTML += "Beverage:<br>" + w + "<br><br>";
        // newFood.appendChild(water1);
    }
    if (m != "") {
        // var note1 = document.createElement('div');
        newFood.innerHTML += "Note:<br>" + m + "<br><br>";
        // newFood.appendChild(note1);      
    }
    if (t != "") {
        // var time1 = document.createElement('div');
        newFood.innerHTML += "Time:<br>" + t + "<br><br>";
        // newFood.appendChild(tim1);    
    }



    newFood.id = "favIDFood";
    addFavoriteElement.id = "addFavoriteElement";
    addEditElement.id = "addEditElement";

    newFood.className = "testtt";


    // console.log(f,w,t,)

    // console.log(f, w , t, m)
    // load new food div into the food feed
    document.getElementById("foodGridFeed").appendChild(newFood);
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW FAV EXERCISE ELEMENT -----------//////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW EXERCISE, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO EX FEED
function createNewHistoryEx(r, s, w, t, m, id) {
    //TODO//
    // needs a hover attribute

    // initialize new exercise div: set id & class name
    var newExercise = document.createElement('li');
    // var addEditElement = document.createElement('div');
    var addFavoriteElement = document.createElement('div');
    var addToFavButton = document.createElement('div');
    newExercise.id = "hisIDEx";
    newExercise.className = "testtt";
    addToFavButton.innerHTML = "<input onclick = '" + 'addFavHistoryEx("' + m + "," + r + "," + s + "," + w + "," + t + '")' + "' type='submit' class = 'favButtonAddHistory' value = 'ADD TO FAV EXERCISES'/>"

    // create the new exercise div and set HTML content w/ respective vars
    addFavoriteElement.innerHTML = "<br><button onclick = '" + 'addFavExerciseToDB("' + m + "," + r + "," + s + "," + w + "," + t + '")' + "' id = 'historyAdd' class = 'favButtonAdd'>ADD TODAY</button>";


    // load new exercise div into the exercise feed
    newExercise.appendChild(addFavoriteElement).appendChild(addToFavButton);


    //format a string to set element html
    // var fullString = "";
    newExercise.innerHTML += "<br>"
    if (m != "") {
        newExercise.innerHTML += "Workout:<br>" + m + "<br><br>";
    }
    if (r != "") {
        newExercise.innerHTML += "Reps:<br>" + r + "<br><br>";
    }
    if (s != "") {
        newExercise.innerHTML += "Sets:<br>" + s + "<br><br>";
    }
    if (w != "") {
        newExercise.innerHTML += "Weight:<br>" + w + "<br><br>";
    }
    if (t != "") {
        newExercise.innerHTML += "Time:<br>" + t + "<br><br>";
    }
    //TODO//
    // add a check for empty params and setting the following HTML


    // console.log("hey");
    document.getElementById("historyFeed1").appendChild(newExercise)
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW FOOD ELEMENT ---------------//////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW FOOD, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO FOOD FEED
function createNewHistoryFood(f, w, t, m, id) {
    //TODO//
    // needs a hover attribute

    var newFood = document.createElement('li');
    // create the new exercise div and set HTML content w/ respective vars
    var addFavoriteElement = document.createElement('div');
    var addToFavButton = document.createElement('div');


    addToFavButton.innerHTML = "<input onclick = '" + 'addFavHistoryFood("' + f + "," + w + "," + t + "," + m + '")' + "' type='submit' class = 'favButtonAddHistory' value = 'ADD TO FAV FOODS'/>"

    // create the new food div and set HTML content w/ respective vars
    addFavoriteElement.innerHTML = "<br><button onclick = '" + 'addFavFoodToDB("' + f + "," + w + "," + t + "," + m + '")' + "' id = 'historyAdd' class = 'favButtonAdd'>ADD TODAY</button>";
    newFood.appendChild(addFavoriteElement).appendChild(addToFavButton);
    //format a string to set element html
    var fullString = "<br>";
    if (f != "") {
        fullString = fullString + "Food:<br>" + f + "<br><br>";
    }
    if (w != "") {
        fullString = fullString + "Beverage:<br>" + w + "<br><br>";
    }
    if (m != "") {
        fullString = fullString + "Note:<br>" + m + "<br><br>";
    }
    if (t != "") {
        fullString = fullString + "Time:<br>" + t + "<br><br>";
    }

    fullString = fullString + "</label>";

    //TODO//
    // add a check for empty params and setting the following HTML


    newFood.innerHTML += fullString;
    newFood.id = "favIDFood";
    newFood.className = "testtt";



    // load new food div into the food feed
    document.getElementById("historyFeed1").appendChild(newFood);
}

/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW TASK ELEMENT -----------//////////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW EXERCISE, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO EX FEED
function createNewHistoryTask(ttl, desc, t, id) {
    //TODO//
    // needs a hover attribute

    // initialize new task div: set id & class name
    var newTask = document.createElement('li');
    var addFavoriteElement = document.createElement('div');
    var addToFavButton = document.createElement('div');
    newTask.id = "favIDTask";
    newTask.className = "testtt";

    addToFavButton.innerHTML = "<input onclick = '" + 'addFavHistoryTask("' + ttl + "," + desc + "," + t + '")' + "' type='submit' class = 'favButtonAddHistory' value = 'ADD TO FAV TASKS'/>"

    addFavoriteElement.innerHTML = "<br><button onclick = '" + 'addFavTaskToDB("' + ttl + "," + desc + "," + t + '")' + "' id = 'historyAdd' class = 'favButtonAdd'>ADD TODAY</button>";
    newTask.appendChild(addFavoriteElement).appendChild(addToFavButton);

    //TODO//
    // furthis this style implementation

    //format a string to set element html
    var fullString = "<br>";
    if (ttl != "") {
        fullString = fullString + "Title:<br>" + ttl + "<br><br>";
    }
    if (desc != "") {
        fullString = fullString + "Description:<br>" + desc + "<br><br>";
    }
    if (t != "") {
        fullString = fullString + "Time:<br>" + t + "<br><br>";
    }

    fullString = fullString + "</label>";

    // create the new task div and set HTML content w/ respective vars
    newTask.innerHTML += fullString;

    // load new exercise div into the exercise feed
    document.getElementById("historyFeed1").appendChild(newTask);
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW FAV FOOD ELEMENT ---------------//////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW FOOD, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO FOOD FEED
function createNewRecentFood(f, w, t, m, id) {
    //TODO//
    // needs a hover attribute

    var newFood = document.createElement('li');
    // initialize new food div: set id & class name
    // var addFavoriteElement = document.createElement('div');
    // var addEditElement = document.createElement('div');

    // create the new food div and set HTML content w/ respective vars
    // addEditElement.innerHTML = "<br><button onclick = '" + 'editThisFoodFav("' + f + "," + w + "," + t + "," + m + "," + id + '")' + "' class = 'favButtonEdit'>EDIT</button>";

    // addFavoriteElement.innerHTML = "<br><button onclick = '" + 'addFavFoodToDB("' + f + "," + w + "," + t + "," + m + '")' + "' class = 'favButtonAdd'>ADD</button>";
    // newFood.appendChild(addFavoriteElement).appendChild(addEditElement);



    // var fullString = "";
    if (f != "") {
        // var food1 = document.createElement('div');
        newFood.innerHTML += "Food:<br>" + f + "<br><br>";
        // newFood.appendChild(food1)
    }
    if (w != "") {
        // var water1 = document.createElement('div');
        newFood.innerHTML += "Beverage:<br>" + w + "<br><br>";
        // newFood.appendChild(water1);
    }
    if (m != "") {
        // var note1 = document.createElement('div');
        newFood.innerHTML += "Note:<br>" + m + "<br><br>";
        // newFood.appendChild(note1);      
    }
    if (t != "") {
        // var time1 = document.createElement('div');
        newFood.innerHTML += "Time:<br>" + t + "<br><br>";
        // newFood.appendChild(tim1);    
    }

    newFood.id = "favID";
    // addFavoriteElement.id = "addFavoriteElement";
    // addEditElement.id = "addEditElement";

    newFood.className = "testtt";


    // console.log(f,w,t,)



    // console.log(f, w , t, m)
    // load new food div into the food feed
    // document.getElementById("recentFoodsFeed").appendChild(newFood);
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD A NEW FAV FOOD ELEMENT ---------------//////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW FOOD, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO FOOD FEED
//PROTEIN
function createNewNutritionWeek(d, v, u) {
    //TODO//
    // needs a hover attribute

    //description, value , units

    var newNutrient = document.createElement('li');
    // initialize new food div: set id & class name
    // var addFavoriteElement = document.createElement('div');
    // var addEditElement = document.createElement('div');

    // create the new food div and set HTML content w/ respective vars
    // addEditElement.innerHTML = "<br><button onclick = '" + 'editThisFoodFav("' + f + "," + w + "," + t + "," + m + "," + id + '")' + "' class = 'favButtonEdit'>EDIT</button>";

    // addFavoriteElement.innerHTML = "<br><button onclick = '" + 'addFavFoodToDB("' + f + "," + w + "," + t + "," + m + '")' + "' class = 'favButtonAdd'>ADD</button>";
    // newFood.appendChild(addFavoriteElement).appendChild(addEditElement);



    // var fullString = "";
    if (d != "") {
        // var food1 = document.createElement('div');
        newNutrient.innerHTML += "Food description<br><br>" + d + "<br><br>";
        // newFood.appendChild(food1)
    }
    if (v != "") {
        // var water1 = document.createElement('div');
        newNutrient.innerHTML += "Value:<br>" + v + " " + u;
        // newFood.appendChild(water1);
    }

    newNutrient.id = "nutID";
    // addFavoriteElement.id = "addFavoriteElement";
    // addEditElement.id = "addEditElement";

    // newNutrient.className = "testtt";


    // console.log(f,w,t,)

    // console.log(f, w , t, m)
    // load new food div into the food feed
    document.getElementById("nutritionValuesFeedWeek").appendChild(newNutrient);
}
function createNewNutritionDaily(d, v, u) {
    //TODO//
    // needs a hover attribute

    //description, value , units

    var newNutrient = document.createElement('li');
    // initialize new food div: set id & class name
    // var addFavoriteElement = document.createElement('div');
    // var addEditElement = document.createElement('div');

    // create the new food div and set HTML content w/ respective vars
    // addEditElement.innerHTML = "<br><button onclick = '" + 'editThisFoodFav("' + f + "," + w + "," + t + "," + m + "," + id + '")' + "' class = 'favButtonEdit'>EDIT</button>";

    // addFavoriteElement.innerHTML = "<br><button onclick = '" + 'addFavFoodToDB("' + f + "," + w + "," + t + "," + m + '")' + "' class = 'favButtonAdd'>ADD</button>";
    // newFood.appendChild(addFavoriteElement).appendChild(addEditElement);



    // var fullString = "";
    if (d != "") {
        // var food1 = document.createElement('div');
        newNutrient.innerHTML += "Food description<br><br>" + d + "<br><br>";
        // newFood.appendChild(food1)
    }
    if (v != "") {
        // var water1 = document.createElement('div');
        newNutrient.innerHTML += "Value:<br>" + v + " " + u;
        // newFood.appendChild(water1);
    }

    newNutrient.id = "nutID";
    // addFavoriteElement.id = "addFavoriteElement";
    // addEditElement.id = "addEditElement";

    // newNutrient.className = "testtt";


    // console.log(f,w,t,)

    // console.log(f, w , t, m)
    // load new food div into the food feed
    document.getElementById("nutritionValuesFeedDaily").appendChild(newNutrient);
}

function createNewTotalNutrientsWeek(w, e, v, c, p) {
    //TODO//
    // needs a hover attribute

    //description, value , units

    var newNutrient = document.createElement('li');
    // initialize new food div: set id & class name
    // var addFavoriteElement = document.createElement('div');
    // var addEditElement = document.createElement('div');

    // create the new food div and set HTML content w/ respective vars
    // addEditElement.innerHTML = "<br><button onclick = '" + 'editThisFoodFav("' + f + "," + w + "," + t + "," + m + "," + id + '")' + "' class = 'favButtonEdit'>EDIT</button>";

    // addFavoriteElement.innerHTML = "<br><button onclick = '" + 'addFavFoodToDB("' + f + "," + w + "," + t + "," + m + '")' + "' class = 'favButtonAdd'>ADD</button>";
    // newFood.appendChild(addFavoriteElement).appendChild(addEditElement);



    // var fullString = "";
    // var food1 = document.createElement('div');
    newNutrient.innerHTML = p + "<br><br>" + e + "<br><br>" + v + "<br><br>" + c + "<br><br>" + w;
    // newFood.appendChild(food1)


    newNutrient.id = "favID";
    // addFavoriteElement.id = "addFavoriteElement";
    // addEditElement.id = "addEditElement";

    newNutrient.className = "testtt";


    // console.log(f,w,t,)

    // console.log(f, w , t, m)
    // load new food div into the food feed
    // document.getElementById("weekNutrientFeed").appendChild(newNutrient);
    // document.getElementById("weekNutrientFeed").style.display = "";
}

/********************************************************************/

/********************************************************************/
/*********************** LOAD FORMS *********************************/
/********************************************************************/

/********************************************************************/




/////////------------------- LOAD FAV TASK FORM -------------------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE VAR DIVS, SET IDS, SET FORM HTML CONTENT 
function newFavTask() {
    // clear the feed
    clearChildren();
    // initialize div elements
    var cancelButton = document.createElement('div');
    var head = document.createElement('div');
    var title = document.createElement('div');
    var description = document.createElement('div');
    var time = document.createElement('div');
    var postButton = document.createElement('div');

    // set ids
    cancelButton.id = "cancelNew"
    head.id = "headNew"
    title.id = "titleNew";
    description.id = "descriptionNew";
    time.id = "timeNew";
    postButton.id = "postButton";

    // then add the HTML content of the element
    cancelButton.innerHTML = "<input onclick = 'favoriteButtonClick()' type='submit' id = 'cancelButton1' value = 'CANCEL'/><br>"
    head.innerHTML = "<br><br><br><label class = 'exClass1'>FAVORITE TASK<br>";
    title.innerHTML = "<br><br><br><label class = 'exClass1'>Title (ex: Chemistry, Dentist, Birthday, etc.) <br><br></label><input id='taskReq1' onclick = '" + 'makeClean(document.getElementById("taskReq1"))' + "' type='text' class = 'required'><br><br><br>";
    description.innerHTML = "<label class = 'exClass1'>Description (ex: Due at 11:59pm, buy a gift, etc.) <br><br></label> <input type='text' id='taskReq2' onclick = '" + 'makeClean(document.getElementById("taskReq2"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br></label><input type='text' id='taskReq3' onclick = '" + 'makeClean(document.getElementById("taskReq3"))' + "' class = 'required'><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addFavTask()' type='submit' id = 'pButton1' value = 'POST'/>"

    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(head)
        .appendChild(title)
        .appendChild(description)
        .appendChild(time)
        .appendChild(postButton)
}


/////////------------------- LOAD FAV EXERCISE FORM ---------------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE VAR DIVS, SET IDS, SET FORM HTML CONTENT 
function newFavExercise() {
    // clear the feed
    clearChildren();

    // initialize div elements
    var cancelButton = document.createElement('div');
    var title = document.createElement('div');
    var reps = document.createElement('div');
    var sets = document.createElement('div');
    var weight = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');

    // set ids
    cancelButton.id = "cancelNew";
    title.id = "titleNew"
    reps.id = "repsNew";
    sets.id = "setsNew";
    weight.id = "weightNew";
    time.id = "timeNew";
    message.id = "messageNew";
    postButton.id = "postButton";

    // then add the HTML content of the element
    // title and time are required for inputs
    cancelButton.innerHTML = "<input onclick = 'favoriteButtonClick()' type='submit' id = 'cancelButton1' value = 'CANCEL'/><br>"
    title.innerHTML = "<br><br><br><label class = 'exClass1'>FAVORITE EXERCISE<br>";
    message.innerHTML = "<br><br><br><label class = 'exClass1'>Workout (ex: DB Bench Press. Difficult) <br><br></label><input id='exReq1' onclick = '" + 'makeClean(document.getElementById("exReq1"))' + "' type='text' class = 'required' ><br><br><br>";
    reps.innerHTML = "<label class = 'exClass1'>Reps (ex: 8) <br><br></label> <input type='text' id='exReq2' onclick = '" + 'makeClean(document.getElementById("exReq2"))' + "' class = 'required' ><br><br><br>";
    sets.innerHTML = "<label class = 'exClass1'>Sets (ex: 3)<br><br></label><input type='text' id='exReq3' onclick = '" + 'makeClean(document.getElementById("exReq3"))' + "' class = 'required'><br><br><br>";
    weight.innerHTML = "<label class = 'exClass1'>Weight (ex: 100 lbs)<br><br></label><input type='text' id='exReq4' onclick = '" + 'makeClean(document.getElementById("exReq4"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm) <br><br></label><input id='exReq5' onclick = '" + 'makeClean(document.getElementById("exReq5"))' + "' type='text' class = 'required' ><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addFavExercise()'type='submit' form='mainForm' id = 'pButton1' value = 'POST'/>"

    // this could be created as appending one div instead for better styling
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(title)
        .appendChild(message)
        .appendChild(reps)
        .appendChild(sets)
        .appendChild(weight)
        .appendChild(time)
        .appendChild(postButton)
}


/////////------------------- LOAD FAV FOOD/WATER FORM -------------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE VAR DIVS, SET IDS, SET FORM HTML CONTENT 
function newFavFood() {
    // clear the feed
    clearChildren();

    // initialize div elements
    var cancelButton = document.createElement('div');
    var title = document.createElement('div');
    var food = document.createElement('div');
    var water = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');

    // set ids
    cancelButton.id = "cancelButtonFoodNew";
    title.id = "titleFoodNew";
    food.id = "foodNew";
    water.id = "waterNew";
    time.id = "timeFoodNew";
    message.id = "messageFoodNew";
    postButton.id = "postButtonFoodNew";

    // then add the HTML content of the element
    cancelButton.innerHTML = "<input onclick = 'favoriteButtonClick()' type='submit' id = 'cancelButton1' value = 'CANCEL'/><br>"
    title.innerHTML = "<br><br><br><label class = 'exClass1'>FAVORITE FOOD<br>";
    food.innerHTML = "<br><br><br><label class = 'exClass1'>Food (ex: Banana, scrambled eggs)<br><br> </label> <input type='text' id='foodReq1' onclick = '" + 'makeClean(document.getElementById("foodReq1"))' + "' class = 'required'><br><br><br>";
    water.innerHTML = "<label class = 'exClass1'>Water/Beverages (ex: Water, Protein Shake)<br> <br> </label><input type='text' id='foodReq2' onclick = '" + 'makeClean(document.getElementById("foodReq2"))' + "' class = 'required'><br><br><br>";
    message.innerHTML = "<label class = 'exClass1'>Note (ex: 4 servings, taste rating 6/10)<br><br> </label><input type='text' id='foodReq3' onclick = '" + 'makeClean(document.getElementById("foodReq3"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br>  </label><input type='text' id='foodReq4' onclick = '" + 'makeClean(document.getElementById("foodReq4"))' + "' class = 'required' ><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addFavFoodAndWater()'type='submit' id = 'pButton1' value = 'POST'/>"

    // this could be created as appending one div instead for better styling
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(title)
        .appendChild(food)
        .appendChild(water)
        .appendChild(message)
        .appendChild(time)
        .appendChild(postButton)
}

/////////------------------- LOAD FAVORITE BUTTON FORM-------------------////////////
///////////////////////////////////////////////////////////////////////////////////// 
// LOAD A FAVORITE BUTTON FORM
function favoriteButtonClick() {
    //   TODO IMPLEMENTATION FOR FAVORITE BUTTON

    // clear the feed
    clearChildren();

    document.getElementById("feed").style.display = "";
    document.getElementById("historyTotalFeed").style.display = "none";
    document.getElementById("fullFavFeed").style.display = "none";
    document.getElementById("addButtonsDiv").style.display = "none";

    //load the favorite button form
    document.getElementById("calendar").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";

    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("filler1").style.display = "none";


    // initialize div elements
    var cancelButton = document.createElement('div');
    var food = document.createElement('div');
    var exercise = document.createElement('div');
    var task = document.createElement('div');

    cancelButton.id = "cancelFavoriteID";
    food.id = "foodFavoriteID";
    exercise.id = "exerciseFavoriteID";
    task.id = "taskFavoriteID";


    cancelButton.innerHTML = "<input type='submit' onclick = 'reload()'id = 'cancelButton1' value = 'CANCEL'/><br>"
    food.innerHTML = "<br><br><br><button onclick = 'newFavFood()' id = 'favFoodBut' class = 'favButton'>ADD FAVORITE FOOD</button>";
    exercise.innerHTML = "<br><br><br><button onclick = 'newFavExercise()' id = 'favExBut' class = 'favButton'>ADD FAVORITE EXERCISE</button>";
    task.innerHTML = "<br><br><br><button onclick = 'newFavTask()' id = 'favTaskBut' class = 'favButton'>ADD FAVORITE TASK</button>";

    // load the edit form on the feed
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(food)
        .appendChild(exercise)
        .appendChild(task)


}
function taskIconButtonClick() {
    // clear the feed
    clearChildren();
    loadTaskHistoryFeed();
    document.getElementById("feed").style.display = "";
    document.getElementById("calendar").style.display = "none";
    document.getElementById("filler1").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    document.getElementById("todaysDate").style.display = "";
    document.getElementById("fullFavFeed").style.display = "none";
    document.getElementById("addButtonsDiv").style.display = "none";
    document.getElementById("historyTotalFeed").style.display = "";

    // initialize div elements
    var cancelButton = document.createElement('div');
    var title = document.createElement('div');
    var description = document.createElement('div');
    var time = document.createElement('div');
    var postButton = document.createElement('div');

    var addReminderButton = document.createElement('div');
    addReminderButton.id = "addReminderButton";
    addReminderButton.innerHTML = "<input onclick = 'textTest() 'type='submit' form='mainForm' id = 'textButton' value = 'ADD REMINDER'/>"

    // set ids
    cancelButton.id = "cancelNew"
    title.id = "titleNew";
    description.id = "descriptionNew";
    time.id = "timeNew";
    postButton.id = "postButton";

    // then add the HTML content of the element
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/><br>"
    title.innerHTML = "<br><br><br><label class = 'exClass1'>Title (ex: Chemistry, Dentist, Birthday, etc.) <br><br></label><input id='taskReq1' onclick = '" + 'makeClean(document.getElementById("taskReq1"))' + "' type='text' class = 'required'><br><br><br>";
    description.innerHTML = "<label class = 'exClass1'>Description (ex: Due at 11:59pm, buy a gift, etc.) <br><br></label> <input type='text' id='taskReq2' onclick = '" + 'makeClean(document.getElementById("taskReq2"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br></label><input type='text' id='taskReq3' onclick = '" + 'makeClean(document.getElementById("taskReq3"))' + "' class = 'required'><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addTask()' type='submit' id = 'pButton1' value = 'POST'/>"


    var dateVar = document.createElement('div');
    var amPM = document.createElement('div');
    dateVar.innerHTML = "<label class = 'exClass1'>Reminder date<br><br></label><input type='date' id='taskReq4' onclick = '" + 'makeClean(document.getElementById("taskReq4"))' + "' class = 'required'><br><br><br>";
    amPM.innerHTML = "<label class = 'exClass1'> Reminder Time<br><br></label><input type='time' id='taskReq6' onclick = '" + 'makeClean(document.getElementById("taskReq6"))' + "' class = 'required'><br><br><br>";


    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(title)
        .appendChild(description)
        .appendChild(time)
        .appendChild(postButton)
        .appendChild(dateVar)
        .appendChild(amPM)
        .appendChild(addReminderButton)

}

function foodIconButtonClick() {
    // clear the feed
    clearChildren();
    loadFoodHistoryFeed();

    document.getElementById("feed").style.display = "";
    document.getElementById("feed").style.display = "";
    document.getElementById("calendar").style.display = "none";
    document.getElementById("filler1").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    document.getElementById("todaysDate").style.display = "";
    document.getElementById("fullFavFeed").style.display = "none";
    document.getElementById("addButtonsDiv").style.display = "none";
    document.getElementById("historyTotalFeed").style.display = "";

    // initialize div elements
    var cancelButton = document.createElement('div');
    var food = document.createElement('div');
    var water = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');

    // set ids
    cancelButton.id = "cancelButtonFoodNew";
    food.id = "foodNew";
    water.id = "waterNew";
    time.id = "timeFoodNew";
    message.id = "messageFoodNew";
    postButton.id = "postButtonFoodNew";

    // then add the HTML content of the element
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/><br>"
    food.innerHTML = "<br><br><br><label class = 'exClass1'>Food (ex: Banana, scrambled eggs)<br><br> </label> <input type='text' id='foodReq1' onclick = '" + 'makeClean(document.getElementById("foodReq1"))' + "' class = 'required'><br><br><br>";
    water.innerHTML = "<label class = 'exClass1'>Water/Beverages (ex: Water, Protein Shake)<br> <br> </label><input type='text' id='foodReq2' onclick = '" + 'makeClean(document.getElementById("foodReq2"))' + "' class = 'required'><br><br><br>";
    message.innerHTML = "<label class = 'exClass1'>Note (ex: 4 servings, taste rating 6/10)<br><br> </label><input type='text' id='foodReq3' onclick = '" + 'makeClean(document.getElementById("foodReq3"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br>  </label><input type='text' id='foodReq4' onclick = '" + 'makeClean(document.getElementById("foodReq4"))' + "' class = 'required' ><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addFoodAndWater()'type='submit' id = 'pButton1' value = 'POST'/>"

    // this could be created as appending one div instead for better styling
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(food)
        .appendChild(water)
        .appendChild(message)
        .appendChild(time)
        .appendChild(postButton)
}

function exerciseIconButtonClick() {
    // clear the feed
    clearChildren();
    loadExHistoryFeed();
    document.getElementById("historyTotalFeed").style.display = "";

    document.getElementById("feed").style.display = "";
    document.getElementById("feed").style.display = "";
    document.getElementById("calendar").style.display = "none";
    document.getElementById("filler1").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    document.getElementById("todaysDate").style.display = "";
    document.getElementById("fullFavFeed").style.display = "none";
    document.getElementById("addButtonsDiv").style.display = "none";


    // initialize div elements
    var cancelButton = document.createElement('div');
    var reps = document.createElement('div');
    var sets = document.createElement('div');
    var weight = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');

    // set ids
    cancelButton.id = "cancelNew";
    reps.id = "repsNew";
    sets.id = "setsNew";
    weight.id = "weightNew";
    time.id = "timeNew";
    message.id = "messageNew";
    postButton.id = "postButton";

    // then add the HTML content of the element
    // title and time are required for inputs
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/><br>"
    message.innerHTML = "<br><br><br><label class = 'exClass1'>Workout (ex: DB Bench Press. Difficult) <br><br></label><input id='exReq1' onclick = '" + 'makeClean(document.getElementById("exReq1"))' + "' type='text' class = 'required' ><br><br><br>";
    reps.innerHTML = "<label class = 'exClass1'>Reps (ex: 8) <br><br></label> <input type='text' id='exReq2' onclick = '" + 'makeClean(document.getElementById("exReq2"))' + "' class = 'required' ><br><br><br>";
    sets.innerHTML = "<label class = 'exClass1'>Sets (ex: 3)<br><br></label><input type='text' id='exReq3' onclick = '" + 'makeClean(document.getElementById("exReq3"))' + "' class = 'required'><br><br><br>";
    weight.innerHTML = "<label class = 'exClass1'>Weight (ex: 100 lbs)<br><br></label><input type='text' id='exReq4' onclick = '" + 'makeClean(document.getElementById("exReq4"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm) <br><br></label><input id='exReq5' onclick = '" + 'makeClean(document.getElementById("exReq5"))' + "' type='text' class = 'required' ><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addExercise()'type='submit' form='mainForm' id = 'pButton1' value = 'POST'/>"

    // this could be created as appending one div instead for better styling
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(message)
        .appendChild(reps)
        .appendChild(sets)
        .appendChild(weight)
        .appendChild(time)
        .appendChild(postButton)
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- LOAD EDIT ACCOUNT FORM ------------------///////////////
///////////////////////////////////////////////////////////////////////////////////// 
// LOAD EDIT ACCOUNT FORM
function editAccount() {
    // clear the feed 
    clearChildren();
    // hide the buttons
    document.getElementById("taskIcon").style.display = "none";
    document.getElementById("taskIconLabel").style.display = "none";
    document.getElementById("exerciseIcon").style.display = "none";
    document.getElementById("exerciseIconLabel").style.display = "none";
    document.getElementById("foodIcon").style.display = "none";
    document.getElementById("foodIconLabel").style.display = "none";

    document.getElementById("calendar").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    document.getElementById("filler1").style.display = "none";
    document.getElementById("feed").style.display = "";




    //load form to edit my account
    // initialize div elements
    var cancelButton = document.createElement('div');
    // var postT = 
    var username1 = document.createElement('div');
    var phoneNum = document.createElement('div');
    var postButton = document.createElement('div');
    var profPic = document.createElement('div');

    cancelButton.id = "cancelAccountID";
    username1.id = "usernameAccountID";
    phoneNum.id = "phoneNumID";
    postButton.id = "postAccountID";


    //set vars to pre load the edit form
    cancelButton.innerHTML = "<input onclick = 'loadMyAccount()' type='submit' id = 'cancelButton1' value = 'CANCEL'/><br>"
    username1.innerHTML = "<br><br><br><label class = 'exClass1'>Username: <br><br></label><input type='text' class = 'required' value = '" + username + "'><br><br><br>";
    phoneNum.innerHTML = "<br><br><br><label class = 'exClass1'>Phone Number:<br> (Proper format: +11234567890 with the leading +1 as a proper country code) <br><br></label><input type='text' class = 'required' value = '" + myPhoneNumber + "'><br><br><br>";
    profPic.innerHTML = "<br><br><br><label class = 'exClass1'>Attach a profile picture: <br><br></label><input type='file' class = 'required' id = 'attachProfPic'><br><br><br>";

    postButton.innerHTML = "<input onclick = 'updateAccount()' type='submit' id = 'cancelButton1' value = 'UPDATE'/>"

    // load the edit form on the feed
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(username1)
        .appendChild(phoneNum)
        .appendChild(profPic)
        .appendChild(postButton)
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- LOAD MY ACCOUNT FORM -------------------///////////////
///////////////////////////////////////////////////////////////////////////////////// 
// TOGGLE BETWEEN HIDDEN/SHOWN STATE
function loadMyAccount() {
    // clear the feed 
    clearChildren();
    document.getElementById("usernameHeader").style.display = "";
    document.getElementById("userHead").style.display = "";
    // document.getElementById("accountProfPicIcon").style.display = "";

    document.getElementById("userHead").innerHTML = username + "'s Account Page";
    // style calendar: 
    // remove the current active class & set the new active date
    var active = document.getElementsByClassName("active");
    if (active[0] != null) {
        active[0].className = "";
    }
    // hide the buttons
    document.getElementById("addButtonsDiv").style.display = "none";

    document.getElementById("feed").style.display = "";
    document.getElementById("trackingIcon").style.display = "";
    document.getElementById("publicIcon").style.display = "";
    document.getElementById("calendar").style.display = "";

    // document.getElementById("usernameHeader").style.display = "";
    document.getElementById("accountIcon").style.display = "";
    document.getElementById("filler1").style.display = "";

    document.getElementById("accountPFeed").style.display = "";

    document.getElementsByClassName("active").className = "";

    document.getElementById("todaysDate").style.display = "none";



    document.getElementById('favoritesDivID').style.display = '';
    document.getElementById("historyTitle").style.display = "none";
    document.getElementById("historyFeed").style.display = "none";
    document.getElementById("totalFeed").style.display = "none";
    document.getElementById("reccomendedFeed").style.display = "none";
    document.getElementById("idealNutritionValuesFeed").style.display = "none";
    document.getElementById("fullFavFeed").style.display = "none";
    document.getElementById("accountProfPicIcon").style.display = "";


    // get username var



    db.collection("users").where("userID", "==", userID).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            storage.child(doc.data().profPic).getDownloadURL().then((url) => {
                console.log(url);

                var img = document.getElementById('accountProfPicIcon');
                //  var img = document.getElementById('accountProfPicIcon');
                img.setAttribute('src', url);
                document.getElementById('profPicDiv').style.display = 'unset';

            }).catch((error) => {
                // var img = document.getElementById('accountProfPicIcon');
                // img.setAttribute('src', "Randall.webp");
                // document.getElementById('profPicDiv').style.display = 'unset';
                console.log('error in img download: ' + error.message);
            });
        })
    })
    //  loadAccountPostFeed();

    db.collection("posts").where("username", "==", username).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewAccountPublicPost(doc.data().desc, doc.data().title, doc.data().username, doc.data().profPicRef, doc.id, doc.data().date, doc.data().month, doc.data().numberOfComments, doc.data().likes);
        })
    })

    // load the account feed

    // initialize div elements
    // var usernameEdit = document.createElement('div');
    var editButton = document.createElement('div');
    var signOutButton = document.createElement('div');

    //set ids

    // usernameEdit.id = "usernameAccountID";
    editButton.id = "editAccountID";
    signOutButton.id = "editAccountID";

    // const user = firebase.auth().currentUser;

    // usernameEdit.innerHTML = "<br><br><br><label id = 'accountUsername'>" + username + "'s account page <br><br></label>";
    editButton.innerHTML = "<input onclick = 'editAccount()' type='submit' id = 'cancelButton1' value = 'EDIT MY ACCOUNT'/>"
    signOutButton.innerHTML = "<input onclick = 'signOutAccount()' type='submit' id = 'signOutButton1' value = 'SIGN OUT'/>"


    // load the edit form on the feed
    document.getElementById("feed")
        // .appendChild(usernameEdit)
        .appendChild(editButton)
        .appendChild(signOutButton)
}



/********************************************************************/

/********************************************************************/
/*********************** DATABASE FUNCTIONS *************************/
/********************************************************************/

/********************************************************************/


/////////------------------- LOAD THE FEED ----------------------------//////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORMAT DATE, LOAD EXERCISE, FOODANDWATER, TASK FEEDS
function loadFeed(date, month) {

    proteinTotal = 0;
    carbTotal = 0;
    vitaminTotal = 0;
    energyTotal = 0;
    waterTotal = 0;
    caffeineTotal = 0;
    potassiumTotal = 0;
    calciumTotal = 0;
    b12Total = 0;
    b6Total = 0;
    riboTotal = 0;
    sodiumTotal = 0;
    ironTotal = 0;
    fiberTotal = 0;
    sugarTotal = 0;
    transTotal = 0;
    polyTotal = 0;
    monoTotal = 0;
    cholTotal = 0;
    lipidFatTotal = 0;

    proteinTotalDaily = 0;
    carbTotalDaily = 0;
    vitaminTotalDaily = 0;
    energyTotalDaily = 0;
    waterTotalDaily = 0;
    caffeineTotalDaily = 0;
    potassiumTotalDaily = 0;
    calciumTotalDaily = 0;
    b12TotalDaily = 0;
    b6TotalDaily = 0;
    riboTotalDaily = 0;
    sodiumTotalDaily = 0;
    ironTotalDaily = 0;
    fiberTotalDaily = 0;
    sugarTotalDaily = 0;
    transTotalDaily = 0;
    polyTotalDaily = 0;
    monoTotalDaily = 0;
    cholTotalDaily = 0;
    lipidFatTotalDaily = 0;


    var day = "" + date;

    // hide post buttons
    document.getElementById("trackingIcon").style.display = "";
    document.getElementById("publicIcon").style.display = "";
    document.getElementById("usernameHeader").style.display = "";
    document.getElementById("todaysDate").style.display = "";
    document.getElementById("favoritesIcon").style.display = "";
    document.getElementById("favLabel").style.display = "";
    document.getElementById("taskIcon").style.display = "";
    document.getElementById("taskIconLabel").style.display = "";
    document.getElementById("exerciseIcon").style.display = "";
    document.getElementById("exerciseIconLabel").style.display = "";
    document.getElementById("foodIcon").style.display = "";
    document.getElementById("accountProfPicIcon").style.display = "";


    document.getElementById("foodIconLabel").style.display = "";
    document.getElementById("nutritionLoadButton").style.display = "";




    document.getElementById("exFeed").style.display = "";
    document.getElementById("foodFeed").style.display = "";
    document.getElementById("taskFeed").style.display = "";
    document.getElementById("exFeedTitle").style.display = "";
    document.getElementById("foodFeedTitle").style.display = "";
    document.getElementById("taskFeedTitle").style.display = "";
    document.getElementById("favoritesDivID").style.display = "";
    document.getElementById("calendar").style.display = "";
    document.getElementById("accountIcon").style.display = "";
    document.getElementById("userHead").style.display = "";

    // document.getElementById("addFavButtonsDiv").style.display = "";

    document.getElementById("userHead").innerHTML = username + "'s Tracking Calendar";


    // document.getElementById("recentFoods").style.display = "";
    // document.getElementById("reccomendedFoods").style.display = "";
    // document.getElementById("fullFavFeed").style.display = "";
    // document.getElementById("favFeedTitle").style.display = "";

    if (day.length < 2) {
        day = "0" + day;
    }
    document.getElementById("exFeedTitle").style.display = '';
    document.getElementById("foodFeedTitle").style.display = '';
    document.getElementById("taskFeedTitle").style.display = '';
    // document.getElementById("favFeedTitle").style.display = '';
    document.getElementById("historyTitle").style.display = 'none';
    document.getElementById("historyFeed").style.display = 'none';
    document.getElementById("publicFeed").style.display = 'none';
    document.getElementById("publicPostDivID").style.display = 'none';
    document.getElementById("commentFeed").style.display = 'none';
    document.getElementById("feed").style.display = 'none';
    document.getElementById("accountPFeed").style.display = 'none';
    document.getElementById("fullFavFeed").style.display = "";



    document.getElementById("exFeed").style.display = '';
    document.getElementById("foodFeed").style.display = '';
    document.getElementById("taskFeed").style.display = '';
    // document.getElementById("favFeed").style.display = '';

    document.getElementById("exFeedTitle").innerHTML = 'EXERCISE';
    document.getElementById("foodFeedTitle").innerHTML = 'FOOD';
    document.getElementById("taskFeedTitle").innerHTML = 'TASKS';
    // document.getElementById("favFeedTitle").innerHTML = 'FAVORITES';
    document.getElementById("historyTitle").innerHTML = 'HISTORY';


    // document.getElementById("chartContainer").style.display = "";
    // document.getElementById("chartContainer2").style.display = "";
    // document.getElementById("chartContainer3").style.display = "";

    document.getElementById("addButtonsDiv").style.display = "";

    // console.log(document.getElementsByClassName("favLab"));

    // createNewTotalNutrientsDaily("TOTAL WATER: <br>" + (Math.round(waterTotalDaily * 100) / 100).toFixed(2) + " G", "TOTAL ENERGY: <br>" + (Math.round(energyTotalDaily * 100) / 100).toFixed(2) + " KCAL", "TOTAL VITAMIN C (ASCORBIC ACID): <br>" + (Math.round(vitaminTotalDaily * 100) / 100).toFixed(2) + " MG", "TOTAL CARBS: <br>" + (Math.round(carbTotalDaily * 100) / 100).toFixed(2) + " G", "TOTAL NUTRIENTS (TODAY) <br><br><br>TOTAL PROTEIN: <br>" + (Math.round(proteinTotalDaily * 100) / 100).toFixed(2) + " G");



    // load the exercise feed
    db.collection("users").doc(userID).collection("exercises").where("date", "==", day).where("month", "==", month).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            createNewExercise(doc.data().reps, doc.data().sets, doc.data().weight, doc.data().time, doc.data().message, doc.id);
        });
    });
    // load the food/water feed
    db.collection("users").doc(userID).collection("foodAndWater").where("date", "==", day).where("month", "==", month).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewFood(doc.data().food, doc.data().water, doc.data().time, doc.data().message, doc.id)
        });
    });
    // load the task feed
    db.collection("users").doc(userID).collection("tasks").where("date", "==", day).where("month", "==", month).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewTask(doc.data().title, doc.data().description, doc.data().time, doc.id)
        });
    });
    // load the fav feed for food elements
    db.collection("users").doc(userID).collection("favorites").where("foodID", "==", "true").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //CREATE NEW FAV FOOD?
            createNewFavFood(doc.data().food, doc.data().water, doc.data().message, doc.data().time, doc.id)
        });
    });
    // load the fav feed for exercise elements
    db.collection("users").doc(userID).collection("favorites").where("exerciseID", "==", "true").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //CREATE NEW FAV FOOD?
            createNewFavExercise(doc.data().reps, doc.data().sets, doc.data().weight, doc.data().time, doc.data().message, doc.id);
        });
    });
    // load the fav feed for task elements
    db.collection("users").doc(userID).collection("favorites").where("taskID", "==", "true").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //CREATE NEW FAV FOOD?
            createNewFavTask(doc.data().title, doc.data().description, doc.data().time, doc.id)
        });
    });



}
/////////------------------- ADD TASK POST IN DATABASE -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addTask() {
    // initialize and set vars
    var requiredInputs = document.querySelectorAll(".required");
    // var error = false;
    // // this is a 'check' var for if just 1 of all required inputs is empty 
    // var error2 = false;

    // ***********************************************//
    // ***********************************************//
    // *** EVERYTHING COMMENTED IS FOR HAVING REQUIRED 
    // *** INPUT FIELDS AND STYLING THEM RED
    // *** FOR RIGHT NOW YOU CAN ENTER AN EMPTY POST
    // ***********************************************//
    // ***********************************************//

    // // logic for styling the form & setting vars
    // for (var i = 0; i < requiredInputs.length; i++) {
    //     // first reset error to false everytime

    //     error = false;
    //     // if this input is empty, trigger both errors and make input red

    //     if (isBlank(requiredInputs[i])) {
    //         makeRed(requiredInputs[i]);
    //         error2 = true;
    //         error = true;
    //     }
    //     // make input field normal if no error (crucial when first submission case has errors, but second case does not)
    //     if (error == false) {
    //         makeClean(requiredInputs[i]);
    //     }

    // }

    // IF ALL REQUIRED INPUTS ARE FILLED: CONTINUE
    // add food post in database and reload form
    // if (error2 == false) {

    // initialize and set var params
    var title = requiredInputs[0].value;
    var description = requiredInputs[1].value;
    var time = requiredInputs[2].value;
    var date = currDate;
    var month = currMonth;

    //TODO//
    // change the random number implementation?

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);
    // create a new task document in history db
    db.collection("users").doc(userID).collection("history").doc(fill).set({
        title: title,
        description: description,
        time: time,
        date: date,
        month: month,
        taskID: "true"
    }).then(() => {
    }).catch((error) => { });
    // create a new food document with random number id
    db.collection("users").doc(userID).collection("tasks").doc(fill).set({
        title: title,
        description: description,
        time: time,
        date: date,
        month: month
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => { });
}

/////////------------------- ADD FAV TASK POST IN DATABASE -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFavTask() {
    // initialize and set vars
    var requiredInputs = document.querySelectorAll(".required");
    // var error = false;
    // // this is a 'check' var for if just 1 of all required inputs is empty 
    // var error2 = false;

    // ***********************************************//
    // ***********************************************//
    // *** EVERYTHING COMMENTED IS FOR HAVING REQUIRED 
    // *** INPUT FIELDS AND STYLING THEM RED
    // *** FOR RIGHT NOW YOU CAN ENTER AN EMPTY POST
    // ***********************************************//
    // ***********************************************//

    // // logic for styling the form & setting vars
    // for (var i = 0; i < requiredInputs.length; i++) {
    //     // first reset error to false everytime

    //     error = false;
    //     // if this input is empty, trigger both errors and make input red

    //     if (isBlank(requiredInputs[i])) {
    //         makeRed(requiredInputs[i]);
    //         error2 = true;
    //         error = true;
    //     }
    //     // make input field normal if no error (crucial when first submission case has errors, but second case does not)
    //     if (error == false) {
    //         makeClean(requiredInputs[i]);
    //     }

    // }

    // IF ALL REQUIRED INPUTS ARE FILLED: CONTINUE
    // add food post in database and reload form
    // if (error2 == false) {

    // initialize and set var params
    var title = requiredInputs[0].value;
    var description = requiredInputs[1].value;
    var time = requiredInputs[2].value;
    var date = currDate;
    var month = currMonth;

    //TODO//
    // change the random number implementation?

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("users").doc(userID).collection("favorites").doc(fill).set({
        title: title,
        description: description,
        time: time,
        taskID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}

/////////------------------- ADD FOOD POST IN DATABASE -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFoodAndWater() {
    // initialize and set vars
    var requiredInputs = document.querySelectorAll(".required");
    // var error = false;
    // // this is a 'check' var for if just 1 of all required inputs is empty 
    // var error2 = false;

    // ***********************************************//
    // ***********************************************//
    // *** EVERYTHING COMMENTED IS FOR HAVING REQUIRED 
    // *** INPUT FIELDS AND STYLING THEM RED
    // *** FOR RIGHT NOW YOU CAN ENTER AN EMPTY POST
    // ***********************************************//
    // ***********************************************//

    // // logic for styling the form & setting vars
    // for (var i = 0; i < requiredInputs.length; i++) {
    //     // first reset error to false everytime

    //     error = false;
    //     // if this input is empty, trigger both errors and make input red

    //     if (isBlank(requiredInputs[i])) {
    //         makeRed(requiredInputs[i]);
    //         error2 = true;
    //         error = true;
    //     }
    //     // make input field normal if no error (crucial when first submission case has errors, but second case does not)
    //     if (error == false) {
    //         makeClean(requiredInputs[i]);
    //     }

    // }

    // IF ALL REQUIRED INPUTS ARE FILLED: CONTINUE
    // add food post in database and reload form
    // if (error2 == false) {
    // initialize and set var params
    var food = requiredInputs[0].value;
    var water = requiredInputs[1].value;
    var time = requiredInputs[2].value;
    var message = requiredInputs[3].value;
    var date = currDate;
    var month = currMonth;

    //TODO//
    // change the random number implementation?

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);


    // add to history db
    db.collection("users").doc(userID).collection("history").doc(fill).set({
        food: food,
        water: water,
        time: time,
        message: message,
        date: date,
        month: month,
        foodID: "true"
    }).then(() => {

    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;



    // create a new food document with random number id
    db.collection("users").doc(userID).collection("foodAndWater").doc(fill).set({
        food: food,
        water: water,
        time: time,
        message: message,
        date: date,
        month: month
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}

/////////------------------- ADD FAV FOOD POST IN DATABASE -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFavFoodAndWater() {
    // initialize and set vars
    var requiredInputs = document.querySelectorAll(".required");
    // var error = false;
    // // this is a 'check' var for if just 1 of all required inputs is empty 
    // var error2 = false;

    // ***********************************************//
    // ***********************************************//
    // *** EVERYTHING COMMENTED IS FOR HAVING REQUIRED 
    // *** INPUT FIELDS AND STYLING THEM RED
    // *** FOR RIGHT NOW YOU CAN ENTER AN EMPTY POST
    // ***********************************************//
    // ***********************************************//

    // // logic for styling the form & setting vars
    // for (var i = 0; i < requiredInputs.length; i++) {
    //     // first reset error to false everytime

    //     error = false;
    //     // if this input is empty, trigger both errors and make input red

    //     if (isBlank(requiredInputs[i])) {
    //         makeRed(requiredInputs[i]);
    //         error2 = true;
    //         error = true;
    //     }
    //     // make input field normal if no error (crucial when first submission case has errors, but second case does not)
    //     if (error == false) {
    //         makeClean(requiredInputs[i]);
    //     }
    // }

    // IF ALL REQUIRED INPUTS ARE FILLED: CONTINUE
    // add food post in database and reload form
    // if (error2 == false) {
    // initialize and set var params
    var food = requiredInputs[0].value;
    var water = requiredInputs[1].value;
    var message = requiredInputs[2].value;
    var time = requiredInputs[3].value;


    //TODO//
    // change the random number implementation?

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("users").doc(userID).collection("favorites").doc(fill).set({
        food: food,
        water: water,
        time: time,
        message: message,
        foodID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(currDate, currMonth);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });
}
/////////------------------- ADD FAV FOOD POST IN DATABASE FROM FAV FEED -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFavFoodToDB(f) {
    // initialize and set vars

    console.log(f)
    var strings = f.split(',');
    console.log(strings)

    var f1, w, t, m;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        f1 = "";
    }
    else {
        f1 = strings[0];
    }
    if (strings[1] == null) {
        w = "";
    }
    else {
        w = strings[1];
    }

    if (strings[2] == null) {
        m = "";
    }
    else {
        m = strings[2];
    }
    if (strings[3] == null) {
        t = "";
    }
    else {
        t = strings[3];
    }

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("users").doc(userID).collection("foodAndWater").doc(fill).set({
        food: f1,
        water: w,
        time: t,
        message: m,
        date: currDate,
        month: currMonth
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(currDate, currMonth);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- ADD FAV FOOD POST IN DATABASE FROM FAV FEED -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFavHistoryFood(f) {
    // initialize and set vars

    console.log(f)
    var strings = f.split(',');
    console.log(strings)

    var f1, w, t, m;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        f1 = "";
    }
    else {
        f1 = strings[0];
    }
    if (strings[1] == null) {
        w = "";
    }
    else {
        w = strings[1];
    }

    if (strings[2] == null) {
        m = "";
    }
    else {
        m = strings[2];
    }
    if (strings[3] == null) {
        t = "";
    }
    else {
        t = strings[3];
    }

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("users").doc(userID).collection("favorites").doc(fill).set({
        food: f1,
        water: w,
        time: t,
        message: m,
        date: currDate,
        month: currMonth,
        foodID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(currDate, currMonth);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}
/////////------------------- ADD FAV TASK POST IN DATABASE FROM FAV FEED -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFavTaskToDB(f) {
    // initialize and set vars

    var strings = f.split(',');


    var ttl, desc, t;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        ttl = "";
    }
    else {
        ttl = strings[0];
    }
    if (strings[1] == null) {
        desc = "";
    }
    else {
        desc = strings[1];
    }
    if (strings[2] == null) {
        t = "";
    }
    else {
        t = strings[2];
    }


    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("users").doc(userID).collection("tasks").doc(fill).set({
        title: ttl,
        description: desc,
        time: t,
        date: currDate,
        month: currMonth
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(currDate, currMonth);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}
/////////------------------- ADD FAV TASK POST IN DATABASE FROM FAV FEED -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFavHistoryTask(f) {
    // initialize and set vars

    var strings = f.split(',');


    var ttl, desc, t;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        ttl = "";
    }
    else {
        ttl = strings[0];
    }
    if (strings[1] == null) {
        desc = "";
    }
    else {
        desc = strings[1];
    }
    if (strings[2] == null) {
        t = "";
    }
    else {
        t = strings[2];
    }


    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("users").doc(userID).collection("favorites").doc(fill).set({
        title: ttl,
        description: desc,
        time: t,
        date: currDate,
        month: currMonth,
        taskID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(currDate, currMonth);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}
/////////------------------- ADD FAV EXERCISE POST IN DATABASE FROM FAV FEED -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFavExerciseToDB(f) {
    // initialize and set vars

    var strings = f.split(',');


    var m, r, s, w, t;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        m = "";
    }
    else {
        m = strings[0];
    }
    if (strings[1] == null) {
        r = "";
    }
    else {
        r = strings[1];
    }
    if (strings[2] == null) {
        s = "";
    }
    else {
        s = strings[2];
    }
    if (strings[3] == null) {
        w = "";
    }
    else {
        w = strings[3];
    }
    if (strings[4] == null) {
        t = "";
    }
    else {
        t = strings[4];
    }

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("users").doc(userID).collection("exercises").doc(fill).set({
        message: m,
        reps: r,
        sets: s,
        weight: w,
        time: t,
        date: currDate,
        month: currMonth
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(currDate, currMonth);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}

/////////------------------- ADD FAV EXERCISE POST IN DATABASE FROM FAV FEED -----------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE FOOD DOC IN DB W/ RANDOM ID
function addFavHistoryEx(f) {
    // initialize and set vars

    var strings = f.split(',');


    var m, r, s, w, t;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        m = "";
    }
    else {
        m = strings[0];
    }
    if (strings[1] == null) {
        r = "";
    }
    else {
        r = strings[1];
    }
    if (strings[2] == null) {
        s = "";
    }
    else {
        s = strings[2];
    }
    if (strings[3] == null) {
        w = "";
    }
    else {
        w = strings[3];
    }
    if (strings[4] == null) {
        t = "";
    }
    else {
        t = strings[4];
    }

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("users").doc(userID).collection("favorites").doc(fill).set({
        message: m,
        reps: r,
        sets: s,
        weight: w,
        time: t,
        date: currDate,
        month: currMonth,
        exerciseID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(currDate, currMonth);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}

/////////------------------- ADD EXERCISE POST IN DATABASE --------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE EXERCISE DOC IN DB W/ RANDOM ID
function addExercise() {
    // initialize and set vars
    var requiredInputs = document.querySelectorAll(".required");

    // ***********************************************//
    // ***********************************************//
    // *** EVERYTHING COMMENTED IS FOR HAVING REQUIRED 
    // *** INPUT FIELDS AND STYLING THEM RED
    // *** FOR RIGHT NOW YOU CAN ENTER AN EMPTY POST
    // ***********************************************//
    // ***********************************************//

    // var error = false;
    // this is a 'check' var for if just 1 of all required inputs is empty 
    // var error2 = false;

    // logic for styling the form & setting vars
    // for (var i = 0; i < requiredInputs.length; i++) {
    //     // first reset error to false everytime
    //     error = false;
    //     // if this input is empty, trigger both errors and make input red
    //     if (isBlank(requiredInputs[i])) {
    //         makeRed(requiredInputs[i]);
    //         error = true;
    //         // error2 = true;
    //     }

    //     // make input field normal if no error (crucial when first submission case has errors, but second case does not)
    //     if (error == false) {
    //         makeClean(requiredInputs[i]);
    //     }
    // }
    // IF ALL REQUIRED INPUTS ARE FILLED: CONTINUE
    // add exercise post in database and reload form
    // if (error2 == false) {

    // initialize and set var params
    var reps = requiredInputs[1].value;
    var sets = requiredInputs[2].value;
    var weight = requiredInputs[3].value;
    var time = requiredInputs[4].value;
    var message = requiredInputs[0].value;
    var date = currDate;
    var month = currMonth;

    //TODO//
    // change the random number implementation?

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 100000);

    // create a new exercise document in history db
    db.collection("users").doc(userID).collection("history").doc(fill).set({
        reps: reps,
        sets: sets,
        weight: weight,
        time: time,
        message: message,
        date: date,
        month: month,
        exerciseID: "true"
    }).then(() => {
        // clear the feed
        // clearChildren();

        // //TODO//
        // // implement post successful alert

        // // load the feed
        // loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
    // create a new exercise document with random number id
    db.collection("users").doc(userID).collection("exercises").doc(fill).set({
        reps: reps,
        sets: sets,
        weight: weight,
        time: time,
        message: message,
        date: date,
        month: month
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}
/////////------------------- ADD FAV EXERCISE POST IN DATABASE --------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORM SUBMIT LOGIC, SET FORM VARS FOR POST, CREATE EXERCISE DOC IN DB W/ RANDOM ID
function addFavExercise() {
    // initialize and set vars
    var requiredInputs = document.querySelectorAll(".required");

    // ***********************************************//
    // ***********************************************//
    // *** EVERYTHING COMMENTED IS FOR HAVING REQUIRED 
    // *** INPUT FIELDS AND STYLING THEM RED
    // *** FOR RIGHT NOW YOU CAN ENTER AN EMPTY POST
    // ***********************************************//
    // ***********************************************//

    // var error = false;
    // this is a 'check' var for if just 1 of all required inputs is empty 
    // var error2 = false;

    // logic for styling the form & setting vars
    // for (var i = 0; i < requiredInputs.length; i++) {
    //     // first reset error to false everytime
    //     error = false;
    //     // if this input is empty, trigger both errors and make input red
    //     if (isBlank(requiredInputs[i])) {
    //         makeRed(requiredInputs[i]);
    //         error = true;
    //         // error2 = true;
    //     }

    //     // make input field normal if no error (crucial when first submission case has errors, but second case does not)
    //     if (error == false) {
    //         makeClean(requiredInputs[i]);
    //     }
    // }
    // IF ALL REQUIRED INPUTS ARE FILLED: CONTINUE
    // add exercise post in database and reload form
    // if (error2 == false) {

    // initialize and set var params
    var reps = requiredInputs[1].value;
    var sets = requiredInputs[2].value;
    var weight = requiredInputs[3].value;
    var time = requiredInputs[4].value;
    var message = requiredInputs[0].value;

    //TODO//
    // change the random number implementation?

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 100000);

    // create a new exercise document with random number id
    db.collection("users").doc(userID).collection("favorites").doc(fill).set({
        reps: reps,
        sets: sets,
        weight: weight,
        time: time,
        message: message,
        exerciseID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadFeed(currDate, currMonth);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}
/////////------------------- DELETE TASK POST FROM DB ---------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// DELETE THIS 'ID' TASK ENTRY, CLEAR FEED, LOAD FEED
function deleteTask(id) {
    // delete task post document with reference id var passed through function
    db.collection("users").doc(userID).collection("tasks").doc("" + id).delete().then(() => {
        // clear the feed
        clearChildren();
        // load the feed
        loadFeed(currDate, currMonth);
    }).catch((error) => {
        alert("Error: " + error);
    });
}

/////////------------------- DELETE TASK POST FROM DB ---------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// DELETE THIS 'ID' TASK ENTRY, CLEAR FEED, LOAD FEED
function deletePost(id) {
    // delete task post document with reference id var passed through function
    db.collection("posts").doc("" + id).delete().then(() => {
        // clear the feed
        clearChildren();
        // load the feed
        loadMyAccount();
    }).catch((error) => {
        alert("Error: " + error);
    });
}

/////////------------------- DELETE TASK POST FROM DB ---------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// DELETE THIS 'ID' TASK ENTRY, CLEAR FEED, LOAD FEED
function deleteFavTask(id) {
    // delete task post document with reference id var passed through function
    db.collection("users").doc(userID).collection("favorites").doc("" + id).delete().then(() => {
        // clear the feed
        clearChildren();
        // load the feed
        loadFeed(currDate, currMonth);
    }).catch((error) => {
        alert("Error: " + error);
    });
}

/////////------------------- DELETE EXERCISE POST FROM DB ---------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// DELETE THIS 'ID' EXERCISE ENTRY, CLEAR FEED, LOAD FEED
function deleteExercise(id) {
    // delete exercise post document with reference id var passed through function
    db.collection("users").doc(userID).collection("exercises").doc("" + id).delete().then(() => {
        // clear the feed
        clearChildren();
        // load the feed
        loadFeed(currDate, currMonth);
    }).catch((error) => {
        alert("Error: " + error);
    });
}

/////////------------------- DELETE FAV EXERCISE POST FROM DB ---------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// DELETE THIS 'ID' EXERCISE ENTRY, CLEAR FEED, LOAD FEED
function deleteFavExercise(id) {
    // delete exercise post document with reference id var passed through function
    db.collection("users").doc(userID).collection("favorites").doc("" + id).delete().then(() => {
        // clear the feed
        clearChildren();
        // load the feed
        loadFeed(currDate, currMonth);
    }).catch((error) => {
        alert("Error: " + error);
    });
}
/////////------------------- DELETE FOOD POST FROM DB -------------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// DELETE THIS 'ID' FOOD ENTRY, CLEAR FEED, LOAD FEED
function deleteFood(id) {
    // delete food post document with referemce id var passed through function
    db.collection("users").doc(userID).collection("foodAndWater").doc("" + id).delete().then(() => {
        // clear the feed
        clearChildren();
        // load the feed
        loadFeed(currDate, currMonth);
    }).catch((error) => {
        alert("Error: " + error);
    });
}
/////////------------------- DELETE FAV FOOD POST FROM DB -------------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// DELETE THIS 'ID' FOOD ENTRY, CLEAR FEED, LOAD FEED
function deleteFavFood(id) {
    // delete food post document with referemce id var passed through function
    db.collection("users").doc(userID).collection("favorites").doc("" + id).delete().then(() => {
        // clear the feed
        clearChildren();
        // load the feed
        loadFeed(currDate, currMonth);
    }).catch((error) => {
        alert("Error: " + error);
    });
}

/////////------------------- UPDATE TASK POST ----------------------/////////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE & SET EDIT VARS RESPECTIVELY, UPDATE TASK DB POST, RELOAD FEED
function updateTaskEntry(docId) {
    // initialize vars

    docId = "" + docId;
    date = "" + currDate;
    month = "" + currMonth;
    var titleEdit, descriptionEdit, timeEdit;
    var requiredInputs = document.querySelectorAll(".required");

    // set edit vars respectively (none if empty)
    for (var i = 0; i < requiredInputs.length; i++) {
        if (requiredInputs[i] != "undefined" && requiredInputs[i] != "null") {
            if (i == 0) {
                // title
                titleEdit = requiredInputs[i].value;
            }
            else if (i == 1) {
                // description
                descriptionEdit = requiredInputs[i].value;
            }
            else if (i == 2) {
                // time
                timeEdit = requiredInputs[i].value;
            }
        }
        else {
            //empty input
            if (i == 0) {
                // title
                titleEdit = "";
            }
            else if (i == 1) {
                // description
                descriptionEdit = "";
            }
            else if (i == 2) {
                // time
                timeEdit = "";
            }
        }
    }

    // update these vars in database
    db.collection("users").doc(userID).collection("tasks").doc(docId).set({
        title: titleEdit,
        description: descriptionEdit,
        time: timeEdit,
        date: date,
        month: month
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // add an animation/alert to say update success

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post!" + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- UPDATE FAV TASK POST ----------------------/////////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE & SET EDIT VARS RESPECTIVELY, UPDATE TASK DB POST, RELOAD FEED
function updateFavTaskEntry(docId) {
    // initialize vars
    docId = "" + docId;
    date = "" + currDate;
    month = "" + currMonth;
    var titleEdit, descriptionEdit, timeEdit;
    var requiredInputs = document.querySelectorAll(".required");

    // set edit vars respectively (none if empty)
    for (var i = 0; i < requiredInputs.length; i++) {
        if (requiredInputs[i] != "undefined" && requiredInputs[i] != "null") {
            if (i == 0) {
                // title
                titleEdit = requiredInputs[i].value;
            }
            else if (i == 1) {
                // description
                descriptionEdit = requiredInputs[i].value;
            }
            else if (i == 2) {
                // time
                timeEdit = requiredInputs[i].value;
            }
        }
        else {
            //empty input
            if (i == 0) {
                // title
                titleEdit = "";
            }
            else if (i == 1) {
                // description
                descriptionEdit = "";
            }
            else if (i == 2) {
                // time
                timeEdit = "";
            }
        }
    }

    // update these vars in database
    db.collection("users").doc(userID).collection("favorites").doc(docId).set({
        title: titleEdit,
        description: descriptionEdit,
        time: timeEdit,
        taskID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // add an animation/alert to say update success

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post!" + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- UPDATE EXERCISE POST ----------------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE & SET EDIT VARS RESPECTIVELY, UPDATE EXERCISE DB POST, RELOAD FEED
function updateExerciseEntry(docId) {
    // initialize vars
    docId = "" + docId;
    date = "" + currDate;
    month = "" + currMonth;
    var repsEdit, setsEdit, weightEdit, timeEdit, messageEdit;
    // var requiredInput = document.getElementById("#12345");
    var requiredInputs = document.querySelectorAll(".required");

    // set edit vars respectively (none if empty)
    for (var i = 0; i < requiredInputs.length; i++) {
        if (requiredInputs[i] != "undefined" && requiredInputs[i] != "null") {
            if (i == 0) {
                // title
                messageEdit = requiredInputs[i].value;
            }
            else if (i == 1) {
                // reps
                repsEdit = requiredInputs[i].value;
            }
            else if (i == 2) {
                // sets
                setsEdit = requiredInputs[i].value;
            }
            else if (i == 3) {
                // weight
                weightEdit = requiredInputs[i].value;
            }
            else if (i == 4) {
                // time
                timeEdit = requiredInputs[i].value;
            }
        }
        else {
            // empty input
            if (i == 0) {
                // reps
                repsEdit = "";
            }
            else if (i == 1) {
                // sets
                setsEdit = "";
            }
            else if (i == 2) {
                // weight
                weightEdit = "";
            }
            else if (i == 3) {
                // message
                messageEdit = "";
            }
            else if (i == 4) {
                // time
                timeEdit = "";
            }
        }
    }

    // update these vars in database
    db.collection("users").doc(userID).collection("exercises").doc(docId).set({
        reps: repsEdit,
        sets: setsEdit,
        weight: weightEdit,
        time: timeEdit,
        message: messageEdit,
        date: date,
        month: month
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // add an animation/alert to say update success

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post!" + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- UPDATE FAV EXERCISE POST ----------------------/////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE & SET EDIT VARS RESPECTIVELY, UPDATE EXERCISE DB POST, RELOAD FEED
function updateFavExerciseEntry(docId) {
    // initialize vars
    docId = "" + docId;
    date = "" + currDate;
    month = "" + currMonth;
    var repsEdit, setsEdit, weightEdit, timeEdit, messageEdit;
    // var requiredInput = document.getElementById("#12345");
    var requiredInputs = document.querySelectorAll(".required");

    // set edit vars respectively (none if empty)
    for (var i = 0; i < requiredInputs.length; i++) {
        if (requiredInputs[i] != "undefined" && requiredInputs[i] != "null") {
            if (i == 0) {
                // title
                messageEdit = requiredInputs[i].value;
            }
            else if (i == 1) {
                // reps
                repsEdit = requiredInputs[i].value;
            }
            else if (i == 2) {
                // sets
                setsEdit = requiredInputs[i].value;
            }
            else if (i == 3) {
                // weight
                weightEdit = requiredInputs[i].value;
            }
            else if (i == 4) {
                // time
                timeEdit = requiredInputs[i].value;
            }
        }
        else {
            // empty input
            if (i == 0) {
                // reps
                repsEdit = "";
            }
            else if (i == 1) {
                // sets
                setsEdit = "";
            }
            else if (i == 2) {
                // weight
                weightEdit = "";
            }
            else if (i == 3) {
                // message
                messageEdit = "";
            }
            else if (i == 4) {
                // time
                timeEdit = "";
            }
        }
    }

    // update these vars in database
    db.collection("users").doc(userID).collection("favorites").doc(docId).set({
        reps: repsEdit,
        sets: setsEdit,
        weight: weightEdit,
        time: timeEdit,
        message: messageEdit,
        exerciseID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // add an animation/alert to say update success

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post!" + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- UPDATE FOOD POST ---------------------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE & SET EDIT VARS RESPECTIVELY, UPDATE FOOD DB POST, RELOAD FEED
function updateFoodEntry(docId) {
    // initialize vars
    docId = "" + docId;
    var date = "" + currDate;
    var month = "" + currMonth;
    var foodEdit, waterEdit, timeEdit, messageEdit;
    var requiredInputs = document.querySelectorAll(".required");

    // set edit vars respectively
    for (var i = 0; i < requiredInputs.length; i++) {
        console.log(requiredInputs[i].value);
        if (requiredInputs[i].value != "undefined" && requiredInputs[i].value != "null") {
            if (i == 0) {
                // food
                foodEdit = requiredInputs[i].value;
            }
            else if (i == 1) {
                // water/bev
                waterEdit = requiredInputs[i].value;
            }
            else if (i == 2) {
                // message
                messageEdit = requiredInputs[i].value;
            }
            else if (i == 3) {
                // time
                timeEdit = requiredInputs[i].value;
            }
        }
        else {
            // set empty input string
            if (i == 0) {
                // food
                foodEdit = "";
            }
            else if (i == 1) {
                // water
                waterEdit = "";
            }
            else if (i == 2) {
                // message
                messageEdit = "";
            }
            else if (i == 3) {
                // time
                timeEdit = "";
            }
        }
    }

    // update these vars in database
    db.collection("users").doc(userID).collection("foodAndWater").doc(docId).set({
        food: foodEdit,
        water: waterEdit,
        time: timeEdit,
        message: messageEdit,
        date: date,
        month: month
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // add an animation/alert to say update success

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- UPDATE FAV FOOD POST ---------------------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE & SET EDIT VARS RESPECTIVELY, UPDATE FOOD DB POST, RELOAD FEED
function updateFavFoodEntry(docId) {
    // initialize vars
    docId = "" + docId;
    var date = "" + currDate;
    var month = "" + currMonth;
    var foodEdit, waterEdit, timeEdit, messageEdit;
    var requiredInputs = document.querySelectorAll(".required");

    // set edit vars respectively
    for (var i = 0; i < requiredInputs.length; i++) {
        console.log(requiredInputs[i].value);
        if (requiredInputs[i].value != "undefined" && requiredInputs[i].value != "null") {
            if (i == 0) {
                // food
                foodEdit = requiredInputs[i].value;
            }
            else if (i == 1) {
                // water/bev
                waterEdit = requiredInputs[i].value;
            }
            else if (i == 2) {
                // message
                messageEdit = requiredInputs[i].value;
            }
            else if (i == 3) {
                // time
                timeEdit = requiredInputs[i].value;
            }
        }
        else {
            // set empty input string
            if (i == 0) {
                // food
                foodEdit = "";
            }
            else if (i == 1) {
                // water
                waterEdit = "";
            }
            else if (i == 2) {
                // message
                messageEdit = "";
            }
            else if (i == 3) {
                // time
                timeEdit = "";
            }
        }
    }

    // update these vars in database
    db.collection("users").doc(userID).collection("favorites").doc(docId).set({
        food: foodEdit,
        water: waterEdit,
        time: timeEdit,
        message: messageEdit,
        date: date,
        month: month,
        foodID: "true"
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // add an animation/alert to say update success

        // load the feed
        loadFeed(date, month);
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- UPDATE ACCOUNT IN DB-------------------///////////////
///////////////////////////////////////////////////////////////////////////////////// 
// UPDATE ACCOUNT USERNAME
function updateAccount() {
    // TODO - UPDATE ACTUAL ACCOUNT USERNAME
    // initialize vars
    date = "" + currDate;
    month = "" + currMonth;
    var usernameEdit = username;
    var phoneNumEdit = myPhoneNumber;

    var myProfilePic;

    // var edit2, edit3;
    var requiredInputs = document.querySelectorAll(".required");

    usernameEdit = requiredInputs[0].value;
    username = requiredInputs[0].value;

    // edit2
    phoneNumEdit = requiredInputs[1].value;
    myPhoneNumber = requiredInputs[1].value


    var photoRef = requiredInputs[2].value
    console.log(photoRef);


    const user = firebase.auth().currentUser;
    var fileInput = document.getElementById("attachProfPic");
    var file = fileInput.files.item(0);
    var photoRefArr = photoRef.split('.');
    photoRef = username + "." + photoRefArr[1];
    storageRef = storage.child(photoRef);

    console.log("file: " + file)
    storageRef.put(file).then((snapshot) => {
        console.log("uploaded a file: " + photoRef);
    });

    // update firebase account display name
    user.updateProfile({
        displayName: usernameEdit,
        // phoneNumber: phoneNumEdit
        photoURL: "" + photoRef
    }).then(() => {
        console.log("updated this display name and phone number");
    }).catch((error) => {
        console.log(error);
    });

    // update these vars in database
    db.collection("users").doc(userID).set({
        username: usernameEdit,
        userID: userID,
        email: email,
        phoneNumber: phoneNumEdit,
        profPic: photoRef
    }).then(() => {
        storage.child(photoRef).getDownloadURL().then((url) => {
            console.log(url);
            var img = document.getElementById('accountProfPicIcon');
            //  var img = document.getElementById('accountProfPicIcon');
            img.setAttribute('src', url);
            document.getElementById('profPicDiv').style.display = 'unset';
            loadMyAccount();
            // window.location.href = "../TrackingPage/tracking.html?userID=" + userID + "&username=" + usernameEdit + "&email=" + email;
        })
    })
        .catch((error) => {
            // alert("ERROR submitting post!" + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- SIGN OUT OF ACCOUNT-------------------//////////////////
///////////////////////////////////////////////////////////////////////////////////// 
// UPDATE ACCOUNT USERNAME
function signOutAccount() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "../TrackingPage/tracking.html";
        // loadLoginPage();
    }).catch((error) => {
        // An error happened.
        // alert("Error signing out:" + error);
    });
}


/********************************************************************/

/********************************************************************/
/*********************** 'SIDE' FUNCTIONS ***************************/
/********************************************************************/

/********************************************************************/


/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- SET/FORMAT MONTH VARIABLE ------------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// STATEMENTS FOR EACH MONTH (VAR FORMATTING), RETURN M STRING
function setMonth(m) {
    // format the month var
    if (m == '01') {
        m = "January";
    }
    else if (m == '02') {
        m = "February";
    }
    else if (m == '03') {
        m = "March";
    }
    else if (m == '04') {
        m = "April";
    }
    else if (m == '05') {
        m = "May";
    }
    else if (m == '06') {
        m = "June";
    }
    else if (m == '07') {
        m = "July";
    }
    else if (m == '08') {
        m = "August";
    }
    else if (m == '09') {
        m = "September";
    }
    else if (m == '10') {
        m = "October";
    }
    else if (m == '11') {
        m = "November";
    }
    else if (m == '12') {
        m = "December";
    }
    return m;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- GET TODAYS DATE AND MONTH -------------------///////////
/////////////////////////////////////////////////////////////////////////////////////
// RETURN ONE STRING VAR: EX: 25/06 (DAY/MONTH)
function getDateAndMonth() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    return dd + "/" + mm;
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- RANDOM NUMBER GENERATOR --------------------////////////
/////////////////////////////////////////////////////////////////////////////////////
// RETURN A RANDOM NUMBER BETWEEN MIN/MAX VARS
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- GET VALUE OF URL PARAM ---------------------////////////
///////////////////////////////////////////////////////////////////////////////////// 
// RETURN (STRING) VAR OF GIVEN URL PARAM 'KEY'
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CHECK IF THIS INPUT IS BLANK --------------/////////////
///////////////////////////////////////////////////////////////////////////////////// 
// RETURN BOOLEAN FOR IF INPUT IS 'BLANK' 
function isBlank(inputField) {
    // checks for empty checkbox
    if (inputField.type === "checkbox") {
        if (inputField.checked) {
            return false;
        }
        else {
            return true;
        }
    }
    // checks for empty input fields
    if (inputField.value === "") {
        return true;
    }
    else {
        return false;
    }

    //TODO//
    // maybe need to implement more checks here for diff types of input fields

}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- MAKE THIS INPUT RED -----------------------/////////////
///////////////////////////////////////////////////////////////////////////////////// 
// STYLE INPUT DIV BACKGROUNDCOLOR RED
function makeRed(inputDiv) {
    // input field set to red
    inputDiv.style.backgroundColor = "#ff0000";
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- MAKE THIS INPUT 'CLEAN' -------------------/////////////
///////////////////////////////////////////////////////////////////////////////////// 
// STYLE INPUT FIELD TO 'NORMAL'
function makeClean(inputDiv) {
    // input field set to white
    // inputDiv.parentNode.style.backgroundColor = "#FFFFFF";
    // // text set to black
    // inputDiv.parentNode.style.color = "#000000";
    // text field set to white	
    inputDiv.style.backgroundColor = "#FFFFFF";
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
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- USER IS NOT LOGGED IN -----------------/////////////////
/////////////////////////////////////////////////////////////////////////////////////
// STYLE PAGE RESPECTIVELY
function userSignedOut() {
    // clear the feed
    clearChildren();
    // load vars for when user is signed out and show register

    // hide links to pages when user is logged in
    // document.getElementById('accLink').style.display = 'none';
    document.getElementById('favLink').style.display = 'none';
    document.getElementById('usernameHeader').style.display = 'none';
    document.getElementById('feed').style.display = 'none';
    document.getElementById('taskFeed').style.display = 'none';
    document.getElementById('exFeed').style.display = 'none';
    document.getElementById('foodFeed').style.display = 'none';
    document.getElementById("taskIcon").style.display = "none";
    document.getElementById("taskIconLabel").style.display = "none";
    document.getElementById("exerciseIcon").style.display = "none";
    document.getElementById("exerciseIconLabel").style.display = "none";
    document.getElementById("foodIcon").style.display = "none";
    document.getElementById("foodIconLabel").style.display = "none";
    document.getElementById('todaysDate').style.display = 'none';
    document.getElementById('accountIcon').style.display = 'none';
    document.getElementById('favoritesIcon').style.display = 'none';
    document.getElementById('favLabel').style.display = 'none';
    document.getElementById("historyTitle").style.display = "none";
    document.getElementById("historyFeed").style.display = "none";

    document.getElementById('publicIcon').style.display = 'none';
    document.getElementById('trackingIcon').style.display = 'none';

    document.getElementById('publicIconLabel').style.display = 'none';
    document.getElementById('trackingIconLabel').style.display = 'none';
    document.getElementById('accountIconLabel').style.display = 'none';


    document.getElementById("totalFeed").style.display = "none";
    document.getElementById("reccomendedFeed").style.display = "none";
    document.getElementById("idealNutritionValuesFeed").style.display = "none";

    // document.getElementById('favoritesDivID').style.display = 'none';
    document.getElementById("fullFavFeed").style.display = "none";
    // document.getElementById("favFeedTitle").style.display = "none";

    document.getElementById('filler1').style.display = 'none';

    // document.getElementById('topnav1').style.display = '';



    // show links to pages when user is logged out
    document.getElementById('logLink').style.display = '';
    document.getElementById('regLink').style.display = '';
    document.getElementById('signedOut').style.display = '';
    document.getElementById('signedOut1').style.display = '';

}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- RELOAD THE FEED -----------------///////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// CLEAR FEED AND THEN LOAD FEED
function reload() {
    // reload the page
    // clear the feed
    clearChildren();
    // load the feed
    loadFeed(currDate, currMonth);
}
/////EDIT FOOOD FAV
function editThisFoodFav(f) {
    // reload the page

    clearChildren();
    document.getElementById("calendar").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    // document.getElementById("accountIcon").style.display = "none";
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("feed").style.display = "";
    document.getElementById("fullFavFeed").style.display = "none";
    document.getElementById("addButtonsDiv").style.display = "none";


    // document.getElementById("filler1").style.display = "none";
    var strings = f.split('^^^');

    var f1, w, t, m, id;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        f1 = "";
    }
    else {
        f1 = strings[0];
    }
    if (strings[1] == null) {
        w = "";
    }
    else {
        w = strings[1];
    }
    if (strings[2] == null) {
        m = "";
    }
    else {
        m = strings[2];
    }
    if (strings[3] == null) {
        t = "";
    }
    else {
        t = strings[3];
    }

    id = strings[4];

    // id.substring(1);
    console.log(id);
    //DO CHECKS AND ADD THIS AN ELEMENT

    // console.log("hey edit, " + f,w,t,m)

    var cancelButton = document.createElement('div');
    var food = document.createElement('div');
    var water = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');
    var deleteButton = document.createElement('div');

    // set the ids
    cancelButton.id = "cancelNewEdit";
    food.id = "foodNewEdit";
    water.id = "waterNewEdit";
    time.id = "timeFoodNewEdit";
    message.id = "messageFoodNewEdit";
    postButton.id = "postButtonFoodNewEdit";
    deleteButton.id = "deleteButtonExNewEdit";

    // create the edit form by setting the HTML content of each div
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/>"
    food.innerHTML = "<br><br><br><label class = 'exClass1'>Food (ex: Banana, scrambled eggs)<br><br> </label> <input type='text' id='foodInput' class = 'required' value = '" + f1 + "'><br><br><br>  ";
    water.innerHTML = "<label class = 'exClass1'>Water/Beverages (ex: Water, Protein Shake)<br> <br> </label><input type='text' class = 'required' id='waterInput' value = '" + w + "'><br><br><br>  ";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br>  </label><input type='text' id='timeFoodInput' class = 'required' value = '" + t + "'><br><br> <br> ";
    message.innerHTML = "<label class = 'exClass1'>Note (ex: 4 servings, taste rating 6/10)<br><br> </label><input type='text' id='messageFoodInput'class = 'required' value = '" + m + "'><br><br><br>";
    // update button
    postButton.innerHTML = "<input onclick = 'updateFavFoodEntry(" + id + ")' type='submit' id = 'pButton1' value = 'UPDATE'/>";
    // delete button
    deleteButton.innerHTML = "<input onclick = 'deleteFavFood(" + id + ")' type='submit' id = 'pButton1' value = 'DELETE'/>";

    // load the food form on the feed
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(food)
        .appendChild(water)
        .appendChild(message)
        .appendChild(time)
        .appendChild(postButton)
        .appendChild(deleteButton);




    // // clear the feed
    // clearChildren();
    // // load the feed
    // loadFeed(currDate, currMonth);
}
/////EDIT FOOOD FAV
function editThisFood(f) {
    // reload the page

    clearChildren();
    document.getElementById("calendar").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    // document.getElementById("accountIcon").style.display = "none";
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("feed").style.display = "";
    document.getElementById("fullFavFeed").style.display = "none";
    document.getElementById("addButtonsDiv").style.display = "none";


    // document.getElementById("filler1").style.display = "none";
    var strings = f.split('^^^');

    var f1, w, t, m, id;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        f1 = "";
    }
    else {
        f1 = strings[0];
    }
    if (strings[1] == null) {
        w = "";
    }
    else {
        w = strings[1];
    }
    if (strings[2] == null) {
        m = "";
    }
    else {
        m = strings[2];
    }
    if (strings[3] == null) {
        t = "";
    }
    else {
        t = strings[3];
    }

    id = strings[4];

    // id.substring(1);
    console.log(id);
    //DO CHECKS AND ADD THIS AN ELEMENT

    // console.log("hey edit, " + f,w,t,m)

    var cancelButton = document.createElement('div');
    var food = document.createElement('div');
    var water = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');
    var deleteButton = document.createElement('div');


    // set the ids
    cancelButton.id = "cancelNewEdit";
    food.id = "foodNewEdit";
    water.id = "waterNewEdit";
    time.id = "timeFoodNewEdit";
    message.id = "messageFoodNewEdit";
    postButton.id = "postButtonFoodNewEdit";
    deleteButton.id = "deleteButtonExNewEdit";

    // create the edit form by setting the HTML content of each div
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/>"
    food.innerHTML = "<br><br><br><label class = 'exClass1'>Food (ex: Banana, scrambled eggs)<br><br> </label> <input type='text' id='foodInput' class = 'required' value = '" + f1 + "'><br><br><br>  ";
    water.innerHTML = "<label class = 'exClass1'>Water/Beverages (ex: Water, Protein Shake)<br> <br> </label><input type='text' class = 'required' id='waterInput' value = '" + w + "'><br><br><br>  ";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br>  </label><input type='text' id='timeFoodInput' class = 'required' value = '" + t + "'><br><br> <br> ";
    message.innerHTML = "<label class = 'exClass1'>Note (ex: 4 servings, taste rating 6/10)<br><br> </label><input type='text' id='messageFoodInput'class = 'required' value = '" + m + "'><br><br><br>";
    // update button
    postButton.innerHTML = "<input onclick = 'updateFoodEntry(" + id + ")' type='submit' id = 'pButton1' value = 'UPDATE'/>";


    var addFavBut = document.createElement('div');
    var addTodayBut = document.createElement('div');
    addFavBut.innerHTML = "<input onclick = 'addFavFoodAndWater()' type='submit' class = 'addButtonFeedFav' value = 'ADD TO FAVORITES'/>";
    addTodayBut.innerHTML = "<input onclick = 'addFoodAndWater()' type='submit' class = 'addButtonToday' value = 'ADD TO TODAY'/>";

    // delete button
    deleteButton.innerHTML = "<input onclick = 'deleteFood(" + id + ")' type='submit' id = 'pButton1' value = 'DELETE'/>";

    // load the food form on the feed
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(food)
        .appendChild(water)
        .appendChild(message)
        .appendChild(time)
        .appendChild(postButton)
        .appendChild(addFavBut)
        .appendChild(addTodayBut)
        .appendChild(deleteButton);




    // // clear the feed
    // clearChildren();
    // // load the feed
    // loadFeed(currDate, currMonth);
}

/////EDIT TASK FAV
function editThisTaskFav(f) {
    // reload the page

    clearChildren();
    document.getElementById("calendar").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    // document.getElementById("accountIcon").style.display = "none";
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("feed").style.display = "";
    document.getElementById("addButtonsDiv").style.display = "none";
    document.getElementById("fullFavFeed").style.display = "none";
    var strings = f.split('^^^');

    var ttl, desc, t;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        ttl = "";
    }
    else {
        ttl = strings[0];
    }
    if (strings[1] == null) {
        desc = "";
    }
    else {
        desc = strings[1];
    }
    if (strings[2] == null) {
        t = "";
    }
    else {
        t = strings[2];
    }

    id = strings[3];

    // id.substring(1);
    //DO CHECKS AND ADD THIS AN ELEMENT

    // console.log("hey edit, " + f,w,t,m)

    // initialize div elements
    var cancelButton = document.createElement('div');
    var title = document.createElement('div');
    var description = document.createElement('div');
    var time = document.createElement('div');
    var postButton = document.createElement('div');
    var deleteButton = document.createElement('div');

    // set the ids
    cancelButton.id = "cancelButtonNewEdit";
    title.id = "titleNewEdit";
    description.id = "descriptionNewEdit";
    time.id = "timeExNewEdit";
    postButton.id = "postButtonExNewEdit";
    deleteButton.id = "deleteButtonExNewEdit";

    // create the edit form by setting the HTML content of each div
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/>"
    title.innerHTML = "<br><br><br><label class = 'exClass1'>Title: <br><br></label><input type='text' class = 'required' id='12345' value = '" + ttl + "'><br><br><br>";
    description.innerHTML = "<label class = 'exClass1'>Description: <br><br></label> <input type='text' id='repsInput' class = 'required' value = '" + desc + "'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time: <br><br></label><input type='text' id='timeInput' class = 'required' value = '" + t + "'><br><br><br>";
    // update button
    postButton.innerHTML = "<input onclick = 'updateFavTaskEntry(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'UPDATE'/>"
    // delete button
    deleteButton.innerHTML = "<input onclick = 'deleteFavTask(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'DELETE'/>"

    // load the edit form on the feed
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(title)
        .appendChild(description)
        .appendChild(time)
        .appendChild(postButton)
        .appendChild(deleteButton);



    // // clear the feed
    // clearChildren();
    // // load the feed
    // loadFeed(currDate, currMonth);
}
/////EDIT TASK FAV
function editThisTask(f) {
    // reload the page

    clearChildren();
    document.getElementById("calendar").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    // document.getElementById("accountIcon").style.display = "none";
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("feed").style.display = "";
    document.getElementById("addButtonsDiv").style.display = "none";
    document.getElementById("fullFavFeed").style.display = "none";
    var strings = f.split('^^^');

    var ttl, desc, t;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        ttl = "";
    }
    else {
        ttl = strings[0];
    }
    if (strings[1] == null) {
        desc = "";
    }
    else {
        desc = strings[1];
    }
    if (strings[2] == null) {
        t = "";
    }
    else {
        t = strings[2];
    }

    id = strings[3];

    // id.substring(1);
    //DO CHECKS AND ADD THIS AN ELEMENT

    // console.log("hey edit, " + f,w,t,m)

    // initialize div elements
    var cancelButton = document.createElement('div');
    var title = document.createElement('div');
    var description = document.createElement('div');
    var time = document.createElement('div');

    var postButton = document.createElement('div');
    var deleteButton = document.createElement('div');

    var addFavBut = document.createElement('div');
    var addTodayBut = document.createElement('div');
    addFavBut.innerHTML = "<input onclick = 'addFavTask()' type='submit' class = 'addButtonFeedFav' value = 'ADD TO FAVORITES'/>";
    addTodayBut.innerHTML = "<input onclick = 'addTask()' type='submit' class = 'addButtonToday' value = 'ADD TO TODAY'/>";

    var addReminderButton = document.createElement('div');
    addReminderButton.id = "addReminderButton";
    addReminderButton.innerHTML = "<input onclick = 'textTest() 'type='submit' form='mainForm' id = 'textButton' value = 'TEXT ME'/>"

    // set the ids
    cancelButton.id = "cancelButtonNewEdit";
    title.id = "titleNewEdit";
    description.id = "descriptionNewEdit";
    time.id = "timeExNewEdit";
    postButton.id = "postButtonExNewEdit";
    deleteButton.id = "deleteButtonExNewEdit";

    // create the edit form by setting the HTML content of each div
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/>"
    title.innerHTML = "<br><br><br><label class = 'exClass1'>Title: <br><br></label><input type='text' class = 'required' id='12345' value = '" + ttl + "'><br><br><br>";
    description.innerHTML = "<label class = 'exClass1'>Description: <br><br></label> <input type='text' id='repsInput' class = 'required' value = '" + desc + "'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time: <br><br></label><input type='text' id='timeInput' class = 'required' value = '" + t + "'><br><br><br>";
    // update button
    postButton.innerHTML = "<input onclick = 'updateTaskEntry(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'UPDATE'/>"
    // delete button
    deleteButton.innerHTML = "<input onclick = 'deleteTask(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'DELETE'/>"

    // load the edit form on the feed
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(addReminderButton)
        .appendChild(title)
        .appendChild(description)
        .appendChild(time)
        .appendChild(postButton)
        .appendChild(addFavBut)

        .appendChild(addTodayBut)

        .appendChild(deleteButton);



    // // clear the feed
    // clearChildren();
    // // load the feed
    // loadFeed(currDate, currMonth);
}

/////EDIT EXERCISE FAV
function editThisExerciseFav(f) {
    // reload the page

    clearChildren();
    document.getElementById("calendar").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    // document.getElementById("accountIcon").style.display = "none";
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("addButtonsDiv").style.display = "none";
    document.getElementById("fullFavFeed").style.display = "none";


    document.getElementById("feed").style.display = "";

    var strings = f.split('^^^');

    var m, r, s, w, t;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        m = "";
    }
    else {
        m = strings[0];
    }
    if (strings[1] == null) {
        r = "";
    }
    else {
        r = strings[1];
    }
    if (strings[2] == null) {
        s = "";
    }
    else {
        s = strings[2];
    }
    if (strings[3] == null) {
        w = "";
    }
    else {
        w = strings[3];
    }
    if (strings[4] == null) {
        t = "";
    }
    else {
        t = strings[4];
    }

    id = strings[5];

    // id.substring(1);
    //DO CHECKS AND ADD THIS AN ELEMENT

    // initialize div elements
    var cancelButton = document.createElement('div');
    var message = document.createElement('div');
    var reps = document.createElement('div');
    var sets = document.createElement('div');
    var weight = document.createElement('div');
    var time = document.createElement('div');
    var postButton = document.createElement('div');
    var deleteButton = document.createElement('div');

    // set the ids
    cancelButton.id = "cancelNewEdit";
    message.id = "messageNewEdit";
    reps.id = "repsNewEdit";
    sets.id = "setsNewEdit";
    weight.id = "weightNewEdit";
    time.id = "timeExNewEdit";
    postButton.id = "postButtonExNewEdit";
    deleteButton.id = "deleteButtonExNewEdit";

    // create the edit form by setting the HTML content of each div
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/>"
    message.innerHTML = "<br><br><br><label class = 'exClass1'>Title (ex: DB Bench Press. Difficult) <br><br></label><input type='text' class = 'required' id='12345' value = '" + m + "'><br><br><br>";
    reps.innerHTML = "<label class = 'exClass1'>Reps (ex: 8) <br><br></label> <input type='text' id='repsInput' class = 'required' value = '" + r + "'><br><br><br>";
    sets.innerHTML = "<label class = 'exClass1'>Sets (ex: 3)<br><br></label><input type='text' id='setsInput' class = 'required' value = '" + s + "'><br><br><br>";
    weight.innerHTML = "<label class = 'exClass1'>Weight (ex: 100 lbs)<br><br></label><input type='text' id='weightInput' class = 'required' value = '" + w + "'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm) <br><br></label><input type='text' id='timeInput' class = 'required' value = '" + t + "'><br><br><br>";
    // update button
    postButton.innerHTML = "<input onclick = 'updateFavExerciseEntry(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'UPDATE'/>"
    // delete button
    deleteButton.innerHTML = "<input onclick = 'deleteFavExercise(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'DELETE'/>"

    // load the edit form on the feed
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(message)
        .appendChild(reps)
        .appendChild(sets)
        .appendChild(weight)
        .appendChild(time)
        .appendChild(postButton)
        .appendChild(deleteButton);


    // // clear the feed
    // clearChildren();
    // // load the feed
    // loadFeed(currDate, currMonth);
}
/////EDIT EXERCISE FAV
function editThisExercise(f) {
    // reload the page

    clearChildren();
    document.getElementById("calendar").style.display = "none";
    document.getElementById("usernameHeader").style.display = "none";
    // document.getElementById("accountIcon").style.display = "none";
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("addButtonsDiv").style.display = "none";
    document.getElementById("fullFavFeed").style.display = "none";


    document.getElementById("feed").style.display = "";

    var strings = f.split('^^^');

    var m, r, s, w, t;

    //TODO//
    // change the random number implementation?

    if (strings[0] == null) {
        m = "";
    }
    else {
        m = strings[0];
    }
    if (strings[1] == null) {
        r = "";
    }
    else {
        r = strings[1];
    }
    if (strings[2] == null) {
        s = "";
    }
    else {
        s = strings[2];
    }
    if (strings[3] == null) {
        w = "";
    }
    else {
        w = strings[3];
    }
    if (strings[4] == null) {
        t = "";
    }
    else {
        t = strings[4];
    }

    id = strings[5];

    // id.substring(1);
    //DO CHECKS AND ADD THIS AN ELEMENT

    // initialize div elements
    var cancelButton = document.createElement('div');
    var message = document.createElement('div');
    var reps = document.createElement('div');
    var sets = document.createElement('div');
    var weight = document.createElement('div');
    var time = document.createElement('div');
    var postButton = document.createElement('div');
    var deleteButton = document.createElement('div');

    // set the ids
    cancelButton.id = "cancelNewEdit";
    message.id = "messageNewEdit";
    reps.id = "repsNewEdit";
    sets.id = "setsNewEdit";
    weight.id = "weightNewEdit";
    time.id = "timeExNewEdit";
    postButton.id = "postButtonExNewEdit";
    deleteButton.id = "deleteButtonExNewEdit";

    var addFavBut = document.createElement('div');
    var addTodayBut = document.createElement('div');
    addFavBut.innerHTML = "<input onclick = 'addFavExercise()' type='submit' class = 'addButtonFeedFav' value = 'ADD TO FAVORITES'/>";
    addTodayBut.innerHTML = "<input onclick = 'addExercise()' type='submit' class = 'addButtonToday' value = 'ADD TO TODAY'/>";

    // create the edit form by setting the HTML content of each div
    cancelButton.innerHTML = "<input onclick = 'reload()' type='submit' id = 'cancelButton1' value = 'CANCEL'/>"
    message.innerHTML = "<br><br><br><label class = 'exClass1'>Title (ex: DB Bench Press. Difficult) <br><br></label><input type='text' class = 'required' id='12345' value = '" + m + "'><br><br><br>";
    reps.innerHTML = "<label class = 'exClass1'>Reps (ex: 8) <br><br></label> <input type='text' id='repsInput' class = 'required' value = '" + r + "'><br><br><br>";
    sets.innerHTML = "<label class = 'exClass1'>Sets (ex: 3)<br><br></label><input type='text' id='setsInput' class = 'required' value = '" + s + "'><br><br><br>";
    weight.innerHTML = "<label class = 'exClass1'>Weight (ex: 100 lbs)<br><br></label><input type='text' id='weightInput' class = 'required' value = '" + w + "'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm) <br><br></label><input type='text' id='timeInput' class = 'required' value = '" + t + "'><br><br><br>";
    // update button
    postButton.innerHTML = "<input onclick = 'updateExerciseEntry(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'UPDATE'/>"
    // delete button
    deleteButton.innerHTML = "<input onclick = 'deleteExercise(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'DELETE'/>"

    // load the edit form on the feed
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(message)
        .appendChild(reps)
        .appendChild(sets)
        .appendChild(weight)
        .appendChild(time)
        .appendChild(postButton)
        .appendChild(addFavBut)
        .appendChild(addTodayBut)
        .appendChild(deleteButton);


    // // clear the feed
    // clearChildren();
    // // load the feed
    // loadFeed(currDate, currMonth);
}


/////EDIT EXERCISE FAV
function loadExHistoryFeed() {
    // reload the page
    document.getElementById("historyTitle").style.display = '';

    document.getElementById("historyFeed").style.display = '';
    clearChildren();

    // load the exercise feed
    db.collection("users").doc(userID).collection("history").where("exerciseID", "==", "true").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewHistoryEx(doc.data().reps, doc.data().sets, doc.data().weight, doc.data().time, doc.data().message, doc.id);
        });
    });
}
/////EDIT EXERCISE FAV
function loadFoodHistoryFeed() {
    // reload the page
    document.getElementById("historyTitle").style.display = '';

    document.getElementById("historyFeed").style.display = '';
    clearChildren();

    // load the exercise feed
    db.collection("users").doc(userID).collection("history").where("foodID", "==", "true").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewHistoryFood(doc.data().food, doc.data().water, doc.data().time, doc.data().message, doc.id);
        });
    });



}

/////EDIT EXERCISE FAV
function loadTaskHistoryFeed() {
    // reload the page
    document.getElementById("historyTitle").style.display = '';

    document.getElementById("historyFeed").style.display = '';

    clearChildren();
    // load the exercise feed
    db.collection("users").doc(userID).collection("history").where("taskID", "==", "true").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewHistoryTask(doc.data().title, doc.data().description, doc.data().time, doc.id);
        });
    });



}

function getMyFoods() {
    var myFoods1 = "";


    db.collection("users").doc(userID).collection("foodAndWater").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            var dayInt = parseInt(doc.data().date);
            var todaysDayInt = parseInt(currDate);

            if (dayInt == todaysDayInt) {
                //load todays food list
                myFoods1 += doc.data().food + "," + doc.data().water + ",";
            }

        });
    }).then(() => {
        var foodStrings = myFoods1.split(',');
        for (var i = 0; i < foodStrings.length; i++) {
            if (foodStrings[i] != "") {
                //NOW WE HAVE AN ARRAY OF THE LAST 7 DAYS OF FOOD INPUTS
                //USE THESE STRINGS WITH A NUTRITION API/CALCULATOR

                // change the query in this url for an api search
                const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=3tY2uZ1DEmPgwX18FzNbKed2LkrKVBwf7msqoTBf&pageSize=1&pageList=3&query=' + foodStrings[i];


                fetch(url).then(data => {
                    return data.json()
                }).then(res => {
                    // console.log(res)
                    console.log(res);
                    var s = "";

                    for (var i = 0; i < res.foods[0].foodNutrients.length; i++) {
                        // console.log(res.foods[0].foodNutrients[i].nutrientName + ": " + res.foods[0].foodNutrients[i].value + " " + res.foods[0].foodNutrients[i].unitName);
                        if (res.foods[0].foodNutrients[i].value != "0") {
                            s += res.foods[0].foodNutrients[i].nutrientName + ": " + res.foods[0].foodNutrients[i].value + res.foods[0].foodNutrients[i].unitName + "<br>"
                            if (res.foods[0].foodNutrients[i].nutrientName == "Protein") {
                                proteinTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Carbohydrate, by difference") {
                                carbTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Energy") {
                                energyTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Vitamin C, total ascorbic acid") {
                                vitaminTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Water") {
                                waterTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Total lipid (fat)") {
                                lipidFatTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Cholesterol") {
                                cholTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Fatty acids, total monounsaturated") {
                                monoTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Fatty acids, total polyunsaturated") {
                                polyTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Fatty acids, total trans") {
                                transTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Sugars, total including NLEA") {
                                sugarTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Fiber, total dietary") {
                                fiberTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Iron, Fe") {
                                ironTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Sodium, Na") {
                                sodiumTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Riboflavin") {
                                riboTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Vitamin B-6") {
                                b6TotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Vitamin B-12") {
                                b12TotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Calcium, Ca") {
                                calciumTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Potassium, K") {
                                potassiumTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Caffeine") {
                                caffeineTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            //now build a graph to show these nutrients
                        }
                    }
                    createNewNutritionDaily(res.foods[0].description, s, res.foods[0].allHighlightFields);
                }).then(() => {
                    loadDailyFeed();
                });
            }
        }
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });


    var myFoods = "";

    //add a check for the past week
    //.where date is between today and 7 days ago
    //implementation for the month
    db.collection("users").doc(userID).collection("foodAndWater").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.data().food);
            // console.log(doc.data().water);
            // console.log(doc.data().date, doc.data().month);
            var dayInt = parseInt(doc.data().date);
            // console.log(dayInt);

            var todaysDayInt = parseInt(currDate);
            // console.log(todaysDayInt);
            if (dayInt >= 7 && dayInt <= todaysDayInt) {
                // load the feed for past 7 days
                createNewRecentFood(doc.data().food, doc.data().water, doc.data().time, doc.data().message, doc.id);
                //load the past seven days
                if (dayInt >= todaysDayInt - 7) {
                    myFoods += doc.data().food + "," + doc.data().water + ",";
                }
            }
            else {
                // change the month and stuff to get the last 7 days
            }

            // createNewNutritionDaily(d, v, u)
            //only add these elements for the past 7 days
        });

    }).then(() => {
        var foodStrings = myFoods.split(',');
        for (var i = 0; i < foodStrings.length; i++) {
            if (foodStrings[i] != "") {

                // change the query in this url for an api search
                const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=3tY2uZ1DEmPgwX18FzNbKed2LkrKVBwf7msqoTBf&pageSize=1&pageList=3&query=' + foodStrings[i];

                fetch(url).then(data => {
                    return data.json()
                }).then(res => {
                    var s = "";

                    for (var i = 0; i < res.foods[0].foodNutrients.length; i++) {
                        // console.log(res.foods[0].foodNutrients[i].nutrientName + ": " + res.foods[0].foodNutrients[i].value + " " + res.foods[0].foodNutrients[i].unitName);
                        if (res.foods[0].foodNutrients[i].value != "0") {
                            s += res.foods[0].foodNutrients[i].nutrientName + ": " + res.foods[0].foodNutrients[i].value + res.foods[0].foodNutrients[i].unitName + "<br>"

                            if (res.foods[0].foodNutrients[i].nutrientName == "Protein") {
                                proteinTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Carbohydrate, by difference") {
                                carbTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Energy") {
                                energyTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Vitamin C, total ascorbic acid") {
                                vitaminTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Water") {
                                waterTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Total lipid (fat)") {
                                lipidFatTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Cholesterol") {
                                cholTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Fatty acids, total monounsaturated") {
                                monoTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Fatty acids, total polyunsaturated") {
                                polyTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Fatty acids, total trans") {
                                transTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Sugars, total including NLEA") {
                                sugarTotalDaily += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Fiber, total dietary") {
                                fiberTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Iron, Fe") {
                                ironTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Sodium, Na") {
                                sodiumTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Riboflavin") {
                                riboTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Vitamin B-6") {
                                b6Total += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Vitamin B-12") {
                                b12Total += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Calcium, Ca") {
                                calciumTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Potassium, K") {
                                potassiumTotal += res.foods[0].foodNutrients[i].value;
                            }
                            if (res.foods[0].foodNutrients[i].nutrientName == "Caffeine") {
                                caffeineTotal += res.foods[0].foodNutrients[i].value;
                            }
                            // createNewNutrition(res.foods[0].foodNutrients[i].nutrientName, res.foods[0].foodNutrients[i].value, res.foods[0].foodNutrients[i].unitName );
                            //now build a graph to show these nutrients
                        }
                    }// console.log(res.foods[0]);
                    createNewNutritionWeek(res.foods[0].description, s, res.foods[0].allHighlightFields);
                    // console.log(res.foods[0].foodNutrients[1].nutrientName + ": " + res.foods[0].foodNutrients[1].value + " " + res.foods[0].foodNutrients[1].unitName);
                }).then(() => {
                    loadWeekFeed();
                }).then(() => {



                    loadReccomendedFeed();

                })
            }
        }

    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });

}

/////EDIT EXERCISE FAV
function loadWeekFeed() {
    var el2 = document.getElementById('weekNutrientFeed');
    while (el2.firstChild) el2.innerHTML = '';
    // createNewTotalNutrientsWeek("TOTAL WATER: <br>" + (Math.round(waterTotal * 100) / 100).toFixed(2) + " G", "TOTAL ENERGY: <br>" + (Math.round(energyTotal * 100) / 100).toFixed(2) + " KCAL", "TOTAL VITAMIN C (ASCORBIC ACID): <br>" + (Math.round(vitaminTotal * 100) / 100).toFixed(2) + " MG", "TOTAL CARBS: <br>" + (Math.round(carbTotal * 100) / 100).toFixed(2) + " G", "TOTAL NUTRIENTS (PAST 7 DAYS) <br><br><br>TOTAL PROTEIN: <br>" + (Math.round(proteinTotal * 100) / 100).toFixed(2) + " G");

    // createNewReccomendedFood("Here TODO", "", "", "");


    var newNutrient = document.createElement('li');
    newNutrient.innerHTML =
        "TOTAL ENERGY: <br>" + (Math.round(energyTotal * 100) / 100).toFixed(2) + " KCAL" + "<br><br>" +
        "TOTAL WATER: <br>" + (Math.round(waterTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL PROTEIN: <br>" + (Math.round(proteinTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL CARBS: <br>" + (Math.round(carbTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL CHOLESTEROL: <br>" + (Math.round(cholTotal * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL IRON: <br>" + (Math.round(ironTotal * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL FIBER: <br>" + (Math.round(fiberTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL SUGARS: <br>" + (Math.round(sugarTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL LIPID FAT: <br>" + (Math.round(lipidFatTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL POLYUNSATURATED FAT: <br>" + (Math.round(polyTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL MONOUNSATURATED FAT: <br>" + (Math.round(monoTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL TRANS FAT: <br>" + (Math.round(transTotal * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL CAFFEINE: <br>" + (Math.round(caffeineTotal * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL POTASSIUM: <br>" + (Math.round(potassiumTotal * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL CALCIUM: <br>" + (Math.round(calciumTotal * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL SODIUM: <br>" + (Math.round(sodiumTotal * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL VITAMIN C (ASCORBIC ACID): <br>" + (Math.round(vitaminTotal * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL VITAMIN B-12: <br>" + (Math.round(b12Total * 100) / 100).toFixed(2) + " UG" + "<br><br>" +
        "TOTAL VITAMIN B-6: <br>" + (Math.round(b6Total * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL RIBOFLAVIN: <br>" + (Math.round(riboTotal * 100) / 100).toFixed(2) + " MG" + "<br><br>";

    newNutrient.id = "dailyInfo";
    document.getElementById("weekNutrientFeed").appendChild(newNutrient);

}

/////EDIT EXERCISE FAV
function loadDailyFeed() {
    var el2 = document.getElementById('todayNutrientFeed');
    while (el2.firstChild) el2.innerHTML = '';



    var newNutrient = document.createElement('li');
    newNutrient.innerHTML =
        "TOTAL ENERGY: <br>" + (Math.round(energyTotalDaily * 100) / 100).toFixed(2) + " KCAL" + "<br><br>" +
        "TOTAL WATER: <br>" + (Math.round(waterTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL PROTEIN: <br>" + (Math.round(proteinTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL CARBS: <br>" + (Math.round(carbTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL CHOLESTEROL: <br>" + (Math.round(cholTotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL IRON: <br>" + (Math.round(ironTotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL FIBER: <br>" + (Math.round(fiberTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL SUGARS: <br>" + (Math.round(sugarTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL LIPID FAT: <br>" + (Math.round(lipidFatTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL POLYUNSATURATED FAT: <br>" + (Math.round(polyTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL MONOUNSATURATED FAT: <br>" + (Math.round(monoTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL TRANS FAT: <br>" + (Math.round(transTotalDaily * 100) / 100).toFixed(2) + " G" + "<br><br>" +
        "TOTAL CAFFEINE: <br>" + (Math.round(caffeineTotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL POTASSIUM: <br>" + (Math.round(potassiumTotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL CALCIUM: <br>" + (Math.round(calciumTotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL SODIUM: <br>" + (Math.round(sodiumTotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL VITAMIN C (ASCORBIC ACID): <br>" + (Math.round(vitaminTotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL VITAMIN B-12: <br>" + (Math.round(b12TotalDaily * 100) / 100).toFixed(2) + " UG" + "<br><br>" +
        "TOTAL VITAMIN B-6: <br>" + (Math.round(b6TotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>" +
        "TOTAL RIBOFLAVIN: <br>" + (Math.round(riboTotalDaily * 100) / 100).toFixed(2) + " MG" + "<br><br>";

    newNutrient.id = "dailyInfo";
    document.getElementById("todayNutrientFeed").appendChild(newNutrient);

    // console.log(caffeineTotalDaily, potassiumTotalDaily, calciumTotalDaily, b12TotalDaily, b6TotalDaily,
    //     riboTotalDaily, sodiumTotalDaily, ironTotalDaily, fiberTotalDaily, sugarTotalDaily, transTotalDaily,
    //     polyTotalDaily, monoTotalDaily, cholTotalDaily, lipidFatTotalDaily);
}

/////EDIT EXERCISE FAV
function loadLoginPage() {
    document.getElementById("loginPage").style.display = "";
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("notLoginRegister").style.display = "none"

}

function loadRegisterPage() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("registerPage").style.display = "";
    document.getElementById("notLoginRegister").style.display = "none"

}

function drawMultSeriesWeek(calRatioWeek, proteinRatioWeek, carbsRatioWeek, potassiumRatioWeek, calciumRatioWeek, sodiumRatioWeek, ironRatioWeek, fiberRatioWeek, transRatioWeek, polyRatioWeek, monoRatioWeek, cholRatioWeek, waterRatioWeek) {
    // console.log("Week: " + calRatioWeek, proteinRatioWeek, carbsRatioWeek, potassiumRatioWeek, calciumRatioWeek, sodiumRatioWeek, ironRatioWeek, fiberRatioWeek, transRatioWeek, polyRatioWeek, monoRatioWeek, cholRatioWeek, waterRatioWeek);


    var data = google.visualization.arrayToDataTable([
        ["NUTRIENT", 'MY WEEKLY PERCENTAGE', 'RECCOMENDED WEEKLY PERCENTAGE'],
        ["WEEKLY CARBS", carbsRatioWeek * 100, 100],
        ["WEEKLY PROTEIN", proteinRatioWeek * 100, 100],
        ["WEEKLY CARBS", carbsRatioWeek * 100, 100],
        ["WEEKLY WATER", waterRatioWeek * 100, 100],
        ["WEEKLY CALORIES", calRatioWeek * 100, 100],
        ["WEEKLY POTASSIUM", potassiumRatioWeek * 100, 100],
        ["WEEKLY CALCIUM", calciumRatioWeek * 100, 100],
        ["WEEKLY SODIUM", sodiumRatioWeek * 100, 100],
        ["WEEKLY IRON", ironRatioWeek * 100, 100],
        ["WEEKLY FIBER", fiberRatioWeek * 100, 100],
        ["WEEKLY TRANS FAT", transRatioWeek * 100, 100],
        ["WEEKLY POLY FAT", polyRatioWeek * 100, 100],
        ["WEEKLY MONO FAT", monoRatioWeek * 100, 100],
        ["WEEKLY CHOLESTEROL", cholRatioWeek * 100, 100]
    ]);

    var options = {
        title: 'MY WEEKLY NUTRITION PERCENTAGES',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'PERCENTAGE',
            minValue: 0
        },
        vAxis: {
            title: 'NUTRIENT'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div_week'));
    chart.draw(data, options);
}

function drawMultSeries(calRatio, proteinRatio, carbsRatio, potassiumRatio, calciumRatio, sodiumRatio, ironRatio, fiberRatio, transRatio, polyRatio, monoRatio, cholRatio, waterRatio) {

    // console.log("day: " + calRatio, proteinRatio, carbsRatio, potassiumRatio, calciumRatio, sodiumRatio, ironRatio, fiberRatio, transRatio, polyRatio, monoRatio, cholRatio, waterRatio);
    var data = google.visualization.arrayToDataTable([
        ["NUTRIENT", 'MY DAILY PERCENTAGE', 'RECCOMENDED DAILY PERCENTAGE'],
        ["DAILY CARBS", Math.abs(carbsRatio * 100), 100],
        ["DAILY PROTEIN", Math.abs(proteinRatio * 100), 100],
        ["DAILY CALORIES", Math.abs(calRatio * 100), 100],
        ["DAILY WATER", Math.abs(waterRatio * 100), 100],
        ["DAILY POTASSIUM", Math.abs(potassiumRatio * 100), 100],
        ["DAILY CALCIUM", Math.abs(calciumRatio * 100), 100],
        ["DAILY SODIUM", Math.abs(sodiumRatio * 100), 100],
        ["DAILY IRON", Math.abs(ironRatio * 100), 100],
        ["DAILY FIBER", Math.abs(fiberRatio * 100), 100],
        ["DAILY TRANS FAT", Math.abs(transRatio * 100), 100],
        ["DAILY POLY FAT", Math.abs(polyRatio * 100), 100],
        ["DAILY MONO FAT", Math.abs(monoRatio * 100), 100],
        ["DAILY CHOLESTEROL", Math.abs(cholRatio * 100), 100],
    ]);

    var options = {
        title: 'MY DAILY NUTRITION PERCENTAGES',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'PERCENTAGE',
            minValue: 0
        },
        vAxis: {
            title: 'NUTRIENT'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function loadReccomendedFeed() {
    // document.getElementById("").

    var missingCals = 2000 - energyTotalDaily;
    var missingProtein = 200 - proteinTotalDaily;
    var missingCarbs = 275 - carbTotalDaily;
    // var missingVitamin = 80 - vitaminTotalDaily;
    // var missingCaffeine = 400 - caffeineTotalDaily;
    var missingPotassium = 4300 - potassiumTotalDaily;
    var missingCalcium = 1000 - calciumTotalDaily;
    var missingSodium = 2300 - sodiumTotalDaily;
    var missingIron = 8 - ironTotalDaily;
    var missingFiber = 32 - fiberTotalDaily;
    // var missingSugar = 37 - sugarTotalDaily;
    var missingTrans = 2 - transTotalDaily;
    var missingPoly = 22 - polyTotalDaily;
    var missingMono = 44 - monoTotalDaily;
    var missingChol = 300 - cholTotalDaily;
    var missingWater = 1984 - waterTotalDaily;

    var calRatio = 1 - missingCals / 2000;
    var proteinRatio = 1 - missingProtein / 200;
    var carbsRatio = 1 - missingCarbs / 275;
    // var vitaminRatio = 1 - missingVitamin / 80;
    // var caffeineRatio = 1 - missingCaffeine / 400;
    var potassiumRatio = 1 - missingPotassium / 4300;
    var calciumRatio = 1 - missingCalcium / 1000;
    var sodiumRatio = 1 - missingSodium / 2300;
    var ironRatio = 1 - missingIron / 8;
    var fiberRatio = 1 - missingFiber / 32;
    // var sugarRatio = 1 - missingSugar / 37;
    var transRatio = 1 - missingTrans / 2;
    var polyRatio = 1 - missingPoly / 22;
    var monoRatio = 1 - missingMono / 44;
    var cholRatio = 1 - missingChol / 300;
    var waterRatio = 1 - missingWater / 1984;


    var missingCalsWeek = (2000 * 7) - energyTotal;
    var missingProteinWeek = (200 * 7) - proteinTotal;
    var missingCarbsWeek = (275 * 7) - carbTotal;
    // var missingVitamin = 80 - vitaminTotalDaily;
    // var missingCaffeine = 400 - caffeineTotalDaily;
    var missingPotassiumWeek = (4300 * 7) - potassiumTotal;
    var missingCalciumWeek = (1000 * 7) - calciumTotal;
    var missingSodiumWeek = (2300 * 7) - sodiumTotal;
    var missingIronWeek = (8 * 7) - ironTotalDaily;
    var missingFiberWeek = (32 * 7) - fiberTotal;
    // var missingSugar = 37 - sugarTotalDaily;
    var missingTransWeek = (2 * 7) - transTotal;
    var missingPolyWeek = (22 * 7) - polyTotal;
    var missingMonoWeek = (44 * 7) - monoTotal;
    var missingCholWeek = (300 * 7) - cholTotal;
    var missingWaterWeek = (1984 * 7) - waterTotal;

    var calRatioWeek = 1 - missingCalsWeek / (2000 * 7);
    var proteinRatioWeek = 1 - missingProteinWeek / (200 * 7);
    var carbsRatioWeek = 1 - missingCarbsWeek / (275 * 7);
    // var vitaminRatio = 1 - missingVitamin / 80;
    // var caffeineRatio = 1 - missingCaffeine / 400;
    var potassiumRatioWeek = 1 - missingPotassiumWeek / (4300 * 7);
    var calciumRatioWeek = 1 - missingCalciumWeek / (1000 * 7);
    var sodiumRatioWeek = 1 - missingSodiumWeek / (2300 * 7);
    var ironRatioWeek = 1 - missingIronWeek / (8 * 7);
    var fiberRatioWeek = 1 - missingFiberWeek / (32 * 7);
    // var sugarRatio = 1 - missingSugar / 37;
    var transRatioWeek = 1 - missingTransWeek / (2 * 7);
    var polyRatioWeek = 1 - missingPolyWeek / (22 * 7);
    var monoRatioWeek = 1 - missingMonoWeek / (44 * 7);
    var cholRatioWeek = 1 - missingCholWeek / (300 * 7);
    var waterRatioWeek = 1 - missingWaterWeek / (1984 * 7);



    // console.log(calRatioWeek, proteinRatioWeek, carbsRatioWeek, potassiumRatioWeek, calciumRatioWeek, sodiumRatioWeek, ironRatioWeek, fiberRatioWeek, transRatioWeek, polyRatioWeek, monoRatioWeek, cholRatioWeek, waterRatioWeek)
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawMultSeriesWeek(calRatioWeek, proteinRatioWeek, carbsRatioWeek, potassiumRatioWeek, calciumRatioWeek, sodiumRatioWeek, ironRatioWeek, fiberRatioWeek, transRatioWeek, polyRatioWeek, monoRatioWeek, cholRatioWeek, waterRatioWeek));



    // console.log(calRatio, proteinRatio, carbsRatio, potassiumRatio, calciumRatio, sodiumRatio, ironRatio, fiberRatio, transRatio, polyRatio, monoRatio, cholRatio, waterRatio)
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawMultSeries(calRatio, proteinRatio, carbsRatio, potassiumRatio, calciumRatio, sodiumRatio, ironRatio, fiberRatio, transRatio, polyRatio, monoRatio, cholRatio, waterRatio));


    // (Math.round(calRatio * 100) / 100).toFixed(2)
    // (Math.round(proteinRatio * 100) / 100).toFixed(2)
    // (Math.round(carbsRatio * 100) / 100).toFixed(2)
    // (Math.round(vitaminRatio * 100) / 100).toFixed(2)
    // (Math.round(potassiumRatio * 100) / 100).toFixed(2)
    // (Math.round(calciumRatio * 100) / 100).toFixed(2)
    // (Math.round(sodiumRatio * 100) / 100).toFixed(2)
    // (Math.round(ironRatio * 100) / 100).toFixed(2)
    // (Math.round(fiberRatio * 100) / 100).toFixed(2)
    // (Math.round(transRatio * 100) / 100).toFixed(2)
    // (Math.round(polyRatio * 100) / 100).toFixed(2)
    // (Math.round(monoRatio * 100) / 100).toFixed(2)
    // (Math.round(cholRatio * 100) / 100).toFixed(2)
    // (Math.round(waterRatio * 100) / 100).toFixed(2)

    var x = document.getElementsByClassName("reccoClass");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    if (calRatio >= .9) {
        document.getElementById("Foods Low in Calories").style.display = "";
        document.getElementById("Foods High in Calories").style.display = "none";
    }
    if (calRatio < 0.9) {
        document.getElementById("Foods High in Calories").style.display = "";
        document.getElementById("Foods Low in Calories").style.display = "none";
    }
    if (proteinRatio >= .9) {
        document.getElementById("Foods Low in Protein").style.display = "";
        document.getElementById("Foods High in Protein").style.display = "none";

    }
    if (proteinRatio < 0.9) {
        document.getElementById("Foods High in Protein").style.display = "";
        document.getElementById("Foods Low in Protein").style.display = "none";
    }
    if (carbsRatio >= .9) {
        document.getElementById("Foods Low in Carbs").style.display = "";
        document.getElementById("Foods High in Carbs").style.display = "none";
    }
    if (carbsRatio < 0.9) {
        document.getElementById("Foods High in Carbs").style.display = "";
        document.getElementById("Foods Low in Carbs").style.display = "none";
    }
    if (potassiumRatio >= .9) {
        document.getElementById("Foods Low in Potassium").style.display = "";
        document.getElementById("Foods High in Potassium").style.display = "none";
    }
    if (potassiumRatio < 0.9) {
        document.getElementById("Foods High in Potassium").style.display = "";
        document.getElementById("Foods Low in Potassium").style.display = "none";
    }


    if (calciumRatio >= .9) {
        document.getElementById("Foods Low in Calcium").style.display = "";
        document.getElementById("Foods High in Calcium").style.display = "none";
    }
    if (calciumRatio < 0.9) {
        document.getElementById("Foods High in Calcium").style.display = "";
        document.getElementById("Foods Low in Calcium").style.display = "none";
    }


    if (sodiumRatio >= .9) {
        document.getElementById("Foods Low in Sodium").style.display = "";
        document.getElementById("Foods High in Sodium").style.display = "none";
    }
    if (sodiumRatio < 0.9) {
        document.getElementById("Foods High in Sodium").style.display = "";
        document.getElementById("Foods Low in Sodium").style.display = "none";
    }

    if (ironRatio >= .9) {
        document.getElementById("Foods Low in Iron").style.display = "";
        document.getElementById("Foods High in Iron").style.display = "none";
    }
    if (ironRatio < 0.9) {
        document.getElementById("Foods High in Iron").style.display = "";
        document.getElementById("Foods Low in Iron").style.display = "none";
    }
    if (fiberRatio >= .9) {
        document.getElementById("Foods Low in Fiber").style.display = "";
        document.getElementById("Foods High in Fiber").style.display = "none";
    }
    if (fiberRatio < 0.9) {
        document.getElementById("Foods High in Fiber").style.display = "";
        document.getElementById("Foods Low in Fiber").style.display = "none";
    }
    if (transRatio >= .9) {
        document.getElementById("Foods Low in Trans fat").style.display = "";
        document.getElementById("Foods High in Trans fat").style.display = "none";
    }
    // if (transRatio < 0.9) {
    //     document.getElementById("High in Trans fat").style.display = "";
    //     document.getElementById("Low in Trans fat").style.display = "none";
    // }
    if (polyRatio >= .9) {
        document.getElementById("Foods Low in Polyunsaturated fat").style.display = "";
        document.getElementById("Foods High in Polyunsaturated fat").style.display = "none";
    }
    // if (polyRatio < 0.9) {
    //     document.getElementById("High in Polyunsaturated fat").style.display = "";
    //     document.getElementById("Low in Polyunsaturated fat").style.display = "none";
    // } 
    if (monoRatio >= .9) {
        document.getElementById("Foods Low in Monounsaturated fat").style.display = "";
        document.getElementById("Foods High in Monounsaturated fat").style.display = "none";
    }
    // if (monoRatio < 0.9) {
    //     document.getElementById("High in Monounsaturated fat").style.display = "";
    //     document.getElementById("Low in Monounsaturated fat").style.display = "none";
    // }
    if (cholRatio >= .9) {
        document.getElementById("Foods Low in Cholesterol").style.display = "";
        document.getElementById("Foods High in Cholesterol").style.display = "none";
    }
    // if (cholRatio < 0.9) {
    //     document.getElementById("Foods High in Cholesterol").style.display = "";
    //     document.getElementById("Foods Low in Cholesterol").style.display = "none";
    // }



    var el2 = document.getElementById('dailyBreakdownNutrientFeed');
    while (el2.firstChild) el2.innerHTML = '';
    var newRec = document.createElement('li');
    newRec.innerHTML =
        "You should consume " + (Math.round(missingCals * 100) / 100).toFixed(2) + " Calories to maintain 2000 calories today<br><br>" +
        "You should consume " + (Math.round(missingProtein * 100) / 100).toFixed(2) + " G of Protein to maintain '200' G today<br><br>" +
        "You should consume " + (Math.round(missingCarbs * 100) / 100).toFixed(2) + " G of Carbs to maintain 275 G today<br><br>" +
        // "You should consume " + (Math.round(missingVitamin * 100) / 100).toFixed(2) + " more MG of Vitamin C to reach 80 MG today<br><br>" +
        "You should consume " + (Math.round(missingWater * 100) / 100).toFixed(2) + " G of Water to maintain 1984 G, or 15.5 cups today (1 cup = 128 G)<br><br>" +
        // "You should consume " + (Math.round(missingCaffeine * 100) / 100).toFixed(2) + " MG of Caffeine to maintain 400 MG today<br><br>" +
        "You should consume " + (Math.round(missingPotassium * 100) / 100).toFixed(2) + " MG of Potassium to maintain 4300 MG today<br><br>" +
        "You should consume " + (Math.round(missingCalcium * 100) / 100).toFixed(2) + " MG of Calcium to maintain 1000 MG today<br><br>" +
        // "You should consume " + (Math.round(missingB12 * 100) / 100).toFixed(2) + " more x of Vitamin B-12 to reach 'x' x today<br><br>" +
        // "You should consume " + (Math.round(missingB6 * 100) / 100).toFixed(2) + " more x of Vitamin B-6 to reach 'x' x today<br><br>" +
        // "You should consume " + (Math.round(missingRibo * 100) / 100).toFixed(2) + " more x of Riboflavin to reach '200' grams today<br><br>" +
        "You should consume " + (Math.round(missingSodium * 100) / 100).toFixed(2) + " MG of Sodium to maintain 2300 MG today<br><br>" +
        "You should consume " + (Math.round(missingIron * 100) / 100).toFixed(2) + " MG of Iron to maintain 8 MG today<br><br>" +
        "You should consume " + (Math.round(missingFiber * 100) / 100).toFixed(2) + " G of Fiber to maintain 32 G today<br><br>" +
        // "You should consume " + (Math.round(missingSugar * 100) / 100).toFixed(2) + " more G of Sugar to reach 37 G today<br><br>" +
        "You should consume " + (Math.round(missingTrans * 100) / 100).toFixed(2) + " G of Trans fat to maintain 2 G today<br><br>" +
        "You should consume " + (Math.round(missingPoly * 100) / 100).toFixed(2) + " G of Polyunsaturated fat to maintain 22 G today<br><br>" +
        "You should consume " + (Math.round(missingMono * 100) / 100).toFixed(2) + " G of Monounsaturated fat to maintain 44 G today<br><br>" +
        "You should consume " + (Math.round(missingChol * 100) / 100).toFixed(2) + " MG of Cholesterol to maintain 300 MG today<br><br>";
    // "You should consume " + (Math.round(missingLipid * 100) / 100).toFixed(2) + " more x of Lipid, or total, fat to reach 'x' x today<br><br>";

    newRec.id = "dailyInfo";
    newRec.className = "testtt";
    document.getElementById("dailyBreakdownNutrientFeed").appendChild(newRec);

}

function reccoAFood(ratio, below, title) {
    //load a new reccomendation into the feed given the inputs


    if (below == "ninety") {
        var t = "You're almost at your " + title + " to reach the nutrition goal for today (" + ratio + "% there). Here are a few reccomended foods to meet this goal: ";
        console.log(t);

    }
    else if (below == "belowNinety") {
        var t = "You should consume more" + + title + " to reach the nutrition goal for today (" + ratio + "% there). Here are a few reccomended foods to help meet this goal:";
        // load a new api and get recipes of foods that are high in this title var nutrient

        // console.log(t);
    }
}


function loadHighFeedForReccos() {


    var title = ["Calories", "Protein", "Carbs", "Water", "Potassium", "Calcium", "Sodium", "Iron", "Fiber", "Trans fat", "Polyunsaturated fat", "Monounsaturated fat", "Cholesterol"];




    for (var i = 0; i < title.length; i++) {


        const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=3tY2uZ1DEmPgwX18FzNbKed2LkrKVBwf7msqoTBf&pageSize=3&query=Foods High in ' + title[i];
        // Http.open("GET", url);
        // Http.send();

        fetch(url).then(data => {
            return data.json()
        }).then(res => {
            // console.log(res)
            // console.log(t);
            var newNutrient = document.createElement('li');
            newNutrient.innerHTML =
                res.foodSearchCriteria.generalSearchInput + " reccomendation 1: <br><br>" + res.foods[0].description + "<br><br>Food category: <br>" + res.foods[0].foodCategory + "<br><br><br>" +
                res.foodSearchCriteria.generalSearchInput + " reccomendation 2: <br><br>" + res.foods[1].description + "<br><br>Food category: <br>" + res.foods[1].foodCategory + "<br><br><br>" +
                res.foodSearchCriteria.generalSearchInput + " reccomendation 3: <br><br>" + res.foods[2].description + "<br><br>Food category: <br>" + res.foods[2].foodCategory + "<br><br><br>";
            newNutrient.id = "" + res.foodSearchCriteria.generalSearchInput;
            newNutrient.className = "reccoClass";
            document.getElementById("dailyReccomendedNutrientFeedLow").appendChild(newNutrient);

            // var newNutrientWeek = document.createElement('li');
            // newNutrientWeek.innerHTML =
            // res.foodSearchCriteria.generalSearchInput + " recc 1: <br>" + res.foods[0].description + "<br>Food category: " + res.foods[0].foodCategory +"<br><br>" +
            // res.foodSearchCriteria.generalSearchInput + " recc 2: <br>" + res.foods[1].description + "<br>Food category: " + res.foods[1].foodCategory + "<br><br>"+
            // res.foodSearchCriteria.generalSearchInput + " recc 3: <br>" + res.foods[2].description + "<br>Food category: " + res.foods[2].foodCategory + "<br><br>";

            // newNutrientWeek.id = "Week " + res.foodSearchCriteria.generalSearchInput;
            // newNutrientWeek.className = "reccoClassWeek";

            // document.getElementById("weeklyReccomendedNutrientFeedLow").appendChild(newNutrientWeek);

        }).catch((error) => {
            console.log("ERROR submitting post! " + error);
        });

    }
}
function loadLowFeedForReccos() {

    var title = ["Calories", "Protein", "Carbs", "Water", "Potassium", "Calcium", "Sodium", "Iron", "Fiber", "Trans fat", "Polyunsaturated fat", "Monounsaturated fat", "Cholesterol"];



    for (var i = 0; i < title.length; i++) {

        const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=3tY2uZ1DEmPgwX18FzNbKed2LkrKVBwf7msqoTBf&pageSize=3&query=Foods Low in ' + title[i];
        // Http.open("GET", url);
        // Http.send();


        fetch(url).then(data => {
            return data.json()
        }).then(res => {
            console.log(res)
            // console.log(t);
            // console.log(res.foods[0].description);
            // console.log(res.foods[1].description);
            // console.log(res.foods[2].description);
            // console.log(title);

            var newNutrient = document.createElement('li');
            newNutrient.innerHTML =
                res.foodSearchCriteria.generalSearchInput + " reccomendation 1: <br><br>" + res.foods[0].description + "<br><br>Food category: <br>" + res.foods[0].foodCategory + "<br><br><br>" +
                res.foodSearchCriteria.generalSearchInput + " reccomendation 2: <br><br>" + res.foods[1].description + "<br><br>Food category: <br>" + res.foods[1].foodCategory + "<br><br><br>" +
                res.foodSearchCriteria.generalSearchInput + " reccomendation 3: <br><br>" + res.foods[2].description + "<br><br>Food category: <br>" + res.foods[2].foodCategory + "<br><br><br>";

            newNutrient.id = "" + res.foodSearchCriteria.generalSearchInput;
            newNutrient.className = "reccoClass";

            document.getElementById("dailyReccomendedNutrientFeed").appendChild(newNutrient);

            // var newNutrientWeek = document.createElement('li');
            // newNutrientWeek.innerHTML =
            // res.foodSearchCriteria.generalSearchInput + " recc 1: <br>" + res.foods[0].description + "<br>Food category: " + res.foods[0].foodCategory +"<br><br>" +
            // res.foodSearchCriteria.generalSearchInput + " recc 2: <br>" + res.foods[1].description + "<br>Food category: " + res.foods[1].foodCategory + "<br><br>"+
            // res.foodSearchCriteria.generalSearchInput + " recc 3: <br>" + res.foods[2].description + "<br>Food category: " + res.foods[2].foodCategory + "<br><br>";

            // newNutrientWeek.id = "Week " + res.foodSearchCriteria.generalSearchInput;
            // newNutrientWeek.className = "reccoClassWeek";

            // document.getElementById("weeklyReccomendedNutrientFeed").appendChild(newNutrientWeek);


        }).catch((error) => {
            console.log("ERROR submitting post! " + error);
        });

    }
}


function likeThisPost(s) {

    var params = s.split('-');
    for (var i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
    var id = params[0];
    var tt = params[1];
    var dd = params[2];
    var uu = params[3];
    var ref = params[4];
    var dateVar = params[5];
    var monthVar = params[6];
    var cc = params[7];
    var likesPlusOne = parseInt(params[8]) + 1;
    console.log(likesPlusOne);

    db.collection("posts").doc("" + id).set({
        likes: likesPlusOne,
        title: tt,
        desc: dd,
        username: uu,
        profPicRef: ref,
        date: dateVar,
        month: monthVar,
        numberOfComments: cc
    }).then(() => {
        // clear the feed
        // clearChildren();
        document.getElementById("likeButton" + id).style.display = "none";

        //TODO//
        // implement post successful alert

        // load the feed
        loadMyPublicPage()
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });

}
function createNewPublicPost(pDesc, pTitle, pUsername, ref, id, dVar, mVar, cVar, lVar) {

    var newPost = document.createElement('li');
    var postLikeButton = document.createElement('li');

    var ss = "'" + id + "-" + pTitle + "-" + pDesc + "-" + pUsername + "-" + ref + "-" + dVar + "-" + mVar + "-" + cVar + "-" + lVar + "'";
    console.log(ss);
    postLikeButton.innerHTML = "<button onclick = " + "likeThisPost(" + ss + ")" + " class = 'likeButton' id = 'likeButton" + id + "' calue>LIKE THIS POST</button>";
    var numOfComments;
    var numOfLikes;

    db.collection("posts").doc("" + id).get().then((doc) => {
        console.log(doc.data());
        numOfLikes = doc.data().likes;
        numOfComments = doc.data().numberOfComments;
        newPost.innerHTML = "<img id = 'thisPostProfPic'><br>" + pUsername + "<br><br><br>Title:<br> " + pTitle + "<br><br>" + pDesc +
            "<br><br><div id = 'likeDisplay'>Likes: " + numOfLikes + "</div><br><div id = 'commentDisplay'>Comments: " + numOfComments + "</div><br><br>Click to view or add comments";
        newPost.id = "publicPostElement";
        newPost.className = "postClass";

        if (ref != "" && ref != "underfined" && ref != null) {
            storage.child(ref).getDownloadURL().then((url) => {
                console.log(url);
                var img = document.getElementById('thisPostProfPic');
                img.setAttribute('src', url);

            }).catch((error) => {
                console.log('error in img download: ' + error.message);
            });
        }
        else {

        }

        newPost.onclick = function () {
            // clear the feed
            clearChildren();

            document.getElementById("userHead").style.display = "none";


            db.collection("posts").doc("" + id).collection("comments").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    createNewComment(doc.data().title, doc.data().username);
                })
            })

            //load comments and ability to add a new comment

            // initialize div elements
            var cancelButton = document.createElement('div');
            var title = document.createElement('div');
            var commentButton = document.createElement('div');
            var thisPostTitle = document.createElement('div');
            //    var thisPostImage = document.createElement('img');
            //    thisPostImage.id = "thisPostImageID";



            thisPostTitle.innerHTML = "<div id = 'thisPostTitle'><img id = 'thisPostImageID'> <br>" + pUsername + " <br><br>Title: <br>" + pTitle + " <br><br>" + pDesc + "<br><br><br></div>"

            // create the edit form by setting the HTML content of each div
            cancelButton.innerHTML = "<input onclick = 'loadMyPublicPage()' type='submit' id = 'cancelButton1' value = 'CANCEL'/>"
            title.innerHTML = "<br><br><br><label id = 'commentLabel'>My comment: <br><br></label><input type='text' class = 'required' id='12345' '><br><br><br>";
            // update button
            commentButton.innerHTML = "<input onclick = " + "addCommentToPost(" + ss + ")" + " type='submit' form='mainForm' id = 'pButton1' value = 'COMMENT'/>"
            // delete button

            // load the edit form on the feed
            document.getElementById("feed")
                .appendChild(cancelButton)
                .appendChild(thisPostTitle)
                .appendChild(commentButton)
                .appendChild(title)

            if (ref != "" && ref != "undefined" && ref != null) {
                storage.child(ref).getDownloadURL().then((url) => {
                    console.log(url);
                    var img = document.getElementById('thisPostImageID');
                    img.setAttribute('src', url);

                }).catch((error) => {
                    console.log('error in img download: ' + error.message);
                });
            }
            else {

            }
            document.getElementById("feed").style.display = "";

        }

        document.getElementById("publicPostFeed").appendChild(postLikeButton).appendChild(newPost);
    });


}

function createNewAccountPublicPost(pDesc, pTitle, pUsername, ref, id, dVar, mVar, cVar, lVar) {

    var newPost = document.createElement('li');
    newPost.innerHTML = "" + pUsername + "<br><br>Title:<br> " + pTitle + "<br><br>-----" + pDesc + "<br><br><br>Click to view or add comments";
    newPost.id = "myPostElement";
    newPost.className = "postClass";

    var ss = "'" + id + "-" + pTitle + "-" + pDesc + "-" + pUsername + "-" + ref + "-" + dVar + "-" + mVar + "-" + cVar + "-" + lVar + "'";


    newPost.onclick = function () {
        // clear the feed
        clearChildren();

        // document.getElementById("publicPostDivID").style.display = "none";

        document.getElementById("usernameHeader").style.display = "none";
        document.getElementById("userHead").style.display = "none";

        document.getElementById("favoritesIcon").style.display = "none";
        document.getElementById("favLabel").style.display = "none";

        document.getElementById("calendar").style.display = "none";
        document.getElementById("todaysDate").style.display = "none";
        document.getElementById("filler1").style.display = "none";


        db.collection("posts").doc("" + id).collection("comments").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                createNewComment(doc.data().title, doc.data().username, doc.id);
            })
        })

        //load comments and ability to add a new comment

        // initialize div elements
        var cancelButton = document.createElement('div');
        var thisPostTitle = document.createElement('div');
        var title = document.createElement('div');
        var commentButton = document.createElement('div');
        var deleteButton = document.createElement('div');



        thisPostTitle.innerHTML = "<div id = 'thisPostTitle'>Username: " + pUsername + " <br><br>Title: <br<" + pTitle + " <br><br>" + pDesc + "<br><br><br></div>";



        // create the edit form by setting the HTML content of each div
        cancelButton.innerHTML = "<input onclick = 'loadMyAccount()' type='submit' id = 'cancelButton1' value = 'CANCEL'/>"
        title.innerHTML = "<br><br><br><label class = 'exClass1'>Comment: <br><br></label><input type='text' class = 'required' id='12345' '><br><br><br>";
        // update button
        commentButton.innerHTML = "<input onclick = " + "addCommentToPost(" + ss + ")" + " type='submit' form='mainForm' id = 'pButton1' value = 'COMMENT'/>"
        // delete button
        deleteButton.innerHTML = "<input onclick = 'deletePost(" + id + ")' type='submit' form='mainForm' id = 'dButton1' value = 'DELETE POST'/>"

        // load the edit form on the feed
        document.getElementById("feed")
            .appendChild(cancelButton)
            .appendChild(thisPostTitle)
            .appendChild(title)
            .appendChild(commentButton)
            .appendChild(deleteButton)
        document.getElementById("feed").style.display = "";

    }

    document.getElementById("accountPostFeed").appendChild(newPost);

}


function createNewComment(cTitle, cUsername) {

    var newComm = document.createElement('li');
    newComm.innerHTML = "Username: " + cUsername + "<br><br>" + cTitle;
    newComm.id = "publicPostElementComment";
    newComm.className = "postClassComment";
    document.getElementById("commentPostFeed").appendChild(newComm);
    document.getElementById("commentFeed").style.display = "";

}


function loadMyPublicPage() {
    clearChildren();
    document.getElementById("usernameHeader").style.display = "";
    document.getElementById("userHead").style.display = "";
    document.getElementById("userHead").innerHTML = "Welcome to the public feed!";
    document.getElementById("fullFavFeed").style.display = "none";
    document.getElementById("accountProfPicIcon").style.display = "";

    document.getElementById('publicIconLabel').style.display = '';
    document.getElementById('trackingIconLabel').style.display = '';
    document.getElementById('accountIconLabel').style.display = '';
    document.getElementById("publicFeed").style.display = "";
    // document.getElementById("publicPostIcon").style.display = "";
    // document.getElementById("favoritesIcon").style.display = "";
    document.getElementById("addButtonsDiv").style.display = "none";

    document.getElementById("publicPostDivID").style.display = '';

    document.getElementById("calendar").style.display = "none";
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("filler1").style.display = "none";
    document.getElementById("postLabel").style.display = "";

    // load the exercise feed
    db.collection("posts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewPublicPost(doc.data().desc, doc.data().title, doc.data().username, doc.data().profPicRef, doc.id, doc.data().date, doc.data().month, doc.data().numberOfComments, doc.data().likes);
        })
    })
    //show the public feed and add on clicks to elements to create forms to make comments 

    //add likes to each document
}
function addPublicPostToDB() {
    // initialize and set vars
    var requiredInputs = document.querySelectorAll(".required");

    var titleInput = requiredInputs[0].value;
    var descInput = requiredInputs[1].value;


    //TODO//
    // change the random number implementation?

    // get a random number for the doc ID 
    var fill = "" + generateRandomNumber(1, 1000000);

    // create a new food document with random number id
    db.collection("posts").doc(fill).set({
        title: titleInput,
        desc: descInput,
        username: username,
        profPicRef: profPic,
        likes: 0,
        numberOfComments: 0,
        date: currDate,
        month: currMonth
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadMyPublicPage()
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });
}
function addCommentToPost(s) {

    var params = s.split('-');
    for (var i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
    var id = params[0];
    var tt = params[1];
    var dd = params[2];
    var uu = params[3];
    var ref = params[4];
    var dateVar = params[5];
    var monthVar = params[6];
    var commentsPlusOne = parseInt(params[7]) + 1;
    var ll = params[8];
    // initialize and set vars

    //TODO//
    // change the random number implementation?

    // get a random number for the doc ID 

    // console.log(id);

    // console.log(titleInput);
    // console.log(username);
    // var commentsPlusOne;
    db.collection("posts").doc("" + id).set({
        title: tt,
        desc: dd,
        username: uu,
        profPicRef: ref,
        date: dateVar,
        month: monthVar,
        numberOfComments: commentsPlusOne,
        likes: ll
    }).then(() => {
    })

    var requiredInputs = document.querySelectorAll(".required");
    var titleInput = requiredInputs[0].value;
    var fill = "" + generateRandomNumber(1, 1000000);

    console.log(fill);
    // create a new food document with random number id
    db.collection("posts").doc("" + id).collection("comments").doc(fill).set({
        title: titleInput,
        username: username,
    }).then(() => {
        // clear the feed
        clearChildren();

        //TODO//
        // implement post successful alert

        // load the feed
        loadMyPublicPage()
    })
        .catch((error) => {
            // alert("ERROR submitting post! " + error);
        });
}
function newPublicPost() {
    clearChildren();

    document.getElementById("feed").style.display = "";

    document.getElementById("usernameHeader").style.display = "none";
    // document.getElementById("favoritesIcon").style.display = "none";
    // document.getElementById("publicPostIcon").style.display = "none";

    document.getElementById("favLabel").style.display = "none";

    document.getElementById("calendar").style.display = "none";
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("publicFeed").style.display = "none";




    // initialize div elements
    var cancelButton = document.createElement('div');
    var title = document.createElement('div');
    var inputTitle = document.createElement('div');
    var description = document.createElement('div');
    var usernameA = document.createElement('div');
    var postButton = document.createElement('div');


    // set ids
    cancelButton.id = "cancelButtonPublicNew";
    title.id = "titlePublicNew";
    title.id = "titleInputPublicNew";
    description.id = "foodPublicNew";
    usernameA.id = "waterPublicNew";

    // then add the HTML content of the element
    cancelButton.innerHTML = "<input onclick = 'loadMyPublicPage()' type='submit' id = 'cancelButton1' value = 'CANCEL'/><br>"
    title.innerHTML = "<br><br><br><label class = 'exClass1'>NEW PUBLIC POST<br>";
    inputTitle.innerHTML = "<br><br><br><label class = 'exClass1'>Title for post:<br><br> </label> <input type='text' id='foodReq1' onclick = '" + 'makeClean(document.getElementById("foodReq1"))' + "' class = 'required'><br><br><br>";
    description.innerHTML = "<br><br><br><label class = 'exClass1'>Description<br><br> </label> <input type='text' id='foodReq1' onclick = '" + 'makeClean(document.getElementById("foodReq1"))' + "' class = 'required'><br><br><br>";
    usernameA.innerHTML = "<label class = 'exClass1'>Username: " + username + "</label>";
    postButton.innerHTML = "<input onclick = 'addPublicPostToDB()'type='submit' id = 'pButton1' value = 'POST'/>"

    // this could be created as appending one div instead for better styling
    document.getElementById("feed")
        .appendChild(cancelButton)
        .appendChild(usernameA)
        .appendChild(title)
        .appendChild(inputTitle)
        .appendChild(description)
        .appendChild(postButton)



}


function trackingIconClick() {
    loadFeed(currDate, currMonth);
    document.getElementById("accountProfPicIcon").style.display = "";

}

function textTest() {
    var requiredInputs = document.querySelectorAll(".required");

    var taskTitleInput = requiredInputs[0].value;
    var taskDescInput = requiredInputs[1].value;
    var taskTimeInput = requiredInputs[2].value;

    var arr = requiredInputs[3].value.split('-');
    var remY = arr[0];
    var remM = arr[1];
    var remD = arr[2];
    var arr2 = requiredInputs[4].value.split(':');
    var remH = arr2[0];
    var remMin = arr2[1];
    console.log(remY);
    console.log(remM);
    console.log(remD);
    console.log(remH);
    console.log(remMin);

    console.log(arr2);
    var reminderDateTime = new Date(remY, remM - 1, remD, remH, remMin);
    var today = new Date();

    var timeUntilReminder = reminderDateTime - today;
    console.log(timeUntilReminder, reminderDateTime, today);

    // var reminderTime = "10pm"
    var string = "Reminder for: " + taskTitleInput + ", " + taskDescInput + ", " + taskTimeInput + "//" + timeUntilReminder + "";

    if (myPhoneNumber != null && myPhoneNumber != "undefined") {

        axios.post('http://localhost:1337/sms', {
            variable1: "" + myPhoneNumber,
            variable2: "" + string
        })
            .then(response => {
                const users = response.data.data;
                console.log(`GET users`, users);
            })
            .catch(error => console.error(error.response.data));


    }
    else {
        alert("please set your phone number correctly in the edit account page");
    }

}
function loadMyNutritionInfo() {


    getMyFoods();
    loadLowFeedForReccos();
    loadHighFeedForReccos();


    document.getElementById("totalFeed").style.display = "";
    document.getElementById("totalFeed2").style.display = "";
    document.getElementById("reccomendedFeed").style.display = "";
    document.getElementById("idealNutritionValuesFeed").style.display = "";
    document.getElementById("apiInfo").style.display = "";
    // document.getElementById("apiInfo2").style.display = "";
    document.getElementById("nutritionValues").style.display = "";
    document.getElementById("dRecco").style.display = "";
    document.getElementById("nutritionValuesFeedDaily").style.display = "";
    document.getElementById("nutritionValuesFeedWeek").style.display = "";
    document.getElementById("dailyReccomendedNutrientFeedLow").style.display = "";
    document.getElementById("dailyReccomendedNutrientFeed").style.display = "";



    // document.getElementById("").style.display = "";

}