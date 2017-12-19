Highcharts.chart('container', {
    chart: {
        type: 'tilemap',
        inverted: true,
        height: '100%'
    },

    title: {
        text: 'U.S. states by population in 2016'
    },

    subtitle: {
        text: 'Source:<a href="https://simple.wikipedia.org/wiki/List_of_U.S._states_by_population">Wikipedia</a>'
    },

    xAxis: {
        visible: false
    },

    yAxis: {
        visible: false
    },

    colorAxis: {
        dataClasses: [{
            from: 0,
            to: 30000000,
            color: '#efa5c5',
            name: '< 30M'
        }, {
            from: 30000000,
            to: 500000000,
            color: '#d47896',
            name: '500M - 30M'
        }, {
            from: 500000000,
            to: 1000000000,
            color: '#a8729b',
            name: '1000M - 500M'
        }, {
            from: 1000000000,
            to: 2000000000,
            color: '#844980',
            name: '1000M - 2000M'
        }, {
            from: 2000000000,
            color: '#6d5b96',
            name: '> 2000M'
        }]
    },

    tooltip: {
        headerFormat: '',
        pointFormat: 'The population of <b> {point.name}</b> is <b>{point.value}</b>'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.hc-a2}',
                color: '#000000',
                style: {
                    textOutline: false
                }
            }
        }
    },

    series: [{
        name: '',
        data: [{
            'hc-a2': 'SC',
            name: 'Sichuan',
            region: 'South',
            x: 6,
            y: 6,
            value: 103000000
        },{
            'hc-a2': 'TB',
            name: 'Tibet',
            region: 'South',
            x: 6,
            y: 5,
            value: 0
        },{
            'hc-a2': 'GS',
            name: 'Gansu',
            region: 'South',
            x: 5,
            y: 7,
            value: 744000000
        },{
            'hc-a2': 'XJ',
            name: 'Xingjiang',
            region: 'South',
            x: 3,
            y: 6,
            value: 687000000
        },{
            'hc-a2': 'QH',
            name: 'Qinghai',
            region: 'South',
            x: 4,
            y: 6,
            value: 753000000
        },{
            'hc-a2': 'CQ',
            name: 'Chongqin',
            region: 'South',
            x: 6,
            y: 7,
            value: 2160000
        }, {
            'hc-a2': 'SD',
            name: 'Shandong',
            region: 'South',
            x: 4,
            y: 9,
            value: 2841000000
        },{
            'hc-a2': 'MC',
            name: 'Macao',
            region: 'South',
            x: 9,
            y: 8,
            value: 78400
        },{
            'hc-a2': 'HK',
            name: 'Hongkong',
            region: 'South',
            x: 9,
            y: 9,
            value: 2270000
        },{
            'hc-a2': 'GZ',
            name: 'Guangzhou',
            region: 'South',
            x: 8,
            y: 8,
            value: 4180000000
        },{
            'hc-a2': 'GX',
            name: 'Guangxi',
            region: 'South',
            x: 8,
            y: 7,
            value: 753000000
        }, {
            'hc-a2': 'AH',
            name: 'Anhui',
            region: 'South',
            x: 6,
            y: 9,
            value: 1078000000
        },{
            'hc-a2': 'YN',
            name: 'Yunnan',
            region: 'South',
            x: 7,
            y: 6,
            value: 687000000
        },{
            'hc-a2': 'GZ',
            name: 'Guizhou',
            region: 'South',
            x: 7,
            y: 7,
            value: 511000000
        },{
            'hc-a2': 'HN',
            name: 'Henan',
            region: 'South',
            x: 5,
            y: 9,
            value: 1241000000
        },{
            'hc-a2': 'HB',
            name: 'Hubei',
            region: 'South',
            x: 6,
            y: 8,
            value: 1480000000
        },{
            'hc-a2': 'HN',
            name: 'Hunan',
            region: 'South',
            x: 7,
            y: 8,
            value: 1266000000
        },{
            'hc-a2': 'JX',
            name: 'Jiangxi',
            region: 'South',
            x: 7,
            y: 9,
            value: 868000000
        },{
            'hc-a2': 'TW',
            name: 'Taiwan',
            region: 'South',
            x: 9,
            y: 11,
            value: 2160000
        },{
            'hc-a2': 'HN',
            name: 'Hainan',
            region: 'South',
            x: 11,
            y: 8,
            value: 215000000
        },{
            'hc-a2': 'ZJ',
            name: 'Zhejiang',
            region: 'South',
            x: 7,
            y: 10,
            value: 3316000000
        }, {
            'hc-a2': 'FJ',
            name: 'Fujian',
            region: 'South',
            x: 8,
            y: 9,
            value: 1427000000
        }, {
            'hc-a2': 'HL',
            name: 'Heilongjiang',
            region: 'Northeast',
            x: 1,
            y: 12,
            value: 522000000
        }, {
            'hc-a2': 'SX',
            name: 'Shanxi',
            region: 'South',
            x: 4,
            y: 8,
            value: 744000000
        }, {
            'hc-a2': 'LN',
            name: 'Liaoning',
            region: 'Northeast',
            x: 3,
            y: 11,
            value: 984000000
        }, {
            'hc-a2': 'JL',
            name: 'Jilin',
            region: 'Northeast',
            x: 2,
            y: 11,
            value: 402000000
        }, {
            'hc-a2': 'TJ',
            name: 'Tianjin',
            region: 'Northeast',
            x: 4,
            y: 10,
            value: 582000000
        }, {
            'hc-a2': 'BJ',
            name: 'Beijin',
            region: 'Northeast',
            x: 3,
            y: 9,
            value: 2130000000
        }, {
            'hc-a2': 'IM',
            name: 'Inner Mongolia',
            region: 'South',
            x: 4,
            y: 7,
            value: 378000000
        },{
            'hc-a2': 'JS',
            name: 'Jiangsu',
            region: 'South',
            x: 5,
            y: 10,
            value: 3192000000
        }, {
            'hc-a2': 'HB',
            name: 'Hebei',
            region: 'Northeast',
            x: 3,
            y: 10,
            value: 912000000
        }, {
            'hc-a2': 'SH',
            name: 'Shanghai',
            region: 'South',
            x: 6,
            y: 10,
            value: 2841000000
        }, {
            'hc-a2': 'SX',
            name: 'Shanxi',
            region: 'South',
            x: 5,
            y: 8,
            value: 744000000
        }]
    }]
});
