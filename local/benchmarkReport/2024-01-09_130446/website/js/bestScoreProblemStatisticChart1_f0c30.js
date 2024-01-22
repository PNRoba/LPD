
var chart_bestScoreProblemStatisticChart1_f0c30 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_f0c30'), {
    type: 'line',
    data: {
        labels: [
            46, 131, 236, 386, 478, 560, 652, 808, 897, 981, 1056, 1128, 1206, 1292, 1380, 1472, 1572, 2458, 2552, 2818, 2919, 3112, 3210, 3301, 3376, 3467, 3557, 3630, 3802, 3888, 3971, 4070, 4176, 4347, 4427, 4527, 4618, 4786, 4961, 5053, 5137, 5222, 5584, 5668, 5749, 5838, 5920, 6008, 6094, 6182, 6272, 6439, 6529, 6622, 7684, 8141, 8326, 8693, 9941, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -11169, -11146, -11176, -11174, -11180, -11096, -11064, -11052, -10945, -11321, -11291, -11260, -11238, -11225, -11195, -11177, -11186, -11158, -11176, -11173, -11147, -11142, -11106, -11087, -11079, -11018, -11032, -11030, -11019, -11016, -10981, -10980, -10977, -10969, -10967, -10890, -10872, -10862, -10857, -10855, -10853, -10851, -10842, -10827, -10826, -10786, -10785, -10773, -10762, -10747, -10746, -10745, -10720, -10707, -10646, -10642, -10627, -10621, -10864, -10703
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
                text: 'Problem_3 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_f0c30.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_f0c30.resize();
});
