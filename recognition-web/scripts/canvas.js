const digitCanvas = document.getElementById('digitCanvas');
const scaledCanvas = document.getElementById('scaledCanvas');

const drawingContext = digitCanvas.getContext('2d');
const scaledCanvasContext = scaledCanvas.getContext('2d');

scaledCanvas.width = 28;
scaledCanvas.height = 28;

const getCurrentMousePosition = args => {
    var digitCanvasBoundingRectangle = digitCanvas.getBoundingClientRect();
    return {
        x: args.clientX - digitCanvasBoundingRectangle.left,
        y: args.clientY - digitCanvasBoundingRectangle.top
    };
};

let mouseIsDown = false;

digitCanvas.onmousedown = () => {
    mouseIsDown = true;
};

digitCanvas.onmouseup = () => {
    mouseIsDown = false;
};

digitCanvas.onmousemove = args => {
    if (!mouseIsDown) return;

    drawingContext.beginPath();
    drawingContext.arc(getCurrentMousePosition(args).x, getCurrentMousePosition(args).y, 4, 0, 2 * Math.PI, false);
    drawingContext.fillStyle = '#000000';
    drawingContext.fill();

    return;
};

digitCanvas.addEventListener('mouseout', function () {
    mouseIsDown = false;
}, false);