function clock() {
  const now = new Date();

  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.getElementById('canvas');
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
  ctx.fillStyle = '#f4f4f4'; // Corrected fillStyle value
  ctx.lineCap = 'round';

  // Draw clock face / border
  ctx.save();

  ctx.beginPath();
  ctx.strokeStyle = '#800000';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour ticks
  ctx.save();

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

  // Restore default state
  ctx.restore();
}

clock();
