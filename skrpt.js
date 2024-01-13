let width = window.innerWidth


anime({
    targets: '.wheel',
    translateX: width / 1 - 50,
    rotate: 2000,
    duration: 15000,
    delay: 1000,
    easing: 'easeOutQuad', 
})

