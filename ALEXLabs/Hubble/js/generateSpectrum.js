var done = false;
var loader = document.getElementById("loading");
var spectrumModal = document.getElementById("spectrumWindow");

// Get config options for Plotly
var config = {
  modeBarButtonsToRemove:['pan2d','lasso2d','select2d','autoScale2d','toImage','zoom2d','resetScale2d','zoomIn2d','zoomOut2d'],
  responsive:true,
  displaylogo:false
};

// Get layout options for Plotly
var layout= {
  plot_bgcolor:"black",
  paper_bgcolor:"black",
  yaxis: {
    autorange: true,
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false
  },
  xaxis: {
    tickcolor: "white",
    tickfont: {color:"white"}
  },
  showlegend:false
};

function updateDisplay() {
  docStyle.setProperty("--seconds", String(noise)+"s");
  if (done) {
    done = false;
    loader.classList.remove('loading');
    //setTimeout(() => fill.classList.add('loading'), 1);
  }
}

function buttonPress() {
  takingSpectrum = true;
  updateClickFromCenter();
  spectrumModal.style.display = "block";
  loader.classList.add("loading");
  document.getElementById("SpectrumDone").innerHTML = "";
  Plotly.newPlot("myPlot", [], layout, config)
  loader.onclick = updateDisplay();
  loader.addEventListener("animationend", function() {
    generateSpectrum();
    done = true;
    updateDisplay();
  });
}

function generateSpectrum() {
  for (var i = 3900; i < 4901; ++i) {
    lambdaArr[i-3000] = i;
    fluxArr[i-3000] = i/4900 - generateGaussian(1/5,1/7)/Math.sqrt(noise*9);
  }

  for (var i = 0; i < 3000*Math.sqrt(noise); ++i) {
    var index = lambdaArr.indexOf(Math.round(generateGaussian(CALCIUM_H_REDSHIFTED,4)));  
    fluxArr[index] = fluxArr[index] - 0.0001*CLICK_FROM_CENTER;
    var index = lambdaArr.indexOf(Math.round(generateGaussian(CALCIUM_K_REDSHIFTED,4)));  
    fluxArr[index] = fluxArr[index] - 0.0001*CLICK_FROM_CENTER;
  }
  trace1 = {x:lambdaArr,y:fluxArr,marker:{color:'rgb(219, 64, 82)'}};

  data = [trace1];
  Plotly.newPlot("myPlot", data, layout, config);
  if (noise == 1) {
    var seconds = "second";
  } else {
    var seconds = "seconds";
  }
  document.getElementById("SpectrumDone").innerHTML = "Spectrum Complete (below), integration time: " + String(noise) + " " + String(seconds);
}
