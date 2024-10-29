var maining = document.querySelector('img');
var images = [
    'hamido/resim22.jpg',
    'hamido/resim2.jpg',
    'hamido/resim3.jpg',
    'hamido/resim4.jpg',
    'hamido/resim12.jpg'
];
var num = 0;
const auto = true;
const intervalTime = 5000;
let slideInterval;


function preloadImages() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}


function next() {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    maining.src = images[num];
}

function back() {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    maining.src = images[num];
}


if (auto) {
    slideInterval = setInterval(next, intervalTime);
}


preloadImages();
