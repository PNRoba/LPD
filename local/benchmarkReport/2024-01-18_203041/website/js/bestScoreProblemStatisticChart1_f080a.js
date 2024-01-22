
var chart_bestScoreProblemStatisticChart1_f080a = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_f080a'), {
    type: 'line',
    data: {
        labels: [
            3354, 3488, 3622, 3768, 3890, 4008, 4132, 4256, 4378, 4507, 4624, 4736, 4854, 5083, 5330, 5582, 5705, 5822, 5938, 6051, 6399, 6516, 6860, 6976, 7102, 7226, 7476, 7597, 7714, 7835, 7957, 8078, 8196, 8314, 8430, 8794, 9408, 9538, 9661, 9786, 9900, 10000, 10001
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -95572, -95720, -95696, -95754, -95804, -95829, -95845, -99820, -99857, -99849, -99831, -99805, -99889, -99866, -100010, -99829, -99826, -99779, -99713, -99711, -99718, -99708, -99718, -99613, -99568, -99562, -99543, -99704, -99688, -99684, -99706, -99696, -99648, -99626, -99592, -99513, -99502, -99498, -99478, -99581, -99576, -99574, -99574
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
                suggestedMax: 10001,
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
  chart_bestScoreProblemStatisticChart1_f080a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_f080a.resize();
});
