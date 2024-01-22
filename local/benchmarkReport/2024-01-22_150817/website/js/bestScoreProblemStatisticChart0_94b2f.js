
var chart_bestScoreProblemStatisticChart0_94b2f = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_94b2f'), {
    type: 'line',
    data: {
        labels: [
            1642, 1644, 1645, 1657, 1669, 1671, 1805, 1927, 1952, 2080, 2137, 2232, 2274, 2275, 2315, 2394, 2453, 2463, 2474, 2484, 2523, 2652, 2673, 2674, 2675, 2764, 2765, 2780, 2826, 2830, 2887, 2964, 2980, 3063, 3072, 3129, 3131, 3191, 3251, 3309, 3366, 3378, 3423, 3446, 3482, 3539, 3584, 3587, 3588, 3599, 3652, 3698, 3706, 3749, 3756, 3812, 3840, 3866, 3918, 3971, 3973, 4044, 4079, 4091, 4133, 4186, 4225, 4226, 4243, 4294, 4338, 4339, 4347, 4350, 4404, 4456, 4573, 4602, 4646, 4648, 4678, 4697, 4807, 4808, 4838, 4888, 4927, 4935, 4956, 4976, 4982, 5028, 5033, 5075, 5211, 5214, 5337, 5340, 5364, 5416, 5442, 5470, 5589, 5633, 5717, 5718, 5771, 5796, 5901, 5967, 6103, 6221, 6222, 6246, 6343, 6391, 6531, 6663, 6776, 6778, 6780, 6783, 6846, 6847, 6913, 7029, 7056, 7131, 7148, 7267, 7392, 7441, 7513, 7637, 7670, 7737, 7752, 7872, 7948, 7996, 8117, 8477, 8883, 8884, 9309, 9355, 9371, 9466, 9467, 9508, 9550, 9551, 9664, 9846, 10000, 10001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -226, -189, , -166, , -156, , , , -124, , , , , -100, , -82, , , , , , -77, , , -70, , -62, -53, , , -51, -49, -46, -43, -42, , -41, , -40, -39, , , , -38, -38, , -37, , -35, -35, , -33, -32, -31, , , -31, , -29, -27, , , -25, -24, , , , -23, -23, -21, , -21, , -13, , -11, , , -11, -10, , -9, , , -9, -7, , -6, , , , , -6, -4, , , , , -4, , -2, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2, 
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -226, , , , -189, , , , -149, , , , , , , , , -124, , , , , , , , , -102, , , , , , -92, , , , , , , , -78, , , , , , , , , , -69, , , , , , , , -58, , , , , , , , , , , -51, , , , , , -47, , , , , , , , , , -41, , , , , , , -37, , , , , -33, , , -31, , , , -29, , -28, -27, , , -25, , -23, -22, -21, , , , -21, , , -20, -19, , , -18, -18, -16, , -15, -14, , , -14, -13, , -13, -11, , , , , -11, , , , -8, , , -6, , , -6
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -226, -224, -221, , -207, , , , , -206, , , -204, -203, , -201, -199, -199, -193, , , , -193, -191, -190, -187, -186, , -185, , , -184, , , -180, , , , , , , -176, , , , , -176, -175, -173, , , -172, , , , , -172, , , , -169, , , -167, , , -167, -166, , , -164, -162, , , , , -162, , , , -161, , -161, -160, , , -157, , , -157, , , -156, , -154, , -153, -152, , , , -150, -148, , , -145, , , -143, , , -143, -142, , -140, , , , -140, -139, -138, , -137, -137, , , -135, -132, , , , -128, , , -128, -126, , , -123, , , -121, -120, -119, -117, , -117, -116, -114, , -113, -112, , -111, -111, 
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
                suggestedMax: 10001,
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
  chart_bestScoreProblemStatisticChart0_94b2f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_94b2f.resize();
});
