
var chart_bestScoreProblemStatisticChart0_64d43 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_64d43'), {
    type: 'line',
    data: {
        labels: [
            31, 33, 34, 62, 68, 69, 83, 89, 115, 142, 172, 204, 222, 236, 270, 292, 303, 337, 365, 384, 386, 435, 552, 592, 611, 688, 699, 719, 865, 895, 906, 940, 980, 992, 1024, 1069, 1109, 1251, 1337, 1378, 1420, 1536, 1540, 1572, 1585, 1873, 1964, 2239, 2595, 2678, 3498, 3652, 3771, 3784, 5226, 5338, 6916, 7054, 8014, 8018, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -19, -18, , , , -17, -15, -14, -13, -12, , -11, -10, , -9, -9, , -8, , , -8, -7, , -7, , -6, -6, -4, , , -4, , -3, -3, -2, , , , , , -2, 0, , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -19, , , , -16, , , -14, , , -11, , , -10, , , -9, , , , , , -9, , -8, , , , -8, , , -6, , , , -6, -5, , -4, , , , , -4, -3, , -3, 0, , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -19, -17, , , -17, -16, , , , , , , , , , , , , , , -15, -14, , , , , , , , , , -14, , , , , , , , -13, , -13, , , -12, , , -12, , , -11, -11, -10, -9, -9, -8, -8, -7, -7, -6, -6
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
                text: 'Problem_3 best hard score statistic'
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
                        stepSize: 0.1
                        
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
  chart_bestScoreProblemStatisticChart0_64d43.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_64d43.resize();
});
