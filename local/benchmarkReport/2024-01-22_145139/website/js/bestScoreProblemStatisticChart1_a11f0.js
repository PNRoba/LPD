
var chart_bestScoreProblemStatisticChart1_a11f0 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_a11f0'), {
    type: 'line',
    data: {
        labels: [
            14, 17, 18, 19, 22, 62, 71, 79, 101, 127, 137, 142, 143, 148, 200, 243, 348, 369, 430, 458, 509, 597, 637, 675, 715, 756, 786, 810, 1075, 1079, 1143, 1184, 1272, 1309, 1330, 1360, 1428, 1442, 1595, 1599, 1630, 1828, 2081, 2125, 2498, 2548, 2653, 2918, 2953, 2960, 3093, 3309, 3773, 3775, 5637, 6973, 8069, 8169, 8366, 8609, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -7361, , , , , , , -7131, , -7091, -7055, , -7012, , -6985, -6963, -6956, -6955, -6949, -6942, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -6942
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -7361, , , , -7045, , , , -7002, , , , , -6991, , , , , -6967, , , , , , , -6964, , , , -6963, , , , , , , , , , , , , -6962, , , , , , , , , , , , , -6957, -6952, -6944, -6942, -6942
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7361, , -7362, -7688, -7576, , , -7559, -7510, , -7434, -7355, -7201, , , , , -7095, , , , , , , , , , -7091, -7090, -7082, , -7074, -7070, -7067, -7066, -7055, -7050, -7039, -7037, -7032, -7017, -7016, -7013, , -7006, -7003, -7000, -6994, -6986, -6978, -6977, -6964, -6962, -6949, -6944, -6942, , , , , -6942
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
  chart_bestScoreProblemStatisticChart1_a11f0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_a11f0.resize();
});
