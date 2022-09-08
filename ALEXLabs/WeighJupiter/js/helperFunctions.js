function changeTiming() {
    NUM_ITER = Math.round(DESIRED_TIME / TIME_PER_FRAME);
}

function changeScale() {
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    animate();
}

// Calculate the positions of each of the moons
// input JW is "Jupiter Width", which changes with scale
function calcIoPos(JW) {
    var time = parseInt(document.getElementById("demo").innerHTML);
    IO_PERIOD = 42; // hours
    IO_A_TO_JUPITER_R = 5.898; // ratio of jupiter radius to orbit of moon
    a = (JW * IO_A_TO_JUPITER_R);

    var canvasXcenter = canvas.width / 2

    x = a * Math.cos((2 * Math.PI) * time / IO_PERIOD + 7 * Math.PI / 4) + canvasXcenter;
    y = a * Math.sin((2 * Math.PI) * time / IO_PERIOD + 7 * Math.PI / 4);
    return [x, y];
}
function calcEuropaPos(JW) {
    var time = parseInt(document.getElementById("demo").innerHTML);
    EUROPA_PERIOD = 85; // hours
    EUROPA_A_TO_JUPITER_R = 9.384; // ratio of jupiter radius to orbit of moon
    a = (JW * EUROPA_A_TO_JUPITER_R);

    var canvasXcenter = canvas.width / 2

    x = a * Math.cos((2 * Math.PI) * time / EUROPA_PERIOD + 2 * Math.PI / 3) + canvasXcenter;
    y = a * Math.sin((2 * Math.PI) * time / EUROPA_PERIOD + 2 * Math.PI / 3);
    return [x, y];
}
function calcGanymedePos(JW) {
    var time = parseInt(document.getElementById("demo").innerHTML);
    GANYMEDE_PERIOD = 172; // hours
    GANYMEDE_A_TO_JUPITER_R = 14.972; // ratio of jupiter radius to orbit of moon
    a = (JW * GANYMEDE_A_TO_JUPITER_R);

    var canvasXcenter = canvas.width / 2

    x = a * Math.cos((2 * Math.PI) * time / GANYMEDE_PERIOD + Math.PI / 3) + canvasXcenter;
    y = a * Math.sin((2 * Math.PI) * time / GANYMEDE_PERIOD + Math.PI / 3);
    return [x, y];
}
function calcCallistoPos(JW) {
    var time = parseInt(document.getElementById("demo").innerHTML);
    CALLISTO_PERIOD = 400; // hours
    CALLISTO_A_TO_JUPITER_R = 26.334; // ratio of jupiter radius to orbit of moon
    a = (JW * CALLISTO_A_TO_JUPITER_R);

    var canvasXcenter = canvas.width / 2

    x = a * Math.cos((2 * Math.PI) * time / CALLISTO_PERIOD) + canvasXcenter;
    y = a * Math.sin((2 * Math.PI) * time / CALLISTO_PERIOD);
    return [x, y];
}

// Displays modal with information on which moon is which
function whichIsWhich() {
    document.getElementById("myModal").style.display = "block";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none"
    }
}

function colorBlindToggle() {
    COLOR_BLIND = COLOR_BLIND == true ? false : true;
    flipVisibility(document.getElementById('IOLabel'));
    flipVisibility(document.getElementById('EUROPALabel'));
    flipVisibility(document.getElementById('GANYMEDELabel'));
    flipVisibility(document.getElementById('CALLISTOLabel'));
    animate();
}

function flipVisibility(element) {
    element.style.display = element.style.display == "none" ? "block" : "none";
}