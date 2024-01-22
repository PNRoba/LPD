
var chart_bestScoreProblemStatisticChart0_24dbe = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_24dbe'), {
    type: 'line',
    data: {
        labels: [
            468, 568, 663, 861, 961, 1061, 1155, 1250, 1353, 1456, 1554, 1653, 1759, 1863, 1965, 2161, 2259, 2450, 2737, 2930, 3303, 3403, 3500, 3694, 3894, 3999, 4100, 4200, 4505, 5131, 5223, 5319, 5640, 5745, 6948, 8971, 9273, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -69, -67, -65, -64, -62, -61, -60, -59, -58, -56, -55, -53, -51, -50, -49, -48, -48, -47, -47, -45, -45, -44, -44, -43, -43, -42, -41, -41, -40, -40, -39, -38, -38, -37, -37, -36, -35, -35
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
  chart_bestScoreProblemStatisticChart0_24dbe.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_24dbe.resize();
});
