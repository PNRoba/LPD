
var chart_worstScoreDifferencePercentageSummaryChart1_1cb3f = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_1cb3f'), {
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
                    13.980324602548668, 27.08003796267004, 0, 19.679484479636102, 10.77664057796508, 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    12.515047113029762, 24.227085789882373, 0.24548736462093862, 19.037189908604642, 10.372409047905737, -0.7843137254901961
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0.05776173285198556, 0, 0, -0.7843137254901961
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
                        stepSize: 0.1
                        
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
  chart_worstScoreDifferencePercentageSummaryChart1_1cb3f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_1cb3f.resize();
});