
var chart_bestScoreProblemStatisticChart1_55c48 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_55c48'), {
    type: 'line',
    data: {
        labels: [
            10, 12, 13, 33, 36, 59, 74, 113, 125, 166, 177, 191, 263, 271, 280, 284, 292, 296, 301, 302, 340, 348, 361, 371, 421, 433, 445, 513, 545, 574, 618, 643, 651, 659, 678, 686, 739, 742, 763, 771, 807, 878, 881, 913, 920, 955, 960, 997, 1083, 1121, 1128, 1242, 1249, 1356, 1653, 1705, 2054, 2188, 2392, 2453, 2583, 2682, 2926, 3169, 3317, 4051, 6341, 6398, 6399, 7351, 7711, 7743, 7910, 7912, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -9058, , , -8756, , , , , -8551, , , , , , , , , -8452, , , -8385, -8361, , -8332, -8312, , -8307, , -8303, , , -8299, , -8293, -8284, -8276, , -8273, , -8268, , , -8254, , -8249, -8241, , -8238, , , , , , , , , , , , , , , , , -8237, -8222, , , -8222
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -9058, , , , -8756, , , -8551, , , -8479, -8411, , , , , , , , -8357, , , , , -8310, , , -8303, , , , , -8288, , , , , -8267, , , , -8259, , , , , -8254, , -8251, , , , , , , , , -8248, , , -8243, -8240, , , , , , , , , , , , -8240
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -9058, -9086, -9762, -9385, -8769, , , -8760, , , -8707, , , -8684, , -8660, -8637, -8634, -8569, -8559, , -8507, -8463, , -8459, , , , , , , -8424, , , , -8411, -8394, , , , , , , , -8389, , -8380, , , , , , -8338, , -8337, -8304, -8296, -8288, , -8278, -8269, , , -8264, -8242, -8232, -8228, -8227, -8224, -8223, , , -8219, -8216, -8216
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
                text: 'classExamples20 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_55c48.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_55c48.resize();
});
