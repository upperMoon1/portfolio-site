document.querySelector('.nav__btn').addEventListener('click',showNav);

function showNav(){
document.querySelector('.nav__links').classList.toggle('show__links');
}
function main() {
    anime({
        targets: 'div.about-info__links',
        translateX: [
            {value: 100, duration: 1000 },
            {value: 0, duration: 500 }
        ], 
        translateY: [
            {value: 100, duration: 1000},
            {value: 0, duration: 500}
        ],
        rotate: '1turn',
        easing: 'linear'
    });
    anime({
        targets: '.nav__logo',
        translateX: [
            { value: 100, duration: 1000 },
            { value: 0, duration: 500 }
        ],
        translateY: [
            { value: 100, duration: 1000 },
            { value: 0, duration: 500 }
        ],
        rotate: '1turn',
        easing: 'linear'
    });
}
document.addEventListener("DOMContentLoaded", main);