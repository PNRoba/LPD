
var chart_bestScoreProblemStatisticChart1_73d08 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_73d08'), {
    type: 'line',
    data: {
        labels: [
            9, 10, 11, 12, 14, 17, 61, 70, 92, 117, 136, 151, 171, 198, 215, 261, 269, 282, 310, 314, 329, 338, 359, 364, 387, 401, 405, 410, 411, 436, 439, 441, 455, 483, 494, 521, 524, 540, 545, 546, 563, 588, 589, 596, 597, 609, 634, 677, 738, 749, 822, 829, 895, 954, 1059, 1060, 1078, 1115, 1119, 1125, 1206, 1214, 1264, 1782, 1909, 1910, 1980, 1986, 2085, 2100, 2172, 2193, 2195, 2281, 2294, 2355, 2428, 2455, 2565, 2615, 2645, 2682, 2855, 2937, 2938, 3117, 3150, 3609, 3759, 3794, 4184, 4198, 4319, 4419, 4616, 4639, 4778, 4779, 5006, 5488, 6661, 6809, 6867, 7084, 7820, 9415, 9616, 9690, 9701, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -7381, , , , -7483, , , -7429, , -7380, , , , -7282, , , , -7097, , , , , -7096, , , , , , , , , , , , , , , , , -7091, -7090, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -7090
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -7381, , , -7483, , , , -7428, , , -7378, , , , , , , , -7157, , , , , , , , -7142, , , , -7096, , , , , , , , , , -7090, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -7090
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -7381, , , , -7483, , , -7428, , , , -7378, , , , -7157, , , , , -7142, , , , , , , , -7096, , , , , , -7090, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -7090
                  ]
                }, 
{
                  label: 'LAHC 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -7381, , , -7483, , , , , , -7449, , , , , , , , -7445, -7386, , -7378, , , , -7373, , -7367, -7358, , , , -7353, -7329, -7312, , , -7308, -7294, -7273, , -7270, -7232, , , , , , , -7214, -7194, , -7193, -7187, , , , -7184, , -7177, -7168, -7136, , , , , , , , , , , -7111, , , , , , , -7109, -7107, , , , , , , -7106, , , , , , , -7104, , , , , , , , , , , , , , , -7104
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -7381, , -7483, , , , , , , , , , , , , , , , , , , , , , -7482, , , , , , , , , , , , , , -7352, , , , , , , , , , , , , -7305, , , -7287, , , , , , -7272, -7250, , , , , , , -7248, , , -7244, -7234, , , -7232, -7225, , , -7224, -7211, -7208, -7199, -7187, -7173, , , -7167, -7166, -7156, , , , -7149, , , -7145, -7139, , -7131, , -7122, -7098, , , , , -7098
                  ]
                }, 
{
                  label: 'LAHC 600 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -7381, , , -7483, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -7479, -7455, , , , -7449, , , -7383, , , -7364, -7351, , , -7316, , , , , , -7305, -7301, -7298, -7288, -7283, -7264, , -7263, , , , -7258, -7203, , , , , , , , , , , , -7175, , , , -7166, -7161, , , -7151, -7150, , , -7149, , -7127, , , -7123, -7119, -7110, -7106, -7106
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
                text: 'test20 best soft score statistic'
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
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 100
                        
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
  chart_bestScoreProblemStatisticChart1_73d08.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_73d08.resize();
});
