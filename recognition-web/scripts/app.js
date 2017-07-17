let neuralNetwork = new NeuralNetwork();
let chartRenderer = new ChartRenderer();

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

document.getElementById('recognize').onclick = function () {
    scaledCanvasContext.drawImage(digitCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height);
    let inputRgbaArray = scaledCanvasContext.getImageData(0, 0, scaledCanvas.width, scaledCanvas.height).data;
    let pixels = [];
    for (let i = 3; i < inputRgbaArray.length; i = i + 4)
        pixels.push(inputRgbaArray[i]);

    let networkOutput = neuralNetwork.query(pixels)._data;

    chartRenderer.update(networkOutput);
    document.getElementById('recognizedDigit').innerText = networkOutput.indexOf(Math.max(...networkOutput)).toString();
};

document.getElementById('clear').onclick = function () {
    drawingContext.clearRect(0, 0, digitCanvas.width, digitCanvas.height);
    scaledCanvasContext.clearRect(0, 0, scaledCanvas.width, scaledCanvas.height);
};