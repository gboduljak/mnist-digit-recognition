function ChartRenderer() {
    this.chartContext  = document.getElementById('resultsChart').getContext('2d');
    this.chartInstance = new Chart(this.chartContext, {
        type: 'bar',
        data: {
            labels: ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
            datasets: [{
                label: 'match rate',
                data: [],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 1.0
                    }
                }]
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'match rates for digits'
            }
        }
    });
}

ChartRenderer.prototype.update = function (networkOutput) {
    const defaultColors = '0'
        .repeat(10)
        .split('')
        .map(_ => 'rgba(148,159,177,0.2)');

    const resultColor = 'rgba(51, 195, 240, 0.8)';

    let recognitionResultIndex = networkOutput.indexOf(Math.max(...networkOutput));

    this.chartInstance.data.datasets[0].backgroundColor                         = defaultColors;
    this.chartInstance.data.datasets[0].backgroundColor[recognitionResultIndex] = resultColor;
    this.chartInstance.data.datasets[0].data                                    = networkOutput;
    this.chartInstance.update();
}