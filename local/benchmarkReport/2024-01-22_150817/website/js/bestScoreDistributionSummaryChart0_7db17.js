
var chart_bestScoreDistributionSummaryChart0_7db17 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_7db17'), {
    type: 'boxplot',
    data: {
        labels: [
            'test100', 'test150', 'test20', 'test200', 'test50', 'test500'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -612,
                                    max: -612,
                                    q1: -612,
                                    q3: -612,
                                    median: -612,
                                    mean: -612,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 1000 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6,
                                    max: -6,
                                    q1: -6,
                                    q3: -6,
                                    median: -6,
                                    mean: -6,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6,
                                    max: -6,
                                    q1: -6,
                                    q3: -6,
                                    median: -6,
                                    mean: -6,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -612,
                                    max: -612,
                                    q1: -612,
                                    q3: -612,
                                    median: -612,
                                    mean: -612,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 400',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -23,
                                    max: -23,
                                    q1: -23,
                                    q3: -23,
                                    median: -23,
                                    mean: -23,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -82,
                                    max: -82,
                                    q1: -82,
                                    q3: -82,
                                    median: -82,
                                    mean: -82,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -111,
                                    max: -111,
                                    q1: -111,
                                    q3: -111,
                                    median: -111,
                                    mean: -111,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -4,
                                    max: -4,
                                    q1: -4,
                                    q3: -4,
                                    median: -4,
                                    mean: -4,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -612,
                                    max: -612,
                                    q1: -612,
                                    q3: -612,
                                    median: -612,
                                    mean: -612,
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
  chart_bestScoreDistributionSummaryChart0_7db17.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_7db17.resize();
});