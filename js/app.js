const logIn = [document.querySelector('.log-in .log-in'), ...document.querySelectorAll('.fa-xmark')]
const formBg = document.querySelector('.form-bg')
const formsContainers = document.querySelectorAll('.form-container')
const steps = document.querySelectorAll('[step]')

for (let items of logIn)
    items.addEventListener('click', (e) => {
        formBg.classList.toggle('hidden')
    })

steps[0].addEventListener('click', () => {
    console.log('khgara')
    formsContainers[0].classList.add('fade')
    if (formsContainers[0].classList.contains('slide'))
        formsContainers[0].classList.remove('slide')
    formsContainers[0].addEventListener('animationend', () => {
        formsContainers[0].classList.add('translate')
        formsContainers[1].classList.remove('translate')
        formsContainers[1].classList.add('slide')

    }, { once: true })
})
steps[1].addEventListener('click', () => {
    formsContainers[0].classList.remove('fade')
    formsContainers[1].classList.remove('slide')
    formsContainers[1].classList.add('fade')
    formsContainers[1].addEventListener('animationend', () => {
        console.log(';2gre bhayete')
        formsContainers[1].classList.add('translate')
        formsContainers[0].classList.remove('translate')
        formsContainers[0].classList.add('slide')
    }, { once: true })
})