// main.js

// TODO
// Input field that serves as the textual indicator of sound level

var audtype = document.getElementById("horn-sound");
var vol_slider = documnet.getElementById("volume-slider");
var horn_image = documnet.getElementById("sound-image");
var vol_image = documnet.getElementById("volume-image");
var vol_num = documnet.getElementById("volume-number");
var radio_btns = documnet.getElementById("audio-selection");

// document.getElementById("honk-btn").addEventListener("click", function() {
//     alert("Hello World!");
//   });

// document.getElementById("honk-btn").addEventListener("click", function(event){
//     event.preventDefault();
//     alert("Hello World!");
// });

document.getElementById("honk-btn-container").addEventListener('click', promptMe);

function promptMe() {
    var userAdjective = prompt("Please provide an Adjective");
    alert (userAdjective);
}