const bushLeft = document.querySelector('.bush-left-svg')
const bushRight = document.querySelector('.bush-right-svg')
const leopard = document.querySelector('.leopard')
const leopardHead = leopard.querySelector('.leopard-head')
const ground = document.querySelector('.ground')
var bushInterval

function initialIdle () {
    bushInterval = window.setInterval( () => {
        bushLeft.classList.add('bush-shake')
        bushRight.classList.add('bush-shake')
        window.setTimeout( () => {
            bushLeft.classList.remove('bush-shake')
            bushRight.classList.remove('bush-shake')
        }, 700)
    }, 2000)
}

function leopardRise (callBack) {
    clearInterval(bushInterval)
    bushLeft.classList.add('bush-shake')
    bushRight.classList.add('bush-shake')
    leopard.classList.add('leopard-rise')
    window.setTimeout( () => {
        bushLeft.classList.remove('bush-shake')
        bushRight.classList.remove('bush-shake')
        callBack();
    }, 1100)
}

function leopardWiggle (callBack) {
    leopard.classList.add('leopard-wiggle')
    callBack()
}

function drawText () {
    ground.classList.add('draw-text')
}

function animationSequence () {
    leopardRise(() => { leopardWiggle(drawText) })
}

bushLeft.addEventListener('click', animationSequence)
bushRight.addEventListener('click', animationSequence)

initialIdle()