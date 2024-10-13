const secrets = {
    '???': 'S.',
    '???': 'S',
    '???': 'S',
    '???': 'S',
    '???': 'S',
    '???': 'S',
    '???': 'S',
    '???': 'S',
    '???': 'S',
    '???': 'S'
};

const message = document.querySelector('.message');
const input = document.querySelector('#input');

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const secret = input.value.trim();
        input.value = '';
        
        if (secrets.hasOwnProperty(secret)) {
            message.textContent = secrets[secret];
        } else {
            message.textContent = 'Данный олень не нашёл данную фразу';
        }
    }
});

var video = document.getElementById("myVideo");
var playPauseBtn = document.getElementById("playPauseBtn");
var muteUnmuteBtn = document.getElementById("muteUnmuteBtn");
var playPauseIcon = document.getElementById("playPauseIcon");
var muteUnmuteIcon = document.getElementById("muteUnmuteIcon");
function closeVideo() {
  var videoSection = document.getElementById("videoSection");
  videoSection.style.display = "none";
}
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseIcon.textContent = "❚❚";
  } else {
    video.pause();
    playPauseIcon.textContent = "►";
  }
}

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteUnmuteIcon.textContent = "🔊";
  } else {
    video.muted = true;
    muteUnmuteIcon.textContent = "🔇";
  }
}
window.onload = function () {
  if (video.muted) {
    muteUnmuteIcon.textContent = "🔇";
  } else {
    muteUnmuteIcon.textContent = "🔊";
  }
  if (!video.paused) {
    playPauseIcon.textContent = "❚❚";
  } else {
    playPauseIcon.textContent = "►";
  }
};
