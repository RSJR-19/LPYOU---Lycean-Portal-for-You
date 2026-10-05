const homeBtn = document.getElementById("home-btn");
const announceBtn = document.getElementById("announce-btn");
const servicesBtn = document.getElementById("services-btn");
const aboutBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");

function trigger(num) {
    ([homeBtn, announceBtn, servicesBtn, aboutBtn, contactBtn]).forEach(btn => {
        btn.classList.remove("active");
        btn.style.fontWeight = "normal";

    })
    switch (num) {
        case 1:
            homeBtn.classList.add("active");
            homeBtn.style.fontWeight = "bold";
            break;

        case 2:
            announceBtn.classList.add("active");
            announceBtn.style.fontWeight = "bold";
            break;

        case 3:
            servicesBtn.classList.add("active");
            servicesBtn.style.fontWeight = "bold";
            break;

        case 4:
            aboutBtn.classList.add("active");
            aboutBtn.style.fontWeight = "bold";
            break;

        case 5:
            contactBtn.classList.add("active");
            contactBtn.style.fontWeight = "bold";
            break;
    }
}

window.addEventListener('load', () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    trigger(1);
})


// for carousell navigation
const track = document.getElementById('carouselTrack');
const cards = document.querySelectorAll('.announcement_card');
const dots = document.querySelectorAll('.carousel_dot');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

let currentIndex = 0;
const totalCards = cards.length;

function moveCarousel() {
    const slideDistance = currentIndex * 1000; // 100px size ng announcement card
    track.style.transform = `translateX(-${slideDistance}px)`;

    updateDots();
}

function updateDots() {
    dots.forEach(function (dot) {
        dot.classList.remove('active');
    });
    dots[currentIndex].classList.add('active');
}

arrowRight.addEventListener('click', function () {
    currentIndex = currentIndex + 1;

    if (currentIndex >= totalCards) {
        currentIndex = 0;
    }
    moveCarousel();
});

arrowLeft.addEventListener('click', function () {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    }
    moveCarousel();
});