
var chart_bestScoreProblemStatisticChart1_c109b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_c109b'), {
    type: 'line',
    data: {
        labels: [
            10, 14, 15, 19, 25, 42, 59, 64, 65, 75, 88, 114, 123, 167, 198, 220, 224, 239, 240, 247, 279, 280, 346, 414, 451, 453, 521, 532, 542, 547, 549, 643, 760, 853, 863, 864, 879, 915, 916, 1043, 1172, 1200, 1285, 1312, 1397, 1432, 1662, 1883, 1885, 2128, 2369, 2944, 2995, 2998, 3092, 3877, 3946, 4763, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , -4072, , , , -8120, , -7374, , , , , -7309, , -7248, , , , -7208, , , , , , -7180, , , , -7160, , , -7149, -7142, , -7141, , -7139, -7136, , , -7133, , , , , , , , , , -7133
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -4072, , , , -7627, , , , , , -7350, , -7296, , , , , , , -7242, , , , , , , , , , , -7203, , , , , , , , , -7188, , , , , -7176, , , , -7169, , , , -7165, -7162, , -7161, -7161
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -4072, -8142, , -8054, -7892, -7787, , -7714, -7708, , -7560, -7510, , , , , -7448, -7414, -7409, -7396, , , , -7390, -7387, -7377, , -7365, -7346, -7341, -7310, -7301, , -7290, -7286, -7269, , -7267, -7214, , , , , -7205, , , , -7182, , -7167, , -7166, -7150, -7147, , , -7133, , -7133
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
  chart_bestScoreProblemStatisticChart1_c109b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_c109b.resize();
});
