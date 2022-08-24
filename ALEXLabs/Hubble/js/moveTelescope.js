var b4zoomx = 0; // positions before zooming (used to zoom out to the same location)
var b4zoomy = 0;

function zoomIn() {
  if (open) {
    b4zoomx = xpos;
    b4zoomy = ypos;
    xpos = 40;
    ypox = 60;
    if (zoomInBool) {
      zoomOutBool = true;
      which = whichZoomIn[currentField];
      image = document.getElementById(which);
      document.getElementById("zoomOut").style.display = "block";
      document.getElementById("zoomIn").style.display  = "none";
      document.getElementById("takeSpectrum").style.display = "block";
      zoomInBool = false;
      emptyField = false;
    } else {
      image = document.getElementById("emptyField");
      document.getElementById("zoomOut").style.display = "block";
      document.getElementById("zoomIn").style.display  = "none";
      document.getElementById("takeSpectrum").style.display = "block";
      zoomOutBool = true;
      emptyField = true;
    }
    telescopeFrame();
  }
}

function zoomOut() {
  xpos = b4zoomx;
  ypos = b4zoomy;
  zoomOutBool = false;
  which = whichZoomOut[currentField];
  image = document.getElementById(which);
  telescopeFrame();
  document.getElementById("zoomOut").style.display = "none";
  document.getElementById("zoomIn").style.display  = "block";
  document.getElementById("takeSpectrum").style.display = "none";
  onGalaxyChecker();
}

function west() {
  if ((move) && (open)) {
    if (xpos + increment < image.width - imgWidth) {
      xpos = xpos + increment;
      telescopeFrame();
    }
  }
}

function east() {
  if ((move) && (open)) {
    if (xpos - increment > 0) {
      xpos = xpos - increment;
      telescopeFrame();
    }
  }
}

function north() {
  if ((move) && (open)) {
    if (ypos - increment > 0) {
      ypos = ypos - increment;
      telescopeFrame();
    }
  }
}

function south() {
  if ((move) && (open) ) {
    if (ypos + increment < image.height - imgHeight) {
      ypos = ypos + increment;
      telescopeFrame();
    }
  }
}
