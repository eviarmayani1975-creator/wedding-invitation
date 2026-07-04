const tombol = document.getElementById("open");

const cover = document.querySelector(".cover");

const home = document.getElementById("home");

tombol.onclick = function () {

music.play();
  
  cover.style.opacity = "0";
  cover.style.transition = "0.8s";

  setTimeout(() => {

    cover.style.display = "none";
    home.style.display = "block";

  }, 800);

}
