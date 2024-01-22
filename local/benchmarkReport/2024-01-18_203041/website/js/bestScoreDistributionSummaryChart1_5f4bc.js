
var chart_bestScoreDistributionSummaryChart1_5f4bc = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_5f4bc'), {
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
                                    min: -3588,
                                    max: -3588,
                                    q1: -3588,
                                    q3: -3588,
                                    median: -3588,
                                    mean: -3588,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3519,
                                    max: -3519,
                                    q1: -3519,
                                    q3: -3519,
                                    median: -3519,
                                    mean: -3519,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6978,
                                    max: -6978,
                                    q1: -6978,
                                    q3: -6978,
                                    median: -6978,
                                    mean: -6978,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10650,
                                    max: -10650,
                                    q1: -10650,
                                    q3: -10650,
                                    median: -10650,
                                    mean: -10650,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -21735,
                                    max: -21735,
                                    q1: -21735,
                                    q3: -21735,
                                    median: -21735,
                                    mean: -21735,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -41988,
                                    max: -41988,
                                    q1: -41988,
                                    q3: -41988,
                                    median: -41988,
                                    mean: -41988,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -99574,
                                    max: -99574,
                                    q1: -99574,
                                    q3: -99574,
                                    median: -99574,
                                    mean: -99574,
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
  chart_bestScoreDistributionSummaryChart1_5f4bc.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_5f4bc.resize();
});