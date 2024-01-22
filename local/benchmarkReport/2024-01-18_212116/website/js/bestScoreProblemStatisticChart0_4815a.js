
var chart_bestScoreProblemStatisticChart0_4815a = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_4815a'), {
    type: 'line',
    data: {
        labels: [
            502, 508, 519, 522, 548, 580, 586, 628, 657, 673, 709, 728, 746, 783, 797, 818, 853, 871, 889, 926, 945, 961, 995, 1018, 1063, 1064, 1094, 1171, 1203, 1240, 1254, 1275, 1313, 1336, 1349, 1384, 1409, 1420, 1488, 1493, 1530, 1602, 1638, 1673, 1710, 1717, 1747, 1785, 1798, 1878, 1889, 1925, 1956, 1996, 2030, 2031, 2070, 2107, 2110, 2143, 2179, 2188, 2216, 2251, 2268, 2347, 2360, 2396, 2423, 2499, 2501, 2525, 2526, 2538, 2572, 2573, 2608, 2652, 2729, 2810, 2858, 2893, 2895, 2974, 3052, 3163, 3200, 3218, 3234, 3271, 3301, 3309, 3376, 3386, 3425, 3452, 3466, 3603, 3680, 3838, 3871, 3893, 3918, 3927, 3984, 3997, 4034, 4068, 4069, 4077, 4102, 4136, 4157, 4172, 4240, 4276, 4374, 4400, 4411, 4478, 4526, 4560, 4565, 4643, 4863, 4895, 4900, 4977, 5064, 5147, 5226, 5389, 5407, 5444, 5472, 5482, 5520, 5548, 5626, 5859, 5937, 6172, 6253, 6440, 6476, 6515, 6657, 6734, 7042, 7115, 7322, 7361, 7399, 7654, 7736, 8259, 8279, 8320, 8441, 8604, 8684, 8767, 8850, 9065, 9178, 9259, 9471, 9477, 9587, 9595, 9628, 9666, 9680, 9703, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -78, , , -70, , -65, -62, , -60, -59, , -59, -58, , -58, -57, , -56, -55, , -53, -52, , , , , , -52, -51, , -50, -48, , -48, -47, , -45, , -45, -44, -44, -43, -42, -41, , -40, -38, , , -38, -36, , -36, -35, , -34, -33, , -32, -31, , -31, -30, , , -30, -29, , , -29, , , -28, , -28, -27, , , , -27, , -26, , , -26, -25, , -24, -24, , -23, , -23, -21, , -20, , , , , -20, , -18, , , -18, , -17, , -16, -16, , -15, -15, -14, -14, , -13, , -13, , -12, , -12, , -11, , , , , , -11, -10, , -10, -9, , , , , , , -9, -8, -7, , , , , -7, -5, -4, , , , , , , , , , , , , , , , -4, , -3, -3, , -2, -2
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -78, , , , , -67, , , -65, , , -61, , , -60, , , -58, , , -56, , , -54, , , -53, -52, , , -51, , , -50, , , -49, , -48, , , , -48, , , -47, , , -46, -45, , , -45, , , -44, , , -44, , , -43, , , -43, -42, , , -42, -41, , , , , -41, , , -40, -40, -39, , -38, , -37, -36, , , -36, , , -35, , -35, , , -34, , -34, -32, -32, , , -31, , , -29, , , , -28, , , -27, , , , , -27, , -26, , -26, , -25, , -25, , -24, -23, -21, -20, -20, , , -19, , , -18, -17, -17, -16, -16, -15, , , , -15, -14, -14, -12, , , , -12, -10, , -10, , -9, -9, -8, -8, -7, , -7, -5, , , , -5, , , -4, , -4
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -78, -74, , , , , , , , , , , , , , , , , , , , , -72, -72, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -71, -71, , -70, , , , , , , , , , , , , , , , , , , , , , , , , , -70, , , , -69, , , -65, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -65, , -64, , , , , , -64, , , -63, -62, , , , , , , -62
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
                text: 'Problem_5 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_4815a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_4815a.resize();
});
