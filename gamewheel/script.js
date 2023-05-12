const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = ['#f44336', '#9c27b0', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800'];
const slices = 6;
const sliceDeg = 360 / slices;
const deg2rad = Math.PI / 180;
const spinButton = document.getElementById('spin-button');
const result = document.getElementById('result');
const spinDeg = 1080;
let spinning = false;

function drawSlice(deg, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(200, 200);
  ctx.arc(200, 200, 150, deg * deg2rad, (deg + sliceDeg) * deg2rad);
  ctx.lineTo(200, 200);
  ctx.fill();
}

function drawWheel() {
  for (let i = 0; i < slices; i++) {
    drawSlice(i * sliceDeg, colors[i]);
  }
}

function spinWheel() {
  if (spinning) return;
  spinning = true;
  const randomSpin = Math.floor(Math.random() * slices);
  const spinAngle = spinDeg + randomSpin * sliceDeg;
  const animation = canvas.animate([{ transform: `rotate(0deg)` }, { transform: `rotate(${spinAngle}deg)` }], {
    duration: 3000,
    easing: 'cubic-bezier(.36,.56,.64,1)'
  });
  animation.onfinish = () => {
    result.innerText = `You won ${randomSpin + 1}`;
    spinning = false;
  };
}

drawWheel();

spinButton.addEventListener('click', spinWheel);
