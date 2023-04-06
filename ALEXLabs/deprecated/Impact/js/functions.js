function addValue() {
  value = document.getElementById('ImpactSize').value;
  if (value != "" && value > 0 && value < 100) {
    impactSizes = impactSizes.concat([value]);
    document.getElementById('Vals').innerHTML = impactSizes;
    document.getElementById('numVals').innerHTML = impactSizes.length;
    document.getElementById("Vals").style.overflowWrap = "break-word";
    document.getElementById('ImpactSize').value = "";
  }
  if (impactSizes.length > 0) {
    document.getElementById('removeButton').style.display = 'block';
    if (impactSizes.length >= 15) {
      document.getElementById('statInfo').style.display = 'block';
  
      var acc = 0;
      for (var i = 0; i <impactSizes.length; ++i) {
        acc = acc + parseFloat(impactSizes[i]);
      }
      var mu = acc / impactSizes.length;
      document.getElementById('mean').innerHTML = mu.toPrecision(4);
      acc = 0;
      for (var i = 0; i < impactSizes.length; ++i) {
        acc = acc + (parseFloat(impactSizes[i]) - mu)**2
      }
      var sigma = Math.sqrt(acc / (impactSizes.length - 1));
      document.getElementById('std').innerHTML = sigma.toPrecision(4);
    }
  } 
}

function getBinWidth() {
  if (impactSizes.length < 10) {
    return 2;
  } else {
    return 1;
  }
}

function removeLast() {
  if (impactSizes.length < 15) {
    document.getElementById('statInfo').style.display = 'none';
  }
  if (impactSizes.length > 0){
    impactSizes = impactSizes.slice(0,-1);
    document.getElementById('Vals').innerHTML = impactSizes;
    document.getElementById('numVals').innerHTML = impactSizes.length;
  } else if (impactSizes.length == 0) {
    document.getElementById('removeButton').style.display = 'none';
  }
}

function plot() {
  PLOT_TOGGLE = true;
  document.getElementById("plotHolder").style.display = "block";

  var trace = {
    x: impactSizes,
    type:'histogram',
    nbinsx:nBins,
    xbins:{
      end:Math.max(...impactSizes),
      size:getBinWidth(),
      start:Math.min(...impactSizes)
    }
  };

  var data = [trace];
  Plotly.newPlot("myPlot", data, layout, config);
}

var layout = {
  plot_bgcolor: "black",
  paper_bgcolor: "black",
  bargap: 0.0, 
  bargroupgap: 0.0, 
  xaxis: {
    tickcolor: "white",
    tickfont: { color: "white" },
    title: "Impactor Size (cm)",
    titlefont: { color: "white" },
  },
}

var config = {
  modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d', 'autoScale2d', 
    'zoom2d', 'resetScale2d', 'zoomIn2d', 'zoomOut2d'],
  responsive: true,
  displaylogo: false,
}