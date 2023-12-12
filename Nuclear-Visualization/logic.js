(async () => {

    const data = await fetch(
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v10.3.3/samples/data/usdeur.json'
    ).then(response => response.json());
});

//JSON data for highcharts
var jsonData =[
    [
        {
          "period": 2022,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8061.02,
          "unit": "Trillion Btu"
        },
        {
          "period": 2021,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8130.913,
          "unit": "Trillion Btu"
        },
        {
          "period": 2020,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8251.075,
          "unit": "Trillion Btu"
        },
        {
          "period": 2019,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8451.852,
          "unit": "Trillion Btu"
        },
        {
          "period": 2018,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8438.068,
          "unit": "Trillion Btu"
        },
        {
          "period": 2017,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8418.968,
          "unit": "Trillion Btu"
        },
        {
          "period": 2016,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8426.753,
          "unit": "Trillion Btu"
        },
        {
          "period": 2015,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8336.886,
          "unit": "Trillion Btu"
        },
        {
          "period": 2014,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8337.559,
          "unit": "Trillion Btu"
        },
        {
          "period": 2013,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8244.433,
          "unit": "Trillion Btu"
        },
        {
          "period": 2012,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8061.822,
          "unit": "Trillion Btu"
        },
        {
          "period": 2011,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8268.698,
          "unit": "Trillion Btu"
        },
        {
          "period": 2010,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8434.433,
          "unit": "Trillion Btu"
        },
        {
          "period": 2009,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8355.22,
          "unit": "Trillion Btu"
        },
        {
          "period": 2008,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8426.491,
          "unit": "Trillion Btu"
        },
        {
          "period": 2007,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8458.589,
          "unit": "Trillion Btu"
        },
        {
          "period": 2006,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8214.626,
          "unit": "Trillion Btu"
        },
        {
          "period": 2005,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8160.81,
          "unit": "Trillion Btu"
        },
        {
          "period": 2004,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8222.774,
          "unit": "Trillion Btu"
        },
        {
          "period": 2003,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 7959.622,
          "unit": "Trillion Btu"
        },
        {
          "period": 2002,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8145.429,
          "unit": "Trillion Btu"
        },
        {
          "period": 2001,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 8028.853,
          "unit": "Trillion Btu"
        },
        {
          "period": 2000,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 7862.349,
          "unit": "Trillion Btu"
        },
        {
          "period": 1999,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 7610.256,
          "unit": "Trillion Btu"
        },
        {
          "period": 1998,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 7067.809,
          "unit": "Trillion Btu"
        },
        {
          "period": 1997,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 6596.992,
          "unit": "Trillion Btu"
        },
        {
          "period": 1996,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 7086.674,
          "unit": "Trillion Btu"
        },
        {
          "period": 1995,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 7075.436,
          "unit": "Trillion Btu"
        },
        {
          "period": 1994,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 6693.877,
          "unit": "Trillion Btu"
        },
        {
          "period": 1993,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 6410.499,
          "unit": "Trillion Btu"
        },
        {
          "period": 1992,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 6479.206,
          "unit": "Trillion Btu"
        },
        {
          "period": 1991,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 6422.132,
          "unit": "Trillion Btu"
        },
        {
          "period": 1990,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 6104.35,
          "unit": "Trillion Btu"
        },
        {
          "period": 1989,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 5602.161,
          "unit": "Trillion Btu"
        },
        {
          "period": 1988,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 5586.968,
          "unit": "Trillion Btu"
        },
        {
          "period": 1987,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 4753.933,
          "unit": "Trillion Btu"
        },
        {
          "period": 1986,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 4380.109,
          "unit": "Trillion Btu"
        },
        {
          "period": 1985,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 4075.563,
          "unit": "Trillion Btu"
        },
        {
          "period": 1984,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 3552.531,
          "unit": "Trillion Btu"
        },
        {
          "period": 1983,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 3202.549,
          "unit": "Trillion Btu"
        },
        {
          "period": 1982,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 3131.148,
          "unit": "Trillion Btu"
        },
        {
          "period": 1981,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 3007.589,
          "unit": "Trillion Btu"
        },
        {
          "period": 1980,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 2739.169,
          "unit": "Trillion Btu"
        },
        {
          "period": 1979,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 2775.827,
          "unit": "Trillion Btu"
        },
        {
          "period": 1978,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 3024.126,
          "unit": "Trillion Btu"
        },
        {
          "period": 1977,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 2701.762,
          "unit": "Trillion Btu"
        },
        {
          "period": 1976,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 2111.121,
          "unit": "Trillion Btu"
        },
        {
          "period": 1975,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 1899.798,
          "unit": "Trillion Btu"
        },
        {
          "period": 1974,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 1272.083,
          "unit": "Trillion Btu"
        },
        {
          "period": 1973,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 910.177,
          "unit": "Trillion Btu"
        },
        {
          "period": 1972,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 583.752,
          "unit": "Trillion Btu"
        },
        {
          "period": 1971,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 412.939,
          "unit": "Trillion Btu"
        },
        {
          "period": 1970,
          "msn": "NUETBUS",
          "seriesDescription": "Nuclear Electric Power Consumption/Production in Trillion Btu",
          "value": 239.347,
          "unit": "Trillion Btu"
        }
       ]
];
var seriesData = jsonData.map(function (point) {
  return { x: point.year, y: point.value };
});

//Log Json data to console
console.log('JSON Data:', jsonData);


  Highcharts.chart('container', {
      chart: {
          zoomType: 'x'
      },
      title: {
          text: 'Nuclear Energy Produced',
          align: 'left'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
              'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
          align: 'left'
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: {
          title: {
              text: 'Nuclear Energy Consumption in Trillions of BTUs'
          }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                  },
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          }
      },

      series: [{
          type: 'area',
          name: 'Value in BTU9s',
          data: jsonData.map(function(entry) {
            return parseFloat(entry[seriesData])

          }
          )
      }]
  });
