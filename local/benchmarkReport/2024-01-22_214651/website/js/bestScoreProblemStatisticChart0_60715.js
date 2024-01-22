
var chart_bestScoreProblemStatisticChart0_60715 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_60715'), {
    type: 'line',
    data: {
        labels: [
            82, 83, 84, 87, 143, 223, 248, 379, 423, 451, 498, 604, 634, 661, 712, 728, 857, 859, 870, 954, 965, 1073, 1107, 1154, 1230, 1259, 1283, 1294, 1359, 1379, 1429, 1640, 1658, 2297, 2497, 2534, 2606, 3122, 3201, 3573, 4233, 4386, 4389, 5559, 5964, 6344, 6710, 9170, 9525, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -43, -17, , -14, -11, , , -9, -9, , , , -8, -8, , , , -7, -7, , , -6, , , -2, 0, , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -43, , , , , -17, , , , -14, , , -11, , , , , -10, , , , , -10, , , , , , , -9, , 0, , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -43, -42, -33, , , , , , -31, , , , , -31, -29, , , , -29, -28, , , , -28, , -26, -26, , , , -24, , -21, -21, -20, -20, -18, -18, -17, -16, -16, -14, -14, -13, -12, -11, -9, -9, -7, -7
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
  chart_bestScoreProblemStatisticChart0_60715.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_60715.resize();
});
