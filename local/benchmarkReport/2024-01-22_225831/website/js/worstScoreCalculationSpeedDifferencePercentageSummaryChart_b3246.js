
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_b3246 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_b3246'), {
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
                    16.83727034120735, 1.7122557726465364, 1.4000000000000001, 11.80114604305405, 15.439072149420094, 4.37590119741709, 3.3934252386002126, 1.2421407759546081, 6.033054339975358
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10.826771653543307, 0.49733570159857904, 1.3866666666666667, 15.88456971761912, 5.7237535773459856, 5.015359538586923, 0, 1.9398865204723201, 4.970896885754344
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 3.126110124333925, 0, 16.168499303081926, 0, 7.002695755751991, 2.1314952279957584, 2.200582732709707, 0
                  ]
                }, 
{
                  label: 'LAHC 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    34.90813648293963, 0.33392539964476026, 33.78666666666666, 0, 42.03946377466486, 0, 32.937433722163306, 3.327710473853703, 5.557207800484344
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    30.249343832020998, 0, 25.053333333333335, 5.704403489752723, 36.2554601596626, 5.661087079179989, 34.422057264050906, 2.568624444103665, 3.670816161787824
                  ]
                }, 
{
                  label: 'LAHC 600 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    25.87926509186352, 2.1598579040852575, 26.106666666666666, 10.520881730421765, 36.11989757493598, 7.598269700959187, 33.71155885471898, 0, 4.6097633513192
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
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_b3246.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_b3246.resize();
});