function clock() {
  const now = new Date();

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
  ctx.fillStyle = '#f4f4f4';

  // Restore Default state
  ctx.restore();
}

clock();
