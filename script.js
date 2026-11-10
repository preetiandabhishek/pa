/* =====================================================
   OUR WEDDING PREMIERE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initMarriageCounter();
    initSwiper();
    initTypeWriter();
    initGallery();
    initScrollReveal();
    initFloatingHearts();
    initNavbarGlow();
    initHeroButtons();

});

/* =====================================================
   LOADER
===================================================== */

function initLoader(){

    const loader = document.getElementById("loader");
    if(!loader) return;

    setTimeout(()=>{

        loader.style.transition = "all 1s ease";
        loader.style.opacity = "0";

        setTimeout(()=>{
            loader.style.display = "none";
        },1000);

    },3000);

}

/* =====================================================
   WEDDING COUNTDOWN
===================================================== */

function initMarriageCounter(){

    const weddingDate = new Date("2026-11-28T00:00:00");
    const daysBox = document.getElementById("daysUntil");
    const hoursBox = document.getElementById("hoursUntil");

    function updateCountdown(){
        const remaining = Math.max(0, weddingDate.getTime() - Date.now());
        const days = Math.floor(remaining / 86400000);
        const hours = Math.floor((remaining % 86400000) / 3600000);
        if(daysBox) daysBox.textContent = String(days).padStart(2, "0");
        if(hoursBox) hoursBox.textContent = String(hours).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* =====================================================
   SWIPER
===================================================== */

function initSwiper(){

    if(typeof Swiper === "undefined") return;

    new Swiper(".memoriesSwiper",{

        slidesPerView:1.2,
        spaceBetween:20,
        loop:true,

        autoplay:{
            delay:2500,
            disableOnInteraction:false
        },

        breakpoints:{
            768:{ slidesPerView:2.2 },
            1024:{ slidesPerView:3.2 }
        }

    });

}

/* =====================================================
   TYPEWRITER LETTER
===================================================== */

function initTypeWriter(){

    const element = document.getElementById("typing-text");
    if(!element) return;

    const text = `To our favourite people,\n\nOur story has always been made brighter by the people we love. Now we are getting ready for the day we begin our next chapter as a married couple.\n\nPlease save the date: 28 November 2026.\n\nWe cannot wait to celebrate, laugh, dance, and make a lifetime of new memories with you.\n\nWith all our love,\nThe almost newlyweds ❤️`;

    let index = 0;

    function type(){

        if(index < text.length){

            element.textContent += text.charAt(index);
            index++;
            setTimeout(type,30);

        }

    }

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){
                type();
                observer.disconnect();
            }

        });

    });

    observer.observe(element);

}

/* =====================================================
   AUTO GALLERY
===================================================== */

function initGallery(){

    const gallery = document.querySelector(".gallery-grid");
    if(!gallery) return;

    const images = [
        "0I9A0503.jpg",
        "0I9A0552.jpg",
        "0I9A0566.jpg",
        "0I9A0593.jpg",
        "0I9A0611.jpg",
        "0I9A0667.jpg",
        "0I9A0706.jpg",
        "0I9A0774.jpg",
        "0I9A0794.jpg",
        "0I9A0928.jpg"
    ];

    images.forEach(file=>{

        const img = document.createElement("img");

        img.src = `images/${file}`;
        img.loading = "lazy";
        img.alt = "A memory from our story";
        img.decoding = "async";

        gallery.appendChild(img);

    });

}

/* =====================================================
   MUSIC (only runs if #bgMusic and #musicBtn exist)
===================================================== */

function initMusic(){

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if(!music || !button) return;

    let playing = false;

    button.addEventListener("click",()=>{

        if(!playing){
            music.play();
            button.innerHTML = "🔊";
            playing = true;
        }
        else{
            music.pause();
            button.innerHTML = "🎵";
            playing = false;
        }

    });

}

/* =====================================================
   SCROLL REVEAL
===================================================== */

function initScrollReveal(){

    const elements = document.querySelectorAll(
        ".cast-card, .memory-card, .stat-box, .letter-container"
    );

    const observer = new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        },

        { threshold:0.2 }

    );

    elements.forEach(el=>{

        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 1s ease";

        observer.observe(el);

    });

}

/* =====================================================
   FLOATING HEARTS (now behind the hero text and buttons)
===================================================== */

function initFloatingHearts(){

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.zIndex = "1";
        heart.style.pointerEvents = "none";
        heart.style.fontSize = (Math.random()*20+15) + "px";
        heart.style.transition = "8s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.style.transform = "translateY(-120vh)";
            heart.style.opacity = "0";
        },100);

        setTimeout(()=>{
            heart.remove();
        },8000);

    },1500);

}

/* =====================================================
   HERO BUTTONS
===================================================== */

function initHeroButtons(){

    const playButton = document.querySelector(".play-btn");
    const infoButton = document.querySelector(".info-btn");
    const memories = document.getElementById("memories");
    const wedding = document.getElementById("wedding");

    if(playButton && memories){
        playButton.addEventListener("click", () => {
            memories.scrollIntoView({behavior:"smooth"});
        });
    }

    if(infoButton && wedding){
        infoButton.addEventListener("click", () => {
            wedding.scrollIntoView({behavior:"smooth"});
        });
    }

}

/* =====================================================
   NAVBAR GLOW
===================================================== */

function initNavbarGlow(){

    setInterval(()=>{

        const logo = document.querySelector(".logo");
        if(!logo) return;

        logo.style.textShadow = "0 0 25px #E50914";

        setTimeout(()=>{
            logo.style.textShadow = "none";
        },1000);

    },3000);

}
