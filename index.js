let start_btn = document.querySelector('.start')
let screens = document.querySelectorAll('.screen')
let score = 0
start_btn.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

const colors = ['red' , 'orange' , 'yellow' , 'green' , 'blue' , 'purple' , 'pink' , 'white']
const time_btn_list = document.querySelectorAll('.time-btn')
let chosenTime = 0

for (let time_btn of time_btn_list) {
    time_btn.addEventListener('click', event => {
        chosenTime = parseInt(event.target.value)
        screens[1].classList.add('up')

        startGame()
    })
}

const timer = document.querySelector('#time')

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    timer.innerHTML = `00:${chosenTime}`
}

function decreaseTime() {
    if (chosenTime === 0) {
        finishGame()
    } else {
        let current = --chosenTime
        timer.innerHTML = `00:${current < 10 ? `0${current}` : current}`
    }
}

function finishGame() {
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
    timer.parentElement.classList.add('hide')
}

const board = document.querySelector('#board')
board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})


function createRandomCircle() {
    const circle = document.createElement('div')
    const {width, height} = board.getBoundingClientRect()
    circle.classList.add('circle')
    const randomSize = getRandomSize(10, 60)
    circle.style.width = `${randomSize}px`
    circle.style.height = `${randomSize}px`
    circle.style.top = `${getRandomSize(randomSize, height - randomSize)}px`
    circle.style.left = `${getRandomSize(randomSize, width - randomSize)}px`
    circle.style.background = colors[getRandomSize(0,colors.length-1)]

    board.append(circle)
}

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}