/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('canvas');

const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const lineColor = document.getElementById('line-color');
const hourMinuteHandColor = document.getElementById('hour-minute-hand-color');
const secondsHandColor = document.getElementById('seconds-hand-color');

function clock() {
  const now = new Date();
  const ctx = canvas.getContext('2d');

  // SETUP CANVAS

  // Save the default state
  ctx.save();
  ctx.clearRect(0, 0, 500, 500);

  // Put 0, 0 in the middle
  ctx.translate(250, 250);

  // Rotate clock -90 degrees
  ctx.rotate(-Math.PI / 2);

  // Set default styles
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 8;
  ctx.fillStyle = '#f4f4f4';
  ctx.lineCap = 'round';

  // Draw clock face / border
  ctx.save();

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();

  ctx.restore();

  // Draw hour ticks
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }

  ctx.restore();

  // Draw minute ticks
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }

  ctx.restore();

  // Get current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hr}:${min}:${sec}`);

  // Draw hour hand
  ctx.save();

  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = hourMinuteHandColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();

  ctx.restore();

  // Draw minute hand
  ctx.save();

  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = hourMinuteHandColor.value;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();

  ctx.restore();

  // Draw second hand
  ctx.save();

  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = secondsHandColor.value;
  ctx.fillStyle = secondsHandColor.value;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.restore();

  // Restore default state
  ctx.restore();

  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
