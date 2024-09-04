setTimeout(function () {
    alert("Selamat datang di toko online kami!");
}, 3000);
const herotext = document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    herotext.Style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

senInterval(changeHeroTextColor, 2000);
let currentImageIndex = 0;
const images = ["img/photo3.jpeg", "img/photo1.jpeg", "img/photo2.jpeg"];






