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

video.addEventListener('click', playPauseVideo);
play.addEventListener('click', playPauseVideo);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

stop.addEventListener('click', stopVideo);
