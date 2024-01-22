
var chart_bestScoreProblemStatisticChart1_60edf = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_60edf'), {
    type: 'line',
    data: {
        labels: [
            9, 12, 14, 20, 68, 91, 133, 177, 202, 255, 261, 332, 392, 405, 447, 448, 478, 518, 549, 580, 605, 614, 623, 685, 702, 704, 705, 770, 794, 826, 874, 915, 1030, 1053, 1060, 1397, 1469, 1541, 1609, 1610, 1976, 2151, 2379, 2653, 2655, 3450, 3451, 3452, 3742, 4106, 5428, 8476, 8562, 9014, 9727, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -7819, , -7575, , , -7262, -6987, , -6920, , , -6907, , -6901, -6890, , -6877, , , , -6871, , -6870, , -6865, -6841, -6812, , , , , , , , , , , , , , , , , , , , , , , , -6812
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -7819, -7361, , , , , -7048, , , -6965, , , , , -6899, , , , , , , , , , , -6883, , , , , , -6862, , , , , , , , , , , , , , , , , , , , , -6862
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7819, -7777, -7312, , , , -7264, , -7141, , , , , , -7140, -7094, , , , , -7068, , -7064, -7049, -7035, -7026, -6968, , , , , , -6954, -6946, , -6938, -6924, -6911, -6887, -6886, -6879, -6873, -6859, -6854, -6845, -6843, -6834, -6829, -6828, -6824, -6822, -6815, -6814, -6813, -6812, -6812
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
                text: 'test20 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_60edf.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_60edf.resize();
});
