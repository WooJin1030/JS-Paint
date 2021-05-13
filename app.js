const canvas = document.querySelector("#jsCanvas");

let painting = false;

const onMouseMove = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  // console.log(x, y);
};

const onMouseDown = (e) => {
  console.log(e);
  painting = true;
};

const stopPainting = () => {
  painting = false;
};

const onMouseUp = (e) => {
  stopPainting();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
