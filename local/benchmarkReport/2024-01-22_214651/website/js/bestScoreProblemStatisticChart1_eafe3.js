
var chart_bestScoreProblemStatisticChart1_eafe3 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_eafe3'), {
    type: 'line',
    data: {
        labels: [
            82, 83, 84, 87, 143, 223, 248, 379, 423, 451, 498, 604, 634, 661, 712, 713, 728, 857, 859, 870, 954, 965, 1073, 1107, 1120, 1154, 1230, 1259, 1267, 1283, 1294, 1359, 1379, 1424, 1429, 1477, 1531, 1590, 1640, 1658, 1731, 1809, 1890, 1980, 1981, 2041, 2099, 2152, 2297, 2324, 2326, 2384, 2442, 2497, 2502, 2534, 2567, 2606, 2634, 2641, 2697, 2761, 2825, 2882, 2969, 2978, 2999, 3115, 3122, 3186, 3201, 3247, 3307, 3320, 3367, 3428, 3506, 3548, 3573, 3601, 3608, 3669, 3710, 3729, 3788, 3841, 3954, 4072, 4183, 4211, 4233, 4239, 4386, 4389, 4951, 5105, 5160, 5283, 5331, 5559, 5730, 5964, 6064, 6344, 6483, 6710, 7027, 7288, 7376, 7473, 7559, 7588, 7827, 7881, 8104, 8677, 8735, 9170, 9225, 9492, 9525, 9760, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -8420, -8549, , -8578, -8527, , , -8489, -8446, , , , , -8377, -8299, , , , -8292, -8291, , , , -12285, , , , -12200, -12197, , -12153, , -12011, -11925, -11919, , -11912, -11904, -11892, -11883, , -11874, -11864, -11853, -11847, , , -11839, -11830, -11828, , -11820, , -11800, , -11788, , -11780, -11763, -11755, -11603, , , -11597, -11592, , -11589, , -11583, -11580, , -11577, -11565, , -11558, , , -11547, -11545, , -11541, -11532, -11529, , -11525, -11514, , , -11513, , , , -11509, -11508, -11506, , , , , , , , , , -11502, -11499, -11494, -11492, , -11484, -11483, , , , , , , , , -11483
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -8420, , , , , -8549, , , , -8498, , , -8485, , , , , , -8489, , , , , -8422, , , , , , , , , -13036, , , , , , -12683, , , , , -12390, , , , , , -12120, , , , , , , , , , -12035, , , , , -11972, , , , , , , , , -11819, , , -11790, , , , , , -11765, , , , -11729, , , -11701, , , , , -11665, , , , -11645, , -11630, , -11609, , -11591, , -11560, , , , , -11536, , , -11517, -11502, , , -11494, -11487, , -11484, -11484
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -8420, -9043, -9443, , , , , , -14405, , , , , -14281, -13863, -13860, , , , -13621, -14105, , , , -13776, -13484, , -13953, -13685, -13494, , , , , -13883, , , , , -14101, , , , , , , , , -13809, , , , , -13972, , -13906, , -14303, , , , , , , , -14107, , , -13880, , -13868, , , , , , , , -13801, -13669, , , , , , , , , , , -13265, , -12899, -12881, , , , , , -13430, , -13359, , -13451, , -13536, , , , , , , , , , , -13437, -13324, , , -13080, , -13080
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
                text: 'test50 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_eafe3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_eafe3.resize();
});
