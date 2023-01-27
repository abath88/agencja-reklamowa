addEventListener("scroll", (event) => {
    window.scrollY > 80 ? 
        document.getElementById("header").classList.add("scrolled") : 
        document.getElementById("header").classList.remove("scrolled")
});

document.getElementById("hamburger").addEventListener("click", (event) => {
    document.getElementById("header").classList.toggle("show")
})