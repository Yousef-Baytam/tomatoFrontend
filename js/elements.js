const conatiner = document.querySelector('.container')

const cardGenerator = (api) => {
    conatiner.innerHTML = ''
    axios.get(api)
        .then((res) => {
            if (!res)
                conatiner.innerHTML = '<h1>No restaurants matching this criteria</h1>'
            for (let i of res) {
                let { image, title, rating, category } = i
                let card = `<my-card imgSrc='${ image }' title='${ title }' cuisine='${ category }' rating=${ rating }/>`
                conatiner.insertAdjacentHTML('beforeend', card)
            }
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

const getUserData = (id) => {
    axios.get(`http://localhost/tomato/tomatoBackend/getUser.php?id=${ id }`)
        .then((res) => {
            console.log(res, res.data)
            if (res.data.response === 'User Not Found')
                return false
            for (let i of knownUser)
                i.classList.toggle('d-none')
            return res.data.response
        })
        .catch(e => console.log(e))
}