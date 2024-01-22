
var chart_bestScoreProblemStatisticChart1_1a828 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_1a828'), {
    type: 'line',
    data: {
        labels: [
            42, 133, 234, 374, 485, 578, 663, 747, 842, 922, 1039, 1158, 1260, 1348, 1443, 1537, 1640, 1730, 1825, 1924, 2096, 2201, 2288, 2371, 2455, 2576, 2658, 2749, 2855, 2937, 3017, 3108, 3192, 3282, 3388, 3492, 3620, 3750, 3838, 3941, 4063, 4246, 4340, 4430, 4516, 4600, 4777, 4872, 4980, 5079, 5257, 5342, 5670, 5759, 5854, 5941, 6159, 6353, 6453, 6540, 7129, 7227, 7332, 7692, 7782, 7880, 7986, 8216, 8398, 8497, 9336, 9994, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -12215, -12147, -12116, -12029, -11853, -11839, -11833, -11822, -11819, -11768, -11736, -11687, -11649, -11636, -11269, -11274, -11236, -11213, -11220, -11201, -11190, -11155, -11140, -11136, -11124, -11124, -11101, -11096, -11087, -11074, -11040, -10931, -10940, -10927, -10924, -10920, -10910, -10906, -10904, -10881, -10879, -10874, -10870, -10866, -10861, -10860, -10858, -10851, -10838, -10834, -10824, -10821, -10801, -10800, -10798, -10794, -10756, -10731, -10727, -10725, -10721, -10718, -10717, -10716, -10715, -10701, -10507, -10506, -10505, -10502, -10500, -10499, -10499
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
  chart_bestScoreProblemStatisticChart1_1a828.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_1a828.resize();
});
