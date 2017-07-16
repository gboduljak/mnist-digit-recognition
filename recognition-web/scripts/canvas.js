let digitCanvas = document.getElementById('digitCanvas');
let scaledCanvas = document.getElementById('scaledCanvas');

let drawingContext = digitCanvas.getContext('2d');
let scaledCanvasContext = scaledCanvas.getContext('2d');

scaledCanvas.width = 28;
scaledCanvas.height = 28;


let getCurrentMousePosition = (args) => {
    var rect = digitCanvas.getBoundingClientRect();
    return {
        x: args.clientX - rect.left,
        y: args.clientY - rect.top
    };
};

var mouseIsDown = false;
digitCanvas.onmousedown = () => {
    mouseIsDown = true;
}
digitCanvas.onmouseup = () => {
    mouseIsDown = false;
}
digitCanvas.onmousemove = args => {
    if (!mouseIsDown) return;

    drawingContext.beginPath();
    drawingContext.arc(getCurrentMousePosition(args).x, getCurrentMousePosition(args).y, 3, 0, 2 * Math.PI, false);
    drawingContext.fillStyle = '#000000';
    drawingContext.fill();

    return false;
}
digitCanvas.addEventListener('mouseout', function () {
    mouseIsDown = false;
}, false);