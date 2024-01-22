
var chart_bestScoreDistributionSummaryChart1_ef85 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_ef85'), {
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
                                    min: -20723,
                                    max: -20723,
                                    q1: -20723,
                                    q3: -20723,
                                    median: -20723,
                                    mean: -20723,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -25355,
                                    max: -25355,
                                    q1: -25355,
                                    q3: -25355,
                                    median: -25355,
                                    mean: -25355,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6925,
                                    max: -6925,
                                    q1: -6925,
                                    q3: -6925,
                                    median: -6925,
                                    mean: -6925,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -38141,
                                    max: -38141,
                                    q1: -38141,
                                    q3: -38141,
                                    median: -38141,
                                    mean: -38141,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10374,
                                    max: -10374,
                                    q1: -10374,
                                    q3: -10374,
                                    median: -10374,
                                    mean: -10374,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -32640,
                                    max: -32640,
                                    q1: -32640,
                                    q3: -32640,
                                    median: -32640,
                                    mean: -32640,
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
                                    min: -21076,
                                    max: -21076,
                                    q1: -21076,
                                    q3: -21076,
                                    median: -21076,
                                    mean: -21076,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -26347,
                                    max: -26347,
                                    q1: -26347,
                                    q3: -26347,
                                    median: -26347,
                                    mean: -26347,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6908,
                                    max: -6908,
                                    q1: -6908,
                                    q3: -6908,
                                    median: -6908,
                                    mean: -6908,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -38446,
                                    max: -38446,
                                    q1: -38446,
                                    q3: -38446,
                                    median: -38446,
                                    mean: -38446,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10421,
                                    max: -10421,
                                    q1: -10421,
                                    q3: -10421,
                                    median: -10421,
                                    mean: -10421,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -32896,
                                    max: -32896,
                                    q1: -32896,
                                    q3: -32896,
                                    median: -32896,
                                    mean: -32896,
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
                                    min: -24091,
                                    max: -24091,
                                    q1: -24091,
                                    q3: -24091,
                                    median: -24091,
                                    mean: -24091,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -34771,
                                    max: -34771,
                                    q1: -34771,
                                    q3: -34771,
                                    median: -34771,
                                    mean: -34771,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6921,
                                    max: -6921,
                                    q1: -6921,
                                    q3: -6921,
                                    median: -6921,
                                    mean: -6921,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -47486,
                                    max: -47486,
                                    q1: -47486,
                                    q3: -47486,
                                    median: -47486,
                                    mean: -47486,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -11627,
                                    max: -11627,
                                    q1: -11627,
                                    q3: -11627,
                                    median: -11627,
                                    mean: -11627,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -32896,
                                    max: -32896,
                                    q1: -32896,
                                    q3: -32896,
                                    median: -32896,
                                    mean: -32896,
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
  chart_bestScoreDistributionSummaryChart1_ef85.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_ef85.resize();
});