let filename = 'nuclear_electric_power_prod.csv';

// all of your code should be inside this command
d3.csv('..//Users/priscagossin/Documents/Challenges:Projects/Project-3/Nuclear-Visualization/nuclear_electric_power_prod.csv').then(function(data){

  //console.log(data.period)})
let years = [];
let units =[];

for (var i=0; i<= data.length; i++){
    console.log(data[i].period);
}

}) 
