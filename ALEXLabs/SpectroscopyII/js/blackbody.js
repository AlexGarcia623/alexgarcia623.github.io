function TfromLM(LambdaMax) {
    LambdaMax = LambdaMax * 1e-9;
    Tsun = 5800;
    lambdaMaxSun = 500 * 1e-9;
    var constant = Tsun * lambdaMaxSun;
    T = constant / LambdaMax;
    return T;
}

function planck(p, T, step) {
    var lambda0 = 100e-9;
    var lambdaf = 100e-8;
    step = (lambdaf - lambda0) / 1000;
    var lam = lambda0;
    h = 6.6260701e-34;
    c = 2.9979246e8;
    k = 1.380649e-23;
    for (var i = 0; lam < lambdaf - step; ++i) {
        lam = lam + step;
        exp = h * c / (lam * k * T);
        factor = 2 * h * c ** 2 / (lam ** 5);
        p[i] = factor / (Math.pow(Math.E, exp) - 1);
        lamArr[i] = lam.toPrecision(4);
        colors[i] = wavelengthToColorAlpha(lam * 1e9);
    }
    return p;
}

function pNorm(p, norm) {
    var pMax = 0;
    for (var i = 0; i < 1000; ++i) {
        if (p[i] > pMax) {
            pMax = p[i];
        }
    }
    for (var i = 0; i < 1000; ++i) {
        p[i] = p[i] * norm / pMax;
    }
    return p;
}

function pNoise(p) {
    // Use after norm
    for (var i = 0; i < 1000; ++i) {
        p[i] = p[i] * 0.925 - generateGaussian(0, 0.25);
    }
    return p;
}

function addAbsorptionLine(p) {
    var lines = [393e-9, 397e-9, 410e-9, 423e-9, 431e-9, 434e-9, 486e-9, 517e-9, 527e-9, 590e-9, 656e-9, 686e-9];
    var place = 0;
    for (var i = 0; i < lines.length; ++i) {
        for (var j = 0; j < lamArr.length; ++j) {
            diff = Math.abs(lines[i] - lamArr[j])
            if (diff == 0) {
                p[j] = p[j] * 0.75;
            } else if (diff < 4e-9) {
                p[j] = p[j] * Math.abs(1 - (Math.abs(4 - diff * 1e9) / 12));
            }
        }
    }
}

function changeTemp() {
    LambdaMax = parseInt(document.getElementById("MaxLambda").value);

    temperatureCurve = planck(temperatureCurve, parseInt(output.innerHTML), 0.1e-9);
    temperatureCurve = pNorm(temperatureCurve, 10);

    var trace1 = {
        x: lamArr,
        y: temperatureCurve,
        marker: { color: 'green' },
        type: 'scatter',
        showlegend: false
    }
    //Colored Wavelength Curve
    var trace3 = {
        x: lamArr,
        y: wavelengthCurve,
        marker: { color: colors },
        type: 'bar',
        showlegend: false,
        bargap: 0
        //width:9.1e-9
    }

    var data = [trace1, trace3]
    Plotly.newPlot("myPlot", data, layout, config);
}

function plot() {
    LambdaMax = parseInt(document.getElementById("MaxLambda").value);

    temperatureCurve = planck(temperatureCurve, parseInt(output.innerHTML), 0.1e-9);
    temperatureCurve = pNorm(temperatureCurve, 10);
    T = TfromLM(LambdaMax);
    wavelengthCurve = planck(wavelengthCurve, T, 1e-10);
    wavelengthCurve = pNorm(wavelengthCurve, 10);
    wavelengthCurve = pNoise(wavelengthCurve);
    addAbsorptionLine(wavelengthCurve);
    newlamArr = lamArr * 1e9
    //Green Temperature Curve
    var trace1 = {
        x: lamArr,
        y: temperatureCurve,
        marker: { color: 'green' },
        type: 'scatter',
        showlegend: false
    }
    //Colored Wavelength Curve
    var trace3 = {
        x: lamArr,
        y: wavelengthCurve,
        marker: { color: colors },
        type: 'bar',
        showlegend: false,
        bargap: 0
        //width:9.1e-9
    }

    var data = [trace1, trace3]
    Plotly.newPlot("myPlot", data, layout, config);
}
