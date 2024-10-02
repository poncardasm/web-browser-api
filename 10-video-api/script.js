const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');

// Play & pause video
play.addEventListener('click', () => {
  video.play();
});

pause.addEventListener('click', () => {
  video.pause();
});

// Stop video
stop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

// Update progress & timestamp
video.addEventListener('timeupdate', () => {
  const totalSeconds = Math.floor(video.currentTime);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':');

  currentTime.innerText = formattedTime;
});
