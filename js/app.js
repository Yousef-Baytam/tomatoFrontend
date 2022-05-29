const logIn = [document.querySelector('div .log-in'), document.querySelectorAll('.fa-xmark')[0], document.querySelectorAll('.fa-xmark')[1]]
const formBg = document.querySelectorAll('.form-bg')
const formsContainers = document.querySelectorAll('.form-container')
const steps = document.querySelectorAll('[step]')
const submit = document.querySelectorAll('input[type="submit"]')
nav = document.querySelector('nav')
const edit = [document.querySelector('.edit'), document.querySelectorAll('.fa-xmark')[2]]
const review = [...document.querySelectorAll('.leave-a-review'), document.querySelector('#review-x')]
const reviewForm = document.querySelector('#review')



for (let items of logIn)
    items.addEventListener('click', () => {
        formBg[0].classList.toggle('hidden')
    })

steps[0].addEventListener('click', () => {
    formsContainers[0].classList.add('fade-out')
    if (formsContainers[0].classList.contains('slide'))
        formsContainers[0].classList.remove('slide')
    formsContainers[0].addEventListener('animationend', () => {
        formsContainers[0].classList.add('translate')
        formsContainers[1].classList.remove('translate')
        formsContainers[1].classList.add('slide')

    }, { once: true })
})
steps[1].addEventListener('click', () => {
    formsContainers[0].classList.remove('fade-out')
    formsContainers[1].classList.remove('slide')
    formsContainers[1].classList.add('fade-out')
    formsContainers[1].addEventListener('animationend', () => {
        formsContainers[1].classList.add('translate')
        formsContainers[0].classList.remove('translate')
        formsContainers[0].classList.add('slide')
    }, { once: true })
})

if (edit[0] != null)
    for (let ed of edit)
        ed.addEventListener('click', () => {
            formBg[1].classList.toggle('hidden')
        })

if (review[0] != null)
    for (let rev of review)
        rev.addEventListener('click', () => {
            reviewForm.classList.toggle('hidden')
        })


document.addEventListener('scroll', () => {

    let scrollTop = window.pageYOffset
    if (scrollTop > 250)
        nav.classList.add('scrolled')
    if (scrollTop < 250)
        if (nav.classList.contains('scrolled'))
            nav.classList.remove('scrolled')
})


