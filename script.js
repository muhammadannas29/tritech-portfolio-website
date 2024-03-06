const hamburger=document.querySelector(".hamburger");
const navItem=document.querySelector(".nav-item");
hamburger.addEventListener("click",()=>{
    console.log("clicked!")
    hamburger.classList.toggle("active");
    navItem.classList.toggle("active");
})