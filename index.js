let board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink' , 'orange' ]
const SQUARES_NUMBER = 990

for (let i = 0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', event => {
        let color = getRandomColor()
        event.target.style.backgroundColor = color
        event.target.style.boxShadow = `0 0 10px ${color}`
    })
    square.addEventListener('mouseleave' , event => {
        event.target.style.backgroundColor = '#1d1d1d'
        event.target.style.boxShadow = "0 0 2px black"
    })
    board.append(square)

}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}