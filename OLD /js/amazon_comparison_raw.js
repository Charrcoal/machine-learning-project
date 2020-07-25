
Plotly.d3.csv('../data/raw_stock/amazon_stock.csv', function(err,rows){

  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }
  
  
  var trace_target = {
    x: unpack(rows, 'Date'),
    //close: unpack(rows, 'Close'),
    //high: unpack(rows, 'High'),
    //low: unpack(rows, 'Low'),
    y: unpack(rows, 'Open'),
  
    // cutomise colors
    //increasing: {line: {color: 'green'}},
    //decreasing: {line: {color: 'red'}},
  
    type: 'line',
    xaxis: 'x',
    yaxis: 'y',
    name: 'amazon',
  
    line: {
      color: 'rgb(21, 67, 56)',
      width: 1
    }
  };
  
  var data = [trace_target];
  
  var layout = {
    title: {
      text: "Stock Comparison"
    },
    dragmode: 'zoom',
    showlegend: true,
    xaxis: {
      rangeslider: {
       visible: true
     },
     title: "Time period",
     rangeselector: {buttons: [
      {
        count: 6,
        label: '6m',
        step: 'month',
        stepmode: 'backward'
      },
      {
        count: 1,
        label: '1y',
        step: 'year',
        stepmode: 'backward'
      },
      {
        count: 3,
        label: '3y',
        step: 'year',
        stepmode: 'backward'
      },
      {step: 'all'}
    ]}
    },
    yaxis:{title: "Stock Price"}
  };
  
  Plotly.plot('raw_comparison_plot', data, layout);
  });
  
  
  
