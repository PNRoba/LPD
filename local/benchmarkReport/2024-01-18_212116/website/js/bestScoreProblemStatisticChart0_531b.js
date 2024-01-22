
var chart_bestScoreProblemStatisticChart0_531b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_531b'), {
    type: 'line',
    data: {
        labels: [
            2986, 3007, 3013, 3032, 3087, 3094, 3114, 3137, 3167, 3215, 3248, 3257, 3325, 3327, 3381, 3407, 3420, 3429, 3462, 3481, 3492, 3501, 3571, 3622, 3651, 3662, 3700, 3735, 3742, 3782, 3865, 3899, 3907, 3981, 4028, 4105, 4144, 4145, 4185, 4228, 4230, 4310, 4313, 4350, 4391, 4395, 4433, 4553, 4560, 4633, 4640, 4674, 4718, 4805, 4869, 4887, 4909, 4949, 4968, 5047, 5068, 5127, 5152, 5193, 5210, 5235, 5275, 5292, 5313, 5376, 5458, 5540, 5556, 5619, 5638, 5702, 5783, 5866, 5951, 6034, 6083, 6280, 6363, 6379, 6422, 6446, 6465, 6505, 6527, 6614, 6705, 6715, 6751, 6763, 6769, 6788, 6831, 6873, 6878, 6955, 6964, 6994, 7037, 7048, 7133, 7221, 7307, 7335, 7378, 7395, 7420, 7465, 7478, 7507, 7548, 7560, 7588, 7645, 7731, 7767, 7807, 7816, 7901, 7973, 8052, 8137, 8178, 8218, 8250, 8334, 8348, 8392, 8434, 8507, 8522, 8597, 8765, 8849, 8896, 8938, 9102, 9144, 9184, 9225, 9258, 9265, 9306, 9342, 9410, 9558, 9602, 9645, 9677, 9760, 9842, 9918, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -182, , , , , , , -181, , -179, , , -179, , -178, , -178, , , -177, , -177, , -176, -176, , -175, -175, -174, , -174, , -172, -170, -168, , -168, -167, , -167, , -166, -166, , -165, -165, , -164, , -163, -161, , -161, , -158, -157, , , -157, , -156, -156, , -155, -155, , -152, , , , -152, , -151, , , , , , , , , -151, -150, , -149, -148, , , , -148, -146, , , , -146, -145, , -145, , -144, -143, , , , , -143, -142, , -142, -141, , -140, -139, , -138, , , -138, -137, , , -137, -136, -136, -135, -134, , , -134, -132, -131, , -130, , , , -130, -129, -129, -128, -127, -127, , -126, -125, , , -125, -124, -123, , , , , -123
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -182, , , -182, , , , -181, , -179, , , -178, , -177, , , , , -176, , -175, , -174, , , -172, , , , -172, , -171, , , , -171, , , -170, , -169, , , -168, , , -168, , -167, , , -167, , -166, , , -166, -165, , -164, , , -163, , , -163, , -162, -161, -161, , -160, , -158, -157, -157, -155, -154, , -154, -153, , , -152, , , -151, -151, -150, , , , , -149, , , -148, , -147, , , -147, -145, -144, -143, , , -142, , , -141, , , -140, , -139, -137, , , -137, -136, , , , , , -136, -135, , , , -135, , -134, -134, -133, , , , , , , -133, , , -132, , , , , -132, -131, -130, -129, -129
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -182, , , -182, , -181, -180, -180, , , , , -179, , , , , -178, , -177, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -177, , , , , , , , , , , , , -176, -174, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -172, , , , , , , , -172
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
                text: 'Problem_6 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_531b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_531b.resize();
});
