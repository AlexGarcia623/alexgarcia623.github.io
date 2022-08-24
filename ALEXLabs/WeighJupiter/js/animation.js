function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    Jupiter = new Image();
    Jupiter.src = 'JupiterRotating/spinning_jupiter-' + startString + '.png';

    Jupiter.onload = function () {
        var wrh = Jupiter.width / Jupiter.height;
        var newWidth = canvas.width / SCALE;
        var newHeight = newWidth / wrh;
        if (newHeight > canvas.height) {
            newHeight = canvas.height;
            newWidth = newHeight * wrh;
        }
        var xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
        var yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;

        context.drawImage(Jupiter, xOffset, yOffset, newWidth, newHeight);
        drawMoonsInit(yOffset, newHeight);
    }
}

function animate_continuous() {
    var JW = 105 / SCALE;

    context.clearRect(0, 0, canvas.width / 2 - JW, canvas.height); // clear canvas
    context.clearRect(canvas.width / 2 + JW, 0, canvas.width, canvas.height); // clear canvas
    Jupiter = new Image();
    Jupiter.src = 'JupiterRotating/spinning_jupiter-' + startString + '.png';

    Jupiter.onload = function () {
        var wrh = Jupiter.width / Jupiter.height;
        var newWidth = canvas.width / SCALE;
        var newHeight = newWidth / wrh;
        if (newHeight > canvas.height) {
            newHeight = canvas.height;
            newWidth = newHeight * wrh;
        }
        var xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
        var yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;

        context.drawImage(Jupiter, xOffset, yOffset, newWidth, newHeight);
        drawMoonsWShadow(yOffset, newHeight);
    }
}

function drawMoonsInit(y, h) {
    var dispY = y + h / 2;

    JupiterWidth = 105 / SCALE;

    // IO
    context.strokeStyle = 'orange';
    context.beginPath();
    context.lineWidth = 2.5;
    var I = calcIoPos(JupiterWidth);
    IOx = I[0];
    IOy = I[1];
    if ((IOx > (canvas.width / 2 - JupiterWidth) && IOx < (canvas.width / 2 + JupiterWidth)) && (IOy > 0)) {
        // do nothing
    } else {
        context.arc(IOx, dispY + 2, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Europa
    context.strokeStyle = 'red';
    context.beginPath();
    context.lineWidth = 2.5;
    var E = calcEuropaPos(JupiterWidth);
    EUROPAx = E[0];
    EUROPAy = E[1];
    if ((EUROPAx > (canvas.width / 2 - JupiterWidth) && EUROPAx < (canvas.width / 2 + JupiterWidth)) && (EUROPAy > 0)) {
        // do nothing
    } else {
        context.arc(EUROPAx, dispY - 1, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Ganymede
    context.strokeStyle = 'green';
    context.beginPath();
    context.lineWidth = 2.5;
    var G = calcGanymedePos(JupiterWidth);
    GANYMEDEx = G[0];
    GANYMEDEy = G[1];
    if ((GANYMEDEx > (canvas.width / 2 - JupiterWidth) && GANYMEDEx < (canvas.width / 2 + JupiterWidth)) && (GANYMEDEy > 0)) {
        // do nothing
    } else {
        context.arc(GANYMEDEx, dispY + 5, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Callisto
    context.strokeStyle = 'blue';
    context.beginPath();
    context.lineWidth = 2.5;
    var C = calcCallistoPos(JupiterWidth);
    CALLISTOx = C[0];
    CALLISTOy = C[1];
    if ((CALLISTOx > (canvas.width / 2 - JupiterWidth) && CALLISTOx < (canvas.width / 2 + JupiterWidth)) && (CALLISTOy > 0)) {
        // do nothing
    } else {
        context.arc(CALLISTOx, dispY + 5, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }
}

function drawMoonsWShadow(y, h) {
    var dispY = y + h / 2;

    JupiterWidth = 105 / SCALE;

    // IO - Previous
    context.strokeStyle = 'black';
    context.beginPath();
    context.lineWidth = 2.5;
    if ((IOx > (canvas.width / 2 - JupiterWidth) && IOx < (canvas.width / 2 + JupiterWidth)) && (IOy > 0)) {
        // do nothing
    } else {
        context.arc(IOx, dispY + 2, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // IO
    context.strokeStyle = 'orange';
    context.beginPath();
    context.lineWidth = 2.5;
    var I = calcIoPos(JupiterWidth);
    IOx = I[0];
    IOy = I[1];
    if ((IOx > (canvas.width / 2 - JupiterWidth) && IOx < (canvas.width / 2 + JupiterWidth)) && (IOy > 0)) {
        // do nothing
    } else {
        context.arc(IOx, dispY + 2, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Europa - Previous
    context.strokeStyle = 'black';
    context.beginPath();
    context.lineWidth = 2.5;
    if ((EUROPAx > (canvas.width / 2 - JupiterWidth) && EUROPAx < (canvas.width / 2 + JupiterWidth)) && (EUROPAy > 0)) {
        // do nothing
    } else {
        context.arc(EUROPAx, dispY - 1, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Europa
    context.strokeStyle = 'red';
    context.beginPath();
    context.lineWidth = 2.5;
    var E = calcEuropaPos(JupiterWidth);
    EUROPAx = E[0];
    EUROPAy = E[1];
    if ((EUROPAx > (canvas.width / 2 - JupiterWidth) && EUROPAx < (canvas.width / 2 + JupiterWidth)) && (EUROPAy > 0)) {
        // do nothing
    } else {
        context.arc(EUROPAx, dispY - 1, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Ganymede -- Previous
    context.strokeStyle = 'black';
    context.beginPath();
    context.lineWidth = 0;
    if ((GANYMEDEx > (canvas.width / 2 - JupiterWidth) && GANYMEDEx < (canvas.width / 2 + JupiterWidth)) && (GANYMEDEy > 0)) {
        // do nothing
    } else {
        context.arc(GANYMEDEx, dispY + 5, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Ganymede
    context.strokeStyle = 'green';
    context.beginPath();
    context.lineWidth = 2.5;
    var G = calcGanymedePos(JupiterWidth);
    GANYMEDEx = G[0];
    GANYMEDEy = G[1];
    if ((GANYMEDEx > (canvas.width / 2 - JupiterWidth) && GANYMEDEx < (canvas.width / 2 + JupiterWidth)) && (GANYMEDEy > 0)) {
        // do nothing
    } else {
        context.arc(GANYMEDEx, dispY + 5, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Callisto -- Previous
    context.strokeStyle = 'black';
    context.beginPath();
    context.lineWidth = 2.5;
    if ((CALLISTOx > (canvas.width / 2 - JupiterWidth) && CALLISTOx < (canvas.width / 2 + JupiterWidth)) && (CALLISTOy > 0)) {
        // do nothing
    } else {
        context.arc(CALLISTOx, dispY, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }

    // Callisto
    context.strokeStyle = 'blue';
    context.beginPath();
    context.lineWidth = 2.5;
    var C = calcCallistoPos(JupiterWidth);
    CALLISTOx = C[0];
    CALLISTOy = C[1];
    if ((CALLISTOx > (canvas.width / 2 - JupiterWidth) && CALLISTOx < (canvas.width / 2 + JupiterWidth)) && (CALLISTOy > 0)) {
        // do nothing
    } else {
        context.arc(CALLISTOx, dispY, 0.75, 0, 2 * Math.PI, true);
        context.stroke();
    }
}

function Next() {
    document.getElementById("clickLocation").innerHTML = "";
    document.getElementById("warning").innerHTML = "";
    document.getElementById("restWarning").innerHTML = "";
    start = start + NUM_ITER;
    if (start > NUMBER_OF_FRAMES) {
        var diff = start % NUMBER_OF_FRAMES;
        start = diff;
    }
    startString = String(start);
    var counter = parseInt(document.getElementById("counter").innerHTML);
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
    var time_so_far = parseInt(document.getElementById("demo").innerHTML);
    document.getElementById("demo").innerHTML = time_so_far + DESIRED_TIME;
    animate();
}

function next_continuous() {
    document.getElementById("warning").innerHTML = ""
    start = start + NUM_ITER;
    if (start > NUMBER_OF_FRAMES) {
        var diff = start % NUMBER_OF_FRAMES;
        start = diff;
    }
    startString = String(start);
    var time_so_far = parseFloat(document.getElementById("demo").innerHTML);
    document.getElementById("demo").innerHTML = (time_so_far + DESIRED_TIME).toFixed(1);
    animate_continuous();
}

function Back() {
    document.getElementById("clickLocation").innerHTML = "";
    var time_so_far = parseInt(document.getElementById("demo").innerHTML);
    if ((time_so_far - DESIRED_TIME) <= 0) {
        start = 0;
        startString = String(start);
        document.getElementById("demo").innerHTML = 0;
        document.getElementById("warning").innerHTML = "Warning:"
        document.getElementById("restWarning").innerHTML = "Cannot access data before 0 Hours";
    } else {
        document.getElementById("demo").innerHTML = time_so_far - DESIRED_TIME;
        if (start - NUM_ITER < 0) {
            var diff = Math.abs(start - NUM_ITER);
            start = NUMBER_OF_FRAMES - (diff % NUMBER_OF_FRAMES);
        } else {
            start = start - NUM_ITER;
        }

        startString = String(start);
    }
    animate();
}

var interval_tracker = "";
var fps = 24;
function startContinuousAnimation() {
    interval_tracker = setInterval(function () { //throttle requestAnimationFrame to 20fps
        requestAnimationFrame(next_continuous);
    }, 1000 / fps)
}

function stopContinuousAnimation() {
    window.clearInterval(interval_tracker);
}