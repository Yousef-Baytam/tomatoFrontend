const logIn = [document.querySelector('.log-in .log-in'), document.querySelector('.fa-xmark')]
const formBg = document.querySelector('.form-bg')

for (let items of logIn)
    items.addEventListener('click', (e) => {
        formBg.classList.toggle('hidden')
    })