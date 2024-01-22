
var chart_bestScoreProblemStatisticChart0_ba576 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_ba576'), {
    type: 'line',
    data: {
        labels: [
            85, 87, 88, 89, 91, 92, 97, 104, 170, 213, 224, 315, 428, 440, 451, 600, 718, 754, 765, 953, 1063, 1083, 1132, 1214, 1232, 1307, 1369, 1388, 1396, 1409, 1801, 1835, 1987, 1988, 2071, 2450, 2486, 2577, 2578, 2661, 2762, 2805, 2821, 2853, 3386, 3413, 3417, 3454, 3658, 3708, 3778, 3967, 4092, 4114, 4293, 4310, 4311, 4531, 5029, 5167, 5207, 5613, 5644, 5759, 5772, 6107, 6257, 6453, 6964, 6973, 7094, 7234, 7239, 7317, 7372, 7435, 8460, 8500, 9205, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -52, -22, , , -16, , -7, , -5, , , -3, , , , , , -3, -2, , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -52, , , , -22, , , , -19, , , -9, , , , -6, , , , , , , , -3, , -2, , , , , , , , , , , , -2, , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -52, , , , -22, , , -19, , , , -9, , , , -6, , , , , , , -3, , , -2, , , , , , , , , , , , -2, , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -52, , -23, , , , , , , , , , , , , , , -22, , , -21, -21, , , -16, , , , , , -16, -15, -14, -13, , -13, -12, -11, -11, -9, , , , , -9, -8, -6, , -6, , , -5, , -5, -4, , , , -2, , , , , , , , , , , , , , -2, , , 0, , 0
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -52, , -23, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -22, , , , , , , , , , , , , -20, , -19, , , -19, , , , -18, -17, , , , -17, -15, , , -15, , , -14, -14, -13, , , -10, , , -9, -9
                  ]
                }, 
{
                  label: 'LAHC 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -52, -23, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -22, , , , , -20, , , , -20, -19, , , -19, -18, , -18, -17, , , , -16, , , -13, , , -13
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
  chart_bestScoreProblemStatisticChart0_ba576.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_ba576.resize();
});
