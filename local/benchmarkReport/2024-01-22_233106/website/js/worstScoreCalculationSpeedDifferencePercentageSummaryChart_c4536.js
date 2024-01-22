
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_c4536 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_c4536'), {
    type: 'bar',
    data: {
        labels: [
            'test100', 'test150', 'test20', 'test200', 'test50', 'test500'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 9.944778621437727, 0, 0, 3.6055428494551323
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    8.0995599559956, 2.1385674527610954, 0, 8.092744951383695, 5.545784968929535, 0
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    17.354235423542356, 4.848396074410429, 6.813923676166059, 10.097232610321615, 1.4538632899519286, 4.10332301896946
                  ]
                }, 
{
                  label: 'LAHC 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    33.484598459845984, 36.882964698989305, 0.7395720343161425, 40.68810770381451, 10.739828819322312, 24.848647921431454
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    31.00935093509351, 42.59557638787169, 9.249580909180555, 36.08077786088258, 31.316684253722592, 17.34158482443159
                  ]
                }, 
{
                  label: 'LAHC 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    28.80913091309131, 36.53141936428885, 5.6453998619465535, 32.44577412116679, 39.01981474967757, 14.919951567334858
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_c4536.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_c4536.resize();
});