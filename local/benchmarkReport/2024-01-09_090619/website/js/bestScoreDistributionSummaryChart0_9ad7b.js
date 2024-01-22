
var chart_bestScoreDistributionSummaryChart0_9ad7b = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_9ad7b'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3', 'Problem_4'
        ],
        datasets: [
                {
                    label: 'Config_0 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -11,
                                    max: -11,
                                    q1: -11,
                                    q3: -11,
                                    median: -11,
                                    mean: -11,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -11,
                                    max: -11,
                                    q1: -11,
                                    q3: -11,
                                    median: -11,
                                    mean: -11,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -19,
                                    max: -19,
                                    q1: -19,
                                    q3: -19,
                                    median: -19,
                                    mean: -19,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -1003,
                                    max: -1003,
                                    q1: -1003,
                                    q3: -1003,
                                    median: -1003,
                                    mean: -1003,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2000,
                                    max: -2000,
                                    q1: -2000,
                                    q3: -2000,
                                    median: -2000,
                                    mean: -2000,
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
                text: 'Best hard score distribution summary (higher is better)'
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
  chart_bestScoreDistributionSummaryChart0_9ad7b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_9ad7b.resize();
});