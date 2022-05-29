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