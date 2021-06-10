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

// set other 'global' vars
var currDate;
var currMonth;
var userID;
var username;


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
    // initialize and set vars
    var s = getDateAndMonth();
    var day = s.substring(0, 2);
    var month = s.substring(3, 5);
    // set 'global' vars
    userID = getURLParameter("userID");
    username = getURLParameter("username");

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

    // set month title and todays date on load
    document.getElementById("monthTitle").innerHTML = "" + month;
    // style username display title
    document.getElementById("userHead").innerHTML = username + "'s Tracking Calendar";
    // show post buttons
    document.getElementById("exButton").style.display = "";
    document.getElementById("foodButton").style.display = "";
    document.getElementById("taskButton").style.display = "";


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


   
    // check if user is signed in - call function to style
    if (userID == "null" ) {
        userSignedOut();
        // alert("Error: no userID");
        // window.location.href = "../index.html"
    }

    // clear the feed
    clearChildren();

    // load the feed
    loadFeed(day, month);
}

/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- USER IS NOT LOGGED IN -----------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// STYLE PAGE RESPECTIVELY
function userSignedOut() {
    // clear the feed
    clearChildren();

    // load vars for when user is signed out and show register

    // hide links to pages when user is logged in
    document.getElementById('accLink').style.display = 'none';
    document.getElementById('favLink').style.display = 'none';
    document.getElementById('usernameHeader').style.display = 'none';
    document.getElementById('feed').style.display = 'none';
    document.getElementById('taskFeed').style.display = 'none';
    document.getElementById('exFeed').style.display = 'none';
    document.getElementById('foodFeed').style.display = 'none';
    document.getElementById('taskButton').style.display = 'none';
    document.getElementById('exButton').style.display = 'none';
    document.getElementById('foodButton').style.display = 'none';


    // show links to pages when user is logged out
    document.getElementById('logLink').style.display = '';
    document.getElementById('regLink').style.display = '';
    document.getElementById('signedOut').style.display = '';
    document.getElementById('signedOut1').style.display = '';

}


/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- NEXT MONTH CLICK FUNCTION -------------/////////////////
/////////////////////////////////////////////////////////////////////////////////////
// STYLE CALENDAR/FEED (NO DATE SELECTION) 
function nextMonth(currMonth) {
    // clear the feed
    clearChildren();

    // show empty feed title 
    document.getElementById("filler1").style.display = "";
    // hide date title, add post buttons
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("exButton").style.display = "none";
    document.getElementById("taskButton").style.display = "none";
    document.getElementById("foodButton").style.display = "none";

    // clear the current active date on calendar
    var active = document.getElementsByClassName("active");
    if (active[0] != null) {
        active[0].className = "";
    }

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
    // hide date title, add post buttons
    document.getElementById("todaysDate").style.display = "none";
    document.getElementById("exButton").style.display = "none";
    document.getElementById("taskButton").style.display = "none";
    document.getElementById("foodButton").style.display = "none";

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
function clearChildren() {
    // clear HTML/TEXT content of all feeds
    document.getElementById('feed').textContent = '';
    document.getElementById('feed').innerHTML = '';
    document.getElementById('exFeed').textContent = '';
    document.getElementById('exFeed').innerHTML = '';
    document.getElementById('foodFeed').textContent = '';
    document.getElementById('foodFeed').innerHTML = '';

    document.getElementById("exFeedTitle").style.display = "none";
    document.getElementById("taskFeedTitle").style.display = "none";
    document.getElementById("foodFeedTitle").style.display = "none";

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


    //TODO//
    // add taskFeed check

}

/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD NEW TASK DIV -----------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW EXERCISE, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO EX FEED
function createNewTask(ttl, desc, t, id) {
    //TODO//
    // needs a hover attribute

    // initialize new task div: set id & class name
    var newTask = document.createElement('div');
    newTask.id = "taskID";
    newTask.className = "testtt";

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
    newTask.innerHTML = fullString;
    // set on-click to edit/load this task div
    newTask.onclick = function () {
        // clear the feed
        clearChildren();

        // initialize div elements
        var title = document.createElement('div');
        var description = document.createElement('div');
        var time = document.createElement('div');
        var postButton = document.createElement('div');
        var deleteButton = document.createElement('div');

        // set the ids
        title.id = "titleNewEdit";
        description.id = "descriptionNewEdit";
        time.id = "timeExNewEdit";
        postButton.id = "postButtonExNewEdit";
        deleteButton.id = "deleteButtonExNewEdit";

        // create the edit form by setting the HTML content of each div
        title.innerHTML = "<br><br><br><label class = 'exClass1'>Title: <br><br></label><input type='text' class = 'required' id='12345' value = '" + ttl + "'><br><br><br>";
        description.innerHTML = "<label class = 'exClass1'>Description: <br><br></label> <input type='text' id='repsInput' class = 'required' value = '" + desc + "'><br><br><br>";
        time.innerHTML = "<label class = 'exClass1'>Time: <br><br></label><input type='text' id='timeInput' class = 'required' value = '" + t + "'><br><br><br>";
        // update button
        postButton.innerHTML = "<input onclick = 'updateTaskEntry(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'UPDATE'/>"
        // delete button
        deleteButton.innerHTML = "<input onclick = 'deleteTask(" + id + ")'type='submit' form='mainForm' id = 'pButton1' value = 'DELETE'/>"

        // load the edit form on the feed
        document.getElementById("feed")
            .appendChild(title)
            .appendChild(description)
            .appendChild(time)
            .appendChild(postButton)
            .appendChild(deleteButton);
    }

    // load new exercise div into the exercise feed
    document.getElementById("taskFeed").appendChild(newTask);
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD NEW EXERCISE DIV -----------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW EXERCISE, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO EX FEED
function createNewExercise(r, s, w, t, m, id) {
    //TODO//
    // needs a hover attribute

    // initialize new exercise div: set id & class name
    var newExercise = document.createElement('div');
    newExercise.id = "exerciseID";
    newExercise.className = "testtt";

    //format a string to set element html
    var fullString = "<br>";
    if (m != "") {
        fullString = fullString + "Title:<br>" + m + "<br><br>";
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
    newExercise.innerHTML = fullString;

    // set on-click to edit/load this exercise div
    newExercise.onclick = function () {
        // clear the feed
        clearChildren();

        // initialize div elements
        var message = document.createElement('div');
        var reps = document.createElement('div');
        var sets = document.createElement('div');
        var weight = document.createElement('div');
        var time = document.createElement('div');
        var postButton = document.createElement('div');
        var deleteButton = document.createElement('div');

        // set the ids
        message.id = "messageNewEdit";
        reps.id = "repsNewEdit";
        sets.id = "setsNewEdit";
        weight.id = "weightNewEdit";
        time.id = "timeExNewEdit";
        postButton.id = "postButtonExNewEdit";
        deleteButton.id = "deleteButtonExNewEdit";

        // create the edit form by setting the HTML content of each div
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
            .appendChild(message)
            .appendChild(reps)
            .appendChild(sets)
            .appendChild(weight)
            .appendChild(time)
            .appendChild(postButton)
            .appendChild(deleteButton);
    }

    // load new exercise div into the exercise feed
    document.getElementById("exFeed").appendChild(newExercise);
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- CREATE/LOAD NEW FOOD DIV ---------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// SET VARS FOR NEW FOOD, SET ONCLICK FOR 'EDIT' PURPOSE, LOAD INTO FOOD FEED
function createNewFood(f, w, t, m, id) {
    //TODO//
    // needs a hover attribute

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

    // initialize new food div: set id & class name
    var newFood = document.createElement('div');
    newFood.id = "foodID";
    newFood.className = "testtt";

    // create the new food div and set HTML content w/ respective vars
    newFood.innerHTML = fullString;

    // set on-click to edit/load this food div
    newFood.onclick = function () {
        // clear the feed
        clearChildren();
        // initialize div elements
        var food = document.createElement('div');
        var water = document.createElement('div');
        var time = document.createElement('div');
        var message = document.createElement('div');
        var postButton = document.createElement('div');
        var deleteButton = document.createElement('div');

        // set the ids
        food.id = "foodNewEdit";
        water.id = "waterNewEdit";
        time.id = "timeFoodNewEdit";
        message.id = "messageFoodNewEdit";
        postButton.id = "postButtonFoodNewEdit";
        deleteButton.id = "deleteButtonExNewEdit";

        // create the edit form by setting the HTML content of each div
        food.innerHTML = "<br><br><br><label class = 'exClass1'>Food (ex: PB&J plus a banana)<br><br> </label> <input type='text' id='foodInput' class = 'required' value = '" + f + "'><br><br><br>  ";
        water.innerHTML = "<label class = 'exClass1'>Water/Beverages (ex: Water, Protein Shake)<br> <br> </label><input type='text' class = 'required' id='waterInput' value = '" + w + "'><br><br><br>  ";
        time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br>  </label><input type='text' id='timeFoodInput' class = 'required' value = '" + t + "'><br><br> <br> ";
        message.innerHTML = "<label class = 'exClass1'>Note (ex: 400 calories)<br><br> </label><input type='text' id='messageFoodInput'class = 'required' value = '" + m + "'><br><br><br>";
        // update button
        postButton.innerHTML = "<input onclick = 'updateFoodEntry(" + id + ");' type='submit' id = 'pButton1' value = 'UPDATE'/>"
        // delete button
        deleteButton.innerHTML = "<input onclick = 'deleteFood(" + id + ");' type='submit' id = 'pButton1' value = 'DELETE'/>"

        // load the food form on the feed
        document.getElementById("feed")
            .appendChild(food)
            .appendChild(water)
            .appendChild(message)
            .appendChild(time)
            .appendChild(postButton)
            .appendChild(deleteButton);
    }

    // load new food div into the food feed
    document.getElementById("foodFeed").appendChild(newFood);
}


/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- LOAD TASK FORM -------------------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE VAR DIVS, SET IDS, SET FORM HTML CONTENT 
function newTask() {
    // clear the feed
    clearChildren();

    // initialize div elements
    var title = document.createElement('div');
    var description = document.createElement('div');
    var time = document.createElement('div');
    var postButton = document.createElement('div');

    // set ids
    title.id = "titleNew";
    description.id = "descriptionNew";
    time.id = "timeNew";
    postButton.id = "postButton";

    // then add the HTML content of the element
    title.innerHTML = "<br><br><br><label class = 'exClass1'>Title (ex: Chemistry, Dentist, Birthday, etc.) <br><br></label><input id='taskReq1' onclick = '" + 'makeClean(document.getElementById("taskReq1"))' + "' type='text' class = 'required'><br><br><br>";
    description.innerHTML = "<label class = 'exClass1'>Description (ex: Due at 11:59pm, buy a gift, etc.) <br><br></label> <input type='text' id='taskReq2' onclick = '" + 'makeClean(document.getElementById("taskReq2"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br></label><input type='text' id='taskReq3' onclick = '" + 'makeClean(document.getElementById("taskReq3"))' + "' class = 'required'><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addTask()' type='submit' id = 'pButton1' value = 'POST'/>"

    document.getElementById("feed")
        .appendChild(title)
        .appendChild(description)
        .appendChild(time)
        .appendChild(postButton)
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- LOAD EXERCISE FORM ---------------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE VAR DIVS, SET IDS, SET FORM HTML CONTENT 
function newExercise() {
    // clear the feed
    clearChildren();

    // initialize div elements
    var reps = document.createElement('div');
    var sets = document.createElement('div');
    var weight = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');

    // set ids
    reps.id = "repsNew";
    sets.id = "setsNew";
    weight.id = "weightNew";
    time.id = "timeNew";
    message.id = "messageNew";
    postButton.id = "postButton";

    // then add the HTML content of the element
    // title and time are required for inputs
    message.innerHTML = "<br><br><br><label class = 'exClass1'>Title (ex: DB Bench Press. Difficult) <br><br></label><input id='exReq1' onclick = '" + 'makeClean(document.getElementById("exReq1"))' + "' type='text' class = 'required' ><br><br><br>";
    reps.innerHTML = "<label class = 'exClass1'>Reps (ex: 8) <br><br></label> <input type='text' id='exReq2' onclick = '" + 'makeClean(document.getElementById("exReq2"))' + "' class = 'required' ><br><br><br>";
    sets.innerHTML = "<label class = 'exClass1'>Sets (ex: 3)<br><br></label><input type='text' id='exReq3' onclick = '" + 'makeClean(document.getElementById("exReq3"))' + "' class = 'required'><br><br><br>";
    weight.innerHTML = "<label class = 'exClass1'>Weight (ex: 100 lbs)<br><br></label><input type='text' id='exReq4' onclick = '" + 'makeClean(document.getElementById("exReq4"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm) <br><br></label><input id='exReq5' onclick = '" + 'makeClean(document.getElementById("exReq5"))' + "' type='text' class = 'required' ><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addExercise()'type='submit' form='mainForm' id = 'pButton1' value = 'POST'/>"

    // this could be created as appending one div instead for better styling
    document.getElementById("feed")
        .appendChild(message)
        .appendChild(reps)
        .appendChild(sets)
        .appendChild(weight)
        .appendChild(time)
        .appendChild(postButton)
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- LOAD FOOD/WATER FORM -------------------////////////////
/////////////////////////////////////////////////////////////////////////////////////
// INITIALIZE VAR DIVS, SET IDS, SET FORM HTML CONTENT 
function newFoodAndWater() {
    // clear the feed
    clearChildren();


    // initialize div elements
    var food = document.createElement('div');
    var water = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');

    // set ids
    food.id = "foodNew";
    water.id = "waterNew";
    time.id = "timeFoodNew";
    message.id = "messageFoodNew";
    postButton.id = "postButtonFoodNew";

    // then add the HTML content of the element
    food.innerHTML = "<br><br><br><label class = 'exClass1'>Food (ex: PB&J plus a banana)<br><br> </label> <input type='text' id='foodReq1' onclick = '" + 'makeClean(document.getElementById("foodReq1"))' + "' class = 'required'><br><br><br>";
    water.innerHTML = "<label class = 'exClass1'>Water/Beverages (ex: Water, Protein Shake)<br> <br> </label><input type='text' id='foodReq2' onclick = '" + 'makeClean(document.getElementById("foodReq2"))' + "' class = 'required'><br><br><br>";
    message.innerHTML = "<label class = 'exClass1'>Note (ex: 400 calories)<br><br> </label><input type='text' id='foodReq3' onclick = '" + 'makeClean(document.getElementById("foodReq3"))' + "' class = 'required'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br>  </label><input type='text' id='foodReq4' onclick = '" + 'makeClean(document.getElementById("foodReq4"))' + "' class = 'required' ><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addFoodAndWater()'type='submit' id = 'pButton1' value = 'POST'/>"

    // this could be created as appending one div instead for better styling
    document.getElementById("feed")
        .appendChild(food)
        .appendChild(water)
        .appendChild(message)
        .appendChild(time)
        .appendChild(postButton)
}


/********************************************************************/

/********************************************************************/
/*********************** DATABASE FUNCTIONS *************************/
/********************************************************************/

/********************************************************************/

// should load feed, then buttons

/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- LOAD FEED OF DATE/MONTH ------------------//////////////
/////////////////////////////////////////////////////////////////////////////////////
// SET GLOBAL DATE/MONTH VARS, STYLE CALENDAR/FEED, LOAD THIS DATES FEED 
function openDay(date, month) {
    // properly reformat date var with leading 0
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
    document.getElementById("taskButton").style.display = "";
    document.getElementById("exButton").style.display = "";
    document.getElementById("foodButton").style.display = "";

    // hide empty feed title element (filler1 = empty feed title)
    document.getElementById("filler1").style.display = "none";
      // check if user is signed in - call function to style
      if (userID == "null" ) {
        userSignedOut();
        // alert("Error: no userID");
        // window.location.href = "../index.html"
    }
}


/////////////////////////////////////////////////////////////////////////////////////
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
        .catch((error) => {
            alert("ERROR submitting post! " + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
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
            alert("ERROR submitting post! " + error);
        });;
}
/////////////////////////////////////////////////////////////////////////////////////
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
            alert("ERROR submitting post! " + error);
        });;
}


/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- LOAD THE FEED ----------------------------//////////////
/////////////////////////////////////////////////////////////////////////////////////
// FORMAT DATE, LOAD EXERCISE, FOODANDWATER, TASK FEEDS
function loadFeed(date, month) {
    // format day var 
    var day = "" + date;
    if (day.length < 2) {
        day = "0" + day;
    }

    // load the exercise feed
    db.collection("users").doc(userID).collection("exercises").where("date", "==", day).where("month", "==", month).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewExercise(doc.data().reps, doc.data().sets, doc.data().weight, doc.data().time, doc.data().message, doc.id);
            // show this feed title
            if (doc.exists){
            document.getElementById("exFeedTitle").style.display = '';
            }
        });
    });
    // load the food/water feed
    db.collection("users").doc(userID).collection("foodAndWater").where("date", "==", day).where("month", "==", month).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewFood(doc.data().food, doc.data().water, doc.data().time, doc.data().message, doc.id)
       // show this feed title
       if (doc.exists){
       document.getElementById("foodFeedTitle").style.display = '';
       }
        });
    });
    // load the task feed
    db.collection("users").doc(userID).collection("tasks").where("date", "==", day).where("month", "==", month).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            createNewTask(doc.data().title, doc.data().description, doc.data().time, doc.id)
        // show this feed title
        if (doc.exists){
        document.getElementById("taskFeedTitle").style.display = '';
        }
        });
    });
}
/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- LOAD THIS ACCOUNT -------------------/////////////
///////////////////////////////////////////////////////////////////////////////////// 
// LOAD THE CURRENT USERS ACCOUNT PAGE FOR EDITING PURPOSES
function loadAccount() {
    //TODO//
    // user userID to display this users info
    //
    // make an edit account form - profile pic, change username, etc
}

/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- DELETE TASK POST FROM DB ---------------////////////
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
/////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////
/////////------------------- UPDATE TASK POST ----------------------/////////////
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
            alert("ERROR submitting post!" + error);
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
            alert("ERROR submitting post!" + error);
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
            alert("ERROR submitting post! " + error);
        });;
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
/////////------------------- TOGGLE HAMBURGER MENU -------------------/////////////
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