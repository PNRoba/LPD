
var chart_bestScoreProblemStatisticChart1_e0c90 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_e0c90'), {
    type: 'line',
    data: {
        labels: [
            10, 14, 16, 31, 63, 67, 69, 70, 71, 75, 102, 145, 157, 159, 166, 205, 214, 256, 258, 298, 315, 359, 378, 385, 418, 447, 456, 490, 509, 526, 530, 586, 592, 621, 691, 734, 810, 833, 1133, 1615, 1637, 1714, 1736, 1737, 1821, 1863, 1977, 2214, 2264, 2265, 2485, 2849, 2868, 3430, 4365, 5223, 5227, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , -7392, , , -6949, , , , -6897, , -6837, -6827, , -6796, , , -6790, , -6784, -6783, , , -6776, , -6763, , -6756, , , -6743, , , , , , , , , , , , , , , , , , , , -6743
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -7392, , -6949, , , , , , -6897, , , -6837, , -6806, , -6796, , , -6790, , -6784, , , -6783, , , , -6776, , , , , , , , , , , , , , , , , -6772, -6747, , , -3737, , , , , , , -3737
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7392, -7498, , -7496, , -7269, -7229, -7214, -7192, , , -7056, , , -7027, , , , , , , , , -6995, , , , , -6988, , , -6981, , -6940, , -6927, -6895, , -6861, -6856, -6851, -6846, -6839, -6830, -6826, -6820, , , -6815, -6801, , -6800, -6784, -6775, -6762, -6756, -6743, -6743
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
  chart_bestScoreProblemStatisticChart1_e0c90.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_e0c90.resize();
});
