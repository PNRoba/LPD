
var chart_bestScoreDistributionSummaryChart1_5469c = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_5469c'), {
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
                                    min: -3776,
                                    max: -3776,
                                    q1: -3776,
                                    q3: -3776,
                                    median: -3776,
                                    mean: -3776,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3685,
                                    max: -3685,
                                    q1: -3685,
                                    q3: -3685,
                                    median: -3685,
                                    mean: -3685,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7378,
                                    max: -7378,
                                    q1: -7378,
                                    q3: -7378,
                                    median: -7378,
                                    mean: -7378,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -10755,
                                    max: -10755,
                                    q1: -10755,
                                    q3: -10755,
                                    median: -10755,
                                    mean: -10755,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18782,
                                    max: -18782,
                                    q1: -18782,
                                    q3: -18782,
                                    median: -18782,
                                    mean: -18782,
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
  chart_bestScoreDistributionSummaryChart1_5469c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_5469c.resize();
});