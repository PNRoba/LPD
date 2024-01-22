
var chart_bestScoreProblemStatisticChart1_50ed0 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_50ed0'), {
    type: 'line',
    data: {
        labels: [
            76, 207, 419, 662, 778, 866, 963, 1086, 1195, 1296, 1382, 1464, 1554, 1649, 1861, 1961, 2089, 2199, 2292, 2383, 2481, 2573, 2667, 2761, 2860, 2948, 3235, 3325, 3532, 3719, 3804, 4090, 4175, 4277, 4376, 4675, 4862, 5243, 5346, 5444, 5562, 5663, 5769, 5887, 6195, 6460, 6558, 6656, 6849, 6950, 7135, 7417, 7608, 7710, 7818, 8206, 8429, 8635, 9379, 9472, 9802, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -8010, -8155, -11505, -11527, -11642, -11642, -11636, -11628, -11622, -11582, -11236, -11225, -11199, -11219, -11209, -11185, -11185, -11152, -11151, -11131, -11125, -11113, -11110, -11105, -11095, -11090, -11088, -11086, -11068, -10915, -10905, -10886, -10876, -10859, -10846, -10836, -10829, -10826, -10802, -10797, -10789, -10778, -10778, -10771, -10748, -10740, -10726, -10725, -10713, -10702, -10701, -10693, -10676, -10662, -10643, -10628, -10625, -10622, -10689, -10654, -10648, -10648
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
  chart_bestScoreProblemStatisticChart1_50ed0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_50ed0.resize();
});
