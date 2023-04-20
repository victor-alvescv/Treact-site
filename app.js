const hamburguer = document.querySelector('.nav__btn')
const mobileNav = document.querySelector('.mobile__nav--content')
const crossBtn = document.querySelector('.close-btn')

hamburguer.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
})

crossBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active')
})