// Sticky Navbar Effect

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.15)";
    }else{
        header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,.05)";
    }

});

// Newsletter Demo

document.addEventListener("DOMContentLoaded",()=>{

const form =
document.querySelector(".newsletter form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you for subscribing to SirWay!"
);

});

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({
behavior:'smooth'
});

});

});
