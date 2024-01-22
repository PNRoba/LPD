
var chart_bestScoreProblemStatisticChart1_ba1d6 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_ba1d6'), {
    type: 'line',
    data: {
        labels: [
            150, 244, 353, 453, 544, 630, 723, 812, 904, 987, 1070, 1158, 1240, 1326, 1410, 1493, 1578, 1658, 1737, 1813, 1901, 1992, 2075, 2158, 2320, 2402, 2494, 2594, 2690, 2778, 2856, 2947, 3131, 3219, 3402, 4109, 4292, 4386, 4561, 4659, 4744, 5010, 5097, 5288, 5389, 5481, 5573, 5671, 5761, 5852, 5948, 6046, 6142, 6238, 6331, 6419, 6613, 6705, 6963, 7054, 7137, 7234, 7328, 7421, 7511, 7604, 7776, 7869, 7970, 8063, 8149, 8247, 8356, 8449, 8538, 8629, 8724, 8812, 8897, 8979, 9074, 9164, 9252, 9346, 9529, 9622, 9716, 9808, 9897, 9997, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -23136, -22979, -23277, -23264, -23250, -23211, -23149, -23105, -23125, -23145, -23140, -23130, -23095, -23059, -23060, -23047, -23024, -22562, -22552, -22519, -22518, -22474, -22258, -22284, -22266, -22242, -22219, -22203, -22178, -22149, -22146, -22142, -22128, -22089, -22006, -22104, -22101, -21989, -21982, -21969, -21965, -21939, -21935, -21932, -21922, -21890, -21875, -21864, -21852, -21843, -21837, -21827, -21804, -21764, -21758, -21751, -21611, -21604, -21585, -21579, -21566, -21555, -21515, -21510, -21505, -21298, -21277, -21276, -21267, -21260, -21247, -21238, -21231, -21230, -21224, -21208, -21191, -21051, -21019, -20999, -20991, -20986, -20982, -20971, -20970, -20953, -20937, -20931, -20916, -20915, -20915
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
                text: 'Problem_4 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_ba1d6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_ba1d6.resize();
});
