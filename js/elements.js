const conatiner = document.querySelector('.container')
const myReview = document.querySelector('my-review')

/**********************Get all active restaurants******************* */
const fetchRes = () => {
    axios.get(`/tomato/tomatoBackend/getAllRes.php`)
        .then((res) => {
            let filteredRestros = []
            for (let i of res.data)
                if (i.status == 'active')
                    filteredRestros.push(i)
            allRestaurants = filteredRestros
            if (window.location.href.includes('restaurants.html')) {
                renderRestaurants(allRestaurants)
            }
        }).catch((e) => {
            console.log(e)
        })
}
/********************************************************************* */

/*****************Gets user cookie (if any)******************* */
const getCookieValue = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookie = decodedCookie.split(';');
    for (let i of cookie) {
        while (i.charAt(0) == ' ') {
            i = i.substring(1);
        }
        if (i.indexOf(name) == 0) {
            sessionCookie = i
            return i.substring(name.length, i.length);
        }
    }
    return "";
}
/************************************************************** */

/******************Edit User Info post function***************** */
const updateInfo = (id, n, l, e, p, loc, d) => {
    let data = new FormData()
    data.append('id', id)
    data.append('name', n)
    data.append('last', l)
    data.append('email', e)
    data.append('phone', p)
    data.append('location', loc)
    data.append('dob', d)
    axios.post(`/tomato/tomatoBackend/updateUserInfo.php`, data)
        .then((res) => {
            window.location.reload()
        }).catch(err => console.log(err))
}
/***************************************************************** */

/***********************Render cards plus review listeners*********************** */
let clickedEvtId
let userReview
const renderRestaurants = (obj) => {
    conatiner.innerHTML = ''
    for (let i of obj) {
        let { image, name, category, id } = i
        let card = `<my-card imgSrc='${ image }' title='${ name }' cuisine='${ category }' rating='${ Math.round(i.rating) }' id='${ id }'/>`
        conatiner.insertAdjacentHTML('beforeend', card)
    }
    let review = [...document.querySelectorAll('.leave-a-review')]
    for (let rev of review) {
        rev.addEventListener('click', (e) => {
            clickedEvtId = e.target.id
            const restro = getRestro(e.target.id)
            userReview = getUserRev(e.target.id)
            myReview.imgSrc = restro.image
            if (userReview)
                myReview.rev = userReview.review
            myReview.title = restro.name
            myReview.desc = restro.description
            myReview.cuisine = restro.category
            myReview.rating = Math.round(restro.rating)
            reviewForm.classList.toggle('hidden')
        })
    }
}
document.querySelector('#review-x123').addEventListener('click', () => {
    reviewForm.classList.toggle('hidden')
})
document.querySelector('[reviewSubmit]').addEventListener('click', (evt) => {
    evt.preventDefault()
    reviewForm.classList.toggle('hidden')
    let body = new FormData()
    body.append('rating', document.querySelector('[type="range"]').value)
    body.append('text', document.querySelector('[cols="30"]').value)
    body.append('id', userId)
    body.append('restId', clickedEvtId)
    if (userReview) {
        axios.post('/tomato/tomatoBackend/updateReview.php', body)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }
    else
        axios.post('/tomato/tomatoBackend/addReview.php', body)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    document.querySelector('[cols="30"]').value = ''
})
/***************************************************************************** */
