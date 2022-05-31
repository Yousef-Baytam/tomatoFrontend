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
const cat = document.querySelectorAll('[rescat]')
const profileCat = document.querySelectorAll('.profile-cat')
const searchBar = document.querySelector('[placeholder="Search by Name"]')
const logOut = document.querySelector('[logOut]')
const cfilters = document.querySelector('.filters')
const admin = document.querySelector('[admin]')
let allUserReviews
let sessionCookie
let userId = 0
let allRestaurants
let temRest
fetchRes()


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
    axios.get(`/tomato/tomatoBackend/getUser.php?id=${ id }`)
        .then((res) => {
            if (res.data.response === 'User Not Found')
                return false
            if (res.data.status !== 'active')
                return false
            myNav.name = `${ res.data.name } ${ res.data.last }`
            myNav.imgSrc = res.data.profilePic
            const knownUser = document.querySelectorAll('[knownUser]')
            for (let i of knownUser)
                i.classList.toggle('d-none')
            if (res.data.type === 'admin')
                if (admin)
                    admin.classList.toggle('d-none')
            if (myUser) {
                myUser.name = res.data.name
                myUser.lastName = res.data.last
                myUser.email = res.data.email
                myUser.phone = res.data.phone
                myUser.location = res.data.city
                myUser.dob = res.data.dob
                myUser.imgSrc = res.data.profilePic
            }
            if (myEdit) {
                myEdit.name = res.data.name
                myEdit.lastName = res.data.last
                myEdit.email = res.data.email
                myEdit.phone = res.data.phone
                myEdit.location = res.data.city
                myEdit.dob = res.data.dob
            }
            return res.data
        })
        .catch(e => console.log(e))
}
/************************************************************************************************* */

/*********************on load get id from cookie (if any)********************* */
userId = getCookieValue('tomatoUser')
if (!userId && !window.location.href.includes('tomatoFrontend/index.html'))
    window.location.href = '/tomato/tomatoFrontend/index.html'
const userData = getUserData(userId)
/******************************************************************************* */

/**********************Edit form on submit post request********************** */
if (myEdit)
    myEdit.addEventListener('submit', (e) => {
        e.preventDefault()
        let f = document.querySelector('[editfirstname]').value
        let l = document.querySelector('[editlastname]').value
        let m = document.querySelector('[editemail]').value
        let p = document.querySelector('[editphone]').value
        let loc = document.querySelector('[editlocation]').value
        let d = document.querySelector('#dob123').value
        updateInfo(userId, f, l, m, p, loc, d)
    })
/***************************************************************************** */

/*******************User img upload changes****************** */
if (userImg)
    userImg.addEventListener('change', (e) => {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.addEventListener('loadend', () => {
            userImgDsiplay.src = reader.result;
            if (!userImgDsiplay.src)
                return
            let body = new FormData()
            body.append('id', userId)
            body.append('img', reader.result)
            axios.post('/tomato/tomatoBackend/userImage.php', body)
                .then((res) => {
                    console.log(res)
                }).catch(e => console.log(e))
        })
    })
/************************************************************ */

/*******************Get a specific restaurant by Id***************** */
const getRestro = (id) => {
    let rest = {}
    for (let restro of allRestaurants) {
        restro.id == id ? rest = restro : ''
    }
    return rest
}
/******************************************************************** */

/**********************Filter by Category******************** */
if (cat)
    for (let c of cat)
        c.addEventListener('click', (e) => {
            axios.get(`/tomato/tomatoBackend/getByCat.php?cat=${ e.target.innerText }`)
                .then((res) => {
                    let filteredRestros = []
                    for (let i of res.data)
                        if (i.status == 'active')
                            filteredRestros.push(i)
                    temRest = filteredRestros
                    renderRestaurants(temRest)
                }).catch(err => console.log(err))
        })
/************************************************************* */

/*****************Get User Reviews**************** */
if (profileCat)
    for (let c of profileCat)
        c.addEventListener('click', () => {
            let result = []
            for (let res of allRestaurants) {
                for (let rev of allUserReviews) {
                    if (res.id == rev.restaurants_id && !result.includes(res))
                        result.push(res)
                }
            }
            renderRestaurants(result)
        })

const AllReviews = () => {
    axios.get(`/tomato/tomatoBackend/getReviews.php?id=${ userId }`)
        .then((res) => {
            allUserReviews = res.data
        }).catch(err => console.log(err))
}
AllReviews()
/*************************************************** */

/*******************Clear Filters***************** */
const clearFilters = () => {
    temRest = []
    searchBar.value = ''
    renderRestaurants(allRestaurants)
}
if (cfilters)
    cfilters.addEventListener('click', clearFilters)
/************************************************** */

/*****************Search by restaurant name***************** */
if (searchBar)
    searchBar.addEventListener('keyup', () => {
        let result = []
        for (let i of allRestaurants) {
            if (i.name.toLowerCase().includes(searchBar.value))
                result.push(i)
        }
        renderRestaurants(result)
    })
/************************************************************ */

/*******************Logout******************** */
const logout = () => {
    document.cookie = `${ sessionCookie }; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
    window.location.href = '/tomato/tomatoFrontend/index.html'
}
logOut.addEventListener('click', logout)
/********************************************** */

/********************Get User ******************* */
const getUserRev = (id) => {
    for (let rev of allUserReviews) {
        if (rev.restaurants_id == id) {
            return rev
        }
    }
}
/************************************************* */

const sortByPop = (arr, order = 'asc') => {
    if (order === 'asc')
        arr.sort((a, b) => {
            return a.rating - b.rating
        })
    else {
        arr.sort((a, b) => {
            return b.rating - a.rating
        })
    }
}

document.querySelector('.Sort').addEventListener('click', () => {
    let restr = [...allRestaurants]
    sortByPop(restr)
    renderRestaurants(restr)
})