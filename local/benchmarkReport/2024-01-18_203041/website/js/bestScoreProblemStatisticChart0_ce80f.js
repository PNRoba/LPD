
var chart_bestScoreProblemStatisticChart0_ce80f = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_ce80f'), {
    type: 'line',
    data: {
        labels: [
            3354, 3488, 3622, 3768, 3890, 4008, 4132, 4256, 4378, 4507, 4624, 4736, 4854, 5083, 5330, 5582, 5705, 5938, 6051, 6399, 6516, 6860, 6976, 7476, 7597, 7714, 7835, 7957, 8078, 8196, 8314, 8794, 9408, 9538, 9661, 9786, 10001
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -212, -199, -198, -197, -193, -192, -191, -188, -186, -183, -181, -177, -176, -174, -173, -173, -172, -172, -171, -169, -169, -168, -166, -166, -163, -162, -162, -161, -160, -160, -159, -159, -158, -157, -156, -154, -154
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
  chart_bestScoreProblemStatisticChart0_ce80f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_ce80f.resize();
});
