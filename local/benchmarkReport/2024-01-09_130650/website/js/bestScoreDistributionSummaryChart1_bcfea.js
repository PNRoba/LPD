
var chart_bestScoreDistributionSummaryChart1_bcfea = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_bcfea'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3', 'Problem_4', 'Problem_5', 'Problem_6'
        ],
        datasets: [
                {
                    label: 'Config_0 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -3364,
                                    max: -3364,
                                    q1: -3364,
                                    q3: -3364,
                                    median: -3364,
                                    mean: -3364,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3669,
                                    max: -3669,
                                    q1: -3669,
                                    q3: -3669,
                                    median: -3669,
                                    mean: -3669,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6853,
                                    max: -6853,
                                    q1: -6853,
                                    q3: -6853,
                                    median: -6853,
                                    mean: -6853,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10499,
                                    max: -10499,
                                    q1: -10499,
                                    q3: -10499,
                                    median: -10499,
                                    mean: -10499,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -21473,
                                    max: -21473,
                                    q1: -21473,
                                    q3: -21473,
                                    median: -21473,
                                    mean: -21473,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -41573,
                                    max: -41573,
                                    q1: -41573,
                                    q3: -41573,
                                    median: -41573,
                                    mean: -41573,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -101807,
                                    max: -101807,
                                    q1: -101807,
                                    q3: -101807,
                                    median: -101807,
                                    mean: -101807,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
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
  chart_bestScoreDistributionSummaryChart1_bcfea.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_bcfea.resize();
});