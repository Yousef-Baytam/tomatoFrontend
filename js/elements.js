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

const updateInfo = (id, n, l, e, p, loc, d) => {
    axios.get(`?id=${ id }&name=${ n }&last=${ l }&email=${ e }&phone=${ p }&location=${ loc }&dob=${ d }`)
        .then((res) => {
            console.log(res)
            document.location.reload()
        }).catch(err => console.log(err))
}