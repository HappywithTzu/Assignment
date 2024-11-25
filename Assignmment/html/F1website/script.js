function scrollToYear(year) {
    document.getElementById(year).scrollIntoView({ behavior: 'smooth' });
}

// Slider For History Page

const carouselTrack = document.querySelector('.carousel-track');
const images = Array.from(document.querySelectorAll('.carousel-track img'));
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let activeIndex = 0;

function updateCarousel() {
    const containerWidth = document.querySelector('.carousel-track-container').offsetWidth;
    const activeImage = images[activeIndex];
    const activeImageWidth = activeImage.offsetWidth;

    let offset = activeImage.offsetLeft - (containerWidth / 2) + (activeImageWidth / 2);

    const maxOffset = carouselTrack.scrollWidth - containerWidth;
    if (offset < 0) offset = 0;
    if (offset > maxOffset) offset = maxOffset;

    carouselTrack.style.transform = `translateX(${-offset}px)`;

    images.forEach(img => img.classList.remove('active'));
    activeImage.classList.add('active');
}

function showNextImage() {
    if (activeIndex < images.length - 1) {
        activeIndex++;
    } else {
        activeIndex = 0; 
    }
    updateCarousel();
}

function showPreviousImage() {
    if (activeIndex > 0) {
        activeIndex--;
    } else {
        activeIndex = images.length - 1; 
    }
    updateCarousel();
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPreviousImage);

updateCarousel();



