let navbar = document.getElementsByClassName("navbar");

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY)
    if(window.scrollY > 60){
        navbar.style.background_color = "#ffffff";
    }else{
        navbar.style.background_color = "#ffffff00";
    }
})

let screen_0 = document.getElementById("roll-and-stamina-banner");
let screen_1 = document.getElementById("kamiis-door-banner");

if(screen_0 != undefined){
    screen_0.width = window.innerWidth;
    screen_0.height = window.innerHeight;
}
if(screen_0 != undefined){
    screen_1.width = window.innerWidth;
    screen_1.height = window.innerHeight;
}
let canvas_0 = screen_0.getContext("2d");
let canvas_1 = screen_1.getContext("2d");
let mouse_location = {
    x: screen_0.width / 2,
    y: screen_0.height / 2,
}

screen_0.style.background = "#6d9bd8";
screen_1.style.background = "#a87429";

let carousel_content_0_0 = new Image();
carousel_content_0_0.src = "./assets/carousel_content_0_0.png";
let carousel_content_0_1 = new Image();
carousel_content_0_1.src = "./assets/carousel_content_0_1.png";
let carousel_content_0_2 = new Image();
carousel_content_0_2.src = "./assets/carousel_content_0_2.png";
let carousel_content_0_3 = new Image();
carousel_content_0_3.src = "./assets/carousel_content_0_3.png";
let carousel_content_0_4 = new Image();
carousel_content_0_4.src = "./assets/carousel_content_0_4.png";


let carousel_content_1_0 = new Image();
carousel_content_1_0.src = "./assets/carousel_content_1_0.png";
let carousel_content_1_1 = new Image();
carousel_content_1_1.src = "./assets/carousel_content_1_1.png";
let carousel_content_1_2 = new Image();
carousel_content_1_2.src = "./assets/carousel_content_1_2.png";
let carousel_content_1_3 = new Image();
carousel_content_1_3.src = "./assets/carousel_content_1_3.png";
let carousel_content_1_4 = new Image();
carousel_content_1_4.src = "./assets/carousel_content_1_4.png";

let frame = 0;
function updateContent(){
    requestAnimationFrame(updateContent);
    canvas_0.clearRect(0, 0, window.innerWidth, window.innerHeight);
    canvas_1.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const d = new Date();
    let ms = d.getMilliseconds();

    let offset = {
        x: ((mouse_location.x + Math.cos(frame / 100 / Math.PI) * 256) - (screen_0.width / 2)) * 0.5,
        y: ((mouse_location.y + Math.sin(frame / 20 / Math.PI) * 256)  - (screen_0.height / 2)) * 0.5
    }
    if(screen_0 != undefined){
        canvas_0.drawImage(carousel_content_0_0, screen_0.width * 0.1 + offset.x * 0.05, screen_0.height * -0.05 + offset.y * 0.045, carousel_content_0_0.width * 0.25, carousel_content_0_0.height * 0.25);
        canvas_0.drawImage(carousel_content_0_1, screen_0.width * 0.3 + offset.x * 0.015, screen_0.height * 0.05 + offset.y * 0.025, carousel_content_0_1.width * 0.25, carousel_content_0_1.height * 0.25);
        canvas_0.drawImage(carousel_content_0_2, screen_0.width * 0.65 + offset.x * 0.065, screen_0.height * 0.5 + offset.y * 0.065, carousel_content_0_2.width * 0.25, carousel_content_0_2.height * 0.25);
        canvas_0.drawImage(carousel_content_0_3, screen_0.width * 0.4 + offset.x * 0.035, screen_0.height * 0.65 + offset.y * 0.025, carousel_content_0_3.width * 0.25, carousel_content_0_3.height * 0.25);
        canvas_0.drawImage(carousel_content_0_4, screen_0.width * 0.2 + offset.x * 0.015, screen_0.height * 0.65 + offset.y * 0.035, carousel_content_0_4.width * 0.25, carousel_content_0_4.height * 0.25);
    }
    
    if(screen_1 != undefined){
        canvas_1.drawImage(carousel_content_1_3, screen_0.width * 0.5 - carousel_content_1_3.width * 0.7 + offset.x * 0.01, screen_0.height * 0.5 + offset.y * 0.01, carousel_content_1_3.width * 1.4, carousel_content_1_3.height * 1.4);
        canvas_1.drawImage(carousel_content_1_4, screen_0.width * 0.5 - carousel_content_1_4.width * 0.7 + offset.x * 0.025, screen_0.height * 0.5 + offset.y * 0.03, carousel_content_1_4.width * 1.4, carousel_content_1_4.height * 1.4);
        canvas_1.drawImage(carousel_content_1_2, screen_0.width * 0.5 - carousel_content_1_2.width * 0.7 + offset.x * 0.05, screen_0.height * 0.5 + offset.y * 0.05, carousel_content_1_2.width * 1.4, carousel_content_1_2.height * 1.4);
        canvas_1.drawImage(carousel_content_1_1, screen_0.width * 0.5 - carousel_content_1_1.width * 0.7 + offset.x * 0.075, screen_0.height * 0.5 + offset.y * 0.07, carousel_content_1_1.width * 1.4, carousel_content_1_1.height * 1.4);
        canvas_1.drawImage(carousel_content_1_0, screen_0.width * 0.5 - carousel_content_1_0.width * 0.7 + offset.x * 0.1, screen_0.height * 0.5 + offset.y * 0.09, carousel_content_1_0.width * 1.4, carousel_content_1_0.height * 1.4);
    }
    frame++;
}

updateContent();

document.addEventListener('mousemove', event => {
    mouse_location.x = event.clientX;
    mouse_location.y = event.clientY;
});



window.addEventListener("resize", s =>{
    screen_0.width = window.innerWidth;
    screen_0.height = window.innerHeight;
    screen_1.width = window.innerWidth;
    screen_1.height = window.innerHeight;
})