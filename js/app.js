const logIn = [document.querySelector('.log-in .log-in'), document.querySelectorAll('.fa-xmark')[0], document.querySelectorAll('.fa-xmark')[1]]
const formBg = document.querySelector('.form-bg')

for (let items of logIn)
    items.addEventListener('click', (e) => {
        formBg.classList.toggle('hidden')
    })