function start() {
    document.getElementById("hidden1").style.display = "block";
    for (var i = 0; i < wavelengths.length; ++i) {
        var WL = wavelengths[i];
        WLChecker(WL, Lines);
    }
    plot("myPlot");
}

function plot(which) {
    for (var i = 0; i < WLlength; ++i) {
        colors[i] = wavelengthToColor(wavelengths[i], counts[i]);
    };
    Plotly.newPlot(which, data, layout, config);
}

function whichLines() {
    var values = Array.from(options).map(({ value }) => value);
    whichLine = String(values);
    Lines = configs[whichLine];
}

function WLChecker(WL, Lines2Omit) {
    let index = wavelengths.indexOf(WL);
    if (Lines2Omit.includes(WL)) {
        counts[index] = 0;
    } else {
        counts[index] = 2;
    }
}

function randomWavelength(min, max) {
    var lambda = parseInt(Math.random() * (max - min) + min);
    if (Lines.includes(lambda)) {
        lambda = randomWavelength(min, max)
    }
    return lambda;
}