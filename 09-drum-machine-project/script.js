window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');

  setTimeout(() => {
    key.classList.remove('playing');
  }, 100);
}

// Function to simulate keydown events
function simulateKeydown(keyCode) {
  const event = new KeyboardEvent('keydown', { keyCode: keyCode });
  window.dispatchEvent(event);
}

// Auto-play a specific key combination
function autoPlaySequence() {
  const sequence = [83, 68, 83, 65, 68, 70, 74, 83, 71, 75];
  let delay = 0;

  sequence.forEach((keyCode) => {
    setTimeout(() => {
      simulateKeydown(keyCode);
    }, delay);
    delay += 300;
  });
}

// autoPlaySequence();
