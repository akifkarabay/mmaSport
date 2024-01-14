const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let counter = 1;
const size = slides[0].clientWidth;

function updateSlider() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function nextSlide() {
    if (counter >= slides.length - 1) {
        counter = 1;
        updateSlider();
    } else {
        counter++;
        updateSlider();
    }
}

function prevSlide() {
    if (counter <= 0) {
        counter = slides.length - 2;
        updateSlider();
    } else {
        counter--;
        updateSlider();
    }
}

slider.addEventListener('transitionend', () => {
    if (slides[counter].classList.contains('clone-first')) {
        counter = slides.length - 2;
        slider.style.transition = "none";
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (slides[counter].classList.contains('clone-last')) {
        counter = 1;
        slider.style.transition = "none";
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.classList.add('clone-first');
lastClone.classList.add('clone-last');

slider.appendChild(firstClone);
slider.prepend(lastClone);

setInterval(nextSlide, 3000); 
