Highcharts.chart('container2', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'online VS offline'
    },
    subtitle: {
        text: 'the current situation between online and offline consumer sales'
    },


    credits: {
        enabled: false
    },

    xAxis: {
        type: 'datetime',
        labels: {
            format: '{value:%Y}'
        }
    },
    yAxis: {
        title: {
            text: 'percentage ( % )'
        },
        min: -1
    },
    tooltip: {
        pointFormat: '{point.x:%Y}: {point.y:.2f} %',
        crosshairs: [true]
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    },

    series: [{
        name: 'Growth rate of total retail sales of consumer goods',
        data: [
            [Date.UTC(2011), 17.10],
            [Date.UTC(2012), 20.70],
            [Date.UTC(2013), 23.80],
            [Date.UTC(2014), 26.20],
            [Date.UTC(2015), 30],
        ]
    }, {
        name: 'Growth rate of China 100 Key large-scale retail enterprises',
        data: [
            [Date.UTC(2011),22.60],
            [Date.UTC(2012), 10.80],
            [Date.UTC(2013), 8.9],
            [Date.UTC(2014), 0.4],
            [Date.UTC(2015), -0.1],
        ]
    }, {
        name: 'Growth rate of online retail market',
        data: [
            [Date.UTC(2011), 70.2],
            [Date.UTC(2012), 64.67],
            [Date.UTC(2013), 42.76],
            [Date.UTC(2014), 49.65],
            [Date.UTC(2015), 35.71],
        ],
        color: '#FF0000',
        marker: {
            symbol: "url(https://user-images.githubusercontent.com/31749021/34020564-ff07f61c-e102-11e7-81c8-e4652b54b4e2.png)"}
    },{
        name: 'Growth contribution of online retail market to total retail sales of consumer goods',
        data: [
            [Date.UTC(2012), null],
            [Date.UTC(2012), 19.62],
            [Date.UTC(2013), 17.35],
            [Date.UTC(2014), 32.22],
            [Date.UTC(2015), 34.70],
        ]
    }]
});
