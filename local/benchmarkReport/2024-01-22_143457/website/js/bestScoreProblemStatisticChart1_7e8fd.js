
var chart_bestScoreProblemStatisticChart1_7e8fd = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_7e8fd'), {
    type: 'line',
    data: {
        labels: [
            7, 9, 10, 26, 43, 92, 116, 146, 153, 206, 213, 214, 220, 231, 232, 235, 290, 292, 304, 336, 345, 359, 362, 370, 387, 417, 443, 474, 493, 541, 642, 718, 754, 850, 879, 880, 949, 1100, 1253, 1351, 1357, 1367, 1374, 2072, 2074, 2296, 2960, 3057, 4411, 4862, 4907, 5117, 5155, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7342, , , -7189, , , -7118, , , -6999, , , , , , , , -6986, , , , , , -6976, , , , , -6975, , , , , -6968, -6965, , , , , , , , , , , , , , , , , , , -6965
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7342, , , , -7078, -7030, , , -7012, , , , -7006, , , , -6996, , , , , -6990, , , , , -6986, , , -6983, -6980, , -6975, , , -6974, , -6973, , , , , , , , , , , , , , , , -6973
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7342, -7153, -7314, , , , , -7298, , , -7288, -7284, , -7241, -7238, -7200, , , -7195, -7190, -7163, , -7158, , -7153, -7140, , -7087, , , , -7055, , , , , -7037, , -7028, -7023, -7016, -7011, -6998, -6990, -6981, -6978, -6977, -6976, -6973, -6972, -6971, -6969, -6965, -6965
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
                text: 'classExamples20 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_7e8fd.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_7e8fd.resize();
});
