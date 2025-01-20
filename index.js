const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvasColor');
const fontSize = document.getElementById('fontSize');

const canvas = document.getElementById('myCanvas');

const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton');

const ctx = canvas.getContext('2d');

// Initializing drawing variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Setting initial styles
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = fontSize.value;
ctx.lineCap = 'round';

colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

//Background color
canvasColor.addEventListener('change', (e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

//Font size
fontSize.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value;
});

//Buttons
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
});

saveButton.addEventListener('click', () => {
    localStorage.setItem('canvasContents', canvas.toDataURL());
    let link = document.createElement('a');
    link.download = 'myCanvas.png';
    link.href = canvas.toDataURL();
    link.click();
});

retrieveButton.addEventListener('click', () => {
    let savedCanvas = localStorage.getItem('canvasContents');

    if(savedCanvad){
        let img = new Image();
        img.src = savedCanvas;
        ctx.drawImage(img, 0, 0);
    }
});
