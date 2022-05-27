const logIn = [document.querySelector('.log-in .log-in'), ...document.querySelectorAll('.fa-xmark')]
const formBg = document.querySelector('.form-bg')
const forms = document.querySelectorAll('.form-container')
const signIn = document.querySelectorAll('[step]')

for (let items of logIn)
    items.addEventListener('click', (e) => {
        formBg.classList.toggle('hidden')
    })

signIn.addEventListener('click', () => {
    for (let form of forms)
        form.classList.toggle('translate')
})