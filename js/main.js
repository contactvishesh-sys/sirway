/*=========================================
    SIRWAY MAIN JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      Sticky Header
    ==============================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /*==============================
      Smooth Scroll
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*==============================
      Back To Top
    ==============================*/

    const backTop = document.querySelector(".back-top");

    if(backTop){

        backTop.addEventListener("click",(e)=>{

            e.preventDefault();

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

});

/*=========================================
    SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(
    ".collection-card, .category-card, .editor-card, .product, .brand-card, .trust-item"
);

function scrollReveal() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const boxTop = element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", scrollReveal);




/*=========================================
        HERO FADE ANIMATION
=========================================*/

const heroContent = document.querySelector(".hero-content");
const heroImage = document.querySelector(".hero-image");

window.addEventListener("load", () => {

    heroContent.classList.add("show");

    heroImage.classList.add("show");

});

/*=========================================
        LIVE SEARCH
=========================================*/

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(
            ".collection-card,.product,.editor-card"
        ).forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.indexOf(value) > -1) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/*=========================================
        MOBILE MENU
=========================================*/

const navbar = document.querySelector(".nav-links");

const menuBtn = document.createElement("div");

menuBtn.className = "menu-toggle";

menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

document.querySelector(".navbar").prepend(menuBtn);

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

/*=========================================
        NEWSLETTER FORM
=========================================*/

const form = document.querySelector(".club-right form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector('input[type="text"]');

const email=this.querySelector('input[type="email"]');

if(name.value.trim()==="" || email.value.trim()===""){

alert("Please fill all fields.");

return;

}

alert("Welcome to SirWay Club!");

this.reset();

});

}

/*=========================================
        BACK TO TOP
=========================================*/

const backTop=document.querySelector(".back-top");

if(backTop){

backTop.addEventListener("click",function(e){

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*=========================================
        RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button,.btn-primary,.btn-secondary,.buy-btn")
.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const rect=this.getBoundingClientRect();

circle.style.left=e.clientX-rect.left+"px";

circle.style.top=e.clientY-rect.top+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*=========================================
        PAGE LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/*=========================================
        SCROLL PROGRESS
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width =
        (scroll / height) * 100 + "%";

});


/*=========================================
        WISHLIST
=========================================*/

let wishlistCount=0;

document.querySelectorAll(".wishlist-btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

const icon=btn.querySelector("i");

icon.classList.toggle("fa-solid");

icon.classList.toggle("fa-regular");

icon.classList.toggle("active-heart");

wishlistCount++;

showToast("Added to Wishlist ❤️");

});

});


/*=========================================
        DARK MODE
=========================================*/

const themeBtn=document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});
/*=========================================
        TOAST FUNCTION
=========================================*/

const toast=document.getElementById("toast");
const toastMessage=document.getElementById("toast-message");

function showToast(message){

toastMessage.innerText=message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}
console.log("SirWay v1 Loaded Successfully");

/*=====================================
STEP 7 - PHASE 3
SCROLL REVEAL
=====================================*/

const reveals = document.querySelectorAll(".reveal");

function scrollReveal(){

    const windowHeight = window.innerHeight;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",scrollReveal);

window.addEventListener("load",scrollReveal);
