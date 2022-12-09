// <========== Menu-burger (mobile) ==========>

const openBtn = document.querySelector(".open_btn");

openBtn.style.cursor = "pointer";

const closeBtn = document.querySelector(".close_btn");

closeBtn.style.cursor = "pointer";

const modeMobile = document.querySelector(".mode-mobile"); 

openBtn.addEventListener("click", function () {
    closeBtn.style.zIndex = "1"
    modeMobile.style.display = "initial"
}); 

closeBtn.addEventListener("click", function () {
    closeBtn.style.zIndex = "-1"
    modeMobile.style.display = "none"
});

// <========== Menu-burger (desktop) ==========>

const modeDesktop = document.querySelector(".mode-desktop"); 

// openBtn.addEventListener("click", function () {
//     modeDesktop.style.display = "initial"
// }); 

// closeBtn.addEventListener("click", function () {
//     modeMobile.style.display = "none"
// });

// <========== Slider avant 768px ==========>

const img = document.querySelectorAll(".img");

const array = Array.from(img);

let i = 0; 

const right = document.querySelector(".right");

right.style.cursor = "pointer";

const left = document.querySelector(".left");

left.style.cursor = "pointer";

right.addEventListener("click", function () {

    img[i].classList.remove("start")
    
    if (i < array.length-1) {
        i++;
    }
    else {
        i = 0;
    }

    img[i].classList.add("start")
}); 

left.addEventListener("click", function () {

    img[i].classList.remove("start")
    
    if (i > 0) {
        i--;
    }
    else {
        i = array.length-1;
    }

    img[i].classList.add("start")
});


// <========== Slider à partir de 768px ==========>

const img2 = document.querySelectorAll(".img2");

const array2 = Array.from(img2);

let j = 0; 

const right2 = document.querySelector(".right2");

right2.style.cursor = "pointer";

const left2 = document.querySelector(".left2");

left2.style.cursor = "pointer";

right2.addEventListener("click", function () {

    img2[j].classList.remove("start2")
    
    if (j < array2.length-1) {
        j++;
    }
    else {
        j = 0;
    }

    img2[j].classList.add("start2")
}); 

left2.addEventListener("click", function () {

    img2[j].classList.remove("start2")
    
    if (j > 0) {
        j--;
    }
    else {
        j = array2.length-1;
    }

    img2[j].classList.add("start2")
});












 






