
var chart_bestScoreProblemStatisticChart0_e29b1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_e29b1'), {
    type: 'line',
    data: {
        labels: [
            72, 73, 75, 77, 83, 98, 112, 113, 119, 139, 156, 208, 310, 333, 426, 469, 470, 519, 530, 624, 663, 675, 676, 694, 762, 771, 848, 853, 859, 980, 982, 1045, 1108, 1211, 1263, 1303, 1472, 1480, 1558, 1697, 1872, 2159, 2721, 2799, 3531, 3759, 3785, 4453, 4698, 4935, 5239, 5241, 5811, 6616, 6721, 6723, 7004, 7604, 8330, 9140, 9147, 9845, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -51, , , , , -20, , , -18, -17, , -13, , , , -8, -6, , , , -5, , -4, , -2, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -51, , , , , , , , , , -20, , , -19, , , , -11, , , -7, , , , , , -5, , , , , -5, , , -4, , -4, , , -2, , , , , , , , , , , , , , , , , , , , , , , -2
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -51, -49, , -48, -47, -39, -38, , -35, , , , , , -34, -33, , , , , -33, -32, , -30, , , , -29, -28, -28, , -27, -27, , -26, , -26, -23, , -22, -18, -18, -17, -16, -16, -15, -15, -13, -13, -12, -12, -11, -10, -9, -9, -8, -8, -6, -6, -5, -4, -4
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
  chart_bestScoreProblemStatisticChart0_e29b1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_e29b1.resize();
});
