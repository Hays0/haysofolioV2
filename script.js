// This is the for the open animation for the homepage//

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('main').classList.add('visible');
  }, 100);
});


// Dot cursor the backgrounds or smth idk//
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');


// saves cursors positions//
let mouseX = -999, mouseY = -999;
const spacing = 24;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draws the dots, mmaybe, idk (every 24px)//
    for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
            const dist = Math.hypot(x - mouseX, y - mouseY);
            const brightness = Math.max(0, 1 - dist / 120);
            const alpha = 0.15 + brightness * 0.7;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100, 160, 220, ${alpha})`;
            ctx.fill();
        }
    }
    requestAnimationFrame(draw);
}
draw();