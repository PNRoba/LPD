
var chart_bestScoreProblemStatisticChart0_ac814 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_ac814'), {
    type: 'line',
    data: {
        labels: [
            1676, 1694, 1702, 1713, 1717, 1718, 1720, 1837, 2041, 2059, 2264, 2450, 2477, 2701, 2865, 2868, 2915, 2995, 3058, 3065, 3081, 3147, 3221, 3307, 3337, 3454, 3463, 3474, 3539, 3559, 3683, 3760, 3761, 3773, 3785, 3791, 3906, 3967, 4014, 4030, 4073, 4118, 4223, 4299, 4318, 4328, 4430, 4537, 4640, 4749, 4768, 4855, 4960, 4972, 5066, 5143, 5162, 5260, 5352, 5373, 5484, 5619, 5620, 5748, 5789, 5790, 5891, 5899, 5985, 6075, 6095, 6162, 6198, 6245, 6249, 6264, 6265, 6309, 6590, 6681, 6778, 6787, 6870, 6922, 6957, 6990, 6996, 7045, 7128, 7138, 7164, 7213, 7215, 7296, 7325, 7377, 7458, 7661, 7697, 7713, 7716, 7789, 7833, 7858, 7859, 8216, 8267, 8271, 8346, 8368, 8369, 8495, 8584, 8597, 8598, 8745, 8824, 8886, 9103, 9104, 9105, 9130, 9153, 9234, 9310, 9311, 9313, 9354, 9390, 9564, 9633, 9712, 9745, 9750, 9756, 9793, 9948, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -236, , , , , , , -204, , -188, -164, , -134, -121, , , -113, , , , -105, , -95, , -91, -88, , , , -80, -78, , , , , -75, -70, , -60, , , -58, -57, , , -55, -55, -54, -52, -51, , -51, -47, , -41, , -40, -39, -37, , , , , , , , -37, , -36, -35, , -35, , , -33, , , , -33, -25, -25, , -24, , -24, , , -23, -21, , , , -19, -17, , -16, -15, , , -15, , -14, , , , , -14, , -12, , , , , , , -12, -11, , , , , , -11, -10, , -9, , , -8, , -8, -7, , , , -6, , -6
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -236, , , , , , , -204, , , -162, , , , -138, , , , , , , , -109, , , , , , , , , , -92, , , , , , , , , , , -81, , , , , , , , , -68, , , , , , , , -57, , , , , , , , , , , , , , , , -47, , , , , , , , , -40, , , , , , , , , , , , -31, , , , , , , -29, , , , , , , -28, , , , , -19, , , , -17, , , , , , -16, , -14, , , , , -14, , -13, -9
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -236, -235, -223, -223, -207, , , , , , , , -204, , , -203, -203, -200, , -200, , , , , -199, -198, -197, , , -196, -196, , -193, , , -191, , -190, -189, , , -188, , , , , , , -185, , , , , -183, , , , -180, -180, , -179, -179, -176, -176, , -175, , , -175, , -173, -172, , -171, -169, , , , , -169, , -167, , -166, , , , -166, -165, -164, , , -161, , , -161, , , -160, , -159, -158, -156, , , -155, , -153, -153, -152, , -152, -151, , , , -151, -149, -146, , , , -144, , -144, , , , , , -143, -138, , , , -138
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
                text: 'test200 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_ac814.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_ac814.resize();
});
