document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("letter").classList.remove("hidden");
  document.getElementById("revealBtn").style.display = "none"; // Optional: hide the button after click
});

// Animated hearts (same as before)
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speedY: Math.random() * 1 + 0.5
  });
}

function drawHeart(x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(size / 2, -size / 2, size, size / 3, 0, size);
  ctx.bezierCurveTo(-size, size / 3, -size / 2, -size / 2, 0, 0);
  ctx.fillStyle = "#ff4d94";
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    drawHeart(heart.x, heart.y, heart.size);
    heart.y += heart.speedY;
    if (heart.y > canvas.height) {
      heart.y = -heart.size;
      heart.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}

animate();
