const bushLeft = document.querySelector('.bush-left-svg')
const bushRight = document.querySelector('.bush-right-svg')
const leopard = document.querySelector('.leopard')

function initialIdle () {
    window.setTimeout( () => {
        bushLeft.classList.add('bush-shake')
        bushRight.classList.add('bush-shake')
        window.setTimeout( () => {
            bushLeft.classList.remove('bush-shake')
            bushRight.classList.remove('bush-shake')
            initialIdle()
        }, 700)
    }, 2000)
}

function leopardRise () {
    bushLeft.classList.add('bush-shake')
    bushRight.classList.add('bush-shake')
    leopard.classList.add('leopard-rise')
    window.setTimeout( () => {
        bushLeft.classList.remove('bush-shake')
        bushRight.classList.remove('bush-shake')
    }, 1000)
}

// initialIdle()