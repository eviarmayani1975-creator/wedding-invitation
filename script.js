const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9MJzc_qkim20iXHtF24gzrBHwPmqh8ezCx-kMFh5H_Dqp8IwBoTBmUh1s82io64_Gfg/exec";

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

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const status = document.getElementById("status").value;

    const jumlahElement = document.getElementById("jumlah");
    const jumlah = jumlahElement ? jumlahElement.value : 1;

    try{

        const response = await fetch(SCRIPT_URL,{

            method:"POST",

            body:JSON.stringify({

                type:"rsvp",

                nama:nama,

                kehadiran:status,

                jumlah:jumlah

            })

        });

        const result = await response.json();

        if(result.success){

            alert("Terima kasih, konfirmasi RSVP berhasil dikirim.");

            form.reset();

        }else{

            alert("Gagal mengirim RSVP.");

        }

    }catch(error){

        alert("Terjadi kesalahan. Silakan coba lagi.");

        console.error(error);

    }

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

// ==========================
// Falling Petals
// ==========================

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100+"vw";

    petal.style.fontSize = (16+Math.random()*18)+"px";

    petal.style.animationDuration = (6+Math.random()*5)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },11000);

}

setInterval(createPetal,700);

// ==========================
// Gallery Lightbox
// ==========================

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const prevImage = document.getElementById("prevImage");

const nextImage = document.getElementById("nextImage");

let currentIndex = 0;

function showImage(index){

    currentIndex = index;

    lightboxImage.src = galleryImages[index].src;

    lightbox.style.display = "flex";

}

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        showImage(index);

    });

});

closeLightbox.onclick=function(){

    lightbox.style.display="none";

}

nextImage.onclick=function(){

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    showImage(currentIndex);

}

prevImage.onclick=function(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=galleryImages.length-1;

    }

    showImage(currentIndex);

}

lightbox.onclick=function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}

// ==========================
// Swipe Gallery (Mobile)
// ==========================

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart", function(e){

    touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend", function(e){

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe(){

    const distance = touchStartX - touchEndX;

    // Swipe ke kiri
    if(distance > 50){

        nextImage.click();

    }

    // Swipe ke kanan
    if(distance < -50){

        prevImage.click();

    }

}

// ==========================
// Success Modal
// ==========================

const successModal = document.getElementById("successModal");

const modalMessage = document.getElementById("modalMessage");

const closeModal = document.getElementById("closeModal");

function showSuccess(message){

    modalMessage.textContent = message;

    successModal.style.display = "flex";

}

closeModal.onclick=function(){

    successModal.style.display="none";

}
