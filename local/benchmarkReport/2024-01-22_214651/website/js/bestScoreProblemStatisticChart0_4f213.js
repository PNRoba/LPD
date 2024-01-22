
var chart_bestScoreProblemStatisticChart0_4f213 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_4f213'), {
    type: 'line',
    data: {
        labels: [
            992, 996, 1000, 1003, 1008, 1162, 1332, 1338, 1438, 1449, 1502, 1587, 1660, 1705, 1715, 1788, 1863, 1873, 1919, 1922, 1986, 2068, 2138, 2284, 2312, 2348, 2420, 2466, 2501, 2523, 2539, 2543, 2613, 2669, 2674, 2675, 2703, 2795, 2824, 2885, 2967, 2968, 2972, 3061, 3064, 3148, 3237, 3326, 3412, 3498, 3584, 3608, 3669, 3744, 3818, 4047, 4118, 4135, 4181, 4186, 4261, 4328, 4398, 4424, 4467, 4488, 4489, 4612, 4661, 4684, 4751, 4772, 4791, 4813, 4821, 4949, 4950, 4951, 4961, 5029, 5102, 5170, 5229, 5240, 5264, 5702, 5743, 5818, 6084, 6168, 6253, 6324, 6326, 6400, 6480, 6485, 6501, 6545, 6670, 6672, 6776, 6845, 6846, 6918, 6988, 7064, 7074, 7156, 7361, 7474, 7475, 7679, 7692, 7893, 7941, 8134, 8403, 8610, 8618, 9131, 9132, 9373, 9727, 9935, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -187, , , , , -149, -119, , , , -97, , , , -86, , , , -72, , , , -69, , -63, , -57, , , -46, , , -41, , , , -40, -39, , -37, , , -36, -32, , -31, -28, -27, -25, -24, -22, , -21, -21, -20, -20, -19, , , -19, -13, -11, -10, , -9, , , -9, , -8, -8, , , , -7, , , , -7, -6, , -6, , -5, , , -5, -4, , , -4, -3, , -2, , , , , , , , , , , -2, 0, , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -187, , , , , , -144, , , , , -106, , , , , , , , -81, , , , , , , , -71, , , , , , , , , , , , , , , , -60, , , , , , , -50, , , , , , , -36, , , , , , , , , , , , , -30, , , , , , , , , , , -21, , , -14, , , , -11, , , , , , , -8, , , , -6, , , , , , -6, , -5, , , -3, , , -2, , , , , , , , -2, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -187, -186, -170, , , , -169, -168, , -165, , -162, , -160, -160, -157, , -153, , -152, , -152, , -148, , -146, , , -144, -141, , -140, -136, -135, , , -128, , -127, -125, , , , , , , , , , , , , , , , -122, , , , , , -121, , -120, -119, , -117, , , , -117, -116, , -115, -114, -114, , , -113, , , , -109, , , , -107, , , , -106, , -106, -105, , -104, -104, -103, , -103, -101, -100, , , , -98, , -98, -97, , -95, -94, , -93, -91, -91, -90, -90, -89, -87, , , -87
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
                text: 'test150 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_4f213.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_4f213.resize();
});
