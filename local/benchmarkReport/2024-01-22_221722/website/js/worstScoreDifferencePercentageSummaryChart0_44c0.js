
var chart_worstScoreDifferencePercentageSummaryChart0_44c0 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart0_44c0'), {
    type: 'bar',
    data: {
        labels: [
            'test100', 'test150', 'test20', 'test200', 'test2000', 'test50', 'test500', 'test5000'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    100, 96.58119658119658, 0, 98.74213836477988, -3.284072249589491, 100, 0, -0.33167495854063017
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    100, 97.43589743589743, 0, 91.19496855345912, -1.8062397372742198, 100, -2.1630615640599005, 0.6633499170812603
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    94.87179487179486, 90.5982905982906, 0, 89.937106918239, -3.9408866995073892, 100, -4.159733777038269, 0
                  ]
                }, 
{
                  label: 'LAHC 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    87.17948717948718, 55.55555555555556, 0, 46.540880503144656, -4.761904761904762, 100, -3.6605657237936775, 0.6633499170812603
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    23.076923076923077, 12.82051282051282, 0, 9.433962264150944, 0, 9.090909090909092, -3.494176372712146, 0.9950248756218906
                  ]
                }, 
{
                  label: 'LAHC 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -4.105090311986864, 0, -2.1630615640599005, -0.6633499170812603
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Worst hard score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst hard score difference percentage'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_worstScoreDifferencePercentageSummaryChart0_44c0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart0_44c0.resize();
});