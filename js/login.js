const login = document.querySelector('#login')
const loginForm = document.querySelector('.login-form')
const em = document.querySelector('#email123')
const pass = document.querySelector('#pass')


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
        })
        .catch((err) => {
            console.log('errrrorrr', err)
        })
})