let slides = document.querySelectorAll('.slide')

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
