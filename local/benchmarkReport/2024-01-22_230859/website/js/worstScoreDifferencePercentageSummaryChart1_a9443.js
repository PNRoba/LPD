
var chart_worstScoreDifferencePercentageSummaryChart1_a9443 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_a9443'), {
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
                    43.0596900414301, 6.058636020468081, 45.59996718689116, 0.024105098228275283, 40.01759429442166, -6.635363622335383, 25.07383899956011, 34.07212142930897, -0.3984797880916734
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    41.69709989258861, 0, 45.42974918479933, 0.024105098228275283, 33.44801043090312, 0, 25.86564444165148, 44.954111723224756, -1.2622365541863412
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    40.20254718428725, 6.058636020468081, 44.541744426898546, 0, 28.870352042980347, 0, 25.953622824106077, 47.411609642915714, 0
                  ]
                }, 
{
                  label: 'LAHC 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    20.273131809114624, 0.11534267259458099, 21.82892065380119, 0.024105098228275283, 9.009221295379927, -0.7671450300906024, 25.149249041664046, 2.145299716349103, -8.798802257284349
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.447752033144084, 6.559852361379079, 2.83423227579418, 0.024105098228275283, -0.9378387294405957, -6.562617110861274, 22.40935084522089, 0.8375901214171613, -0.087527352297593
                  ]
                }, 
{
                  label: 'LAHC 600 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 5.683248049660263, 0, 0.26515608051102807, 0, -0.7671450300906024, 0, 0, -0.087527352297593
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
  chart_worstScoreDifferencePercentageSummaryChart1_a9443.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_a9443.resize();
});