// main.js

// VARIABLES:

var audtype = document.getElementById("horn-sound");
var vol_slider = document.getElementById("volume-slider");
var horn_image = document.getElementById("sound-image");
var vol_image = document.getElementById("volume-image");
var vol_num = document.getElementById("volume-number");
var radio_btns = document.getElementById("audio-selection");
//var honk_btn = document.getElementById("honk-btn");

// document.getElementById("honk-btn").addEventListener("click", function() {
//     alert("Hello World!");
//   });


// ACTIONS:

// press the honk button
document.getElementById("honk-btn").addEventListener("click", function(event){
    event.preventDefault();
    //set_sound_level_icon();
    play_sound();
});

// move slider -> change volume
vol_slider.addEventListener("mousemove", change_volume());

// move slider -> change num
vol_slider.addEventListener("click", set_num_vol());

// move slider  -> set sound level icon
vol_slider.addEventListener("change", function(event){
    event.preventDefault();
    set_sound_level_icon();
});

// num changes -> move slider
vol_num.addEventListener("click", set_slider_vol());

// switch radio button -> change image and sound
radio_btns.addEventListener("change", change_image_and_sound());






// FUNCTIONS:


// play sound when button pressed
function play_sound() {
    audtype.play();
};


// change volume based on slider
function change_volume() {
    audtype.volume = vol_slider.value/100;

};


// change num based on slider
function set_num_vol() {
    vol_num = vol_slider;
};


// change slider based on num
function set_slider_vol() {
    vol_slider = vol_num;
};


// change sound level icons based on volume
function set_sound_level_icon() {
    
    if(vol_slider > 66 || vol_num > 66) {
        // be loud
        vol_image.src = "./assets/media/icons/volume-level-3.svg";
    } else if(vol_slider > 33 || vol_num > 33) {
        // be medium
        vol_image.src = "./assets/media/icons/volume-level-2.svg";
        
    } else if(vol_slider > 0 || vol_num > 0) {
        //be quiet
        vol_image.src = "assets/media/icons/volume-level-1.svg";
    } else { // volume == 0
        // be silent
        vol_image.src = "assets/media/icons/volume-level-0.svg";
    }

};


// change iamge and sound based on radio button
function change_image_and_sound() {
    if(radio_btns == "radio-air-horn-container") {
        // air horn
        horn_image.src = "assets/media/images/air-horn.svg";
        audtype.src = "assets/media/audio/air-horn.mp3";

    } else if(radio_btns == "radio-car-horn-container") {
        // car horn
        horn_image.src = "assets/media/images/car.svg";
        audtype.src = "assets/media/audio/car-horn.mp3";

    } else if(radio_btns == "radio-party-horn-container") {
        // party horn
        horn_image.src = "assets/media/images/party-horn.svg";
        audtype.src = "assets/media/audio/party-horn.mp3";
    }

};





// var video = document.getElementById('video');
// var volu3 = document.getElementById('vol-control');

// window.setInterval(changevolume(), 1);

// function changevolume() {

//  var x = volu3.value;
//  var y = x / 100;

//  video.volume = y;

// };