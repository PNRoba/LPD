
var chart_bestScoreProblemStatisticChart0_84210 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_84210'), {
    type: 'line',
    data: {
        labels: [
            80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 99, 100, 104, 122, 126, 131, 133, 134, 138, 151, 181, 191, 192, 212, 213, 214, 233, 235, 247, 255, 259, 305, 311, 316, 317, 340, 366, 369, 382, 384, 389, 390, 393, 402, 430, 449, 450, 461, 464, 518, 521, 543, 544, 546, 558, 578, 587, 588, 606, 660, 663, 665, 686, 711, 733, 742, 748, 753, 757, 788, 801, 813, 831, 832, 863, 864, 905, 914, 955, 999, 1024, 1025, 1037, 1068, 1076, 1077, 1279, 1307, 1375, 1460, 1476, 1480, 1500, 1623, 1634, 1642, 1705, 1728, 1751, 1763, 1808, 1848, 1882, 1908, 2055, 2060, 2101, 2362, 2478, 2815, 2831, 3330, 3456, 3537, 3813, 3880, 3881, 3985, 4047, 4349, 4722, 5005, 5492, 6563, 7170, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , -45, , , , , , , , , , , -18, , , , , , , , , , , , -14, , , , , , , , , , , , , , -8, , , , , , , , , -5, , , , , , , -2, , , , , , , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -45, , , , , , , , , , , , , , , , , , , , -18, , , , , , , , , , , , , , , , , , , , , , , , -7, , , , , , , , , , , , , , , -3, , , , , , , , , , , , , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -45, , , , , , , , , , , , , , , , , , , , , , , -18, , , , , , , , , , , , , , , , , , , , , , , , , , -7, , , , , , , , , , , , , , , , -3, , , , , , , , , , , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -45, , , -43, , -42, , -41, , , -40, , -39, -38, , , -35, , -30, , , -27, -26, , , , -25, -24, , , -23, -23, -22, -21, -20, -20, -18, -17, , , , , , , , -16, -14, , , , , , , -14, -13, -13, -10, , , , , , , , , -9, , , , -9, , , -8, -7, -6, -5, -4, , , , , , , , , , -4, , -3, , , -3, -2, , -2, , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -45, , -43, , -42, , -41, , , , , , -40, , , -39, -38, , -35, , , , , , -31, , , , , -31, , , -27, , , , , , , , , , , , , , -25, , -25, , , , , -23, , -23, , , , , , , -22, , -22, -20, , , -19, , , , , , -18, -17, , , , , , , -16, , , , -15, -15, -14, , , -14, , , , , , -13, , , -13, -12, , , -12, -11, -9, , -8, , -6, -6, -5, , -4, , , , , -4, -3, -2, -2, -1, 0, , , 0
                  ]
                }, 
{
                  label: 'LAHC 600 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -45, , -43, , -42, , , -41, , , , , -40, , -39, -38, , , -35, , , , -31, , , , , , , , , , , , , , , , , , , -28, -28, -27, -27, , , , , , , -26, , , , , , , , , -25, -23, , , , , -22, , , , -21, , , , , , , , , , , , , -20, -19, , , , -18, , , , -18, -16, , , , , -15, , , , -13, , , , -11, , -8, , , , -7, , -7, -5, -4, -2, , , , , , , -2, 0, 0
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
  chart_bestScoreProblemStatisticChart0_84210.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_84210.resize();
});
