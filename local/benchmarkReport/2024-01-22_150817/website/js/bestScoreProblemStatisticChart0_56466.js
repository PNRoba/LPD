
var chart_bestScoreProblemStatisticChart0_56466 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_56466'), {
    type: 'line',
    data: {
        labels: [
            363, 370, 371, 373, 380, 453, 530, 627, 668, 705, 723, 734, 751, 752, 762, 785, 851, 852, 853, 859, 860, 932, 942, 957, 960, 1011, 1040, 1075, 1123, 1144, 1163, 1221, 1268, 1309, 1312, 1449, 1496, 1498, 1588, 1636, 1679, 1700, 1753, 1782, 1881, 1999, 2047, 2148, 2153, 2183, 2226, 2274, 2356, 2375, 2463, 2508, 2574, 2689, 2842, 2854, 2943, 3060, 3110, 3148, 3149, 3250, 3361, 3410, 3420, 3538, 3675, 3689, 3733, 3812, 3827, 3828, 3917, 4024, 4148, 4456, 4495, 4647, 4810, 4828, 5023, 5391, 5954, 5955, 6354, 6585, 6587, 6817, 7024, 7025, 7436, 7682, 8123, 8126, 8368, 8376, 8893, 9690, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -109, , , , -72, , -48, , , , , -39, , , , -36, , , , , , , -26, , , , -23, , , -22, -13, -12, , -10, -10, , -9, -9, -7, , , , , , , , , , -7, -6, -5, , , , , , , , , , -5, -4, , , , -4, , -2, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -109, , , , , , -72, , , , , , , , , -59, , , , , , , , , -41, , , , -28, , , , , -18, , , -14, , , , , -13, , , , -10, , , , , , , , , -10, , , -9, -8, , , , , , , , , , , , , -8, , -6, , , -4, -2, , , , , , , , , , , , , , , , , , , , , , , , , -2
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -109, -107, -95, , , , -94, -94, -92, -92, , -88, -87, , , -85, -85, -84, -81, -80, -80, , , -77, -75, , , -72, , , , , , , , , , , -72, , -68, -67, -66, , -64, -64, -61, , , , -60, -59, , -57, -54, , , -53, -52, , , -52, -51, -50, , -49, , -49, -47, , -47, , -46, -44, , , -44, -43, -43, -42, -42, -41, -39, -38, -38, -36, -33, -33, -32, -32, -30, -30, -29, -29, -28, -28, -27, -26, -26, -23, -23
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
                text: 'test100 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_56466.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_56466.resize();
});
