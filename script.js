const toggleButton = document.getElementById("nav-to");
const navLinks = document.getElementById("nav-links");

toggleButton.addEventListener("click",function(){
    navLinks.classList.toggle("active");
})