
var chart_bestScoreProblemStatisticChart1_d08e2 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_d08e2'), {
    type: 'line',
    data: {
        labels: [
            72, 73, 75, 77, 83, 98, 112, 113, 119, 139, 156, 208, 310, 333, 426, 469, 470, 519, 530, 624, 663, 675, 676, 694, 762, 771, 848, 853, 859, 889, 927, 965, 980, 982, 1005, 1044, 1045, 1084, 1108, 1125, 1164, 1206, 1211, 1242, 1263, 1279, 1303, 1321, 1361, 1403, 1436, 1447, 1472, 1480, 1488, 1528, 1558, 1566, 1610, 1654, 1697, 1740, 1774, 1809, 1846, 1872, 1925, 1963, 2005, 2085, 2122, 2159, 2160, 2203, 2239, 2284, 2400, 2453, 2497, 2506, 2565, 2618, 2676, 2721, 2753, 2768, 2793, 2799, 2839, 2923, 2966, 2981, 3010, 3052, 3090, 3131, 3144, 3172, 3250, 3290, 3312, 3376, 3420, 3471, 3531, 3635, 3759, 3785, 3800, 3825, 3963, 4111, 4115, 4160, 4204, 4207, 4217, 4218, 4298, 4385, 4453, 4471, 4562, 4698, 4756, 4864, 4935, 5108, 5239, 5240, 5241, 5811, 6616, 6721, 6722, 6723, 7004, 7576, 7604, 8330, 8666, 8671, 9140, 9147, 9845, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -8336, , , , , -8369, , , -8401, -8378, , -12296, , , , -12298, -12227, , , , -12038, , -11940, , -11885, , -11656, -11485, -11465, , , -11372, -11336, , -11300, , -11294, -11161, -11121, , -10982, , -10914, , -10911, -10887, -10877, , -10641, , , -10613, -10590, , -10581, -10575, -10569, -10564, -10559, -10552, -10547, -10539, , , -10534, -10527, -10516, -10512, , -10510, -10506, , -10505, -10499, -10489, , -10476, -10475, -10474, -10472, , -10469, , -10458, , -10453, -10445, -10444, , -10433, -10431, -10426, -10420, , -10414, -10412, -10408, , -10406, -10395, , , , , , , , , , -10392, -10391, , , , , , , , , , , , , , -10389, , , , , , , , , , , , , , , , , , -10389
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -8336, , , , , , , , , , -8369, , , -8238, , , , -11818, , , -11849, , , , , , -12016, , , , , , , , , , -11579, , , , , , , , -11508, , , , , , , , -11041, , , , , , , , -10993, , , , , , -10923, , , , , , , , -10851, , , , -10803, , , , , , , -10664, , , , , , -10620, , , , , -10578, , , , -10571, , , -10553, , -10520, , , -10496, , -10476, -10464, , , , -10462, , , -10455, -10447, , -10436, -10435, , -10429, -10428, , , , , , , , , , , , , , , , , , , , -10428
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -8336, -8450, , -8970, -9365, -12263, -12259, , -13214, , , , , , -12901, -12878, , , , , -12417, -12463, , -12341, , , , -12817, , , , -12830, -12633, , , , , -12863, , , , -12037, , , , -12632, , , , -12349, , , -12073, , , -11864, , , , , , , , , -12126, , , , , , -12603, , , , , , , , , , , , -12378, , , , -12399, , , , , , , , , , , , , , , , , -12634, , -12030, -12331, , -11933, , , , , -11845, , -11832, -11730, , , -11567, , , -12305, , , -11757, , -11572, -11512, -11509, -11776, -12062, -12509, -12507, -12506, -12640, -11934, -11492, -11579, -11540, -11460, -11402, -11405, -12015, -12015
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
  chart_bestScoreProblemStatisticChart1_d08e2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_d08e2.resize();
});
