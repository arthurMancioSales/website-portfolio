const arrows = document.querySelectorAll(".arrow")
const carouselSlides = document.querySelectorAll(".slide")
let slideActiveIndex = 0

for (const arrow of arrows) {
    if (arrow.id == 'next-arrow') {
        arrow.onclick = nextSlide
    } else {
        arrow.onclick = previousSlide
    }
}

function nextSlide() {
    if (slideActiveIndex < carouselSlides.length) {
        carouselSlides[slideActiveIndex].classList.toggle('active')
        slideActiveIndex++
        carouselSlides[slideActiveIndex].classList.toggle('active')
    } else {
        carouselSlides[slideActiveIndex].classList.toggle('slide-limit')
        setTimeout(()=> {
            console.log("teste")
            carouselSlides[slideActiveIndex].classList.toggle('slide-limit')
        }, 800)
    }
}

function previousSlide() {
    if (slideActiveIndex > 0) {
        carouselSlides[slideActiveIndex].classList.toggle('active')
        slideActiveIndex--
        carouselSlides[slideActiveIndex].classList.toggle('active')
    } else {
        carouselSlides[slideActiveIndex].classList.toggle('slide-limit')
        // setTimeout(()=> {
        //     carouselSlides[slideActiveIndex].classList.toggle('slide-limit')
        // }, 1)
    }
}