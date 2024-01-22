
var chart_bestScoreProblemStatisticChart1_daf9c = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_daf9c'), {
    type: 'line',
    data: {
        labels: [
            543, 657, 763, 872, 982, 1089, 1192, 1298, 1508, 1612, 1825, 2240, 2458, 2564, 2670, 2771, 2875, 2986, 3092, 3194, 3514, 3616, 3720, 3820, 3929, 4047, 4941, 5051, 5161, 5267, 5379, 5490, 5598, 5814, 5921, 6254, 7246, 7354, 7568, 7674, 8645, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -42218, -42258, -42258, -42259, -42263, -42264, -42197, -42167, -42193, -42206, -42181, -42187, -42184, -42108, -42095, -42092, -42090, -42089, -42266, -42252, -42254, -42237, -42191, -42205, -42175, -42151, -42121, -42101, -42100, -42058, -42070, -42070, -42072, -42183, -42176, -42168, -42109, -42098, -41956, -41932, -41988, -41988
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
                text: 'Problem_5 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_daf9c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_daf9c.resize();
});
