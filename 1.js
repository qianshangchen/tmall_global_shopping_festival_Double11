var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 40,
            viewDistance: 25
        }
    },

    title: {
        text: 'Comparation from 2011 to 2017'
    },

    xAxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Millions of dollars spent',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 25
        }
    },

    series: [{
        name: 'Thanksgiving Day',
        data: [479, 633, 766, 1009, 1096, 1287, 1572],
        stack: 'Thanksgiving Day'
    }, {
        name: 'Black Friday',
        data: [816, 1042, 1198, 1505, 1656, 1970, 2360],
        stack: 'Black Friday'
    }, {
        name: 'Alibaba Singles Day',
        data: [820, 3040, 5800, 9300, 14300, 17790, 25300],
        stack: 'Alibaba Singles Day'
    },{
        name: 'Cyber Monday',
        data: [1251, 1465, 1735, 2038, 2280, 2671, 3364],
        stack: 'Cyber Monday'
    }]
});
function showValues() {
    $('#alpha-value').html(chart.options.chart.options3d.alpha);
    $('#beta-value').html(chart.options.chart.options3d.beta);
    $('#depth-value').html(chart.options.chart.options3d.depth);
}

// Activate the sliders
$('#sliders input').on('input change', function () {
    chart.options.chart.options3d[this.id] = parseFloat(this.value);
    showValues();
    chart.redraw(false);
});

showValues();

