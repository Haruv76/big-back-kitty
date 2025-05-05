const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

music.volume = 0.5; // אפשר להחליש אם רוצים
music.play().catch(() => {
  // ינסה להתנגן רק אחרי לחיצה
});

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "🔊 Mute Music";
  } else {
    music.pause();
    musicBtn.innerText = "🔇 Play Music";
  }
}
