
var chart_bestScoreProblemStatisticChart1_2570e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_2570e'), {
    type: 'line',
    data: {
        labels: [
            46, 141, 242, 391, 567, 678, 776, 861, 956, 1060, 1156, 1248, 1339, 1531, 1624, 1812, 1923, 2138, 2242, 2344, 2426, 2598, 2710, 2804, 3006, 3095, 3196, 3298, 3490, 3595, 3824, 3934, 4034, 4410, 4533, 4689, 4810, 5035, 5129, 5872, 5967, 6055, 6162, 6265, 6458, 6558, 6657, 6753, 6866, 6965, 7074, 7166, 7361, 7447, 7548, 7842, 7934, 8034, 8135, 8444, 8945, 9344, 9446, 9551, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -11737, -11457, -11471, -11468, -11384, -11353, -11342, -11305, -11287, -11275, -11263, -11256, -11251, -11248, -11226, -11198, -11180, -11139, -11122, -11113, -11105, -11095, -11094, -11085, -11079, -11058, -11051, -11036, -11028, -10950, -10949, -10945, -10940, -10925, -10922, -10902, -10896, -10879, -10887, -11043, -11037, -11019, -11014, -11009, -11002, -10999, -10998, -10997, -10975, -10970, -10956, -10953, -10948, -10727, -10725, -10715, -10692, -10687, -10685, -10674, -10673, -10653, -10652, -10650, -10650
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
  chart_bestScoreProblemStatisticChart1_2570e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_2570e.resize();
});
