// csv file we want to load
let filename = '/Users/priscagossin/Documents/Challenges:Projects/Project-3/Nuclear-production:consumption/nuclProd.csv';

// all of your code should be inside this command
d3.csv(filename,function(data){
  
  // let's see if our data loaded correctly
  // (and take a peek at how it's formatted)
  console.log(data)})
  
  // empty lists for our data and the labels
  let data = [];
  let labels = [];
  
  // use a for-loop to load the data from the
  // file into our lists
  for (let i=0; i<data.length; i++) {
    console.log(data[i]);
    
    // get the  period and value for each listing
    // note: the 'keys' here correspond to the headers
    // in our file and need to be typed exactly
    let period =     data[i].period;
    let value = data[i].rcp45_value;
    console.log(value);
    
    // add the period to our labels
    labels.push(period);
    
    // and mean temp to the data
    data.push(value);    
  }
  
  // basic line chart settings
  let options = {
    type: 'line',
    data: {
      labels: labels,  // the labels we loaded!
      datasets: [{
        data: data,    // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(100,100,100)'
      }]
    }
  };
  
  // with all that done, we can create our chart!
  let chart = new Chart(document.getElementById('canvas'), options);
});


