Highcharts.setOptions({
    colors: ['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']
});
var chart = Highcharts.chart('container3', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'COMPARION AMONG WORLD-WIDE BIGGEST SHOPPING FESTIVAL'
    },

    subtitle: {
        text: 'The online dataset downloaded from Statis, years from 2011 to 2017'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    xAxis: {
        categories: ['Alibaba\' Singles Day', 'Black Friday', 'Thansgiving Day','Cyber Monday'],
        labels: {
            x: -10
        }
    },

    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Spending Amount'
        }
    },

    series: [{
        name: '2011',
        data: [820,816,479,1251]
    }, {
        name: '2012',
        data: [3040, 1042, 633, 1456]
    }, {
        name: '2013',
        data: [5800, 1198, 766, 1735]
    },{
        name: '2014',
        data: [9300, 1505, 1009, 2038]
    },{
        name: '2015',
        data: [14300, 1656, 1096, 2280]
    },{
        name: '2016',
        data: [17790, 1970, 1287, 2671]
    },{
        name: '2017',
        data: [25300, 2360, 1572, 3364]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 750
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
});

$('#small').click(function () {
    chart.setSize(400, 300);
});

$('#large').click(function () {
    chart.setSize(960, 500);
});
