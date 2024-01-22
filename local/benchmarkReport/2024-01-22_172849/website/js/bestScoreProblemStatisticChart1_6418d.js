
var chart_bestScoreProblemStatisticChart1_6418d = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_6418d'), {
    type: 'line',
    data: {
        labels: [
            79, 80, 81, 82, 135, 201, 260, 364, 385, 453, 491, 542, 569, 577, 605, 613, 631, 691, 739, 746, 752, 822, 826, 881, 920, 937, 994, 1050, 1110, 1141, 1172, 1234, 1294, 1359, 1360, 1426, 1478, 1490, 1513, 1547, 1580, 1602, 1657, 1709, 1711, 1801, 1828, 1896, 1978, 2040, 2051, 2118, 2249, 2294, 2371, 2379, 2411, 2428, 2485, 2534, 2719, 2773, 2820, 2871, 2925, 2931, 2989, 3052, 3105, 3147, 3272, 3282, 3455, 3487, 3584, 3607, 3623, 3646, 3767, 3800, 3855, 3916, 3974, 3977, 4038, 4060, 4099, 4151, 4166, 4200, 4229, 4313, 4325, 4400, 4409, 4414, 4475, 4476, 4539, 4624, 4776, 4782, 4821, 4845, 4908, 4919, 4973, 5068, 5089, 5250, 5315, 5354, 5374, 5422, 5443, 5553, 5651, 5841, 6052, 6076, 6077, 6264, 6284, 6407, 6419, 6469, 6497, 6713, 7031, 7078, 7081, 7350, 7538, 7586, 7630, 7631, 7652, 7719, 7721, 7842, 7885, 7905, 7971, 8033, 8215, 8224, 8357, 8383, 8425, 8428, 8554, 8567, 8635, 8698, 8721, 8829, 8873, 9035, 9164, 9194, 9387, 9435, 9623, 9748, 9758, 9809, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -8282, , -8400, , -8402, -11973, , -12265, , -12275, , , , , -12273, -12244, , , -12219, -12083, , -11897, , -11723, -11663, -11522, -11488, , -11466, -11185, -11150, -11141, , -10760, , -10745, , -10739, , -10729, -10723, -10716, , , -10706, -10702, -10671, , -10668, -10666, -10664, , -10651, , , , -10649, , -10648, , -10646, -10645, -10622, , -10619, -10564, , -10561, -10559, , , -10548, -10546, , , -10545, -10520, , , , -10512, , -10508, , -10504, , -10501, , -10496, , , , , -10494, -10493, , -10491, , , -10490, , -10485, -10480, , -10475, , -10462, , , -10461, , -10455, , -10446, , , , , , , , -10443, , -10441, , , , , , , , -10432, , , -10425, -10424, , -10422, , -10419, -10416, -10410, , -10399, -10398, , , -10394, , -10392, -10389, -10387, , , , , , , , -10384, -10376, -10374, , , -10374
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -8282, , , , -8333, , , -8340, , , , , -12206, , , , , -12243, , , , , , -12257, , , , , -11802, , , , , -11497, , , , , , -11193, , , , , -11039, , , , -10904, , , , -10838, , , , , , -10800, , -10775, , , , -10732, , , -10715, , , -10685, -10675, , , , -10665, , , -10648, , , , -10636, , , , -10624, , , , , -10608, , , , , -10603, , -10589, -10584, , , , , -10580, , -10555, , -10543, , , , , -10536, , -10516, -10512, -10503, , , -10496, , , , , -10489, -10482, -10461, , , -10452, -10442, , , , , , -10438, , -10433, , , , -10432, , , -10430, , , -10429, , , , -10428, , -10426, -10424, , -10422, , , , , , -10421, -10421
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -8282, , -8396, -8464, , , , , , , -13055, , -12871, , -12673, -12506, , , , -12626, , , -12908, , , , , , , , , , , , , , -11867, , -11970, , , , , , -12363, , , , , , , , , , , -11897, -11868, -11776, , , , , , , , , , , , , , , , , , -12265, , , , , -12259, -12220, , , , -12758, , , , -12701, , -12640, , -12097, -12024, , , , , , , , -12310, , , , , , , , -11766, , -11709, , , , , , , -12017, -11990, , -11873, , -11197, , , , , -11790, -11789, , , , -11655, -11722, , , , , , , , , , , , , -11714, , , , , , , -11630, , , -11539, , -11523, , , , -11627, , -11627
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
  chart_bestScoreProblemStatisticChart1_6418d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_6418d.resize();
});
