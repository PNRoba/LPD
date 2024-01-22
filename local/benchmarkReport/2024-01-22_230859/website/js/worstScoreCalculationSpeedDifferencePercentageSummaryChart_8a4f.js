
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_8a4f = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_8a4f'), {
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
                    3.403389830508475, 0.2422373926447919, 0, 6.289072936147476, 13.35111390021964, 1.3247172859450727, 6.037186379928315, 4.362267493356953, 0.6778846153846153
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.9525423728813558, 0, 3.390596745027125, 5.46620358001603, 5.914653278945717, 0, 1.747311827956989, 1.41718334809566, 0.11538461538461539
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2569184467444763, 1.2507534659433395, 1.5281859471012558, 0, 0.07108239095315023, 0, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    36.840677966101694, 1.3066138148719078, 54.05364677516577, 0, 48.60370254157515, 0.7302100161550888, 22.55824372759857, 11.293179805137289, 0.5192307692307693
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    27.959322033898303, 0.8808632459810615, 49.39722724532851, 1.8541277050494256, 42.4223407593348, 1.4539579967689822, 35.920698924731184, 10.385296722763508, 0.3942307692307692
                  ]
                }, 
{
                  label: 'LAHC 600 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    27.51186440677966, 2.216839169052338, 43.47498493068113, 7.8332888057707715, 38.71979918418575, 0.8206785137318255, 44.746863799283155, 7.927369353410098, 0.36538461538461536
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_8a4f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_8a4f.resize();
});