
var chart_bestScoreProblemStatisticChart1_6ee2a = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_6ee2a'), {
    type: 'line',
    data: {
        labels: [
            10, 12, 13, 14, 15, 16, 23, 61, 82, 89, 153, 159, 192, 208, 251, 257, 259, 274, 284, 338, 352, 402, 421, 463, 464, 480, 553, 573, 755, 907, 916, 955, 983, 1100, 1218, 1417, 1418, 1840, 2227, 2971, 3664, 3718, 4009, 4010, 4012, 4065, 4392, 4487, 4949, 4984, 5344, 5762, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , -7744, , , , -7775, , , , , -6755, , -6744, , -6734, , , -6732, -6731, , , , -6727, -6712, , , , , , , , , , , , , , , , , , , , , -6712
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -7744, , -7250, , , , -6827, , , , , -6779, , , , , -6752, , , , , , -6726, -6725, -6724, , , , , , , , , , , , , , , , , , , , , , , -6724
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -7744, -7743, -7799, -8376, -8162, -7558, -7175, , -7151, , -7145, , -7104, , -7080, -7007, , -6991, , -6980, , , , -6867, -6864, , , , , , , , -6842, -6836, -6807, -6805, -6780, -6761, -6756, -6754, -6751, -6745, -6744, -6742, -6739, -6731, -6728, -6727, -6725, -6714, -6713, -6712, -6712
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
  chart_bestScoreProblemStatisticChart1_6ee2a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_6ee2a.resize();
});
