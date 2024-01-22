
var chart_bestScoreProblemStatisticChart0_d6b1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_d6b1'), {
    type: 'line',
    data: {
        labels: [
            976, 977, 987, 990, 997, 1003, 1153, 1320, 1330, 1496, 1658, 1706, 1847, 2032, 2104, 2164, 2191, 2346, 2473, 2537, 2559, 2560, 2578, 2587, 2683, 2748, 2775, 2859, 2957, 3009, 3011, 3045, 3132, 3187, 3220, 3307, 3362, 3397, 3486, 3536, 3578, 3657, 3658, 3661, 3670, 3757, 3793, 3843, 3872, 3988, 4006, 4021, 4096, 4170, 4171, 4194, 4291, 4388, 4477, 4493, 4519, 4556, 4598, 4599, 4636, 4682, 4717, 4839, 4932, 5008, 5013, 5027, 5193, 5194, 5386, 5409, 5458, 5527, 5596, 5675, 5743, 5750, 5937, 5940, 6127, 6173, 6555, 6751, 6752, 6755, 6790, 6980, 7222, 7532, 7764, 7953, 8261, 8764, 8959, 8992, 9153, 9205, 9206, 9437, 9439, 9481, 9538, 9643, 9644, 9666, 9747, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -176, , , , , -153, , -133, -115, -100, , -87, -77, , , -71, -61, -59, , , , , -56, -54, , -53, -51, -50, , , -48, -46, , -45, -35, , -33, -32, , -32, , , , -31, -31, , , -30, -28, , , -26, , , -24, -20, -19, -18, , , -10, , , -8, , -7, , -7, -6, , , , , -6, , -4, -3, , -3, , -2, , , , , , , , , , , , , , , , , , , , , , , , , , , , -2, 0, 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -176, , , , , , , -138, , , , -105, , , -84, , , , , , , , -64, , , , , , , , , , , -54, , , , , , , , , , , , , -48, , , , , , , , , , , , , -32, , , , , , , , , , , -24, , , , , , , , -19, , , , , , , -17, , , , , -12, , -7, -6, -5, -4, , , , -4, -3, , , , , -3, , , -2, , , -2
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -176, -175, -159, -148, , , , , , , , , , -147, , , , -145, -145, -143, , , , -141, , , , -140, -137, , , , , , -137, , , -134, , -134, -132, -131, , , , -130, , , -130, -129, , -126, -124, , , , , , -123, , -122, -122, , -121, , -119, , , , -119, -117, -117, , -115, , , , , -114, , -114, -113, -112, , -112, -111, -111, -110, , -102, , , , , -101, -101, -100, , , -99, -98, -97, -97, , -96, -95, -93, , , -93
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
  chart_bestScoreProblemStatisticChart0_d6b1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_d6b1.resize();
});
