const conatiner = document.querySelector('.container')
const myReview = document.querySelector('my-review')

const fetchRes = () => {
    axios.get(`http://localhost/tomato/tomatoBackend/getAllRes.php`)
        .then((res) => {
            if (window.location.href.includes('restaurants.html')) {
                renderRestaurants(res.data)
            }
            allRestaurants = res.data
            return (res.data)
        }).catch((e) => {
            console.log(e)
        })
}

const getCookieValue = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookie = decodedCookie.split(';');
    for (let i of cookie) {
        while (i.charAt(0) == ' ') {
            i = i.substring(1);
        }
        if (i.indexOf(name) == 0) {
            return i.substring(name.length, i.length);
        }
    }
    return "";
}

const updateInfo = (id, n, l, e, p, loc, d) => {
    let data = new FormData()
    data.append('id', id)
    data.append('name', n)
    data.append('last', l)
    data.append('email', e)
    data.append('phone', p)
    data.append('location', loc)
    data.append('dob', d)
    axios.post(``, data)
        .then((res) => {
            console.log(res)
            document.location.reload()
        }).catch(err => console.log(err))
}

const renderRestaurants = (obj) => {
    conatiner.innerHTML = ''
    console.log(obj)
    for (let i of obj) {
        let { image, name, category, id } = i
        let card = `<my-card imgSrc='${ image }' title='${ name }' cuisine='${ category }' rating='${ i['AVG(rev.rating)'] }' id='${ id }'/>`
        conatiner.insertAdjacentHTML('beforeend', card)
    }
    let review = [...document.querySelectorAll('.leave-a-review')]
    document.querySelector('#review-x123').addEventListener('click', () => {
        reviewForm.classList.toggle('hidden')
    })
    for (let rev of review)
        rev.addEventListener('click', (e) => {
            const restro = getRestro(e.target.id)
            console.log(restro)
            console.log(restro['AVG(rev.rating)'])
            myReview.imgSrc = restro.image
            myReview.title = restro.name
            myReview.desc = restro.description
            myReview.cuisine = restro.category
            myReview.rating = restro['AVG(rev.rating)']
            reviewForm.classList.toggle('hidden')
        })
}

