
var chart_bestScoreProblemStatisticChart1_36be3 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_36be3'), {
    type: 'line',
    data: {
        labels: [
            9, 15, 19, 20, 25, 27, 30, 31, 57, 83, 95, 96, 125, 136, 138, 161, 199, 211, 258, 279, 295, 355, 381, 445, 456, 511, 557, 578, 598, 620, 626, 647, 671, 728, 730, 734, 759, 760, 790, 843, 870, 899, 913, 993, 1027, 1087, 1105, 1189, 1191, 1295, 1297, 1358, 1565, 1632, 1686, 1751, 1753, 1883, 2090, 2349, 2933, 2955, 2988, 2998, 2999, 3007, 3339, 3577, 4914, 4916, 4917, 6203, 6388, 7579, 7772, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , -3947, , , , , , -7621, , , -7206, , , -6906, , -6864, , -6837, , -6802, , -6785, , , -6779, , , -6773, , , , , , , , -6768, -6767, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -6767
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -3947, , , , , , , -7621, , , , , -7206, , , , -6875, , , -6850, , -6831, , , , , , , , -6820, , , , , , , , , , -6810, , , , , , -6799, , , , , -6797, , -6793, , , , -6787, , -6786, -6783, , , , , , -6782, , , , , , , , , -6782
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -3947, , -3996, -3992, -7638, -8023, -7775, -7371, , , -7346, -7334, -7275, -7239, -7222, , -7122, , , -7024, , , , , -7015, , -7007, , -7003, , , -6987, , -6986, -6973, , -6972, -6951, -6936, -6930, , -6900, -6894, , , -6893, , -6877, -6859, -6858, -6856, , -6835, , -6831, -6820, -6814, , -6804, , , -6800, -6799, -6796, -6795, -6789, , -6780, -6779, -6776, -6775, -6774, -6770, -6768, -6767, -6767
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
  chart_bestScoreProblemStatisticChart1_36be3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_36be3.resize();
});
