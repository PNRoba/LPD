
var chart_bestScoreDistributionSummaryChart0_6945c = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_6945c'), {
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
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
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
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -644,
                                    max: -644,
                                    q1: -644,
                                    q3: -644,
                                    median: -644,
                                    mean: -644,
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
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
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
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -9,
                                    max: -9,
                                    q1: -9,
                                    q3: -9,
                                    median: -9,
                                    mean: -9,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -644,
                                    max: -644,
                                    q1: -644,
                                    q3: -644,
                                    median: -644,
                                    mean: -644,
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
                                    min: -27,
                                    max: -27,
                                    q1: -27,
                                    q3: -27,
                                    median: -27,
                                    mean: -27,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -93,
                                    max: -93,
                                    q1: -93,
                                    q3: -93,
                                    median: -93,
                                    mean: -93,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -138,
                                    max: -138,
                                    q1: -138,
                                    q3: -138,
                                    median: -138,
                                    mean: -138,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -5,
                                    max: -5,
                                    q1: -5,
                                    q3: -5,
                                    median: -5,
                                    mean: -5,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -644,
                                    max: -644,
                                    q1: -644,
                                    q3: -644,
                                    median: -644,
                                    mean: -644,
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
  chart_bestScoreDistributionSummaryChart0_6945c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_6945c.resize();
});