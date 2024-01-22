
var chart_bestScoreProblemStatisticChart1_4e691 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_4e691'), {
    type: 'line',
    data: {
        labels: [
            10, 12, 15, 16, 23, 56, 64, 101, 141, 156, 232, 253, 310, 335, 371, 444, 446, 461, 465, 478, 506, 564, 577, 622, 624, 632, 677, 733, 794, 851, 879, 880, 925, 968, 992, 1072, 1132, 1156, 1355, 1572, 2058, 2259, 2430, 2456, 2618, 2900, 2930, 3032, 3292, 3298, 3299, 3442, 3618, 3625, 3637, 4182, 4202, 4996, 5825, 6253, 6717, 7250, 7439, 7544, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -7357, , , -7403, , -7226, , -7164, , -7141, , , , -7075, , , , -7051, , , -7016, -6984, -6964, -6955, -6942, , , -6939, -6933, , , , , , , , , , , , , , , , , , , , , , , , , , , , -6932, -6930, -6925, -6925
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -7357, , , , -7403, , , -7226, , -7136, , , , , , , , , , -7038, , , , , , , , , , , , , , -7001, , , , -6978, , -6959, , , , , -6946, , , , , , , -6929, , -6908, , , , , , , , , -6908
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7357, -8187, , -7901, -7888, , , -7527, , , , , , -7491, , -7487, -7476, -7428, , -7391, -7389, , , -7373, -7306, , , , , -7243, -7242, -7220, , , -7145, , -7138, -7134, -7076, , -7060, , -7057, -7039, -7036, -7027, , -7007, -7006, -7001, -6996, -6995, -6990, , -6969, , -6957, -6956, -6949, -6922, -6921, , , , -6921
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
  chart_bestScoreProblemStatisticChart1_4e691.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_4e691.resize();
});
