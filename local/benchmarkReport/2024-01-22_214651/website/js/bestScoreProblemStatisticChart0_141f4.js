
var chart_bestScoreProblemStatisticChart0_141f4 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_141f4'), {
    type: 'line',
    data: {
        labels: [
            1774, 1807, 1829, 1837, 1948, 2125, 2171, 2333, 2524, 2564, 2799, 2878, 2885, 2936, 2964, 3030, 3031, 3034, 3069, 3189, 3190, 3214, 3368, 3422, 3423, 3539, 3653, 3684, 3812, 3875, 3917, 3928, 3941, 4043, 4058, 4108, 4133, 4189, 4198, 4221, 4304, 4382, 4392, 4420, 4421, 4476, 4562, 4612, 4613, 4648, 4704, 4738, 4821, 4872, 4917, 4939, 4996, 5077, 5153, 5232, 5259, 5309, 5374, 5380, 5383, 5388, 5398, 5465, 5519, 5539, 5614, 5644, 5689, 5705, 5706, 5714, 5764, 5835, 5889, 5997, 6058, 6147, 6222, 6307, 6378, 6444, 6491, 6492, 6522, 6548, 6549, 6748, 6820, 7144, 7212, 7401, 7501, 7783, 8043, 8055, 8213, 8214, 8269, 8497, 8533, 8534, 8589, 8728, 8931, 9090, 9131, 9340, 9529, 9726, 9790, 9920, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -245, , , , -206, -174, , -165, , -135, -115, , , , , , , -109, , , , -98, -82, , , -73, , -69, -61, , , , -57, -54, , , -45, , , -43, -40, , -38, , , -36, -35, , , -34, , -34, -33, , -32, , -31, -30, -28, -27, , -21, , , , -18, , -18, , -8, -7, , -5, , , , -4, , , , , -4, -2, , , -2, , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -245, , , , , -206, , -174, , , , , , -145, , , , , , , , , -124, , , , , , -106, , , , , , , , , , , , -95, , , , , , , , , , , , -85, , , , , , , , , , , , , -74, , , , , , , , , , , -64, , , , , , -55, , , , , , , , -47, , -38, , , -36, -29, -25, , , , -23, -18, , , , -16, -14, , -13, -12, -11, -10, , -9, -9
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -245, -224, , , , , , , , -222, -220, -219, , -218, -215, , -215, -213, -213, , , , -210, , -209, , , , -207, -204, , , -204, -202, , -202, -200, , , , , -200, -199, , , -198, -196, , -194, , , , , -193, , , , , -193, , -192, -192, -189, , , , -186, , , -185, , -185, -184, -183, , , -183, -181, -179, , , , -178, , -176, -175, , -174, -171, , -169, , -168, -162, , , , -162, -160, -160, , , -159, -159, -154, , , -151, , , , , -150, , -150
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
  chart_bestScoreProblemStatisticChart0_141f4.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_141f4.resize();
});
