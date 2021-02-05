// main.js

// TODO
// Input field that serves as the textual indicator of sound level

var audtype = document.getElementById("horn-sound");
var vol_slider = document.getElementById("volume-slider");
var horn_image = document.getElementById("sound-image");
var vol_image = document.getElementById("volume-image");
var vol_num = document.getElementById("volume-number");
var radio_btns = document.getElementById("audio-selection");
var honk_btn = d

// document.getElementById("honk-btn").addEventListener("click", function() {
//     alert("Hello World!");
//   });

document.getElementById("honk-btn").addEventListener("click", set_sound_level_icon());

// document.getElementById("honk-btn").addEventListener('click', promptMe);

// function promptMe() {
//     var userAdjective = prompt("Please provide an Adjective");
//     alert (userAdjective);
// };



function set_sound_level_icon() {
    preventDefault();
    alert("Hello World!");
    if(vol_slider > 66 || vol_num > 66) {
        // be loud
        vol_image.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(vol_slider > 33 || vol_num > 33) {
        // be medium
        vol_image.src = "./assets/media/icons/volume-level-2.svg";
        
    }
    else if(vol_slider > 0 || vol_num > 0) {
        //be quiet
        vol_image.src = "assets/media/icons/volume-level-1.svg";
    }
    else { // volume == 0
        // be silent
        vol_image.src = "assets/media/icons/volume-level-0.svg";
    }

}



// change_volume() {
    
//     video.volume = slider.value/100;

// };


// var video = document.getElementById('video');
// var volu3 = document.getElementById('vol-control');

// window.setInterval(changevolume(), 1);

// function changevolume() {

//  var x = volu3.value;
//  var y = x / 100;

//  video.volume = y;

// };