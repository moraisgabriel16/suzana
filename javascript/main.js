const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links")

const menuBtnIcon = menuBtn.querySelector("i");
// const observer = new IntersectionObserver((entries)=>{
//   entries.forEach((entry)=>{
//     console.log(entry)
//     if(entry.isIntersecting){
//       entry.target.classList.add('.show');
//     }
//   });
// });
// const hiddenElements = document.querySelectorAll(".hidden");

// hiddenElements.forEach((el)=>observer.observe(el));

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen? "ri-close-fill" : "ri-menu-line");
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const swiper = new Swiper(".swiper", {
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });