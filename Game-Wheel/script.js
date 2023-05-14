const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const section = ["Balita", "Isports", "Bayan", "BnK", "Sining", "Retrato", "IT"]
const colors = ['#3c7f72', '#7a5ea8', '#242223', '#dc6874', '#fad02c', '#083b73', '#f9943b'];
const slices = 7;
const sliceDeg = 360 / slices;
const deg2rad = Math.PI / 180;
const spinButton = document.getElementById('canvas');
const result = document.getElementById('result');
const spinDeg = 1080;
let spinning = false;

const arrow = new Image();
arrow.src = 'arrow.png';
arrow.onload = () => {
  drawArrow();
};

function drawArrow() {
  ctx.save();
  ctx.translate(200, 200);
  ctx.rotate(90 * deg2rad);
  ctx.drawImage(arrow, -20, -200, 40, 160);
  ctx.restore();
}

function drawSlice(deg, color, text, imageSrc) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.moveTo(200, 200);
	ctx.arc(200, 200, 150, deg * deg2rad, (deg + sliceDeg) * deg2rad);
	ctx.lineTo(200, 200);
  ctx.closePath();
	ctx.fill();

	const image = new Image();
	image.src = imageSrc;
	image.onload = () => {
		ctx.save();
		ctx.translate(200, 200);
		ctx.rotate((deg + sliceDeg / 2) * deg2rad);
		// ctx.drawImage(image, -50, -100, 100, 100);
		ctx.restore();
	};

	ctx.save();
	ctx.translate(200, 200);
	ctx.rotate((deg + sliceDeg / 2) * deg2rad);
	ctx.textAlign = "center";
	ctx.fillStyle = "#ffffff";
	ctx.font = "bold 20px Arial";
	ctx.fillText(text, 100, 0);
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
	// animation.onfinish = () => {
	// 	result.innerText = `Join ${section[randomSpin]}!`;
  //   console.log(randomSpin);
	// 	spinning = false;
	// };

  animation.onfinish = () => {
    const winnerIndex = randomSpin;
    result.innerText = `Join ${section[winnerIndex]}!`;

    // calculate the index of the slice that stops at 90 degrees
    const indexAt90Degrees = Math.floor((spinAngle % 360) / sliceDeg);
    if (indexAt90Degrees === winnerIndex) {
        const sideText = document.getElementById('side-text');
        sideText.innerText = `Congratulations! You won ${section[winnerIndex]}.`;
        sideText.classList.remove('hidden');
    }

    spinning = false;
  }; 
}

// function spinWheel() {
//   if (spinning) return;
//   spinning = true;

//   // Calculate the angle at which the arrow is pointing
//   const arrowAngle = sliceDeg / 2;
//   const currentAngle = parseInt(canvas.style.transform.match(/\d+/)[0]);
//   const adjustedAngle = (currentAngle % 360) + arrowAngle;
//   const randomSpin = Math.floor(adjustedAngle / sliceDeg);

//   // Calculate the spin angle
//   const spinAngle = spinDeg + randomSpin * sliceDeg;

//   const animation = canvas.animate([{ transform: `rotate(${currentAngle}deg)` }, { transform: `rotate(${spinAngle}deg)` }], {
//     duration: 3000,
//     easing: 'cubic-bezier(.36,.56,.64,1)'
//   });
//   animation.onfinish = () => {
//     result.innerText = `Join ${section[randomSpin]}!`;
//     console.log(randomSpin);
//     spinning = false;
//   };
// }


drawWheel();
spinButton.addEventListener('click', spinWheel);