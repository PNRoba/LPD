
var chart_worstScoreDifferencePercentageSummaryChart1_87ac2 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_87ac2'), {
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
                    27.60052041385292, -0.33399343835899864, 41.12289287656335, 0.22516183506895582, 32.2803279447867, -0.8639883029275911, 31.832151300236404, 0.24244574537283423, 0.4150766552855326
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    25.162629329037856, 0.4906452280318033, 35.41132603122815, 0.22516183506895582, 29.17226365278614, -11.002558734589439, 31.796690307328607, -8.426467979421679, -9.740911829684675
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    35.76296388080045, -0.30443649691129965, 31.065019808902356, 0.22516183506895582, 41.61996078249726, -12.3051872528495, 31.258865248226954, -8.426467979421679, 0
                  ]
                }, 
{
                  label: 'LAHC 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    8.921380335790843, 0.4906452280318033, 7.018565990833528, 0.028145229383619477, 6.95570274985718, 0, 6.926713947990544, -1.076222577020874, -9.98861886590346
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2.437891084815067, 0, 1.8682513788549677, 0.11258091753447791, 0.9155897293374713, -2.140032565712956, 1.6725768321513002, -8.914316125598724, -9.75764879159135
                  ]
                }, 
{
                  label: 'LAHC 600 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0.4669996748736441, 0, 0, 0, -13.498155717276445, 0, 0, -9.566847425855258
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
  chart_worstScoreDifferencePercentageSummaryChart1_87ac2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_87ac2.resize();
});