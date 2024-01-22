
var chart_bestScoreProblemStatisticChart1_4807e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_4807e'), {
    type: 'line',
    data: {
        labels: [
            6, 7, 8, 10, 22, 39, 86, 104, 141, 147, 187, 207, 208, 209, 225, 226, 230, 269, 276, 300, 340, 348, 351, 365, 388, 420, 450, 471, 478, 577, 679, 712, 785, 802, 832, 905, 1006, 1103, 1329, 1421, 1427, 1438, 1443, 2132, 2133, 2349, 2942, 3027, 4187, 4609, 4652, 4860, 4896, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7342, , , , -7189, , , -7118, , , -6999, , , , , , , -6986, , , , -6976, , , , , , -6975, , , , , , -6968, -6965, , , , , , , , , , , , , , , , , , , -6965
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7342, , , , , -7078, -7030, , , -7012, , , , -7006, , , , , -6996, , , , -6990, , , , -6986, , , -6983, -6980, , -6975, , , -6974, , -6973, , , , , , , , , , , , , , , , -6973
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -7342, -7153, -7314, , , , , -7298, , , -7288, -7284, , -7271, -7238, -7200, , , -7195, -7190, -7163, , -7158, -7153, -7140, , , -7087, , , -7055, , , , , -7037, , -7028, -7023, -7016, -7011, -6998, -6990, -6981, -6978, -6977, -6976, -6973, -6972, -6971, -6969, -6965, -6965
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
  chart_bestScoreProblemStatisticChart1_4807e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_4807e.resize();
});
