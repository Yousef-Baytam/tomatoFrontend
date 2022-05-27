const logIn = document.querySelector('.log-in .log-in')
const formBg = document.querySelector('.form-bg')

logIn.addEventListener('click', (e) => {
    formBg.classList.toggle('hidden')
})