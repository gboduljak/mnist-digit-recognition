function ChartRenderer() {
    this.chartContext = document.getElementById("resultsChart").getContext('2d');
    this.chartInstance = new Chart(  this.chartContext, {
        type: 'bar',
        data: {
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
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
    let defaultColors = '0'
        .repeat(10)
        .split('')
        .map(_ => 'rgba(148,159,177,0.2)');

    let maxIndex = networkOutput.indexOf(Math.max(...networkOutput));

    this.chartInstance.data.datasets[0].backgroundColor = defaultColors;
    this.chartInstance.data.datasets[0].backgroundColor[maxIndex] = 'rgba(51, 195, 240, 0.8)';
    this.chartInstance.data.datasets[0].data = networkOutput;
    this.chartInstance.update();
}