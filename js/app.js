const logIn = [document.querySelector('div .log-in'), document.querySelectorAll('.fa-xmark')[0], document.querySelectorAll('.fa-xmark')[1]]
const formBg = document.querySelectorAll('.form-bg')
const formsContainers = document.querySelectorAll('.form-container')
const steps = document.querySelectorAll('[step]')
const submit = document.querySelectorAll('input[type="submit"]')
nav = document.querySelector('nav')
const edit = [document.querySelector('.edit'), document.querySelectorAll('.fa-xmark')[2]]
const review = [...document.querySelectorAll('.leave-a-review'), document.querySelector('#review-x')]
const reviewForm = document.querySelector('#review')
const myNav = document.querySelector('my-navbar')
const myUser = document.querySelector('my-user')
const myEdit = document.querySelector('my-edit')
const userImg = document.querySelector('#imgyaay')
const userImgDsiplay = document.querySelector('[alt="user Image"]')
let userId = 0

/* ****************NavBar event listeners (to toggle animation classes)**************** */
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
/******************************************************************************************** */

/* *************Edit form display toggler************ */
if (edit[0] != null)
    for (let ed of edit)
        ed.addEventListener('click', () => {
            formBg[1].classList.toggle('hidden')
        })
/***************************************************** */

/* *************Review form display toggler************ */
if (review[0] != null)
    for (let rev of review)
        rev.addEventListener('click', () => {
            reviewForm.classList.toggle('hidden')
        })
/***************************************************** */

/* *************Navbar on scroll color toggler************ */
document.addEventListener('scroll', () => {

    let scrollTop = window.pageYOffset
    if (scrollTop > 250)
        nav.classList.add('scrolled')
    if (scrollTop < 250)
        if (nav.classList.contains('scrolled'))
            nav.classList.remove('scrolled')
})
/************************************************************/

/*************************Get User Info from Id (Used only on page load)************************ */
const getUserData = (id) => {
    axios.get(`http://localhost/tomato/tomatoBackend/getUser.php?id=${ id }`)
        .then((res) => {
            if (res.data.response === 'User Not Found')
                return false
            if (res.data.status === 'suspended')
                return false
            myNav.name = `${ res.data.name } ${ res.data.last }`
            myNav.imgSrc = res.data.profilePic
            const knownUser = document.querySelectorAll('[knownUser]')
            for (let i of knownUser)
                i.classList.toggle('d-none')
            if (myUser) {
                myUser.name = res.data.name
                myUser.lastName = res.data.last
                myUser.email = res.data.email
                myUser.phone = res.data.phone
                myUser.location = res.data.location
                myUser.dob = res.data.dob
            }
            if (myEdit) {
                myEdit.name = res.data.name
                myEdit.lastName = res.data.last
                myEdit.email = res.data.email
                myEdit.phone = res.data.phone
                myEdit.location = res.data.location
                myEdit.dob = res.data.dob
            }
            return res.data
        })
        .catch(e => console.log(e))
}
/************************************************************************************************* */

/*********************on load get id from cookie (if any)********************* */
window.addEventListener("load", () => {
    userId = getCookieValue('tomatoUser')
    if (!userId)
        return
    const userData = getUserData(userId)
})
/******************************************************************************* */

/**********************Edit form on submit post request********************** */
if (myEdit)
    myEdit.addEventListener('submit', (e) => {
        e.preventDefault()
        updateInfo(userId, document.querySelector('[placeholder="First Name"]').value, document.querySelector('[placeholder="Last Name"]').value, document.querySelector('[placeholder="Email"]').value, document.querySelector('[placeholder="Phone Number"]').value, document.querySelector('[placeholder="Location"]').value, document.querySelector('[type="Date"]').value)
    })
/***************************************************************************** */

/*******************User img upload changes****************** */
userImg.addEventListener('change', (e) => {
    userImgDsiplay.src = URL.createObjectURL(e.target.files[0]);
    console.log(userImgDsiplay.src)
})
