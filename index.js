let up_btn = document.querySelector('.up-button')
let down_btn = document.querySelector('.down-button')
let container = document.querySelector('.container')
let sidebar = document.querySelector('.sidebar')
let main_slide = document.querySelector('.main-slide')

const slidesCounter = main_slide.querySelectorAll('div').length

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCounter -1) * 100}vh`

up_btn.addEventListener('click' , event => {
    changeSlide('up')
})

down_btn.addEventListener('click', event => {
    changeSlide('down')
})



function changeSlide(direction){
    console.log(direction)

    if (direction === 'up'){
        activeSlideIndex = activeSlideIndex + 1 === slidesCounter ? 0 : activeSlideIndex+1
    }else{
        activeSlideIndex = activeSlideIndex - 1 < 0 ? slidesCounter -1 : activeSlideIndex-1
    }
    const height = container.clientHeight

    main_slide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}