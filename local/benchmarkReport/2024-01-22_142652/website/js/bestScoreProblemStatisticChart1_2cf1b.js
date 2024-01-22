
var chart_bestScoreProblemStatisticChart1_2cf1b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_2cf1b'), {
    type: 'line',
    data: {
        labels: [
            8, 11, 12, 13, 50, 64, 94, 132, 139, 148, 202, 203, 205, 219, 221, 222, 225, 226, 266, 287, 311, 317, 325, 327, 341, 371, 400, 406, 448, 449, 501, 546, 598, 634, 659, 693, 750, 808, 888, 985, 1086, 1113, 1165, 1254, 1255, 1260, 1268, 1274, 1912, 1914, 2116, 2690, 2771, 3876, 4275, 4316, 4508, 4543, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , -7342, , -7189, , , , , , , , , , , , , -7118, , , , , , , , -6999, , , -6986, , -6976, , , -6975, , , , -6968, -6965, , , , , , , , , , , , , , , , , -6965
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -7342, -7078, , -7030, , , -7012, , , -7006, , , , , , -6996, , , , , -6990, , , , -6986, , , -6983, , -6980, , , -6975, , -6974, , -6973, , , , , , , , , , , , , , , , , , , -6973
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -7342, -7153, -7314, , , , , , -7298, , -7288, -7284, , -7271, -7241, -7238, -7208, -7200, , -7195, , -7190, -7163, , -7158, -7153, -7140, , , -7087, , , , , -7055, , , , -7037, , , , -7028, -7026, -7023, -7016, -7011, -6998, -6990, -6981, -6978, -6977, -6976, -6973, -6972, -6971, -6969, -6965, -6965
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
  chart_bestScoreProblemStatisticChart1_2cf1b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_2cf1b.resize();
});
