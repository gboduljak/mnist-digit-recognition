var chartContext = document.getElementById("resultsChart").getContext('2d');

var currentChart = undefined;

function setChartData(networkOutput) {
    if(!!currentChart)
        currentChart.destroy();

    currentChart = renderChart(networkOutput);
}

function renderChart(networkOutput) {
    return new Chart(chartContext, {
        type: 'bar',
        data: {
            labels: ["0", "1", "2", "3", "4", "5", "6", '7', '8', '9'],
            datasets: [{
                label: 'confidence for each digit',
                data: networkOutput,
                borderWidth: 1
            }]
        },
        options: {
               responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Neural Network outputs'
            }
        }
    });
}