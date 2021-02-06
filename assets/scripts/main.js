// main.js

// TODO
// Input field that serves as the textual indicator of sound level

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

document.getElementById("honk-btn").addEventListener("click", function(event){
    event.preventDefault();
    set_sound_level_icon();
});


// if slider changes, adjust num
vol_slider.addEventListener("click", set_num_vol());

function set_num_vol() {
    vol_num = vol_slider;
}

// if num changes, adjust slider
vol_num.addEventListener("click", set_slider_vol());

function set_slider_vol() {
    vol_slider = vol_num;
}

// adjust the slider bar
vol_slider.addEventListener("change", function(event){
    event.preventDefault();
    set_sound_level_icon();
});

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

}


// switching the image based on radio button selected
radio_btns.addEventListener("change", change_image());

function change_image() {
    if(radio_btns == "radio-air-horn-container") {
        // air horn image
        horn_image.src = "assets/media/images/air-horn.svg";
    } else if(radio_btns == "radio-car-horn-container") {
        // car horn image
        horn_image.src = "assets/media/images/car.svg";
    } else { // party horn image
        horn_image.src = "assets/media/images/party-horn.svg";
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