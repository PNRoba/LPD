
var chart_bestScoreProblemStatisticChart0_54119 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_54119'), {
    type: 'line',
    data: {
        labels: [
            79, 80, 81, 82, 83, 86, 87, 88, 90, 91, 98, 152, 198, 205, 209, 214, 215, 216, 219, 221, 243, 280, 283, 309, 321, 324, 339, 346, 365, 394, 433, 434, 458, 459, 471, 472, 480, 500, 524, 538, 539, 552, 561, 594, 614, 653, 660, 699, 703, 706, 744, 754, 790, 837, 847, 893, 939, 958, 963, 1012, 1016, 1100, 1101, 1102, 1105, 1119, 1183, 1225, 1226, 1246, 1280, 1282, 1359, 1425, 1429, 1442, 1443, 1451, 1614, 1720, 2130, 2930, 3029, 3283, 3324, 3555, 3556, 3557, 3586, 3590, 3602, 3723, 3950, 20000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -38, , , , -13, , , , , , , , , , -11, , , , , , , , -8, , , , , , , , , -2, , , , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -38, , , , , , , , , , -12, , , , , , , , , , , , , , , , , , , , , , , , , , , -9, , , , , , , , , , , , , -5, , , , , , , , , -2, , , , , , , , 0, , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , -38, , , , , , , , , , -12, , , , , , , , , , , , , , , , , , , , , , , -9, , , , , , , , , , , , , , -5, , , , , , , , , -2, , , , , , , , , , , 0, , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -38, , -38, -26, , , , -25, , , -25, , , -17, , , -16, , , -15, -12, , -11, , , -11, , , -10, -10, -9, -9, , -8, -7, , , , , -6, -5, -5, -4, , -2, , , -2, , , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -38, , -38, -26, , , , , , , , -25, , -25, , -23, -23, -19, , , , , -16, -16, , , , , , , , , , , , , , , , , -15, , , , , , , , -15, , -12, -10, , , , , , , , , -10, -8, -8, , , , -7, -7, , , , -6, , , , , , -6, -4, -2, , , -2, , , , , -1, -1, , 0, , 0
                  ]
                }, 
{
                  label: 'LAHC 600 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -38, , -38, -37, -26, , , , , , , , , , , , , , , , , , , , , , , -23, , , -22, -21, -17, -16, , , , , , , , , , , , , , , , , , , , , -16, , -15, , , -15, -14, , , , , -13, , , , -13, -11, -9, , -9, -8, -8, -6, , , , , -5, -4, , -4, -3, -3, -2, , , -2, , 0, 0
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
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 20000,
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
  chart_bestScoreProblemStatisticChart0_54119.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_54119.resize();
});
