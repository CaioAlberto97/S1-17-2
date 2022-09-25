const menuButton = document.querySelector('.menu')

menuButton.addEventListener('click', function(){
    console.log(menuButton.src)
    menuButton
    const ul = document.querySelector('ul')
    ul.classList.toggle('show')

    const div = document.querySelector('div')
    div.classList.toggle('show-div')

    if (menuButton.src == 'http://127.0.0.1:5500/imgs/menu.png'){
        menuButton.src = `./imgs/close.png`
    } else {
        menuButton.src = "./imgs/menu.png"
    }
})