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
            let { response, user_id } = res.data
            if (!user_id) {
                console.log('fuck you hacker')
                errorMsg.classList.remove('d-none')
                return
            } else {
                if (!errorMsg.classList.contains('d-none'))
                    errorMsg.classList.add('d-none')
                loggedIn = true
                userId = user_id
                setCookie('tomatoUser', user_id, 0.05)
                document.location.reload()
            }
        })
        .catch((err) => {
            console.log('errrrorrr', err)
        })
})

const setCookie = (cookieName, cookieValue, expiryDays) => {
    const date = new Date()
    date.setTime(date.getTime() + (expiryDays * 1000 * 60 * 60 * 24))
    let exp = `expires=${ date.toUTCString() }`
    document.cookie = `${ cookieName }=${ cookieValue };path=/`
}