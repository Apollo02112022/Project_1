// <========== menu-burger ==========>

const btn = document.querySelector(".btn");

const modeMobile = document.querySelector(".mode-mobile"); 

// btn.addEventListener("click", function () {
//     modeMobile.style.display = "initial";
// }); 

btn.addEventListener("click", function () {
    modeMobile.classList.toggle("visible"); 
}); 

// <========== Carousel ==========>

const carousel = document.querySelector(".box_4"); 
carousel.style.color = "rgb(249, 246, 246)";
carousel.style.fontFamily = "'Sono', sans-serif";
carousel.style.fontSize = "0.6rem"; 
carousel.style.fontWeight = "bold";
carousel.style.textAlign = "center";

const left = document.querySelector(".left");
left.style.paddingTop = "100px";
left.style.transform = "scaleX(-1)";

const right = document.querySelector(".right");
right.style.paddingTop = "100px";
 






