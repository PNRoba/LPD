
var chart_bestScoreProblemStatisticChart1_b5c04 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b5c04'), {
    type: 'line',
    data: {
        labels: [
            145, 241, 344, 458, 542, 626, 709, 808, 906, 993, 1073, 1157, 1242, 1332, 1419, 1508, 1595, 1688, 1774, 1864, 2049, 2138, 2225, 2397, 2478, 2815, 2910, 2999, 3181, 3364, 3453, 3544, 3637, 3728, 3818, 3909, 3993, 4075, 4161, 4251, 5090, 5173, 5270, 5359, 5448, 5536, 5622, 5713, 5810, 5896, 5982, 6072, 6162, 6251, 6345, 6521, 6608, 6693, 6793, 6884, 7059, 7237, 7599, 7697, 7788, 7878, 7966, 8051, 8144, 8242, 8335, 8431, 8515, 8613, 8812, 8894, 8988, 9080, 9174, 9280, 9385, 9471, 9655, 9751, 9856, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -23940, -23469, -23435, -23207, -23198, -23210, -22920, -22886, -23195, -23196, -23185, -23172, -23172, -23064, -23066, -23013, -22996, -22981, -22905, -22902, -22889, -22874, -22852, -22622, -22586, -22580, -22522, -22511, -22512, -22512, -22506, -22503, -22496, -22486, -22483, -22475, -22474, -22466, -22462, -22457, -22247, -22244, -22232, -22224, -22221, -22180, -22174, -22166, -22162, -22149, -22145, -22053, -22035, -22009, -21993, -21953, -21932, -21903, -21900, -21883, -21863, -21856, -21845, -21823, -21817, -21797, -21772, -21975, -21967, -21959, -21917, -21892, -21779, -21705, -21695, -21689, -21630, -21597, -21582, -21573, -21514, -21492, -21485, -21484, -21476, -21473
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
  chart_bestScoreProblemStatisticChart1_b5c04.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b5c04.resize();
});
