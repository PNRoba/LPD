
var chart_bestScoreDistributionSummaryChart1_ebe24 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_ebe24'), {
    type: 'boxplot',
    data: {
        labels: [
            'test100', 'test150', 'test20', 'test200', 'test50', 'test500'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -23037,
                                    max: -23037,
                                    q1: -23037,
                                    q3: -23037,
                                    median: -23037,
                                    mean: -23037,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -32058,
                                    max: -32058,
                                    q1: -32058,
                                    q3: -32058,
                                    median: -32058,
                                    mean: -32058,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7954,
                                    max: -7954,
                                    q1: -7954,
                                    q3: -7954,
                                    median: -7954,
                                    mean: -7954,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -39114,
                                    max: -39114,
                                    q1: -39114,
                                    q3: -39114,
                                    median: -39114,
                                    mean: -39114,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -11483,
                                    max: -11483,
                                    q1: -11483,
                                    q3: -11483,
                                    median: -11483,
                                    mean: -11483,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -37527,
                                    max: -37527,
                                    q1: -37527,
                                    q3: -37527,
                                    median: -37527,
                                    mean: -37527,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 1000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -23440,
                                    max: -23440,
                                    q1: -23440,
                                    q3: -23440,
                                    median: -23440,
                                    mean: -23440,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -33374,
                                    max: -33374,
                                    q1: -33374,
                                    q3: -33374,
                                    median: -33374,
                                    mean: -33374,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7926,
                                    max: -7926,
                                    q1: -7926,
                                    q3: -7926,
                                    median: -7926,
                                    mean: -7926,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -42379,
                                    max: -42379,
                                    q1: -42379,
                                    q3: -42379,
                                    median: -42379,
                                    mean: -42379,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -11484,
                                    max: -11484,
                                    q1: -11484,
                                    q3: -11484,
                                    median: -11484,
                                    mean: -11484,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -37672,
                                    max: -37672,
                                    q1: -37672,
                                    q3: -37672,
                                    median: -37672,
                                    mean: -37672,
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
                                    min: -28126,
                                    max: -28126,
                                    q1: -28126,
                                    q3: -28126,
                                    median: -28126,
                                    mean: -28126,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -38348,
                                    max: -38348,
                                    q1: -38348,
                                    q3: -38348,
                                    median: -38348,
                                    mean: -38348,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7926,
                                    max: -7926,
                                    q1: -7926,
                                    q3: -7926,
                                    median: -7926,
                                    mean: -7926,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -52520,
                                    max: -52520,
                                    q1: -52520,
                                    q3: -52520,
                                    median: -52520,
                                    mean: -52520,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -13080,
                                    max: -13080,
                                    q1: -13080,
                                    q3: -13080,
                                    median: -13080,
                                    mean: -13080,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -34300,
                                    max: -34300,
                                    q1: -34300,
                                    q3: -34300,
                                    median: -34300,
                                    mean: -34300,
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
  chart_bestScoreDistributionSummaryChart1_ebe24.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_ebe24.resize();
});