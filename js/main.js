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
