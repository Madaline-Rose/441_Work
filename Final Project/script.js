/* =========================
   SONG CLICK AREA
========================= */

const titleHitbox = document.querySelector(".title-hitbox");

const themeSong = document.querySelector("#theme-song");

let songPlaying = false;

titleHitbox.addEventListener("click", () => {

  if(songPlaying === false){

    themeSong.play();

    songPlaying = true;

  }else{

    themeSong.pause();

    songPlaying = false;

  }

});


/* =========================
   SHIP WARNING SOUND
========================= */

const ship = document.querySelector(".ship");

const warningSound = document.querySelector("#warning-sound");

ship.addEventListener("mouseenter", () => {

  warningSound.currentTime = 0;

  warningSound.play();

});


ship.addEventListener("mouseleave", () => {

  warningSound.pause();

  warningSound.currentTime = 0;

});