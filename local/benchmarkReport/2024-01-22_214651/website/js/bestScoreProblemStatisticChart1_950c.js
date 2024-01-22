
var chart_bestScoreProblemStatisticChart1_950c = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_950c'), {
    type: 'line',
    data: {
        labels: [
            11, 14, 15, 18, 28, 36, 46, 62, 77, 81, 156, 158, 237, 291, 366, 386, 396, 523, 556, 631, 633, 816, 819, 878, 894, 925, 969, 1035, 1129, 1182, 1184, 1227, 1273, 1316, 1358, 1456, 1482, 1487, 1519, 1561, 1645, 2011, 2021, 2062, 2175, 2522, 2715, 3300, 3714, 3782, 3921, 4161, 4889, 4973, 5245, 5906, 6072, 6491, 7653, 8927, 9768, 9787, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , -8487, , , -8614, , , -8504, , , -8426, -8223, , , -8124, , -8044, , , -8012, , -7989, -7969, -7963, , -7962, -7958, -7955, , -7954, , , , , , , , , , , , , , , , , , , , , , , , , , , -7954
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -8487, , , , , , -8614, , , -8504, , , -8207, , , -8104, , , -8035, , , , , , , , , -8011, , , , , , , , , , -7982, , , , -7959, , -7941, -7935, , , -7933, -7926, , , , , , , , , , , -7926
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -8487, -8484, -8164, -8090, -8065, -8448, -8806, , -8620, , , -8205, , , -8153, , , , , -8132, , , , -8126, -8108, , -8107, , , , , , , , -8093, , -8091, -8073, -8046, -8041, , -8022, -8017, -7995, , -7981, , , -7977, -7966, , , -7964, -7953, -7952, -7951, -7941, -7938, -7934, -7928, -7927, -7926, -7926
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
  chart_bestScoreProblemStatisticChart1_950c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_950c.resize();
});
