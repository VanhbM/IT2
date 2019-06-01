let blauweAchtergrond = document.querySelector(".blauw");
let fromTop = window.innerHeight;

window.addEventListener("scroll", function() {
  let scrolled = window.pageYOffset;
  console.log(scrolled);
  // hoeveelheid pxls in hoogte vn webpagina

  let positie = -(fromTop - scrolled);
  if (Math.ceil(positie) >= 0) {
    blauweAchtergrond.style.opacity = 0;
  } else {
    blauweAchtergrond.style.opacity = 1;
  }

  let div1 = document.querySelector(".eerste")
  let div2 = document.querySelector(".tweede")
  let div3 = document.querySelector(".derde")
  let div4 = document.querySelector(".vierde")
  let div5 = document.querySelector(".vijfde")
  let div6 = document.querySelector(".zesde")
  let div7 = document.querySelector(".zevende")
  let div8 = document.querySelector(".achtste")
  let div9 = document.querySelector(".negende")
  let div10 = document.querySelector(".tiende")

  if (Math.ceil(positie) >= 0){
      div1.style.WebkitAnimationPlayState  = "running";
      div2.style.WebkitAnimationPlayState  = "running";
      div3.style.WebkitAnimationPlayState  = "running";
      div4.style.WebkitAnimationPlayState  = "running";
      div5.style.WebkitAnimationPlayState  = "running";
      div6.style.WebkitAnimationPlayState  = "running";
      div7.style.WebkitAnimationPlayState  = "running";
      div8.style.WebkitAnimationPlayState  = "running";
      div9.style.WebkitAnimationPlayState  = "running";
      div10.style.WebkitAnimationPlayState  = "running";
    }

});



let menuKnop = document.querySelector(".menu");
let menuKnop2 = document.querySelector(".menu2");
let navMenu = document.querySelector("nav");

function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}
menuKnop2.addEventListener("click",verbergMenu);
function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}
menuKnop.addEventListener("click",toonMenu);

let project = document.querySelector(".onzichtbaar");
function slide() {
  window.scrollBy({
    top: 800,
    left: 0,
    behavior: 'smooth'
  });
}
project.addEventListener("click",slide);
project.addEventListener("click",verbergMenu);


/* let scrolled = window.pageYOffset;
let positie = -(fromTop - scrolled);
let div1 = document.querySelector(".eerste")

window.addEventListener("scroll", function() {
  if (Math.ceil(positie) >= 0){
      div1.style.WebkitAnimationPlayState  = "running";
    }
}*/
