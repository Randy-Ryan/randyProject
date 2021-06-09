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
const db = firebase.firestore();

var currDate;
var currMonth;

var userID;

//get todays date and load the feed
window.onload = function () {

    var s = getDateAndMonth();
    var day = s.substring(0, 2);
    var month = s.substring(3, 5);

    userID = getURLParameter("userID");

console.log(userID);
    if (userID == "null"){
        alert("Error");
        window.location.href = "../index.html"

    }


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

    //set month title and todays date on load
    document.getElementById("monthTitle").innerHTML = "" + month;
    clearChildren();
    document.getElementById("exButton").style.display = "";
    document.getElementById("foodButton").style.display = "";

    document.getElementById("filler1").style.display = "none";

    document.getElementById("days" + month).style.display = "";
    document.getElementById('id' + day + month).className = "active";

    currDate = day;
    currMonth = month;
    document.getElementById("todaysDate").innerHTML = currMonth + " / " + currDate;
    loadFeed(day, month);

}

//get the url params
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
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
    inputDiv.style.backgroundColor = "#ff0000";
}
//function to reset the input fields to normal
function makeClean(inputDiv) {
    //input field set to white
    inputDiv.parentNode.style.backgroundColor = "#FFFFFF";
    //text set to black
    inputDiv.parentNode.style.color = "#000000";
    //text field set to white	
    inputDiv.style.backgroundColor = "#FFFFFF";

}

//functions for changing between months and loading calendar
function nextMonth(currMonth) {
    clearChildren();

    document.getElementById("todaysDate").style.display = "none";

    document.getElementById("filler1").style.display = "";
    var active = document.getElementsByClassName("active");
    if (active[0] != null) {
        active[0].className = "";
    }

    document.getElementById("exButton").style.display = "none";
    document.getElementById("foodButton").style.display = "none";


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
function prevMonth(currMonth) {
    clearChildren();
    document.getElementById("filler1").style.display = "";
    document.getElementById("todaysDate").style.display = "none";

    var active = document.getElementsByClassName("active");
    if (active[0] != null) {
        active[0].className = "";
    }
    document.getElementById("exButton").style.display = "none";
    document.getElementById("foodButton").style.display = "none";

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

//function for clearing the page
function clearChildren() {
    //clear the current feed

    document.getElementById('feed').textContent = '';
    document.getElementById('feed').innerHTML = '';
    document.getElementById('exFeed').textContent = '';
    document.getElementById('exFeed').innerHTML = '';
    document.getElementById('foodFeed').textContent = '';
    document.getElementById('foodFeed').innerHTML = '';
    var el = document.getElementById('feed');

    while (el.firstChild) el.innerHTML = '';

    var el1 = document.getElementById('exFeed');

    while (el1.firstChild) el1.innerHTML = '';

    var el2 = document.getElementById('foodFeed');

    while (el2.firstChild) el2.innerHTML = '';

}

//function for loading a specific day
function openDay(date, month) {

    var d = "" + date;
    // reformat date var
    if (d.length < 2) {
        d = "0" + d;
    }

    currDate = d;
    currMonth = setMonth(month);
    // clear the past created posts when switching between days
    clearChildren();

    //remove the active class
    var active = document.getElementsByClassName("active");
    if (active[0] != null) {
        active[0].className = "";
    }

    //set the new active date
    document.getElementById('id' + d + month).className = "active";

    //  document.getElementById("displayDate").innerHTML = month + ", " + date;


    document.getElementById("todaysDate").style.display = "";
    document.getElementById("todaysDate").innerHTML = currMonth + " / " + currDate;
    document.getElementById("exButton").style.display = "";
    document.getElementById("exButton").style.display = "";
    document.getElementById("foodButton").style.display = "";
    document.getElementById("filler1").style.display = "none";

    loadFeed(date, month);



    // check my logs for this date from firebase


}

//function for getting todays date and month
function getDateAndMonth() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    return dd + "/" + mm;
}

// function for new food/water post in database
function addFoodAndWater() {
    // create a new datapoint in firebase and also display on main calendar
    var requiredInputs = document.querySelectorAll(".required");
    var error = false;
    var error2 = false;


    //initialize inputs variable from all inputs with class "required"
    for (var i = 0; i < requiredInputs.length; i++) {
        //if blank, prevent form submission
        //make input fields red
        //set error to true
        error = false;
        if (isBlank(requiredInputs[i])) {
            makeRed(requiredInputs[i]);
            error2 = true;
            error = true;
        }
        //make input field normal if no error
        //useful when first case is error, but second is not
        if (error == false) {
            makeClean(requiredInputs[i]);
        }

    }
    // now add the post in firebase
    if (error2 == false) {

        //set these params then add them to a post
        var food = requiredInputs[0].value;
        var water = requiredInputs[1].value;
        var time = requiredInputs[2].value;
        var message = requiredInputs[3].value;

        var date = currDate;
        var month = currMonth;

        //db post goes here
        var fill = "" + generateRandomNumber(1, 1000000);
        db.collection("users").doc(userID).collection("foodAndWater").doc(fill).set({
            food: food,
            water: water,
            time: time,
            message: message,
            date: date,
            month: month
        }).then(() => {
            // console.log("Document successfully written!");
            clearChildren();
            // alert("Food/bev post published");

            loadFeed(date, month);


        })
            .catch((error) => {
                // console.error("Error writing document: ", error);
                alert("ERROR submitting post!");
            });;
    }
}
// function for new exercise post in database
function addExercise() {
    // create a new datapoint in firebase and also display on main calendar
    var requiredInputs = document.querySelectorAll(".required");
    var error = false;
    var error2 = false;


    //initialize inputs variable from all inputs with class "required"
    for (var i = 0; i < requiredInputs.length; i++) {
        //if blank, prevent form submission
        //make input fields red
        //set error to true
        error = false;
        if (isBlank(requiredInputs[i])) {
            makeRed(requiredInputs[i]);
            error2 = true;
            error = true;
        }
        //make input field normal if no error
        //useful when first case is error, but second is not
        if (error == false) {
            makeClean(requiredInputs[i]);
        }

    }
    // now add the post in firebase and clear form
    if (error2 == false) {

        //set these params then add them to a post
        var reps = requiredInputs[1].value;
        var sets = requiredInputs[2].value;
        var weight = requiredInputs[3].value;
        var time = requiredInputs[4].value;
        var message = requiredInputs[0].value;

        var date = currDate;
        var month = currMonth;

        // var date = document.getElementById('active').innerHTML;
        // var month = document.getElementById('monthTitle').innerHTML;

        //db post goes here
        var fill = "" + generateRandomNumber(1, 100000);
        db.collection("users").doc(userID).collection("exercises").doc(fill).set({
            reps: reps,
            sets: sets,
            weight: weight,
            time: time,
            message: message,
            date: date,
            month: month
        }).then(() => {
            // console.log("Document successfully written!");
            clearChildren();
            // alert("Exercise post published");

            loadFeed(date, month);


        })
            .catch((error) => {
                // console.error("Error writing document: ", error);
                alert("ERROR submitting post!");
            });;
    }

}


// function for loading a new exercise entry
function newExercise() {
    // should clear previous functional calls
    clearChildren();
    // Put element where it is supposed to appear.

    // initialize div elements
    var reps = document.createElement('div');
    var sets = document.createElement('div');
    var weight = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');

    reps.id = "repsNew";
    sets.id = "setsNew";
    weight.id = "weightNew";
    time.id = "timeNew";
    message.id = "messageNew";
    postButton.id = "postButton";


    // Then add the content of the element
    message.innerHTML = "<br><br><br><label class = 'exClass1'>Title (ex: DB Bench Press. Difficult) <br><br></label><input type='text' class = 'required' id='messageInput'><br><br><br>";
    reps.innerHTML = "<label class = 'exClass1'>Reps (ex: 8) <br><br></label> <input type='text' class = 'required' id='repsInput'><br><br><br>";
    sets.innerHTML = "<label class = 'exClass1'>Sets (ex: 3)<br><br></label><input type='text' class = 'required' id='setsInput'><br><br><br>";
    weight.innerHTML = "<label class = 'exClass1'>Weight (ex: 100 lbs)<br><br></label><input type='text' class = 'required' id='weightInput'><br><br><br>";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm) <br><br></label><input type='text' class = 'required' id='timeInput'><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addExercise()'type='submit' form='mainForm' id = 'pButton1' class = 'filler2' value = 'POST'/>"

    document.getElementById("feed")
        .appendChild(message)
        .appendChild(reps)
        .appendChild(sets)
        .appendChild(weight)
        .appendChild(time)
        .appendChild(postButton)

}
// function for loading a new food entry
function newFoodAndWater() {
    // Put element where it is supposed to appear.

    clearChildren();
    // initialize div elements
    var food = document.createElement('div');
    var water = document.createElement('div');
    var time = document.createElement('div');
    var message = document.createElement('div');
    var postButton = document.createElement('div');

    food.id = "foodNew";
    water.id = "waterNew";
    time.id = "timeFoodNew";
    message.id = "messageFoodNew";
    postButton.id = "postButtonFoodNew";


    // Then add the content of the element
    food.innerHTML = "<br><br><br><label class = 'exClass1'>Food (ex: PB&J plus a banana)<br><br> </label> <input type='text' class = 'required' id='foodInput'><br><br><br>  ";
    water.innerHTML = "<label class = 'exClass1'>Water/Beverages (ex: Water, Protein Shake)<br> <br> </label><input type='text' class = 'required' id='waterInput'><br><br><br>  ";
    time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br>  </label><input type='text' class = 'required' id='timeFoodInput'><br><br> <br> ";
    message.innerHTML = "<label class = 'exClass1'>Note (ex: 400 calories)<br><br> </label><input type='text' class = 'required' id='messageFoodInput'><br><br><br>";
    postButton.innerHTML = "<input onclick = 'addFoodAndWater()'type='submit' id = 'pButton2' class = 'filler2' value = 'POST'/>"



    document.getElementById("feed")
        .appendChild(food)
        .appendChild(water)
        .appendChild(time)
        .appendChild(message)
        .appendChild(postButton)
}


//function for loading the feed
function loadFeed(date, month) {

    // display all exercises & food/water posts from firebase

    var day = "" + date;

    if (day.length < 2) {
        day = "0" + day;
    }

    db.collection("users").doc(userID).collection("exercises").where("date", "==", day).where("month", "==", month).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            createNewExercise(doc.data().reps, doc.data().sets, doc.data().weight, doc.data().time, doc.data().message, doc.id)
        });
    });

    db.collection("users").doc(userID).collection("foodAndWater").where("date", "==", day).where("month", "==", month).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            createNewFood(doc.data().food, doc.data().water, doc.data().time, doc.data().message, doc.id)
        });
    });


}


//function for deleting a exercise post
function deleteExercise(id) {
    db.collection("users").doc(userID).collection("exercises").doc("" + id).delete().then(() => {
        // console.log("Document successfully deleted!");
        clearChildren();
        loadFeed(currDate, currMonth);
    }).catch((error) => {
        // console.error("Error removing document: ", error);

    });
}
//function for deleting a food post
function deleteFood(id) {
    db.collection("users").doc(userID).collection("foodAndWater").doc("" + id).delete().then(() => {
        // console.log("Document successfully deleted!");
        clearChildren();
        loadFeed(currDate, currMonth);
    }).catch((error) => {
        // console.error("Error removing document: ", error);

    });
}


// function for loading a sample exercise post from database
function createNewExercise(r, s, w, t, m, id) {
    // First create a DIV element.
    var reps = r;
    var sets = s;
    var weight = w;
    var time = t;
    var message = m;

    var newExercise = document.createElement('div');
    newExercise.onclick = function () {

        clearChildren();
        // initialize div elements
        var message = document.createElement('div');
        var reps = document.createElement('div');
        var sets = document.createElement('div');
        var weight = document.createElement('div');
        var time = document.createElement('div');
        var postButton = document.createElement('div');
        var deleteButton = document.createElement('div');

        message.id = "messageNewEdit";
        reps.id = "repsNewEdit";
        sets.id = "setsNewEdit";
        weight.id = "weightNewEdit";
        time.id = "timeExNewEdit";
        postButton.id = "postButtonExNewEdit";
        deleteButton.id = "deleteButtonExNewEdit";

        // Then add the content of the element
        message.innerHTML = "<br><br><br><label class = 'exClass1'>Title (ex: DB Bench Press. Difficult) <br><br></label><input type='text' class = 'required' id='messageInput' value = '" + m + "'><br><br><br>";
        reps.innerHTML = "<label class = 'exClass1'>Reps (ex: 8) <br><br></label> <input type='text' class = 'required' id='repsInput' value = '" + r + "'><br><br><br>";
        sets.innerHTML = "<label class = 'exClass1'>Sets (ex: 3)<br><br></label><input type='text' class = 'required' id='setsInput' value = '" + s + "'><br><br><br>";
        weight.innerHTML = "<label class = 'exClass1'>Weight (ex: 100 lbs)<br><br></label><input type='text' class = 'required' id='weightInput' value = '" + w + "'><br><br><br>";
        time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm) <br><br></label><input type='text' class = 'required' id='timeInput' value = '" + t + "'><br><br><br>";
        postButton.innerHTML = "<input onclick = 'updateExerciseEntry( " + id + ")'type='submit' form='mainForm' id = 'pButton1' class = 'filler2' value = 'UPDATE'/>"
        deleteButton.innerHTML = "<input onclick = 'deleteExercise( " + id + ")'type='submit' form='mainForm' id = 'pButton1' class = 'filler2' value = 'DELETE'/>"


        document.getElementById("feed")
            .appendChild(message)
            .appendChild(reps)
            .appendChild(sets)
            .appendChild(weight)
            .appendChild(time)
            .appendChild(postButton)
            .appendChild(deleteButton);


    }
    // Then add the content (a new input box) of the element.
    // newExercise.innerHTML = "Reps: " + reps + " | " + " Sets: " + sets + " | " + " Weight: " + weight + " | " + " Time: " + time + " | " + " Message: " + message;
    newExercise.id = "exerciseID";

    newExercise.className = "testtt";

    newExercise.innerHTML = "<br><label id = 'exSample'>  Exercise: " + message + " <br><br> " + "Reps: " + reps + " <br> " + " Sets: " + sets + " <br> " + " Weight: " + weight + " <br><br> " + " Time: " + time +
        "</label><br><br>";

    document.getElementById("exFeed").appendChild(newExercise);


}
// function for loading a sample food post from database
function createNewFood(f, w, t, m, id) {
    // First create a DIV element.
    var food = f;
    var water = w;
    var time = t;
    var message = m;

    var newFood = document.createElement('div');
    newFood.onclick = function () {
        //edit functionality for a post

        // console.log("edit, delete");


        clearChildren();
        // initialize div elements
        var food = document.createElement('div');
        var water = document.createElement('div');
        var time = document.createElement('div');
        var message = document.createElement('div');
        var postButton = document.createElement('div');
        var deleteButton = document.createElement('div');

        food.id = "foodNewEdit";
        water.id = "waterNewEdit";
        time.id = "timeFoodNewEdit";
        message.id = "messageFoodNewEdit";
        postButton.id = "postButtonFoodNewEdit";
        deleteButton.id = "deleteButtonExNewEdit";

        // Then add the content of the element
        food.innerHTML = "<br><br><br><label class = 'exClass1'>Food (ex: PB&J plus a banana)<br><br> </label> <input type='text' class = 'required' id='foodInput' value = '" + f + "'><br><br><br>  ";
        water.innerHTML = "<label class = 'exClass1'>Water/Beverages (ex: Water, Protein Shake)<br> <br> </label><input type='text' class = 'required' id='waterInput' value = '" + w + "'><br><br><br>  ";
        time.innerHTML = "<label class = 'exClass1'>Time (ex: 530pm)<br><br>  </label><input type='text' class = 'required' id='timeFoodInput' value = '" + t + "'><br><br> <br> ";
        message.innerHTML = "<label class = 'exClass1'>Note (ex: 400 calories)<br><br> </label><input type='text' class = 'required' id='messageFoodInput' value = '" + m + "'><br><br><br>";
        postButton.innerHTML = "<input onclick = 'updateFoodEntry(" + id + ");' type='submit' id = 'pButton2' class = 'filler2' value = 'UPDATE'/>"
        deleteButton.innerHTML = "<input onclick = 'deleteFood(" + id + ");' type='submit' id = 'pButton2' class = 'filler2' value = 'DELETE'/>"


        document.getElementById("feed")
            .appendChild(food)
            .appendChild(water)
            .appendChild(time)
            .appendChild(message)
            .appendChild(postButton)
            .appendChild(deleteButton);

    }
    newFood.id = "foodID";
    newFood.className = "testtt";
    // Then add the content (a new input box) of the element.
    newFood.innerHTML = "<br><label id = 'foodSample'>Food: " + food + " <br><br> " + " Beverage: " + water + " <br><br> " + " Note: " + message + " <br><br> " + " Time: " + time +
        "</label><br><br>";
    
    document.getElementById("foodFeed").appendChild(newFood);

}


// function for updating an exercise post in database
function updateExerciseEntry(docId) {

    docId = "" + docId;

    date = "" + currDate;
    month = "" + currMonth;



    var requiredInputs = document.querySelectorAll(".required");

    var repsEdit = requiredInputs[1].value;
    var setsEdit = requiredInputs[2].value;
    var weightEdit = requiredInputs[3].value;
    var timeEdit = requiredInputs[4].value;
    var messageEdit = requiredInputs[0].value;

    db.collection("users").doc(userID).collection("exercises").doc(docId).set({
        reps: repsEdit,
        sets: setsEdit,
        weight: weightEdit,
        time: timeEdit,
        message: messageEdit,
        date: date,
        month: month
    }).then(() => {
        // console.log("Document successfully updated!");
        clearChildren();
        // alert("'" + repsEdit + "' post updated");

        loadFeed(date, month);


    })
        .catch((error) => {
            // console.error("Error writing document: ", error);
            alert("ERROR submitting post!");
        });;




}
// function for updating an exercise post in database
function updateFoodEntry(docId) {

    docId = "" + docId;

    date = "" + currDate;
    month = "" + currMonth;



    var requiredInputs = document.querySelectorAll(".required");

    var foodEdit = requiredInputs[0].value;
    var waterEdit = requiredInputs[1].value;
    var timeEdit = requiredInputs[2].value;
    var messageEdit = requiredInputs[3].value;

    db.collection("users").doc(userID).collection("foodAndWater").doc(docId).set({
        food: foodEdit,
        water: waterEdit,
        time: timeEdit,
        message: messageEdit,
        date: date,
        month: month
    }).then(() => {
        // console.log("Document successfully updated!");
        clearChildren();
        // alert("Exercise post published");

        loadFeed(date, month);


    })
        .catch((error) => {
            // console.error("Error writing document: ", error);
            alert("ERROR submitting post!");
        });;




}

//function for setting month var properly 
function setMonth(m) {
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
    return (m);
}

//function for returning a random number between a given min and max
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};