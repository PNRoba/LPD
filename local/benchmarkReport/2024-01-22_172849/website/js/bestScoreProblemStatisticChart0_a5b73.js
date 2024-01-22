
var chart_bestScoreProblemStatisticChart0_a5b73 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_a5b73'), {
    type: 'line',
    data: {
        labels: [
            415, 417, 421, 428, 429, 433, 513, 619, 631, 781, 850, 925, 1107, 1109, 1239, 1253, 1332, 1400, 1409, 1412, 1488, 1524, 1525, 1582, 1653, 1723, 1727, 1789, 1929, 1998, 2062, 2081, 2125, 2249, 2312, 2377, 2434, 2444, 2516, 2663, 2743, 2807, 2873, 2930, 2932, 3189, 3377, 3378, 3460, 3521, 3706, 3708, 3709, 3902, 4101, 4188, 4234, 4439, 4812, 5018, 5209, 5365, 5471, 5669, 5670, 5671, 6140, 6369, 6787, 6835, 7591, 8356, 8551, 8554, 8969, 9776, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -98, , , , , , -61, , -48, -45, , -35, , -29, -25, , -24, , -23, , -13, , , -12, -11, -11, , -10, -10, -8, -8, , -7, -7, -3, -2, , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -98, , , , , , -61, , , -44, , -34, , , , , , , -25, , , , , , , -23, , , , , -15, , , , , -11, , , , , -8, , , , -6, , , , -2, , , , 0, , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -98, -97, -95, -74, , , , , , , , , , -72, , -72, , , , -70, -62, , , , , , , , , , , , , , , , -61, -60, -58, , -58, -57, -55, , -54, -53, -52, , -52, -51, -50, , -49, -49, -48, -45, -43, -43, -42, -42, -41, -40, -39, -38, -38, -37, -36, -32, -31, -31, -30, -29, -28, -27, -27
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
  chart_bestScoreProblemStatisticChart0_a5b73.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_a5b73.resize();
});
