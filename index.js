
function slidesPlugin(numberOfSlide){
    let slides = document.querySelectorAll('.slide')
    slides[numberOfSlide].classList.add('active')
    for (let slide of slides){
        slide.addEventListener('click', event => {
            ClearActiveClasses()
            event.target.classList.add('active')
        })
    }

    function ClearActiveClasses(){
        for (let slide of slides){
            slide.classList.remove('active')
        }
    }
}

slidesPlugin(2)