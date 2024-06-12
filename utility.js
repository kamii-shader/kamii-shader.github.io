document.querySelectorAll(".banner").forEach(s =>{
    s.style.backgroundImage = "url('" + s.getAttribute('image-src') + "')";
});