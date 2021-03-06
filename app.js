const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
const save = document.querySelector("#jsSave");

const INITAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white"; // if not background will be transparent
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITAL_COLOR;
ctx.fillStyle = INITAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const onMouseMove = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    ctx.beginPath(); // make a path
    ctx.moveTo(x, y); // move path to mouse's x, y (the start of line)
  } else {
    ctx.lineTo(x, y); // make a line
    ctx.stroke(); // print the line
  }
};

const stopPainting = () => {
  painting = false;
};

const startPainting = () => {
  painting = true;
};

const handleColorClick = (e) => {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;

  ctx.fillStyle = color;
};

const handleRangeChange = (e) => {
  const size = e.target.value;
  ctx.lineWidth = size;
};

const handleModeClick = (e) => {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};

const handleCanvasClick = () => {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
};

const handleCM = (e) => {
  e.preventDefault(); // prevent right click
};

const handleSaveClick = (e) => {
  const image = canvas.toDataURL(); // default: png
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJs";
  link.click();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

if (colors) {
  colors.forEach((color) => color.addEventListener("click", handleColorClick));
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (save) {
  save.addEventListener("click", handleSaveClick);
}
