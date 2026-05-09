/* TITLE SONG */

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


/* SHIP WARNING SOUND */

const shipHitbox = document.querySelector(".ship-hitbox");

const warningSound = document.querySelector("#warning-sound");

shipHitbox.addEventListener("mouseenter", () => {

  warningSound.currentTime = 0;

  warningSound.play();

});


shipHitbox.addEventListener("mouseleave", () => {

  warningSound.pause();

  warningSound.currentTime = 0;

});