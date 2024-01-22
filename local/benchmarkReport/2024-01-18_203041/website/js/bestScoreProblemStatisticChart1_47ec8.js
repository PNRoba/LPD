
var chart_bestScoreProblemStatisticChart1_47ec8 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_47ec8'), {
    type: 'line',
    data: {
        labels: [
            154, 262, 377, 499, 604, 700, 895, 999, 1102, 1197, 1389, 1485, 1579, 1673, 1769, 1864, 1954, 2049, 2146, 2539, 2634, 2723, 2914, 3006, 3108, 3224, 3321, 3423, 3520, 3741, 3933, 4032, 4130, 4342, 4560, 4664, 4860, 4955, 5053, 5150, 5252, 5347, 5442, 5645, 5745, 5843, 6030, 6129, 6228, 6327, 6434, 6544, 6749, 8046, 8143, 8244, 8351, 8455, 8561, 9278, 9374, 9566, 9664, 9769, 9872, 9971, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -22954, -22926, -22971, -22956, -22928, -22658, -22637, -22633, -22551, -22456, -22429, -22334, -22336, -22315, -22326, -22315, -22307, -22279, -22266, -22188, -22172, -22158, -22152, -22144, -22123, -22117, -22150, -22160, -22109, -22104, -22100, -22088, -22103, -22102, -22073, -22026, -21956, -21953, -21937, -21914, -21912, -21900, -21897, -21879, -21874, -21888, -21887, -21862, -21861, -21858, -21845, -21843, -21853, -21852, -21819, -21846, -21845, -21844, -21843, -21824, -21821, -21808, -21795, -21782, -21740, -21735, -21735
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Problem_4 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 100
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreProblemStatisticChart1_47ec8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_47ec8.resize();
});
