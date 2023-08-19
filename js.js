const carousel = document.querySelector(".slider")
let firstCard = carousel.querySelectorAll(".cards")[0]
const icones = document.querySelectorAll(".fa-solid")
let firstCardWidth = firstCard.clientWidth + 14

const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".cards");
const numCards = cards.length;
let currentIndex = 1




icones.forEach(element => {
    element.addEventListener('click', () => {
        carousel.scrollLeft += element.id == "left-but" ? -firstCardWidth : firstCardWidth;
    })

})

    ; // Starting with the middle card

function moveForward() {
    if (cards[currentIndex].id = "c1" && currentIndex == 6) return
    currentIndex = (currentIndex + 1) % numCards;
    updateSlider();
}

function moveBackward() {
    if (cards[currentIndex].id = "c1" && currentIndex == 0) return
    currentIndex = (currentIndex - 1 + numCards) % numCards;
    updateSlider();
}

function updateSlider() {
    cards.forEach(card => {
        card.classList.remove("active")
    });
    cards[currentIndex].classList.add("active");
}
//********** */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* Slide 2 */

const slider2 = function () {
    const slides = document.querySelectorAll('.slide-last');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots-last');

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = function (slide) {
        document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    // Next slide
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider2();

/* Easy Scroll */

const obs = new IntersectionObserver((entries) => {
    entries.forEach((elemets) => {
        if (elemets.isIntersecting) {
            elemets.target.classList.add('show')
        }else{
            elemets.target.classList.remove('show')
        }
    })
    console.log(6)
})


const elementsOnPage = document.querySelectorAll(".hidden")
elementsOnPage.forEach((el) =>  obs.observe(el) )



