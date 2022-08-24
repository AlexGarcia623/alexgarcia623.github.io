// Checks for button press (or release) and does associate hot keys task (hotKeys.js)
document.onkeydown = checkKey;
document.onkeyup   = checkKeyUp;

function hover(element) {
  element.style.backgroundColor = 'white';
}

function unhover(element) {
  element.style.backgroundColor = 'darkgray';
}

function checkKeyUp(e) {
  e = e || window.event;

 if (e.keyCode == '87' || e.keyCode == "38") { // W or Up - move image north
    unhover(northButton);
 } else if (e.keyCode == '83' || e.keyCode == "40") { // S or Down - move image south
    unhover(southButton);
 } else if (e.keyCode == '65' || e.keyCode == "37") { // A or Left - move image east
    unhover(eastButton);
 } else if (e.keyCode == '68' || e.keyCode == "39") { // D or Right - move image west
    unhover(westButton);
 }
}

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '87' || e.keyCode == "38") { // W or Up - move image north
    e.preventDefault();
    hover(northButton);
    north();
  } else if (e.keyCode == '83' || e.keyCode == "40") { // S or Down - move image south
    e.preventDefault();
    hover(southButton);
    south();
  } else if (e.keyCode == '65' || e.keyCode == "37") { // A or Left - move image east
    e.preventDefault();
    hover(eastButton);
    east();
  } else if (e.keyCode == '68' || e.keyCode == "39") { // D or Right - move image west
    e.preventDefault();
    hover(westButton);
    west();
  } else if (e.keyCode == '192') { //` ~ - toggle increment button
    changeIncrement();
  } else if (e.keyCode == '49') { // 1 - rapid slew
    if (!changingInt) {
      inc(RAPID);
    }
  } else if (e.keyCode == '50') { // 2 - nominal slew
    if (!changingInt) {
      inc(NOMINAL);
    }
  } else if (e.keyCode == '51') { // 3 - slow slew
    if (!changingInt) {
      inc(SLOW);
    }
  } else if (e.keyCode == '13') { // Enter - toggle integration time input
    e.preventDefault();
    intToggle();
  } else if (e.keyCode == '70') { // F - show all Fields
    showAll();
  } else if (e.shiftKey && e.keyCode == '9') { // Shift+Tab - switch between fields backwards
    e.preventDefault();
    autoSwitch('backward');
  } else if (e.keyCode == '9') { // Tab - switch between fields forwards
    e.preventDefault();
    autoSwitch('forward');
  } else if (e.keyCode == '79') { // O - open/close dome
    if ((close) && (!move)) {
      animateDoorsOpen();
    } else if ((open) && (move)) {
      animateDoorsClose();
    }
  } else if (e.keyCode == '90') { // Z - zoom In/Out as appropriate
    if (zoomOutBool) {
      zoomOut();
    } else {
      zoomIn();
    }
  } else if (e.keyCode == '84') { // T - take spectrum
    if ( (zoomOutBool) && (!takingSpectrum) ) {
      buttonPress();
    }
  } else if (e.keyCode == '191') { // / ? - show hot keys
    if (!takingSpectrum) {
      hotKeysDiv();
    }
  }
}

var hotKeysModal = document.getElementById("hotKeys");

function hotKeysDiv() {
  hkDiv = document.getElementById("hotKeys")
  hkDiv.style.display = hkDiv.style.display != 'none' ? 'none' : 'block';
  hkButton = document.getElementById('hotKeysButton')
  hkButton.innerHTML = hkButton.innerHTML != 'Hide Hot Keys' ? 'Hide Hot Keys' : 'Show Hot Keys';
  hkButton.style.backgroundColor = hkButton.style.backgroundColor != 'white' ? 'white' : 'darkgray';
}