// <========== menu-burger ==========>

const btn = document.querySelector(".btn");

const modeMobile = document.querySelector(".mode-mobile"); 

btn.addEventListener("click", function () {
    modeMobile.classList.toggle("visible"); 
}); 

// <========== Slider ==========>

const img = document.querySelectorAll("img");

const nbImg = img.length; 

let count = 0; 

const right = document.querySelector(".right");

const left = document.querySelector(".left");

right.addEventListener("click", function () {

    img[count].classList.remove("start")
    
    if (count < nbImg-1) {
        count++;
    }
    else {
        count = 0;
    }

    img[count].classList.add("start")
}); 

left.addEventListener("click", function () {

    img[count].classList.remove("start")
    
    if (count > 0) {
        count--;
    }
    else {
        count = nbImg-1;
    }

    img[count].classList.add("start")
});










 






