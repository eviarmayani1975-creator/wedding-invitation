const guestName = document.getElementById("guestName");

const intro=document.getElementById("intro");

const introVideo=document.getElementById("introVideo");

const skip=document.getElementById("skip");

const tombol = document.getElementById("open");

const cover = document.querySelector(".cover");

const home = document.getElementById("home");

const music = document.getElementById("music");

tombol.onclick = function () {

music.play();
  
  cover.style.opacity = "0";
  cover.style.transition = "0.8s";

  setTimeout(() => {

    cover.style.display = "none";
    home.style.display = "block";

  }, 800);

}

introVideo.onended=function(){

intro.style.display="none";

}

skip.onclick=function(){

intro.style.display="none";

}

const params = new URLSearchParams(window.location.search);

const namaTamu = params.get("to");

if(namaTamu){

    guestName.textContent = decodeURIComponent(namaTamu);

}
