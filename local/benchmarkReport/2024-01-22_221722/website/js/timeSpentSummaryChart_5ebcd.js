
var chart_timeSpentSummaryChart_5ebcd = new Chart(document.getElementById('chart_timeSpentSummaryChart_5ebcd'), {
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
                    10000, 10000, 10000, 10000, 10003, 10000, 10002, 10006
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10004, 10000, 10001, 10006
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10003, 10000, 10001, 10006
                  ]
                }, 
{
                  label: 'LAHC 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    10000, 10000, 10000, 10000, 10003, 10000, 10000, 10006
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10002, 10000, 10001, 10006
                  ]
                }, 
{
                  label: 'LAHC 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10002, 10000, 10001, 10006
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
                tooltip: {
                    callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                return label + ": " + humanizeTime(context.parsed.y);
                            }
                    }
                },
            title: {
                display: true,
                text: 'Time spent summary (lower time is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index, ticks) {
                            return humanizeTime(value);
                        }
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
  chart_timeSpentSummaryChart_5ebcd.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentSummaryChart_5ebcd.resize();
});