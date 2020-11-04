Highcharts.getJSON('https://raw.githubusercontent.com/rpgilbert6/coivd110420/main/class', function (data) {

    // Make codes uppercase to match the map data
    data.forEach(function (p) {
        p.code = p.code.toUpperCase();
    });

    // Instantiate the map
    Highcharts.mapChart('container', {

        chart: {
            map: 'countries/us/us-all',
            borderWidth: 10
        },

        title: {
            text: 'Current COVID-19 Cases'
        },

        exporting: {
            sourceWidth: 600,
            sourceHeight: 500
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: '#AED6F1',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#FBEEE6',
            maxColor: '#6E2C00',
            stops: [
                [0, '#FBEEE6'],
                [0.67, '#E59866'],
                [1, '#6E2C00']
            ]
        },

        series: [{
            animation: {
                duration: 1000
            },
            data: data,
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Number of Cases',
            tooltip: {
                pointFormat: '{point.code}: {point.value}'
            }
        }]
    });
});
