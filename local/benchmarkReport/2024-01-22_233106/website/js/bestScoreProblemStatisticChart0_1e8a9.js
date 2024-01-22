
var chart_bestScoreProblemStatisticChart0_1e8a9 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_1e8a9'), {
    type: 'line',
    data: {
        labels: [
            84, 85, 86, 91, 92, 93, 94, 95, 105, 179, 212, 268, 310, 355, 406, 417, 448, 467, 480, 489, 511, 529, 534, 552, 553, 579, 581, 582, 590, 625, 646, 650, 694, 704, 712, 713, 736, 759, 764, 772, 773, 774, 800, 807, 847, 858, 890, 894, 903, 934, 951, 1003, 1013, 1024, 1048, 1107, 1111, 1113, 1138, 1170, 1252, 1318, 1324, 1373, 1409, 1412, 1442, 1587, 1590, 1601, 1610, 1648, 1699, 1857, 1893, 1894, 1958, 1980, 2143, 2144, 2184, 2300, 2416, 2418, 2545, 2553, 2590, 2760, 2771, 2970, 2973, 3013, 3270, 3369, 3565, 3606, 3645, 3913, 4097, 4213, 4315, 4775, 5110, 6133, 6134, 7429, 40000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , -43, , , -17, , , , -8, , , , -5, , , , , , , , , , , -2, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2, , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , -43, , , -17, , , , , , , , , , , , , , , , , , , , -8, , , , , , , , , , , , , , , , , , , , , , , , , -5, , , , , , , -4, , , , , , , , -4, , , , -2, , , , , , -2, , , , , 0, , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -43, , , , , , , , , -17, , , , , , , , , , -8, , , , , , , , , , , , , , , , -5, , , , , , , , , , , , , , -4, , , , , , , , , -4, , , , , , -2, , , , , , , -2, , , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -43, -42, , -26, , , , , , , -24, -24, , , -22, , , , -22, -20, , -20, -18, -17, , , , , -17, -16, -15, -15, , -14, -12, , , -12, -11, -10, -10, -9, -9, , , , , -8, -8, -6, , -6, , , -3, , , -2, , , , , -2, , -1, 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -43, -42, -26, , , , , , , , , , , , , , -24, , , , -23, -22, , , , , , , , -21, -18, , , , , , , , , , , , , , , , , -17, -17, , , , , , -13, , , , , , , , , , -12, , , -12, , , -10, , , -9, , , , , -8, -8, , , , , , -7, , -7, -6, -6, -5, -4, -4, , , -3, , , , -2, , -2, 0, , , , 0
                  ]
                }, 
{
                  label: 'LAHC 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -43, -42, -26, , , , , , , -24, , , , , , , -23, , , , , -22, , , , , , , , , , , , , , , -17, -16, , , , , , , , , -15, , , , , , , , -14, , , , , , , , , , , , , , , , , -14, , -12, , , , -12, , -10, -10, -8, , , , , , , , , -7, -7, , -6, -5, -5, , -3, , , -3, -2, 0, 0
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
                text: 'test50 best hard score statistic'
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
                        stepSize: 1000
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 40000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_bestScoreProblemStatisticChart0_1e8a9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_1e8a9.resize();
});
