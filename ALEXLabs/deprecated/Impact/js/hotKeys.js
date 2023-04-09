// Created by Alex Garcia, 2022-23
// ALEX Labs

document.onkeydown = checkKey;

// document.getElementById('test').innerHTML = slider.value;
var slider = document.getElementById("myRange");
var output = document.getElementById("energy");
output.innerHTML = slider.value;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "13") { // Enter -- Fire Photon
        e.preventDefault();
        addValue();
    } else if (e.keyCode >= 48 && e.keyCode < 58) { // E -- Focus on photon input
        document.getElementById('repeats').focus();
    }
}