function random(min, max) {
    return Math.random() * (max - min) + min;
}

function generateGaussian(mean, std) {
    var _2PI = Math.PI * 2;
    var u1 = Math.random();
    var u2 = Math.random();

    var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2);
    var z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(_2PI * u2);

    return z1 * std + mean;
}

function wavelengtheVConverter(energy) {
    h = 6.626e-34;
    c = 3e8;
    joules = energy * 1.602e-19;
    wavelength = parseInt((h * c) / (joules) * 1e9);
    return wavelength;
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
