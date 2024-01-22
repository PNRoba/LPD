
var chart_bestScoreProblemStatisticChart1_423d7 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_423d7'), {
    type: 'line',
    data: {
        labels: [
            10, 13, 14, 16, 24, 55, 85, 122, 180, 186, 237, 282, 332, 370, 372, 382, 420, 494, 512, 645, 649, 650, 724, 735, 763, 814, 854, 855, 868, 973, 1178, 1411, 1442, 2102, 2281, 3230, 3373, 3466, 3952, 4128, 4945, 5099, 5125, 5575, 5576, 5765, 7277, 7303, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -3837, , -7619, , -7269, -7007, -6990, , , -6983, , , , , , , -6975, , -6974, -6967, , , -6964, , , , , , , , , , , , , , , , , , , , -6964
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -3837, , -7203, , -7012, , -7005, , , , -6984, , , , , , , , , , , , , , , , , -6977, , , -6973, , , , , , , , , , , , , , , -6973
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -3837, -7180, -7283, , -7219, , , , , , , , , , -7196, , -7182, -7181, -7146, -7141, -7136, -7097, , -7093, , , -7076, -7065, , -7043, , -7041, -6991, , -6980, -6976, -6974, -6972, -6960, -6957, -6955, -6954, -6952, -6951, -6945, -6943, -6942, -6932, -6932
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
  chart_bestScoreProblemStatisticChart1_423d7.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_423d7.resize();
});
