
var chart_bestScoreProblemStatisticChart1_599bc = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_599bc'), {
    type: 'line',
    data: {
        labels: [
            8, 9, 11, 12, 15, 22, 25, 26, 29, 39, 51, 74, 76, 98, 116, 119, 126, 154, 158, 187, 211, 219, 250, 273, 279, 307, 323, 325, 339, 357, 367, 421, 447, 449, 483, 508, 525, 536, 544, 564, 567, 595, 616, 620, 669, 670, 680, 697, 698, 722, 856, 864, 1008, 1034, 1142, 1261, 1379, 1500, 1553, 1577, 1617, 1692, 1712, 1728, 1756, 1866, 1910, 2023, 2159, 2431, 2436, 2529, 2542, 2915, 3849, 4140, 4183, 4698, 4703, 5231, 5730, 5869, 5871, 6286, 6304, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -7224, , , , , , -7152, , -7152, -7134, , -7017, , , -7007, -7005, , -6949, , -6936, -6928, , -6922, -6919, , , -6917, , -6916, -6913, -6893, , -6892, -6881, , -6860, , , -6857, -6855, -6850, , , , , , -6836, -6831, -6820, , , -6803, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -6803
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7224, , , , , , , , , -7225, , , -7055, , -7037, , , , -7011, , -6981, , , -6958, , , , , , -6941, , , , -6925, , , , , -6900, , , , , , , , , -6888, , , , -6880, -6878, , -6876, -6873, -6848, -6840, , , -6839, , , -6834, , -6819, , -6805, -6803, , , , , , , , , , , , , , , , , -6803
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -7224, , -7220, -7151, -7347, -7321, -7167, , , , , , , , -7076, , , , , , , , , , , -7055, -7048, , , , , , , , , -7027, , , -7018, , , , -7014, -6999, -6972, -6968, , , , , , , , , , , , -6967, -6966, , -6953, -6952, , -6934, , -6917, , , -6916, -6904, -6892, -6872, -6870, -6860, -6850, -6847, -6845, -6836, -6833, -6832, -6826, -6821, -6817, -6805, -6805
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
                text: 'Problem_2 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_599bc.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_599bc.resize();
});
