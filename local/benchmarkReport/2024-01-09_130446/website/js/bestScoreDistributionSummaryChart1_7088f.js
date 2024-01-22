
var chart_bestScoreDistributionSummaryChart1_7088f = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_7088f'), {
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
                                    min: -3904,
                                    max: -3904,
                                    q1: -3904,
                                    q3: -3904,
                                    median: -3904,
                                    mean: -3904,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3510,
                                    max: -3510,
                                    q1: -3510,
                                    q3: -3510,
                                    median: -3510,
                                    mean: -3510,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6891,
                                    max: -6891,
                                    q1: -6891,
                                    q3: -6891,
                                    median: -6891,
                                    mean: -6891,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10703,
                                    max: -10703,
                                    q1: -10703,
                                    q3: -10703,
                                    median: -10703,
                                    mean: -10703,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -20915,
                                    max: -20915,
                                    q1: -20915,
                                    q3: -20915,
                                    median: -20915,
                                    mean: -20915,
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
  chart_bestScoreDistributionSummaryChart1_7088f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_7088f.resize();
});