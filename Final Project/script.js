console.log("JS loaded");

const container = document.querySelector(".poster-container");

const rocky = document.querySelector(".rocky-hitbox");
const grace = document.querySelector(".grace-hitbox");
const ship = document.querySelector(".ship-hitbox");

console.log("rocky:", rocky);
console.log("grace:", grace);
console.log("ship:", ship);

const warningSound = document.querySelector("#warning-sound");
const themeSong = document.querySelector("#theme-song");

/* SONG */
let songPlaying = false;

document.querySelector(".title-hitbox")?.addEventListener("click", () => {
  if (!songPlaying) {
    themeSong.play();
    songPlaying = true;
  } else {
    themeSong.pause();
    themeSong.currentTime = 0;
    songPlaying = false;
  }
});

/* SAFETY CHECK (IMPORTANT) */
if (!rocky || !grace || !ship) {
  console.error("❌ HITBOXES NOT FOUND — check HTML class names or structure");
}

/* HOVER SYSTEM */
rocky?.addEventListener("mouseenter", () => {
  container.classList.add("active-rocky");
});
rocky?.addEventListener("mouseleave", () => {
  container.classList.remove("active-rocky");
});

grace?.addEventListener("mouseenter", () => {
  container.classList.add("active-grace");
});
grace?.addEventListener("mouseleave", () => {
  container.classList.remove("active-grace");
});

ship?.addEventListener("mouseenter", () => {
  container.classList.add("active-ship");
  warningSound?.play();
});

ship?.addEventListener("mouseleave", () => {
  container.classList.remove("active-ship");
  warningSound?.pause();
  if (warningSound) warningSound.currentTime = 0;
});