const login = document.querySelector('#login')
const loginForm = document.querySelector('.login-form')
const em = document.querySelector('#loginEmail')
const pass = document.querySelector('#password')
const errorMsg = document.querySelector('[not-found]')


loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let body = new FormData()
    body.append('email', em.value)
    body.append('password', pass.value)
    if (!loginForm.reportValidity())
        return
    axios.post('http://localhost/tomato/tomatoBackend/login.php', body)
        .then((res) => {
            console.log('it worked', res)
            let { response } = res.data
            if (response = 'User Not Found') {
                console.log('fuck you hacker')
                errorMsg.classList.remove('d-none')
                return
            }
        })
        .catch((err) => {
            console.log('errrrorrr', err)
        })
})