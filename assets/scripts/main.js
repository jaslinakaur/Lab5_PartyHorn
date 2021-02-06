// main.js

// VARIABLES:

var audtype = document.getElementById("horn-sound");
var vol_slider = document.getElementById("volume-slider");
var horn_image = document.getElementById("sound-image");
var vol_image = document.getElementById("volume-image");
var vol_num = document.getElementById("volume-number");
var radio_btns = document.getElementById("audio-selection");
var honk_btn = document.getElementById("honk-btn");





// ACTIONS:

// press the honk button
honk_btn.addEventListener("click", function(event){
    event.preventDefault();
    play_sound();
});

// num changes -> CHANGE VOLUME
vol_num.addEventListener("change", function(event){
    event.preventDefault();
    set_slider_vol();
    change_volume();
    set_sound_level_icon();
});

// slider changed -> CHANGE VOLUME
vol_slider.addEventListener("change", function(event) {
    event.preventDefault();
    set_num_vol();
    change_volume();
    set_sound_level_icon();
});

// radio button switched -> change the image and sound
radio_btns.addEventListener("change", function(event){
    event.preventDefault();
    change_image_and_sound();
});





// FUNCTIONS:


// play sound when button pressed
function play_sound() {
    audtype.play();
};


// change volume based on slider
function change_volume() {
    audtype.volume = vol_num.value/100;

};


// change num based on slider
function set_num_vol() {
    vol_num.value = vol_slider.value;
};


// change slider based on num
function set_slider_vol() {
    vol_slider.value = vol_num.value;
};


// change sound level icons based on volume
function set_sound_level_icon() {
    if(vol_num.value > 66) {
        // be loud
        vol_image.src = "./assets/media/icons/volume-level-3.svg";
        honk_btn.disabled = false;
    } else if(vol_num.value > 33) {
        // be medium
        vol_image.src = "./assets/media/icons/volume-level-2.svg";
        honk_btn.disabled = false;
    } else if(vol_num.value > 0) {
        //be quiet
        vol_image.src = "assets/media/icons/volume-level-1.svg";
        honk_btn.disabled = false;
    } else { // volume == 0
        // be silent
        vol_image.src = "assets/media/icons/volume-level-0.svg";
        honk_btn.disabled = true;
    }

};


// change iamge and sound based on radio button
function change_image_and_sound() {
    if (document.getElementById("radio-air-horn").checked == true) {
        // air horn
        horn_image.src = "assets/media/images/air-horn.svg";
        audtype.src = "assets/media/audio/air-horn.mp3";

    } else if (document.getElementById("radio-car-horn").checked == true) {
        // car horn
        horn_image.src = "assets/media/images/car.svg";
        audtype.src = "assets/media/audio/car-horn.mp3";

    } else if (document.getElementById("radio-party-horn").checked == true) {
        // party horn
        horn_image.src = "assets/media/images/party-horn.svg";
        audtype.src = "assets/media/audio/party-horn.mp3";
    }

};

