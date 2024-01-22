
var chart_bestScoreProblemStatisticChart1_df0f9 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_df0f9'), {
    type: 'line',
    data: {
        labels: [
            468, 568, 663, 861, 961, 1061, 1155, 1250, 1353, 1456, 1554, 1653, 1759, 1863, 1965, 2161, 2259, 2450, 2643, 2737, 2930, 3019, 3111, 3206, 3303, 3403, 3500, 3694, 3894, 3999, 4100, 4200, 4505, 5034, 5131, 5223, 5319, 5421, 5528, 5640, 5745, 6948, 8971, 9273, 9377, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -41826, -41847, -41821, -41824, -41825, -41831, -41833, -41802, -41792, -41727, -41673, -41585, -41548, -41579, -42006, -41992, -41973, -41981, -41956, -41927, -41872, -41656, -41629, -41624, -41620, -41643, -41632, -41635, -41622, -41603, -41605, -41599, -41572, -41569, -41558, -41553, -41900, -41896, -41894, -41890, -41890, -41857, -41574, -41587, -41573, -41573
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
  chart_bestScoreProblemStatisticChart1_df0f9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_df0f9.resize();
});
