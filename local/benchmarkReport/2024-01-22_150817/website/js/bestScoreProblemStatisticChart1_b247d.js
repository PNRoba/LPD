
var chart_bestScoreProblemStatisticChart1_b247d = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b247d'), {
    type: 'line',
    data: {
        labels: [
            10, 12, 13, 14, 56, 72, 73, 83, 120, 149, 168, 184, 214, 228, 229, 259, 285, 314, 342, 400, 406, 412, 470, 487, 493, 511, 552, 587, 692, 713, 746, 759, 1051, 1125, 1393, 1455, 1535, 1540, 1690, 2036, 2213, 2298, 2667, 2711, 2865, 2913, 3674, 4134, 4311, 4312, 5095, 5099, 5137, 5356, 5491, 5493, 6190, 6649, 7749, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -7677, , , -7484, , , , -7165, , , -7077, , -7045, , -7030, , -7019, , , -7013, -7011, -7009, -7007, , -6988, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -6988
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -7677, , -7295, , , , -7131, , , -7104, , , , -7065, , , , , , , , -7048, , , , , , , , -7011, -6999, , , -6988, , , , , , , , , , , , , , , , , , , , , , , , -6988
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7677, -7372, , -7647, , -7548, , -7514, , , -7415, , -7401, -7313, -7309, , , -7295, , -7277, , -7276, , , -7250, , , , , -7140, , , , -7135, -7111, , -7109, -7080, -7073, -7069, -7068, -7062, -7053, -7048, -7046, -7014, -7011, -7010, -7008, -7007, -7002, -7001, -6995, -6990, -6987, -6985, -6978, -6975, -6973, -6973
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
  chart_bestScoreProblemStatisticChart1_b247d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b247d.resize();
});
