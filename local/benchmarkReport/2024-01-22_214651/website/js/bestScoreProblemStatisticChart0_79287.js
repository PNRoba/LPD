
var chart_bestScoreProblemStatisticChart0_79287 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_79287'), {
    type: 'line',
    data: {
        labels: [
            388, 391, 414, 416, 519, 625, 629, 763, 765, 897, 995, 1009, 1040, 1179, 1242, 1299, 1412, 1504, 1536, 1592, 1620, 1662, 1728, 1750, 1792, 1834, 1857, 1936, 2134, 2191, 2253, 2331, 2346, 2480, 2496, 2511, 2512, 2551, 2664, 2737, 2738, 2890, 2942, 3121, 3212, 3287, 3299, 3479, 3644, 3988, 4034, 4039, 4609, 4668, 5417, 5537, 5784, 5785, 5893, 6025, 6040, 6267, 6688, 6712, 7710, 7843, 8212, 8741, 9069, 9095, 9186, 9528, 9546, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -98, , -68, , -60, -48, , -39, , , -32, -22, , -18, -15, -13, , -12, , -12, -4, , -3, , -2, , , , , , , -2, , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -98, , -64, , , , , -38, , , , -34, , , , -31, , , , , , , -29, , , -25, , , , , , , , -14, , , , , -10, , , , , -4, , -1, , 0, , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -98, -84, , , , , , , -82, , , -76, , , , , , , , , -76, , , -73, , , , -69, , -69, -68, -68, -67, , -66, -66, , , -65, -64, -64, , -62, -62, -61, -61, , -59, , -59, , -57, -55, -53, -53, -52, -51, -51, -50, -50, -48, -47, -46, -43, -43, -42, -41, -41, -39, -39, -38, -37, -36, -36
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
  chart_bestScoreProblemStatisticChart0_79287.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_79287.resize();
});
