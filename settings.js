const music = document.getElementById("bg-music");
const volumeSlider = document.getElementById("volume-slider");
const volumeDisplay = document.getElementById("volume-display");

music.volume = 0.5;

volumeSlider.addEventListener("input", () => {
  music.volume = volumeSlider.value;
  volumeDisplay.textContent = parseFloat(volumeSlider.value).toFixed(2);
});

function toggleMute() {
  if (music.volume > 0) {
    music.oldVolume = music.volume;
    music.volume = 0;
    volumeSlider.value = 0;
  } else {
    music.volume = music.oldVolume || 0.5;
    volumeSlider.value = music.volume;
  }
  volumeDisplay.textContent = parseFloat(music.volume).toFixed(2);
}
