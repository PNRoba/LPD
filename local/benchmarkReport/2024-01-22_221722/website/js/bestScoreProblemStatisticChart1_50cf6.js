
var chart_bestScoreProblemStatisticChart1_50cf6 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_50cf6'), {
    type: 'line',
    data: {
        labels: [
            9, 11, 12, 13, 14, 15, 16, 18, 63, 66, 73, 126, 147, 166, 182, 204, 205, 249, 308, 315, 329, 359, 373, 378, 447, 467, 472, 492, 495, 543, 596, 633, 636, 638, 639, 640, 642, 715, 774, 788, 797, 803, 804, 885, 904, 921, 952, 961, 984, 985, 986, 1006, 1054, 1094, 1106, 1112, 1123, 1262, 1281, 1285, 1292, 1429, 1433, 1440, 1469, 1528, 1614, 1627, 1824, 1844, 1853, 2017, 2088, 2149, 2291, 2306, 2307, 2386, 2390, 2457, 2459, 2965, 3077, 3082, 3493, 3555, 3556, 4139, 4140, 4159, 4192, 4280, 4302, 4447, 4752, 4786, 5828, 5844, 7777, 7842, 8721, 8722, 8992, 9352, 9653, 9693, 9873, 9968, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , -8384, , , -8347, , , , , -8308, , , , , , , -8214, , , , , , , , , , , , , -8183, , , , , , , , , , , , , , -8170, , , , , , , , , -8155, , -8149, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -8149
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -8384, , , -8347, , , , -8258, , , , , -8227, , , , , , , -8217, , , , , -8194, , , , , , , , , , -8180, , , , , , -8163, , , , , , , , , -8152, , -8149, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -8149
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -8384, , , , -8347, , , , , -8258, , , , , -8227, , , , , , , -8217, , , , , , , , , , , -8194, , , , -8180, , , , , , -8163, , , , , , , , -8152, , , -8149, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -8149
                  ]
                }, 
{
                  label: 'LAHC 100 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -8384, , , -8509, -8537, , , , , , , , , -8369, , , , , -8350, , -8331, -8286, , , , , , -8285, -8252, , -8231, , , , , , , -8226, , , , , , -8218, , , -8214, -8212, -8202, , -8194, , , , , , , , , -8185, , -8182, , -8181, , , , , , , , -8174, -8170, -8161, -8160, -8155, -8148, , , , , -8147, -8145, , , , , -8142, -8139, -8136, -8134, , , , , , , , , , , , , , , , -8134
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -8384, , , -8537, , , , , , , -8492, , , , , , , , , , , , , , , , -8436, -8419, , , , , -8409, -8397, -8361, , , -8328, , , , , , -8289, , , , , , , , , , , , , , , , , , , , , , -8285, -8256, , -8251, , -8240, , , , , , , , -8239, -8234, -8225, -8200, , , -8198, -8179, , , , , , , -8175, , , -8162, , -8161, -8157, -8155, -8153, , , -8152, , -8147, -8134, -8134
                  ]
                }, 
{
                  label: 'LAHC 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -8384, , , -8509, -8537, , , , , , , , , , , , -8517, , , , , -8444, , , , , , , , , , , , , , , , , , , , , -8429, -8363, , , , , , , , , , -8324, , -8323, , , , -8297, , , , , -8292, , , , -8272, , -8264, , -8216, , , , , , , , , , , , , , , -8208, -8199, , , , , , -8197, -8190, , -8163, , , , , -8159, -8155, , -8153, , , -8153
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
                text: 'test20 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_50cf6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_50cf6.resize();
});
