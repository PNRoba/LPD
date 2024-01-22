
var chart_worstScoreDifferencePercentageSummaryChart1_90c29 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_90c29'), {
    type: 'bar',
    data: {
        labels: [
            'test100', 'test150', 'test20', 'test200', 'test50', 'test500'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    34.55979868738736, 22.367782629791364, 0.2254925231426537, 24.731560368885027, 16.013321307153262, 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    19.859217193185298, 23.134400776322174, 0.2254925231426537, 17.937866159049324, 15.139110525220287, 0.24634641632544357
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    18.57720950794029, 34.012615235322656, 0.2254925231426537, 18.41098523351014, 14.133074307916466, -11.275342055328073
                  ]
                }, 
{
                  label: 'LAHC 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    9.77998435746591, 2.7413876758854925, 0.2254925231426537, 7.749172965680386, 12.655241795601194, -11.058956689636805
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    9.446730370319992, 3.852498786996603, 0, 3.69439464784047, 8.318878789981268, -10.146809148107462
                  ]
                }, 
{
                  label: 'LAHC 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0.011868027533823879, 0, 0, -10.42977462631912
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
                text: 'Worst soft score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst soft score difference percentage'
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
  chart_worstScoreDifferencePercentageSummaryChart1_90c29.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_90c29.resize();
});