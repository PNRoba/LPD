
var chart_bestScoreProblemStatisticChart0_70af8 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_70af8'), {
    type: 'line',
    data: {
        labels: [
            893, 896, 897, 898, 920, 921, 1024, 1031, 1055, 1086, 1150, 1158, 1161, 1205, 1235, 1236, 1237, 1249, 1286, 1289, 1411, 1412, 1480, 1561, 1704, 1705, 1715, 1745, 1764, 1785, 1786, 1819, 1892, 1957, 1993, 2013, 2064, 2072, 2127, 2184, 2240, 2305, 2345, 2366, 2376, 2426, 2473, 2492, 2526, 2555, 2613, 2672, 2726, 2734, 2749, 2750, 2792, 2846, 2883, 2898, 2946, 2950, 2951, 2999, 3046, 3057, 3096, 3200, 3254, 3297, 3305, 3356, 3362, 3408, 3461, 3535, 3594, 3606, 3615, 3667, 3682, 3743, 3766, 3817, 3822, 3864, 3962, 3990, 4012, 4099, 4111, 4142, 4173, 4184, 4277, 4337, 4341, 4349, 4421, 4484, 4544, 4949, 5159, 5206, 5274, 5285, 5393, 5394, 5438, 5440, 5565, 5639, 5820, 5882, 5943, 6044, 6073, 6090, 6094, 6095, 6258, 6338, 6367, 6466, 6467, 6602, 6617, 6618, 6684, 6736, 6870, 7008, 7116, 7144, 7270, 7277, 7403, 7589, 7658, 7748, 7780, 7936, 7937, 8032, 8157, 8630, 8686, 8802, 8850, 8878, 9255, 9476, 9488, 9678, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -208, , , , , -170, , , , , , -132, , , , , , , -112, -98, , , -89, , , -76, , , , , -73, -70, -59, , -48, , -42, -38, -36, -35, -33, , -32, , -31, , -30, , -30, -29, -29, , -27, , , -27, -26, , -25, , -25, , -24, -24, , -23, -23, -20, , -19, -18, , -18, -17, , , , -17, -16, , , -16, -11, , -10, -10, , -8, -8, , -7, , -6, -6, -5, , , -5, -4, , , , , , , , , , , , , , , , -4, , -2, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -208, , , , , , , , -170, , , , , , , , , , , -132, , , , , , -98, , , , , , , , , -75, , , , , , , , , , -65, , , , , , , , , , , , -55, , , , , , , , , , , -50, , , , , , , , , , , , -44, , , , , , , , , , , -34, , , , , , , , -27, -25, , -23, , , , , -22, , , -20, , -18, , , -15, , , , -14, , , , , -14, , , , -13, -12, -12, , -11, -11, , -9, , -9, , -7, , , -7, -6, , , , , , , , , , -6
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -208, , -206, -205, -200, -193, , -191, -191, -185, , -184, , -184, -183, -179, -178, -176, -171, , , , -170, , -169, -167, , , -166, -166, -158, , -157, , -153, , , , , , , , -152, , -150, , , , -147, , , , -147, , -141, -139, , , , , -139, -138, -134, , , -133, , , , , , , -133, , , -132, -130, -128, , , -127, , , , -125, , , -125, , , -121, , , , , , -118, -117, , , , , -116, , -115, -114, -113, -113, , -112, -107, , -106, , -106, , , , -105, -105, , -104, -102, -102, -101, , -101, -100, -99, , , , -96, , , -96, , -94, , -94, , -93, -91, , , -91, -90, -89, -89, -87, -85, -85, -84, -82, -82
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
  chart_bestScoreProblemStatisticChart0_70af8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_70af8.resize();
});
