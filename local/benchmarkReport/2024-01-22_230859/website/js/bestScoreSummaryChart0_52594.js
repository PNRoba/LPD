
var chart_bestScoreSummaryChart0_52594 = new Chart(document.getElementById('chart_bestScoreSummaryChart0_52594'), {
    type: 'bar',
    data: {
        labels: [
            'test100', 'test1000', 'test150', 'test20', 'test200', 'test2000', 'test50', 'test500', 'test5000'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -896, 0, 0, 0, -954, 0, -115, -867
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -894, 0, 0, 0, -944, 0, -253, -860
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -896, 0, 0, -2, -944, 0, -282, -858
                  ]
                }, 
{
                  label: 'LAHC 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -903, 0, 0, 0, -950, 0, -316, -871
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -2, -892, -14, 0, -47, -956, 0, -467, -863
                  ]
                }, 
{
                  label: 'LAHC 600 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -9, -906, -26, 0, -70, -950, 0, -517, -863
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
                text: 'Best hard score summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 10
                        
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
  chart_bestScoreSummaryChart0_52594.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart0_52594.resize();
});