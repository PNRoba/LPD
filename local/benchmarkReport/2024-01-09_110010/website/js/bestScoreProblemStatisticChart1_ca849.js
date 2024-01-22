
var chart_bestScoreProblemStatisticChart1_ca849 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_ca849'), {
    type: 'line',
    data: {
        labels: [
            113, 250, 520, 784, 918, 1016, 1113, 1238, 1334, 1446, 1549, 1639, 1738, 1848, 1962, 2089, 2194, 2408, 2612, 2716, 2824, 2956, 3092, 3201, 3309, 3522, 3642, 3834, 4023, 4117, 4205, 4308, 4527, 4615, 4725, 5076, 5638, 5862, 5978, 6555, 6946, 7063, 7170, 7260, 7367, 7604, 7736, 7849, 8279, 8799, 8935, 9976, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -11450, -11377, -11447, -11841, -11570, -11561, -11437, -11423, -11330, -11321, -11281, -11279, -11277, -11253, -11250, -11250, -11247, -11236, -11212, -11201, -11191, -11186, -10994, -10990, -10985, -10971, -10963, -10799, -10794, -10793, -10790, -10752, -10751, -10748, -10745, -10744, -10738, -10736, -10973, -10966, -10962, -10956, -10874, -10866, -10858, -10847, -10846, -10845, -10840, -10833, -10826, -10755, -10755
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
  chart_bestScoreProblemStatisticChart1_ca849.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_ca849.resize();
});
