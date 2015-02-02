$(function() {
    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Italian",
            value: 45
        }, {
            label: "French",
            value: 30
        }, {
            label: "Chinese",
            value: 20
		}, {
            label: "Spanish",
            value: 5
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2015-01-01',
            translations: 8
        }, {
            d: '2015-01-02',
            translations: 7
        }, {
            d: '2015-01-03',
            translations: 8
        }, {
            d: '2015-01-04',
            translations: 8
        }, {
            d: '2015-01-05',
            translations: 7
        }, {
            d: '2015-01-06',
            translations: 8
        }, {
            d: '2015-01-07',
            translations: 7
        }, {
            d: '2015-01-08',
            translations: 16
        }, {
            d: '2015-01-09',
            translations: 15
        }, {
            d: '2015-01-10',
            translations: 14
        }, {
            d: '2015-01-11',
            translations: 8
        }, {
            d: '2015-01-12',
            translations: 12
        }, {
            d: '2015-01-13',
            translations: 8
        }, {
            d: '2015-01-14',
            translations: 7
        }, {
            d: '2015-01-15',
            translations: 8
        }, {
            d: '2015-01-16',
            translations: 10
        }, {
            d: '2015-01-17',
            translations: 11
        }, {
            d: '2015-01-18',
            translations: 12
        }, {
            d: '2015-01-19',
            translations: 13
        }, {
            d: '2015-01-20',
            translations: 13
        }, {
            d: '2015-01-21',
            translations: 12
        }, {
            d: '2015-01-22',
            translations: 11
        }, {
            d: '2015-01-23',
            translations: 13
        }, {
            d: '2015-01-24',
            translations: 12
        }, {
            d: '2015-01-25',
            translations: 12
        }, {
            d: '2015-01-26',
            translations: 12
        }, {
            d: '2015-01-27',
            translations: 13
        }, {
            d: '2015-01-28',
            translations: 13
        }, {
            d: '2015-01-29',
            translations: 14
        }, {
            d: '2015-01-30',
            translations: 15
        }, {
            d: '2015-01-31',
            translations: 18
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['translations'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Translations'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            language: 'Spanish',
            score: 36
        }, {
            language: 'French',
            score: 137
        }, {
            language: 'Italian',
            score: 275
        }, {
            language: 'Chinese',
            score: 157
        }],
        xkey: 'language',
        ykeys: ['score'],
        labels: ['Score'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });
});