const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const stopBtn = document.getElementById('stop');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const timestamp = document.getElementById('timestamp');
const sliderProgress = document.getElementById('slider-progress');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.textContent = 'Play';
});

function updateSlider() {
  const value = volumeSlider.value;
  const percent = value * 100;
  sliderProgress.style.width = percent + '%';
  volumeValue.textContent = `Volume: ${Math.round(percent)
    .toString()
    .padStart(2, '0')}%`;
  audio.volume = value;
}

volumeSlider.addEventListener('input', updateSlider);

audio.addEventListener('timeupdate', () => {
  const currentMinutes = Math.floor(audio.currentTime / 60)
    .toString()
    .padStart(2, '0');
  const currentSeconds = Math.floor(audio.currentTime % 60)
    .toString()
    .padStart(2, '0');
  const durationMinutes = Math.floor(audio.duration / 60)
    .toString()
    .padStart(2, '0');
  const durationSeconds = Math.floor(audio.duration % 60)
    .toString()
    .padStart(2, '0');

  const formattedTime = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
  timestamp.textContent = formattedTime;
});

updateSlider();
