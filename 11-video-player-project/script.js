const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function playPauseVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }

  // Get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerText = `${minutes}:${seconds}`;
}

video.addEventListener('click', playPauseVideo);
play.addEventListener('click', playPauseVideo);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
stop.addEventListener('click', stopVideo);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', () => {
  video.currentTime = (progress.value * video.duration) / 100;
});
