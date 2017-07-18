const neuralNetwork = new NeuralNetwork();
const chartRenderer = new ChartRenderer();

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

document.getElementById('recognize').onclick = function () {
    scaledCanvasContext.drawImage(digitCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height);
    const inputRgbaArray = scaledCanvasContext.getImageData(0, 0, scaledCanvas.width, scaledCanvas.height).data;

    let pixels = [];
    for (let i = 3; i < inputRgbaArray.length; i = i + 4)
        pixels.push(inputRgbaArray[i]);

    const networkOutput = neuralNetwork.query(pixels)._data;

    chartRenderer.update(networkOutput);
    document.getElementById('results').style.display = 'block';
    document.getElementById('recognizedDigit').innerText = networkOutput.indexOf(Math.max(...networkOutput)).toString();
};

document.getElementById('clear').onclick = function () {
    drawingContext.clearRect(0, 0, digitCanvas.width, digitCanvas.height);
    scaledCanvasContext.clearRect(0, 0, scaledCanvas.width, scaledCanvas.height);
    document.getElementById('results').style.display = 'none';
};