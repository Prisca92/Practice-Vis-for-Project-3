(async () => {

    const data = await fetch(
        'https://demo-live-data.highcharts.com/aapl-v.json'
    ).then(response => response.json());

    // create the chart
    Highcharts.stockChart('container', {
        chart: {
            alignTicks: false
        },

        rangeSelector: {
            selected: 1
        },

        title: {
            text:'Nuclear Electric Power Produced Annually'
},

        series: [{
            type: 'column',
            name: `values`,
            data: data,
            dataGrouping: {
                units: [[
                    'week', // unit name
                    [1] // allowed multiples
                ], [
                    ‘Period',
                    [1, 2, 3, 4, 6,7,8,9,10]
                ]]
            }
        }]
    });
})();


