
var chart_worstScoreDifferencePercentageSummaryChart1_738ef = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_738ef'), {
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
                    21.203868580007683, 24.91354572879111, 0.04906169508156506, 25.948350426294333, -10.753581757138583, 12.361219702892885, 0, -0.17245030708256437
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    29.087671519849167, 13.302921050695312, 0.04906169508156506, 10.469365059751814, -1.0105375128810292, 12.165754495699765, -3.3963638571038333, 9.521072217347896
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    27.624733773262104, 24.045324111544407, 0.04906169508156506, 12.223967802863145, -10.697071435694578, 11.61845191555903, -4.892706467963699, 0
                  ]
                }, 
{
                  label: 'LAHC 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    10.931880870081352, 7.882667451499767, 0.2330430516374341, 11.696174824804505, -10.883223082804241, 7.154026583268178, -4.212826661001002, 9.521072217347896
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.288188261583046, 3.789272312559782, 0.2330430516374341, 6.169352703394468, 0, -2.830336200156372, -3.8091480256169, 8.90388164463135
                  ]
                }, 
{
                  label: 'LAHC 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -10.760230030249643, 0, -1.5024129662791756, -0.0393307717907603
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
  chart_worstScoreDifferencePercentageSummaryChart1_738ef.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_738ef.resize();
});