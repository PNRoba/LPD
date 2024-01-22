
var chart_scoreCalculationSpeedSummaryChart_9fa58 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_9fa58'), {
    type: 'line',
    data: {
        labels: [
            574, 3360, 12642, 28017, 49224, 302192
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                    borderWidth: 4
,
                  data: [
                    22299, 8529, 7272, 6827, 6685, 7701
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    20282, 9002, 7861, 6973, 7226, 7433
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                    borderWidth: 1
                  ,
                  data: [
                    21664, 8653, 8534, 7158, 7360, 7738
                  ]
                }, 
{
                  label: 'LAHC 100',
                    borderWidth: 1
                  ,
                  data: [
                    20432, 9445, 9707, 9345, 9405, 9280
                  ]
                }, 
{
                  label: 'LAHC 400',
                    borderWidth: 1
                  ,
                  data: [
                    22158, 11200, 9527, 9735, 9097, 8722
                  ]
                }, 
{
                  label: 'LAHC 600',
                    borderWidth: 1
                  ,
                  data: [
                    21427, 11857, 9367, 9321, 8854, 8542
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
                text: 'Score calculation speed summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale (logarithmic)'
                },
                ticks: {
                },
                suggestedMin: 0,
                suggestedMax: 302192,
                type: 'logarithmic',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Score calculation speed per second'
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
  chart_scoreCalculationSpeedSummaryChart_9fa58.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_9fa58.resize();
});
