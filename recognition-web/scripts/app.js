let neuralNetwork = new NeuralNetwork();
let digits = [0,1,2,3,4,5,6,7,8,9]

document.getElementById('recognize').onclick = function () {
    scaledCanvasContext.drawImage(digitCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height);
    let rgbaArray = scaledCanvasContext.getImageData(0, 0, scaledCanvas.width, scaledCanvas.height).data;
    let pixels = [];
    for (let i = 3; i < rgbaArray.length; i = i + 4)
        pixels.push(rgbaArray[i]);
    let output = neuralNetwork.query(pixels)._data;
    setChartData(output);
    document.getElementById('recognizedDigit').innerText = output.findIndex(function(el) { return el === Math.max(...output);}).toString();
};

document.getElementById('clear').onclick = function () {
    drawingContext.clearRect(0, 0, digitCanvas.width, digitCanvas.height);
    scaledCanvasContext.clearRect(0, 0, scaledCanvas.width, scaledCanvas.height);
};