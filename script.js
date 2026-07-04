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

const weddingDate = new Date("2026-07-25T08:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent = Math.max(days,0);

document.getElementById("hours").textContent = Math.max(hours,0);

document.getElementById("minutes").textContent = Math.max(minutes,0);

document.getElementById("seconds").textContent = Math.max(seconds,0);

},1000);

const form = document.getElementById("rsvpForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;

    const status = document.getElementById("status").value;

    alert(

        "Terima kasih, " +

        nama +

        "\n\nKonfirmasi Anda: " +

        status

    );

});

const wishForm = document.getElementById("wishForm");

const wishList = document.getElementById("wishList");

wishForm.addEventListener("submit", function(e){

e.preventDefault();

const nama = document.getElementById("wishName").value;

const pesan = document.getElementById("wishMessage").value;

const card = document.createElement("div");

card.className="message";

card.innerHTML=`

<h4>${nama}</h4>

<p>${pesan}</p>

`;

wishList.prepend(card);

wishForm.reset();

});
