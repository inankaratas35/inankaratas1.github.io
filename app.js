var maining = document.querySelector('img');
var images = [
    'hamido/resim1.png',
    'hamido/resim2.png',
    'hamido/resim3.png',
    'hamido/resim4.png',
    'hamido/resim5.png',
    'hamido/resim6.png'
];
var num = 0;
const auto = true;
const intervalTime = 3500;
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
