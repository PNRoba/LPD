
var chart_bestScoreDistributionSummaryChart1_e91a6 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_e91a6'), {
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
                                    min: -3603,
                                    max: -3603,
                                    q1: -3603,
                                    q3: -3603,
                                    median: -3603,
                                    mean: -3603,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3544,
                                    max: -3544,
                                    q1: -3544,
                                    q3: -3544,
                                    median: -3544,
                                    mean: -3544,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3767,
                                    max: -3767,
                                    q1: -3767,
                                    q3: -3767,
                                    median: -3767,
                                    mean: -3767,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10648,
                                    max: -10648,
                                    q1: -10648,
                                    q3: -10648,
                                    median: -10648,
                                    mean: -10648,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -16432,
                                    max: -16432,
                                    q1: -16432,
                                    q3: -16432,
                                    median: -16432,
                                    mean: -16432,
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
  chart_bestScoreDistributionSummaryChart1_e91a6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_e91a6.resize();
});