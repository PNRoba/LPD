
var chart_bestScoreDistributionSummaryChart1_50758 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_50758'), {
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
                                    min: -17626,
                                    max: -17626,
                                    q1: -17626,
                                    q3: -17626,
                                    median: -17626,
                                    mean: -17626,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -27887,
                                    max: -27887,
                                    q1: -27887,
                                    q3: -27887,
                                    median: -27887,
                                    mean: -27887,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6988,
                                    max: -6988,
                                    q1: -6988,
                                    q3: -6988,
                                    median: -6988,
                                    mean: -6988,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -38949,
                                    max: -38949,
                                    q1: -38949,
                                    q3: -38949,
                                    median: -38949,
                                    mean: -38949,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10389,
                                    max: -10389,
                                    q1: -10389,
                                    q3: -10389,
                                    median: -10389,
                                    mean: -10389,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -36981,
                                    max: -36981,
                                    q1: -36981,
                                    q3: -36981,
                                    median: -36981,
                                    mean: -36981,
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
                                    min: -20697,
                                    max: -20697,
                                    q1: -20697,
                                    q3: -20697,
                                    median: -20697,
                                    mean: -20697,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -25625,
                                    max: -25625,
                                    q1: -25625,
                                    q3: -25625,
                                    median: -25625,
                                    mean: -25625,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6988,
                                    max: -6988,
                                    q1: -6988,
                                    q3: -6988,
                                    median: -6988,
                                    mean: -6988,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -37926,
                                    max: -37926,
                                    q1: -37926,
                                    q3: -37926,
                                    median: -37926,
                                    mean: -37926,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10428,
                                    max: -10428,
                                    q1: -10428,
                                    q3: -10428,
                                    median: -10428,
                                    mean: -10428,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -37032,
                                    max: -37032,
                                    q1: -37032,
                                    q3: -37032,
                                    median: -37032,
                                    mean: -37032,
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
                                    min: -24043,
                                    max: -24043,
                                    q1: -24043,
                                    q3: -24043,
                                    median: -24043,
                                    mean: -24043,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -34759,
                                    max: -34759,
                                    q1: -34759,
                                    q3: -34759,
                                    median: -34759,
                                    mean: -34759,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6973,
                                    max: -6973,
                                    q1: -6973,
                                    q3: -6973,
                                    median: -6973,
                                    mean: -6973,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -45944,
                                    max: -45944,
                                    q1: -45944,
                                    q3: -45944,
                                    median: -45944,
                                    mean: -45944,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -12015,
                                    max: -12015,
                                    q1: -12015,
                                    q3: -12015,
                                    median: -12015,
                                    mean: -12015,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -37032,
                                    max: -37032,
                                    q1: -37032,
                                    q3: -37032,
                                    median: -37032,
                                    mean: -37032,
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
  chart_bestScoreDistributionSummaryChart1_50758.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_50758.resize();
});