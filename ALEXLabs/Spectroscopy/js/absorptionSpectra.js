function init() {
    animation = window.requestAnimationFrame(draw);
}

function draw() {
    var SLIDER_HIDDEN = document.getElementById('myRange');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(0, 300);
    ctx.lineTo(750, 300);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(0, 100);
    ctx.lineTo(750, 100);
    ctx.stroke();
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(250, 25);
    ctx.lineTo(500, 25);
    ctx.stroke();

    var WL = wavelengtheVConverter(document.getElementById("energy").innerHTML);
    var color = wavelengthToColor(WL);

    document.getElementById("energy").style.color = color;

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);

    var pertx = 0;
    var perty = 0;

    var repeats = parseInt(document.getElementById("repeats").value)

    if (isNaN(repeats)) {
        repeats = 1;
    }

    if (y > 300 || y < 115) {
        if (y < 30) {
            var np1 = number + 1;
            document.getElementById("number").innerHTML = np1 + ".";
            if (x > 235 && x < 515) {
                document.getElementById("finish").innerHTML = "Photon Observed";
                TOTAL_OBS += 1;
            } else {
                document.getElementById("finish").innerHTML = "No Photon Observed";
            }

            if (number < repeats - 1) {
                sleep(sleeptime);
                restart();
            } else {
                SLIDER_HIDDEN.style.display = 'block';
                document.getElementById("numEmit").innerHTML = TOTAL_EMIT;
                document.getElementById("numObs").innerHTML = TOTAL_OBS;
                if (animation) {
                    window.cancelAnimationFrame(animation)
                }
                going = false;
                return;
            }

        }
        pertx = 25 * Math.sin(theta);
        perty = -25 * Math.abs(Math.cos(theta));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.lineTo(x + pertx, y + perty);
        ctx.stroke();
        animation = window.requestAnimationFrame(draw);
        x += pertx;
        y += perty;
    } else {
        pertx = 10 * Math.sin(theta);
        perty = -10 * Math.abs(2 * Math.cos(theta));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        if (Math.random() < pDef) {
            pDef = pDef / 2;
            var np1 = number + 1;
            theta = random(0, 2 * Math.PI);
            animation = window.requestAnimationFrame(draw);
        } else if (Math.random() < pAbs) {
            var np1 = number + 1;
            document.getElementById("number").innerHTML = np1 + ".";
            document.getElementById("finish").innerHTML = "No Photon Observed";
            if (number < repeats - 1) {
                sleep(sleeptime);
                restart();
            } else {
                sleep(sleeptime)
                SLIDER_HIDDEN.style.display = 'block';
                going = false;
            }
        } else if (x + pertx < 0 || x - pertx > 750) {
            var np1 = number + 1;
            document.getElementById("number").innerHTML = np1 + ".";
            document.getElementById("finish").innerHTML = "No Photon Observed";
            if (number < repeats - 1) {
                sleep(sleeptime);
                restart();
            } else {
                SLIDER_HIDDEN.style.display = 'block';
                document.getElementById("numEmit").innerHTML = TOTAL_EMIT;
                document.getElementById("numObs").innerHTML = TOTAL_OBS;
                if (animation) {
                    window.cancelAnimationFrame(animation)
                }
                going = false;
                return;
            }
        } else {
            x += pertx;
            y += perty;
            animation = window.requestAnimationFrame(draw);
        }
        ctx.lineTo(x + pertx, y + perty)
        x += pertx;
        y += perty;
        ctx.stroke();
    }
    // document.getElementById('test').innerHTML = TOTAL_OBS + '/' + TOTAL_EMIT
    document.getElementById("numEmit").innerHTML = TOTAL_EMIT;
    document.getElementById("numObs").innerHTML = TOTAL_OBS;

}

function start() {
    going = true;
    document.getElementById('myRangeTitle').style.display = "none";
    document.getElementById('myRange').style.display = "none";
    document.getElementById('whichGas').style.display = "none";
    document.getElementById('whichGasChoose').style.display = "none";
    document.getElementById('displayResult').style.display = "block";
    document.getElementById('resultsText').style.display = "block";
    document.getElementById('whichGasChosen').style.display = "block";

    TOTAL_EMIT = 1;
    TOTAL_OBS = 0;

    theta = 0;
    if (animation) {
        window.cancelAnimationFrame(animation)
    }
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 1; i < parseInt(document.getElementById("repeats").value); ++i) {
        s1 = "prev" + String(i);
        s2 = "prevNum" + String(i);
        document.getElementById(s1).innerHTML = "";
        document.getElementById(s2).innerHTML = "";
    }

    var slider = document.getElementById("myRange");
    if (unlikelyEnergies.includes(parseFloat(slider.value))) {
        pAbs = pAbsHigh;
        pDef = pDefAbsorber;
    } else if (weakUnlikelyEnergies.includes(parseFloat(slider.value))) {
        pAbs = pAbsMedium;
        pDef = pDefAbsWeak;
    } else {
        pAbs = pAbsLow;
        pDef = pDefElse;
    }

    x = 375;
    y = 500;
    number = 0;
    document.getElementById("number").innerHTML = "";
    document.getElementById("finish").innerHTML = "";
    init();
}

function restart() {
    TOTAL_EMIT += 1;
    if (animation) {
        window.cancelAnimationFrame(animation)
    }
    theta = 0;
    number++;
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 1; i < parseInt(document.getElementById("repeats").value); ++i) {
        k = parseInt(document.getElementById("repeats").value) - i;
        j = k + 1;
        s1 = "prev" + String(j);
        s2 = "prev" + String(k);
        s3 = "prevNum" + String(j);
        s4 = "prevNum" + String(k);
        document.getElementById(s1).innerHTML = document.getElementById(s2).innerHTML;
        document.getElementById(s3).innerHTML = document.getElementById(s4).innerHTML;
    }

    if (unlikelyEnergies.includes(parseFloat(slider.value))) {
        pAbs = pAbsHigh;
        pDef = pDefAbsorber;
    } else if (weakUnlikelyEnergies.includes(parseFloat(slider.value))) {
        pAbs = pAbsMedium;
        pDef = pDefAbsWeak;
    } else {
        pAbs = pAbsLow;
        pDef = pDefElse;
    }

    document.getElementById("prev1").innerHTML = document.getElementById("finish").innerHTML;
    document.getElementById("prevNum1").innerHTML = String(number) + ".";
    x = 375;
    y = 500;
    draw();
}