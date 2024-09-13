const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Ensure the canvas size is 700x700
canvas.width = 700;
canvas.height = 700;

// Define colors for the composition
const colors = [
  '#ff0000',
  '#ffff00',
  '#0000ff',
  '#ffffff',
  '#f4f4f4',
  '#000000',
];

// Helper function to draw rectangles
function drawRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.lineWidth = 10; // Mondrian's signature thick black lines
  ctx.strokeStyle = '#000000';
  ctx.strokeRect(x, y, width, height);
}

// Draw a Mondrian-style grid with colored rectangles, adapted to fit 700x700 canvas
function drawMondrianComposition() {
  // Top-left red rectangle (20% width, 20% height of canvas)
  drawRect(10, 10, 200, 200, '#ff0000');

  // Top-middle blue rectangle (rest of top row, 20% height)
  drawRect(220, 10, 470, 200, '#0000ff');

  // Bottom-left blue rectangle (20% width, 60% height of canvas)
  drawRect(10, 220, 200, 470, '#0000ff');

  // Middle yellow rectangle (rest of middle row, 30% height)
  drawRect(220, 220, 470, 250, '#ffff00');

  // Bottom-right white rectangle (rest of bottom row)
  drawRect(220, 480, 470, 210, '#ffffff');
}

// Clear canvas before drawing
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Call the function to draw the composition
drawMondrianComposition();
