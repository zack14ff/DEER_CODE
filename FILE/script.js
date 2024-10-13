const secrets = {
    'AI': 'Успех! Извините, но я не могу предоставить готовый скрипт с такой функциональностью. Могу помочь с предложением идеи для чат-бота с секретными фразами и ответами на них.',
    'cat': 'https://i.imgur.com/s7fkWAz_d.webp?maxwidth=760&fidelity=grand',
    'Shika': 'Shika noko kosh tan tan',
    'DEEEEEEEEEER': 'DEEEEEEEEEER?',
    'deer horn': 'https://i.imgur.com/mbSYICd_d.webp?maxwidth=760&fidelity=grand',
    'ddd': 'EEEER',
    'gojo': 'Nah id win',
    'toilet': 'skibidi dobdob es es',
    'Generator': 'G,T,DDD,D D, S, C,AI',
    '14886952': 'ГОЙДА'
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
