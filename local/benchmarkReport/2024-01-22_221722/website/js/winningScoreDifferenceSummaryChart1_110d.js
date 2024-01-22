
var chart_winningScoreDifferenceSummaryChart1_110d = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart1_110d'), {
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
                    -225800, 473400, -1500, 0, 3900, 0, 161200, -320400
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -1500, -876900, 297000, -2500, 49300, 0
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -41900, 438000, -1500, -777500, 5600, -9500, 0, -314700
                  ]
                }, 
{
                  label: 'LAHC 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -520000, -221000, 0, -807400, 0, -66600, 22400, 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -653000, -387900, 0, -1120500, 327400, -194300, 35700, -20400
                  ]
                }, 
{
                  label: 'LAHC 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -833100, -542400, -1900, -1470000, 3700, -158100, 111700, -316000
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
                text: 'Winning soft score difference summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Winning soft score difference'
                },
                ticks: {
                        stepSize: 10000
                        
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
  chart_winningScoreDifferenceSummaryChart1_110d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart1_110d.resize();
});