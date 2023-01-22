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
      document.getElementById('removeButton').style.display = 'block'
    } else if (impactSizes.length > 10) {
      nBins = 10;
    } else if (impactSizes.length > 15) {
      nBins = 15;
    }
  }
  function removeLast() {
    if (impactSizes.length > 0){
      impactSizes = impactSizes.slice(0,-1);
      document.getElementById('Vals').innerHTML = impactSizes;
      document.getElementById('numVals').innerHTML = impactSizes.length;
    } 
    if (impactSizes.length == 0) {
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
        size:2,
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