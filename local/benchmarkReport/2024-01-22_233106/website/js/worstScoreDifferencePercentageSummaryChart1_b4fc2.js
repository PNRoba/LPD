
var chart_worstScoreDifferencePercentageSummaryChart1_b4fc2 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_b4fc2'), {
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
                    36.23375366852646, 44.22180701415287, 0.11040235525024535, 39.23651398035723, 5.799050632911392, 40.087973607917625
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    35.40168349082465, 42.78289629104654, 0.28213935230618253, 38.512574967725065, 5.561708860759493, 31.656128161551532
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    26.42951591576096, 42.589609776002405, 0.28213935230618253, 38.64004052751132, 6.1946202531645564, 32.18097070878736
                  ]
                }, 
{
                  label: 'LAHC 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    11.59415615828684, 18.16248953031377, 0, 13.893746016701256, 5.981012658227848, 5.36776467059882
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    4.547360273486632, 6.283959366879281, 0.28213935230618253, 0.21897929501740396, 0, -0.7110366889933021
                  ]
                }, 
{
                  label: 'LAHC 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0.11040235525024535, 0, 2.911392405063291, 0
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
  chart_worstScoreDifferencePercentageSummaryChart1_b4fc2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_b4fc2.resize();
});