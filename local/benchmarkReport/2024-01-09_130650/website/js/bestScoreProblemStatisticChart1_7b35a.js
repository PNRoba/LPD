
var chart_bestScoreProblemStatisticChart1_7b35a = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_7b35a'), {
    type: 'line',
    data: {
        labels: [
            2925, 3034, 3142, 3251, 3584, 3692, 3803, 3910, 4016, 4229, 4333, 4433, 5078, 5181, 5285, 6232, 6346, 6451, 6561, 6667, 6775, 6990, 7095, 7204, 7313, 7851, 8287, 8397, 8505, 8613, 8718, 9148, 9256, 9471, 9580, 9693, 9804, 9913, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -101725, -101766, -101820, -101800, -101829, -101799, -101813, -101816, -101863, -101867, -101858, -101857, -101690, -101675, -101657, -101576, -101410, -101425, -101404, -101403, -101400, -101380, -101369, -101360, -101347, -101327, -101362, -101358, -101759, -101656, -101652, -101651, -101814, -101833, -101817, -101825, -101823, -101811, -101807
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
                text: 'Problem_6 best soft score statistic'
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
                        stepSize: 1000
                        
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
  chart_bestScoreProblemStatisticChart1_7b35a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_7b35a.resize();
});
