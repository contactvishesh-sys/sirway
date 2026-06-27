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

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const boxTop = element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================================
        HERO FADE ANIMATION
=========================================*/

const heroContent = document.querySelector(".hero-content");
const heroImage = document.querySelector(".hero-image");

window.addEventListener("load", () => {

    heroContent.classList.add("show");

    heroImage.classList.add("show");

});
