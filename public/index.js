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