
var chart_bestScoreProblemStatisticChart0_94452 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_94452'), {
    type: 'line',
    data: {
        labels: [
            110, 112, 115, 116, 122, 132, 145, 167, 174, 198, 205, 224, 239, 272, 283, 312, 349, 353, 376, 387, 425, 429, 430, 461, 495, 502, 527, 538, 568, 577, 610, 635, 642, 703, 709, 741, 775, 780, 814, 835, 847, 851, 878, 912, 925, 945, 977, 999, 1009, 1044, 1074, 1077, 1151, 1255, 1293, 1303, 1325, 1374, 1448, 1528, 1604, 1622, 1654, 1685, 1686, 1719, 1762, 1838, 1902, 2034, 2068, 2138, 2155, 2232, 2696, 2916, 2947, 3165, 3242, 3480, 3560, 3635, 3709, 3786, 3862, 4022, 4100, 4813, 4846, 4879, 4892, 4913, 5529, 5640, 5710, 5778, 6137, 6403, 7537, 8426, 8902, 9716, 9789, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -39, , , -37, , -35, , -34, , -32, -31, , -28, -27, , , -26, -25, , , -24, , -23, , -23, , -22, -22, , -20, , , -20, -19, , -18, , -17, , -16, -15, , -15, -14, , -12, -12, , -11, , -11, -10, , -9, , , , , -9, -8, -7, , -6, , , , -6, -5, -4, , , , -4, -2, , , , , , , , , , , -2, -1, -1, , 0, , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -39, , , , , , , -36, , , , -34, , , -32, , , -31, , , -29, , , , -28, , , , -27, , , -26, , -25, , , , -23, , , , -20, , , -19, , , -18, , , -18, , -17, , , -17, , -16, -16, -15, -14, , , , -13, , -12, -10, , , , , -10, -9, , , , -9, -7, -7, -6, -6, -5, -5, -4, -4, -2, , , , , , , -2, -1, 0, , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -39, -38, , -37, -36, , , , -36, , , , , , , , , -35, , , -34, -34, , , , -33, , , , , , , , -33, , , , , -31, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -29, , , , , , -28, , , , , , , , , , , , , , , , -27, , -26, , , , -25, -24, -24, -23, -22, -22, -21, -21
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
                text: 'Problem_4 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_94452.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_94452.resize();
});
