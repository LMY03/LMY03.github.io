const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const section = ["Balita", "Isports", "Bayan", "BnK", "Sining", "Retrato", "IT"]
const colors = ['#f44336', '#9c27b0', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800', '#00bcd4'];
const slices = 7;
const sliceDeg = 360 / slices;
const deg2rad = Math.PI / 180;
const spinButton = document.getElementById('canvas');
const result = document.getElementById('result');
const spinDeg = 1080;
let spinning = false;

function drawSlice(deg, color, text, imageSrc) {
	ctx.beginPath();
	// ctx.fillStyle = color;
	ctx.moveTo(200, 200);
	ctx.arc(200, 200, 150, deg * deg2rad, (deg + sliceDeg) * deg2rad);
	ctx.lineTo(200, 200);
	ctx.fill();

	const image = new Image();
	image.src = imageSrc;
	image.onload = () => {
		ctx.save();
		ctx.translate(200, 200);
		ctx.rotate((deg + sliceDeg / 2) * deg2rad);
		ctx.drawImage(image, -50, -100, 100, 100);
		ctx.restore();
	};

	ctx.save();
	ctx.translate(200, 200);
	ctx.rotate((deg + sliceDeg / 2) * deg2rad);
	ctx.textAlign = "center";
	ctx.fillStyle = "#ffffff";
	ctx.font = "bold 20px Arial";
	ctx.fillText(text, 0, -100);
	ctx.restore();
}

function drawWheel() {
	for (let i = 0; i < slices; i++) drawSlice(i * sliceDeg, colors[i], section[i], "img/" + section[i] + ".png");
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
		result.innerText = `Join ${section[randomSpin]}!`;
		spinning = false;
	};
}

drawWheel();
spinButton.addEventListener('click', spinWheel);