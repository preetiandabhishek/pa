/* =====================================================
   NETFLIX BIRTHDAY SPECIAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initMarriageCounter();
    initSwiper();
    initTypeWriter();
    initGallery();
    initMusic();
    initScrollReveal();
    initFloatingHearts();
    initNavbarGlow();

});

/* =====================================================
   LOADER
===================================================== */

function initLoader(){

    const loader =
    document.getElementById("loader");

    setTimeout(()=>{

        loader.style.transition =
        "all 1s ease";

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display = "none";

        },1000);

    },3000);

}

/* =====================================================
   MARRIAGE COUNTER
===================================================== */

function initMarriageCounter(){

    const weddingDate =
    new Date("2025-02-05T00:00:00");

    function updateCounter(){

        const now = new Date();

        const diff =
        now - weddingDate;

        const days =
        Math.floor(
        diff / (1000*60*60*24)
        );

        const hours =
        Math.floor(
        diff / (1000*60*60)
        );

        const daysBox =
        document.getElementById(
        "daysTogether"
        );

        const hoursBox =
        document.getElementById(
        "hoursTogether"
        );

        if(daysBox)
        daysBox.innerText = days;

        if(hoursBox)
        hoursBox.innerText = hours;

    }

    updateCounter();

    setInterval(updateCounter,1000);

}

/* =====================================================
   SWIPER
===================================================== */

function initSwiper(){

    if(typeof Swiper === "undefined")
    return;

    new Swiper(".memoriesSwiper",{

        slidesPerView:1.2,

        spaceBetween:20,

        loop:true,

        autoplay:{
            delay:2500,
            disableOnInteraction:false
        },

        breakpoints:{

            768:{
                slidesPerView:2.2
            },

            1024:{
                slidesPerView:3.2
            }

        }

    });

}

/* =====================================================
   TYPEWRITER LETTER
===================================================== */

function initTypeWriter(){

    const element =
    document.getElementById(
    "typing-text"
    );

    if(!element) return;

    const text =

`Happy Birthday ❤️

Today is not just another day.

Today is the celebration of the most wonderful husband,
the most caring partner,
and the most beautiful soul.

Since 05 February 2025,
every moment has become a memory worth keeping forever.

Thank you for every smile,
every laugh,
every hug,
and every dream we continue to build together.

May your 25th birthday bring happiness,
success,
good health,
and countless blessings.

You are my favorite chapter,
my safest place,
and my forever.

Happy Birthday My Love ❤️`;

    let index = 0;

    function type(){

        if(index < text.length){

            element.innerHTML +=
            text.charAt(index);

            index++;

            setTimeout(type,30);

        }

    }

    const observer =
    new IntersectionObserver(entries=>{

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

    const gallery =
    document.querySelector(
    ".gallery-grid"
    );

    if(!gallery) return;

    /*
    ADD ALL YOUR IMAGE NAMES HERE
    */

    const images = [

        "IMG_1525.JPG.jpeg",
        "IMG_0471.JPG.jpeg",
        "IMG_6731.JPG.jpeg",
        "IMG_6650.JPG.jpeg",
        "IMG_6617.JPG.jpeg",
        "IMG_4749.JPG.jpeg",
        "IMG_6675.JPG.jpeg",
        "IMG_6715.JPG.jpeg",
        "IMG_0689.JPG.jpeg",
        "IMG_3615.JPG.jpeg",

        /* continue remaining photos */

    ];

    images.forEach(file=>{

        const img =
        document.createElement("img");

        img.src =
        `images/${file}`;

        img.loading = "lazy";

        gallery.appendChild(img);

    });

}

/* =====================================================
   MUSIC
===================================================== */

function initMusic(){

    const music =
    document.getElementById(
    "bgMusic"
    );

    const button =
    document.getElementById(
    "musicBtn"
    );

    if(!music || !button)
    return;

    let playing = false;

    button.addEventListener("click",()=>{

        if(!playing){

            music.play();

            button.innerHTML =
            "🔊";

            playing = true;

        }
        else{

            music.pause();

            button.innerHTML =
            "🎵";

            playing = false;

        }

    });

}

/* =====================================================
   SCROLL REVEAL
===================================================== */

function initScrollReveal(){

    const elements =
    document.querySelectorAll(

    ".cast-card, .memory-card, .stat-box, .letter-container"

    );

    const observer =
    new IntersectionObserver(

    entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity =
                "1";

                entry.target.style.transform =
                "translateY(0)";

            }

        });

    },

    {
        threshold:0.2
    }

    );

    elements.forEach(el=>{

        el.style.opacity = "0";

        el.style.transform =
        "translateY(50px)";

        el.style.transition =
        "all 1s ease";

        observer.observe(el);

    });

}

/* =====================================================
   FLOATING HEARTS
===================================================== */

function initFloatingHearts(){

    setInterval(()=>{

        const heart =
        document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
        "fixed";

        heart.style.left =
        Math.random()*100 + "vw";

        heart.style.bottom =
        "-30px";

        heart.style.zIndex =
        "999";

        heart.style.pointerEvents =
        "none";

        heart.style.fontSize =
        (Math.random()*20+15)
        + "px";

        heart.style.transition =
        "8s linear";

        document.body.appendChild(
        heart
        );

        setTimeout(()=>{

            heart.style.transform =
            "translateY(-120vh)";

            heart.style.opacity =
            "0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },1500);

}

/* =====================================================
   HERO BUTTON
===================================================== */

const playButton =
document.querySelector(
".play-btn"
);

if(playButton){

    playButton.addEventListener(
    "click",

    ()=>{

        document
        .getElementById(
        "memories"
        )

        .scrollIntoView({

            behavior:"smooth"

        });

    }

    );

}

/* =====================================================
   NAVBAR GLOW
===================================================== */

function initNavbarGlow(){

    setInterval(()=>{

        const logo =
        document.querySelector(
        ".logo"
        );

        if(!logo) return;

        logo.style.textShadow =
        "0 0 25px #E50914";

        setTimeout(()=>{

            logo.style.textShadow =
            "none";

        },1000);

    },3000);

}

/* =====================================================
   PARALLAX HERO
===================================================== */

window.addEventListener(

"scroll",

()=>{

    const hero =
    document.querySelector(
    ".hero-bg"
    );

    if(!hero) return;

    const offset =
    window.pageYOffset;

    hero.style.transform =
    `translateY(${offset*0.15}px) scale(1.05)`;

}

);