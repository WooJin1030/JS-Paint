const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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

const handleColorClick = (event) => {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  colors.forEach((color) => color.addEventListener("click", handleColorClick));
}
